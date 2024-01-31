import React from "react";
import { MetadataRoute } from "next";
import { Locale } from '@/i18n.config'

type Menu = {
  id: string;
  url: `/${string}`;
  title: Record<Locale, string>
  icon?: string | React.ReactNode;
  lastModified: MetadataRoute.Sitemap["lastModified"];
  changeFrequency: MetadataRoute.Sitemap["changeFrequency"];
  priority: MetadataRoute.Sitemap["priority"];
  children?: Menu[];
};

export type { Menu };
