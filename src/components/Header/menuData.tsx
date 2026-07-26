import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Download",
    path: "/download",
    newTab: false,
  },
  {
    id: 8,
    title: "Community",
    path: "/community",
    newTab: false,
  },
  {
    id: 7,
    title: "ASF",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: "Foundation",
        path: "https://www.apache.org/",
        newTab: true,
      },
      {
        id: 72,
        title: "License",
        path: "https://www.apache.org/licenses/",
        newTab: true,
      },
      {
        id: 73,
        title: "Events",
        path: "https://www.apache.org/events/current-event.html",
        newTab: true,
      },
      {
        id: 74,
        title: "Sponsorship",
        path: "https://www.apache.org/foundation/sponsorship.html",
        newTab: true,
      },
      {
        id: 75,
        title: "Privacy",
        path: "https://privacy.apache.org/policies/privacy-policy-public.html",
        newTab: true,
      },
      {
        id: 76,
        title: "Security",
        path: "https://www.apache.org/security/",
        newTab: true,
      },
      {
        id: 77,
        title: "Thanks",
        path: "https://www.apache.org/foundation/thanks.html",
        newTab: true,
      }
    ],
  },
];
export default menuData;
