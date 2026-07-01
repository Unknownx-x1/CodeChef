import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/sanityClient";

function getJoinUsSheetBestLink(links: any, department: string) {
  const departmentSheetBestLinks: Record<string, string | undefined> = {
    competitive_programming: links?.competitiveProgrammingSheetBest,
    design: links?.designSheetBest,
    management: links?.managementSheetBest,
    marketing_and_outreach: links?.marketingOutreachSheetBest,
    projects: links?.projectsSheetBest,
    social_media_and_content: links?.socialMediaContentSheetBest,
    web_development: links?.webDevelopmentSheetBest,
  };

  return departmentSheetBestLinks[department] || links?.joinUsSheetBest;
}

export async function POST(req: NextRequest) {
  try {
    const { data } = await req.json();

    if (!data || !data.department) {
      return NextResponse.json({ error: "Missing submission data or department" }, { status: 400 });
    }

    const query = `*[_type == "recruitmentSheetLinks"] | order(_createdAt desc)[0]`;
    const links = await client.fetch(query);

    if (!links) {
      return NextResponse.json({ error: "No sheet links found in Sanity" }, { status: 404 });
    }

    const joinUsGoogleSheetLink = getJoinUsSheetBestLink(links, data.department);

    if (!joinUsGoogleSheetLink) {
      return NextResponse.json({
        error: "No Sheet.best API link configured for department: " + data.department
      }, { status: 400 });
    }

    const res = await fetch(joinUsGoogleSheetLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Sheet.best post failed:", errorText);
      return NextResponse.json({ error: "Failed to submit data to Sheet.best" }, { status: res.status });
    }

    const resData = await res.json();
    return NextResponse.json(resData);
  } catch (error: any) {
    console.error("Error adding recruitment entry:", error);
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}
