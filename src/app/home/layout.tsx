"use client";

import React from "react";
import Link from "next/link";


import { Dropdown } from "./components/dropdownMenu";
import { IncardSvg } from "./components/incardSvg";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/home" className="flex-shrink-0 flex items-center">
                <IncardSvg />
              </Link>
            </div>
            <div className="flex items-center">
              <Dropdown />
            </div>
          </div>
        </div>
      </nav>
      <main className="mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </section>
  );
}
