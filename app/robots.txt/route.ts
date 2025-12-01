const baseUrl = "https://pokemon-lazarus.net";

export const dynamic = "force-static";

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${baseUrl}/sitemap.xml`,
    `Host: ${baseUrl}`,
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
