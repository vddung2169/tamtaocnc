import type { MetadataRoute } from "next";

import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "/",
    "/bang-gia",
    "/bang-gia-do-sim",
    "/bang-gia-thay-pin",
    "/bang-gia-sua-face-id",
    "/bang-gia-thay-kinh-camera",
    "/bang-gia-ep-kinh",
  ];

  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : route === "/bang-gia" ? 0.95 : 0.9,
  }));
}
