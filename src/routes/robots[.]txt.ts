import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://shujaabarbershop.lovable.app";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const body = [
          "User-agent: Googlebot",
          "Allow: /",
          "",
          "User-agent: Bingbot",
          "Allow: /",
          "",
          "User-agent: Twitterbot",
          "Allow: /",
          "",
          "User-agent: facebookexternalhit",
          "Allow: /",
          "",
          "User-agent: *",
          "Allow: /",
          "",
          `Sitemap: ${BASE_URL}/sitemap.xml`,
        ].join("\n");

        return new Response(body, {
          headers: {
            "Content-Type": "text/plain",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
