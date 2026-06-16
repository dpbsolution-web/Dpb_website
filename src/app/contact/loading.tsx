import {
  SkeletonHero,
  SkeletonSteps,
  SkeletonForm,
  SkeletonText,
  SkeletonCardGrid,
} from "@/components/common/PageSkeleton";

/** Contact page: Hero → how-it-works (3 steps) → 2-col (form + info) → FAQ grid */
export default function Loading() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SkeletonHero />

      {/* How it works — 3 steps */}
      <div className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonText lines={1} center />
          <div className="mt-8">
            <SkeletonSteps count={3} />
          </div>
        </div>
      </div>

      {/* 2-col: form left, contact info right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <SkeletonForm fields={6} />

          {/* Contact info cards */}
          <div className="space-y-5">
            <SkeletonText lines={2} />
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse h-20 bg-gray-200 rounded-xl" />
            ))}
          </div>
        </div>
      </div>

      {/* FAQ 2×2 grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonText lines={2} center />
          <div className="mt-10">
            <SkeletonCardGrid cols={2} count={4} cardHeight="h-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
