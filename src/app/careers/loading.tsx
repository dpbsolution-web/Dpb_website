import {
  SkeletonHero,
  SkeletonTwoColumn,
  SkeletonCardGrid,
  SkeletonText,
  SkeletonSteps,
} from "@/components/common/PageSkeleton";

/** Careers page: Hero → why-work (2-col) → search bar → job grid (2-col) → process steps → FAQ */
export default function Loading() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SkeletonHero />

      {/* Why work here — 2-col */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonTwoColumn leftHeight="h-56" rightHeight="h-56" />
        </div>
      </div>

      {/* Search + filter bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="animate-pulse h-12 bg-gray-200 rounded-xl max-w-2xl mx-auto mb-6" />
        <div className="flex gap-4 justify-center flex-wrap">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse h-10 w-32 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Job cards grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SkeletonText lines={2} center />
        <div className="mt-10">
          <SkeletonCardGrid cols={2} count={4} cardHeight="h-64" />
        </div>
      </div>

      {/* Hiring process steps */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonText lines={2} center />
          <div className="mt-10">
            <SkeletonSteps count={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
