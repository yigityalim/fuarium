import { v4 } from "uuid";
import { Menu } from "@/lib/types/menu";

export type { Menu };
export const menus: Menu[] = [
  {
    id: v4(),
    url: "/",
    title: "Anasayfa",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    id: v4(),
    url: "/about",
    title: "Hakkımızda",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    id: v4(),
    url: "/fair-supports",
    title: "Fuar Destekleri",
    children: [
      {
        id: v4(),
        url: "/fair-supports/:category",
        title: "_category",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ],
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    id: v4(),
    url: "/fair-tours",
    title: "Fuar Turları",
    children: [
      {
        id: v4(),
        url: "/fair-tours/:category",
        title: "_category",
        children: [
          {
            id: v4(),
            url: "/fair-tours/:category/:fair",
            title: "_fair",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
          },
        ],
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ],
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    id: v4(),
    url: "/visa-consultancy",
    title: "Vize Danışmanlığı",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    id: v4(),
    url: "/contact",
    title: "İletişim",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];
