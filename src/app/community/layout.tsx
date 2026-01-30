import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Apache ResilientDB (Incubating)",
  description: "Join the Apache ResilientDB community - contribute, collaborate, and connect with developers and researchers",
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
