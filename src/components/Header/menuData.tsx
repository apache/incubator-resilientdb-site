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
    title: "Code",
    path: "https://github.com/resilientdb/resilientdb",
    newTab: true,
  },
  {
    id: 3,
    title: "Demo",
    path: "",
    newTab: true,
    submenu: [
      {
        id: 31,
        title: "ResilientDB Demo",
        path: "https://youtu.be/ewtFSwjitsg",
        newTab: true,
      },
      {
        id: 32,
        title: "Quickstart",
        path: "https://quickstart.resilientdb.com",
        newTab: true,
      },
    ]
  },
  {
    id: 4,
    title: "Tools",
    path: "",
    newTab: true,
    submenu: [
      {
        id: 41,
        title: "Wallet",
        path: "https://github.com/ResilientApp/ResVault",
        newTab: true,
      },
      {
        id: 42,
        title: "Smart Contract CLI",
        path: "https://github.com/ResilientEcosystem/ResContract/",
        newTab: true,
      },
    ]
  },
  {
    id: 5,
    title: "Testnet",
    newTab: true,
    submenu: [
      {
        id: 51,
        title: "Status",
        path: "https://status.resilientdb.com",
        newTab: true,
      },
      {
        id: 52,
        title: "Cloud API",
        path: "https://cloud.resilientdb.com/graphql",
        newTab: true,
      },
      {
        id: 53,
        title: "Explorer",
        path: "https://explorer.resilientdb.com",
        newTab: true,
      },
      {
        id: 54,
        title: "Monitoring",
        path: "https://monitoring.resilientdb.com/d/-cdKDm9nk/nexres?orgId=1&refresh=5s",
        newTab: true,
      },
      {
        id: 55,
        title: "ResView",
        path: "https://resview.resilientdb.com",
        newTab: true,
      }
    ]
  },
  {
    id: 6,
    title: "Environment",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Resilient Apps",
        path: "https://github.com/ResilientApp",
        newTab: true,
      },
      {
        id: 62,
        title: "Resilient EcoSystem",
        path: "https://github.com/ResilientEcosystem",
        newTab: true,
      }
    ]
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
