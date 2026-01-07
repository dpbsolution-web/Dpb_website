"use client";

export function ImplementationProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Implementation Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology for successful telecom infrastructure deployment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment & Planning</h3>
            <p className="text-gray-600">
              Comprehensive network analysis, coverage planning, and technology roadmap development.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Design & Engineering</h3>
            <p className="text-gray-600">
              Detailed network design, equipment selection, and integration planning.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment & Testing</h3>
            <p className="text-gray-600">
              Professional installation, configuration, and comprehensive testing procedures.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization & Support</h3>
            <p className="text-gray-600">
              Ongoing monitoring, optimization, and 24/7 technical support services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
