"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { client } from "@/lib/sanityClient";
import Footer from "@/components/Footer/Footer";
import {
  CompetitiveProgramming,
  Projects,
  WebDevelopment,
  Design,
  Management,
  MarketingOutreach,
  SocialMedia,
  Finance,
} from "@/components/Recruitment/questions";

const CornerBrackets = ({ color = "#000000" }: { color?: string }) => (
  <>
    <div style={{ borderColor: color }} className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-[2.5px] border-l-[2.5px] pointer-events-none" />
    <div style={{ borderColor: color }} className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-[2.5px] border-r-[2.5px] pointer-events-none" />
    <div style={{ borderColor: color }} className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-[2.5px] border-l-[2.5px] pointer-events-none" />
    <div style={{ borderColor: color }} className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-[2.5px] border-r-[2.5px] pointer-events-none" />
  </>
);

const DepartmentKeyMap: Record<string, string> = {
  competitive_programming: "Technical (CP)",
  design: "Design",
  finance: "Finance",
  management: "Event Management",
  marketing_and_outreach: "Outreach",
  projects: "Projects",
  social_media_and_content: "Social Media & Content",
  web_development: "Web Development",
};

interface OpenDept {
  value: string;
  title: string;
}

export default function RecruitmentPage() {
  const [pageLoading, setPageLoading] = useState(true);
  const [recruiting, setRecruiting] = useState("No");
  const [openDepartments, setOpenDepartments] = useState<OpenDept[]>([]);
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error" | "warning";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();

  const selectedDepartment = watch("department");
  const registrationNo = watch("reg_no");

  useEffect(() => {
    if (registrationNo) {
      setValue("reg_no", registrationNo.toUpperCase());
    }
  }, [registrationNo, setValue]);

  // Query Sanity status
  useEffect(() => {
    async function initRecruitment() {
      try {
        // 1. Fetch recruitment toggle
        const recruitingQuery = `*[_type == "joinus"] | order(_updatedAt desc)[0]{recruiting}`;
        const recruitingData = await client.fetch(recruitingQuery, {}, { useCdn: false });
        setRecruiting(recruitingData?.recruiting || "No");

        // 2. Fetch sheet configurations
        const sheetLinksQuery = `*[_type == "recruitmentSheetLinks"] | order(_createdAt desc)[0]{whatsAppGroupLinks}`;
        const linksData = await client.fetch(sheetLinksQuery, {}, { useCdn: false });

        if (linksData?.whatsAppGroupLinks) {
          const keys = Object.keys(linksData.whatsAppGroupLinks);
          const openDepts: OpenDept[] = [];
          for (const key of keys) {
            if (linksData.whatsAppGroupLinks[key]?.needRecruits) {
              openDepts.push({
                value: key,
                title: DepartmentKeyMap[key] || key,
              });
            }
          }
          setOpenDepartments(openDepts);
        }
      } catch (err) {
        console.error("Failed to initialize recruitment page:", err);
      } finally {
        setPageLoading(false);
      }
    }

    initRecruitment();
  }, []);

  const onSubmit = async (formData: any) => {
    setFormSubmitLoading(true);
    setNotification(null);

    try {
      const { reg_no, department } = formData;

      // 1. Fetch existing entries
      const readRes = await fetch("/api/recruitment/read");
      if (!readRes.ok) {
        throw new Error("Failed to check duplicate entries. Please try again.");
      }
      const allEntries = await readRes.json();

      const duplicate = allEntries.find(
        (entry: any) => {
          // Verify department match
          const deptMatch = entry._sheetDepartment === department || 
                            entry.department === department ||
                            Object.values(entry).some((v: any) => typeof v === 'string' && v === department);
          
          if (!deptMatch) return false;

          // Verify registration number match
          const regNoMatch = Object.keys(entry).some(
            (k) => k.trim().toUpperCase() === reg_no.trim().toUpperCase()
          ) || Object.values(entry).some(
            (v: any) => typeof v === 'string' && v.trim().toUpperCase() === reg_no.trim().toUpperCase()
          );

          return regNoMatch;
        }
      );

      if (duplicate) {
        setNotification({
          type: "warning",
          message: "You have already submitted an application for this department!",
        });
        setFormSubmitLoading(false);
        return;
      }

      // Force cgpa to 10 Pointer -> 10 Pointers Codechef
      formData.cgpa = "10 Pointer";

      // 2. Submit form data
      const addRes = await fetch("/api/recruitment/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });

      if (!addRes.ok) {
        throw new Error("Failed to submit form data. Please try again.");
      }

      // 3. Send email with WhatsApp group join link
      const emailRes = await fetch("/api/recruitment/send-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vit_email: formData.vit_email,
          department: formData.department,
          name: formData.name,
        }),
      });

      if (!emailRes.ok) {
        console.warn("Failed to send WhatsApp group link email.");
      }

      setNotification({
        type: "success",
        message: "Application submitted successfully! Check your email for the WhatsApp group join link.",
      });
      reset();
    } catch (err: any) {
      console.error(err);
      setNotification({
        type: "error",
        message: err.message || "An error occurred during submission.",
      });
    } finally {
      setFormSubmitLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen bg-[#4A6FA5] text-white flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-[#ECE9C7] border-t-transparent rounded-full animate-spin" />
        <p className="font-bebas text-2xl tracking-widest text-[#ECE9C7]">LOADING RECRUITMENT STATUS...</p>
      </div>
    );
  }

  const isRecruitingClosed = recruiting !== "Yes";

  return (
    <div className="min-h-screen bg-[#4A6FA5] text-white flex flex-col relative overflow-x-hidden">
      <div className="flex flex-col items-center justify-center pt-24 pb-8 relative select-none z-10">
        <h1
          className="text-[100px] sm:text-[140px] md:text-[160px] font-normal leading-none tracking-[0.05em] text-white uppercase text-center"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          CODECHEF
        </h1>
        <span
          className="text-[60px] sm:text-[90px] md:text-[110px] font-normal leading-none text-transparent uppercase text-center"
          style={{
            fontFamily: "var(--font-bebas)",
            WebkitTextStroke: "2.5px #FFFFFF",
          }}
        >
          RECRUITMENT
        </span>
      </div>

      {/* Recruitment is Closed Unfortunately Card */}
      {isRecruitingClosed ? (
        <div className="flex-grow flex items-center justify-center px-4 pb-24">
          <div className="relative bg-[#ECE9C7] border-[3px] border-black rounded-[8px] p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center text-black max-w-lg w-full">
            <CornerBrackets color="#000000" />
            <h3
              className="font-bebas text-3xl font-extrabold tracking-wider uppercase mb-3 text-red-600"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Recruitments are currently closed :(
            </h3>
            <p className="font-sans text-xs sm:text-sm font-semibold text-neutral-800 leading-relaxed">
              We are not accepting applications at the moment. Please follow our social media channels to get updates on future recruitment drives.
            </p>
          </div>
        </div>
      ) : (
        
        /* Form Card */
        <div className="max-w-4xl w-[92%] mx-auto mb-24 z-10">
          <div className="relative bg-[#ECE9C7] border-[3px] border-black rounded-[8px] p-6 sm:p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] text-black">
            <CornerBrackets color="#000000" />

            <h2
              className="text-black text-3xl sm:text-4xl font-normal uppercase leading-tight tracking-wider text-center border-b-2 border-black/10 pb-4"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Application Form
            </h2>

            <p className="font-sans text-xs font-semibold text-neutral-600 text-center mt-3 mb-6">
              Fill out this form to apply for CodeChef VITC. We will review your application and get in touch with you!
            </p>

            {/* Notification Banners */}
            {notification && (
              <div
                className={`mb-6 p-4 border-2 border-black rounded-[8px] shadow-[3px_3px_0px_rgba(0,0,0,1)] font-sans text-xs sm:text-sm font-bold flex flex-col justify-center ${
                  notification.type === "success"
                    ? "bg-green-100 text-green-800"
                    : notification.type === "warning"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {notification.message}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="flex flex-wrap -mx-2">
                <div className="mb-4 w-full md:w-1/2 px-2">
                  <label className="text-sm font-bold text-black flex items-center mt-2 font-sans uppercase tracking-wider">
                    Full Name: <span className="text-red-600 ml-1 text-sm">*</span>
                  </label>
                  <input
                    className="mt-1.5 block w-full px-3 py-2 border-2 border-black rounded-[8px] bg-white text-black font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                    type="text"
                    placeholder="Name eg: Vishal Kumar Yadav"
                    {...register("name", {
                      required: "Name is required",
                      pattern: {
                        value: /^[A-Za-z ]+$/,
                        message: "Invalid name (alphabetic characters and spaces only)",
                      },
                    })}
                  />
                  {errors.name && (
                    <div className="text-red-600 text-xs font-semibold mt-1 font-sans">
                      {errors.name.message as string}
                    </div>
                  )}
                </div>

                <div className="mb-4 w-full md:w-1/2 px-2">
                  <label className="text-sm font-bold text-black flex items-center mt-2 font-sans uppercase tracking-wider">
                    Registration No: <span className="text-red-600 ml-1 text-sm">*</span>
                  </label>
                  <input
                    className="mt-1.5 block w-full px-3 py-2 border-2 border-black rounded-[8px] bg-white text-black font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                    type="text"
                    placeholder="Registration No. eg: 21BCE1846"
                    {...register("reg_no", {
                      required: "Registration number is required",
                      pattern: {
                        value: /^(1|2)[0-9](B|M)[A-Z]{2}[0-9]{4}$/,
                        message: "Invalid registration number format (e.g. 21BCE1846)",
                      },
                    })}
                  />
                  {errors.reg_no && (
                    <div className="text-red-600 text-xs font-semibold mt-1 font-sans">
                      {errors.reg_no.message as string}
                    </div>
                  )}
                </div>

                <div className="mb-4 w-full px-2">
                  <label className="text-sm font-bold text-black flex items-center mt-2 font-sans uppercase tracking-wider">
                    VIT Student Email: <span className="text-red-600 ml-1 text-sm">*</span>
                  </label>
                  <input
                    className="mt-1.5 block w-full px-3 py-2 border-2 border-black rounded-[8px] bg-white text-black font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                    type="email"
                    placeholder="Email eg: shashank.sharma2022@vitstudent.ac.in"
                    {...register("vit_email", {
                      required: "VIT Email is required",
                      pattern: {
                        value: /^[A-Za-z0-9.]+@(vitstudent|vitchennai)\.ac\.in$/,
                        message: "Invalid VIT Email (must end in @vitstudent.ac.in or @vitchennai.ac.in)",
                      },
                    })}
                  />
                  {errors.vit_email && (
                    <div className="text-red-600 text-xs font-semibold mt-1 font-sans">
                      {errors.vit_email.message as string}
                    </div>
                  )}
                </div>

                <div className="mb-4 w-full md:w-1/2 px-2">
                  <label className="text-sm font-bold text-black flex items-center mt-2 font-sans uppercase tracking-wider">
                    Phone No: <span className="text-red-600 ml-1 text-sm">*</span>
                  </label>
                  <input
                    className="mt-1.5 block w-full px-3 py-2 border-2 border-black rounded-[8px] bg-white text-black font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                    type="tel"
                    placeholder="Phone number eg: 8072XXXXXX"
                    {...register("phone_no", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid phone number (must be 10 digits)",
                      },
                    })}
                  />
                  {errors.phone_no && (
                    <div className="text-red-600 text-xs font-semibold mt-1 font-sans">
                      {errors.phone_no.message as string}
                    </div>
                  )}
                </div>

                <div className="mb-4 w-full md:w-1/2 px-2">
                  <label className="text-sm font-bold text-black flex items-center mt-2 font-sans uppercase tracking-wider">
                    Degree: <span className="text-red-600 ml-1 text-sm">*</span>
                  </label>
                  <input
                    className="mt-1.5 block w-full px-3 py-2 border-2 border-black rounded-[8px] bg-white text-black font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                    type="text"
                    placeholder="Degree eg: B.Tech, B.Sc, M.Tech"
                    {...register("degree", {
                      required: "Degree is required",
                      pattern: {
                        value: /^[A-Za-z. ]+$/,
                        message: "Invalid degree (only alphabetic characters and dots)",
                      },
                    })}
                  />
                  {errors.degree && (
                    <div className="text-red-600 text-xs font-semibold mt-1 font-sans">
                      {errors.degree.message as string}
                    </div>
                  )}
                </div>

                <div className="mb-4 w-full md:w-1/2 px-2">
                  <label className="text-sm font-bold text-black flex items-center mt-2 font-sans uppercase tracking-wider">
                    Branch: <span className="text-red-600 ml-1 text-sm">*</span>
                  </label>
                  <input
                    className="mt-1.5 block w-full px-3 py-2 border-2 border-black rounded-[8px] bg-white text-black font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                    type="text"
                    placeholder="Branch eg: CSE"
                    {...register("branch", {
                      required: "Branch is required",
                      pattern: {
                        value: /^[A-Za-z ]+$/,
                        message: "Invalid branch (alphabetic characters only)",
                      },
                    })}
                  />
                  {errors.branch && (
                    <div className="text-red-600 text-xs font-semibold mt-1 font-sans">
                      {errors.branch.message as string}
                    </div>
                  )}
                </div>

                <div className="mb-4 w-full md:w-1/2 px-2">
                  <label className="text-sm font-bold text-black flex items-center mt-2 font-sans uppercase tracking-wider">
                    Department: <span className="text-red-600 ml-1 text-sm">*</span>
                  </label>
                  <select
                    className="mt-1.5 block w-full px-3 py-2 border-2 border-black rounded-[8px] bg-white text-black font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                    {...register("department", { required: "Department is required" })}
                  >
                    <option value="">
                      {openDepartments.length === 0
                        ? "No departments recruiting..."
                        : "Select a Department"}
                    </option>
                    {openDepartments.map((dept) => (
                      <option value={dept.value} key={dept.value}>
                        {dept.title}
                      </option>
                    ))}
                  </select>
                  {errors.department && (
                    <div className="text-red-600 text-xs font-semibold mt-1 font-sans">
                      {errors.department.message as string}
                    </div>
                  )}
                </div>

                {/* Department-Specific Questions */}
                <div className="w-full flex flex-wrap">
                  {selectedDepartment === "competitive_programming" && (
                    <CompetitiveProgramming register={register} errors={errors} />
                  )}
                  {selectedDepartment === "projects" && (
                    <Projects register={register} errors={errors} />
                  )}
                  {selectedDepartment === "web_development" && (
                    <WebDevelopment register={register} errors={errors} watch={watch} />
                  )}
                  {selectedDepartment === "design" && (
                    <Design register={register} errors={errors} />
                  )}
                  {selectedDepartment === "management" && (
                    <Management register={register} errors={errors} watch={watch} />
                  )}
                  {selectedDepartment === "marketing_and_outreach" && (
                    <MarketingOutreach register={register} errors={errors} />
                  )}
                  {selectedDepartment === "social_media_and_content" && (
                    <SocialMedia register={register} errors={errors} watch={watch} />
                  )}
                  {selectedDepartment === "finance" && (
                    <Finance register={register} errors={errors} watch={watch} />
                  )}
                </div>

                {/* Common Fields -> 1) Relevant Experience */}
                <div className="mb-4 w-full px-2">
                  <label className="text-sm font-bold text-black flex items-center mt-2 font-sans uppercase tracking-wider">
                    Relevant Experience: <span className="text-red-600 ml-1 text-sm">*</span>
                  </label>
                  <textarea
                    className="mt-1.5 block w-full px-3 py-2 border-2 border-black rounded-[8px] bg-white text-black font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                    placeholder="Describe your previous experience in the department you wish to join, and link to your work if applicable."
                    rows={4}
                    {...register("experience", { required: "Relevant experience details are required" })}
                  />
                  {errors.experience && (
                    <div className="text-red-600 text-xs font-semibold mt-1 font-sans">
                      {errors.experience.message as string}
                    </div>
                  )}
                </div>

                {/* Common Fields -> 2) Why join CodeChef */}
                <div className="mb-4 w-full px-2">
                  <label className="text-sm font-bold text-black flex items-center mt-2 font-sans uppercase tracking-wider">
                    Why join CodeChef? <span className="text-red-600 ml-1 text-sm">*</span>
                  </label>
                  <textarea
                    className="mt-1.5 block w-full px-3 py-2 border-2 border-black rounded-[8px] bg-white text-black font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                    placeholder="Tell us why you are interested in joining our club."
                    rows={4}
                    {...register("whyJoin", { required: "This field is required" })}
                  />
                  {errors.whyJoin && (
                    <div className="text-red-600 text-xs font-semibold mt-1 font-sans">
                      {errors.whyJoin.message as string}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  disabled={formSubmitLoading}
                  className={`bg-[#5878AF] text-white border-2 border-black rounded-lg px-12 py-3 font-bebas text-lg tracking-widest uppercase transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_rgba(0,0,0,1)] hover:bg-[#486390] cursor-pointer flex items-center justify-center gap-3 ${
                    formSubmitLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {formSubmitLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      SUBMITTING...
                    </>
                  ) : (
                    "SUBMIT APPLICATION"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
