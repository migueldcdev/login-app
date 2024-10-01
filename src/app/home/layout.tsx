"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Dropdown } from "./components/dropdownMenu";

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
                <Image
                  src={"/favicon.ico"}
                  className="h-8 w-auto"
                  alt="Logo"
                  width={28}
                  height={28}
                />
                <span className="ml-2 text-xl font-bold text-slate-500">
                  Home
                </span>
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
