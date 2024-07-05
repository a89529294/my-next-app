import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "hi from about layout",
};

export default async function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await new Promise((r) => setTimeout(r, 2000));

  return (
    <div>
      <h1>Team Layout</h1>
      {children}
    </div>
  );
}
