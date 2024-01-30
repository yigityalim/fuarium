import React from "react";
import { MetadataRoute } from "next";

type Menu = {
  id: string;
  url: `/${string}`;
  title?: string;
  icon?: string | React.ReactNode;
  lastModified: MetadataRoute.Sitemap["lastModified"];
  changeFrequency: MetadataRoute.Sitemap["changeFrequency"];
  priority: MetadataRoute.Sitemap["priority"];
  children?: Menu[];
};

export type { Menu };
