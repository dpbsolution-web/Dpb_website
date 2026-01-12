"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServicesCTASection() {
  return (
    <section className="py-20bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Network?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how our telecommunications solutions can enhance your connectivity and drive digital transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Connected Today
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
