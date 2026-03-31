import { NextRequest, NextResponse } from "next/server";

// WayForPay redirects users back via POST form submission.
// Next.js treats POST to a page as a server action call, causing errors.
// This route catches the POST and redirects via GET to the actual page.

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const orderReference = formData.get("orderReference")?.toString() || "";
  const baseUrl = (
    process.env.NEXT_PUBLIC_BASE_URL ||
    `https://${request.headers.get("host")}`
  ).trim();

  // Extract locale from the Referer or default to "uk"
  const locale = "uk";

  const redirectUrl = `${baseUrl}/${locale}/express-reading?orderReference=${encodeURIComponent(orderReference)}`;
  return NextResponse.redirect(redirectUrl, 303);
}

export async function GET(request: NextRequest) {
  const orderReference = request.nextUrl.searchParams.get("orderReference") || "";
  const baseUrl = (
    process.env.NEXT_PUBLIC_BASE_URL ||
    `https://${request.headers.get("host")}`
  ).trim();

  const locale = "uk";

  const redirectUrl = `${baseUrl}/${locale}/express-reading?orderReference=${encodeURIComponent(orderReference)}`;
  return NextResponse.redirect(redirectUrl, 303);
}
