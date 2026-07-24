import Download from "@/components/Download";
import ScrollUp from "@/components/Common/ScrollUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download | Apache ResilientDB (Incubating)",
  description:
    "Download official Apache ResilientDB (Incubating) source releases via Apache mirrors, and verify signatures and hashes.",
};

export default function DownloadPage() {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Download"
        description="Official ASF source releases of Apache ResilientDB (Incubating)"
      />
      <Download />
    </>
  );
}
