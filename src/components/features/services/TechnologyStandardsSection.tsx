"use client";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/common/SectionHeading";

export function TechnologyStandardsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Industry Standards & Technologies"
          subtitle="We support all major telecommunications standards and emerging technologies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <div className="h-full text-center p-6 bg-blue-50 rounded-xl border border-blue-100 transition-shadow duration-300 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">5G Standards</h3>
            <p className="text-gray-600 text-sm mb-3">3GPP Release 15/16/17</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="text-xs">eMBB</Badge>
              <Badge variant="outline" className="text-xs">URLLC</Badge>
              <Badge variant="outline" className="text-xs">mMTC</Badge>
            </div>
          </div>
          
          <div className="h-full text-center p-6 bg-teal-50 rounded-xl border border-teal-100 transition-shadow duration-300 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT Protocols</h3>
            <p className="text-gray-600 text-sm mb-3">Low Power Wide Area Networks</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="text-xs">LoRaWAN</Badge>
              <Badge variant="outline" className="text-xs">NB-IoT</Badge>
              <Badge variant="outline" className="text-xs">Sigfox</Badge>
            </div>
          </div>
          
          <div className="h-full text-center p-6 bg-blue-50 rounded-xl border border-blue-100 transition-shadow duration-300 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Satellite Tech</h3>
            <p className="text-gray-600 text-sm mb-3">Next-gen satellite systems</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="text-xs">LEO</Badge>
              <Badge variant="outline" className="text-xs">MEO</Badge>
              <Badge variant="outline" className="text-xs">GEO</Badge>
            </div>
          </div>
          
          <div className="h-full text-center p-6 bg-teal-50 rounded-xl border border-teal-100 transition-shadow duration-300 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Native</h3>
            <p className="text-gray-600 text-sm mb-3">Modern network functions</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="text-xs">NFV</Badge>
              <Badge variant="outline" className="text-xs">SDN</Badge>
              <Badge variant="outline" className="text-xs">CNF</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
