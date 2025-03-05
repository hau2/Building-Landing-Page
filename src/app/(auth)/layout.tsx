import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <h1>Auth Layout</h1>
      {children}
    </div>
  );
}
