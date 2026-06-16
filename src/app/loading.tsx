import {
  SkeletonHero,
  SkeletonStats,
  SkeletonCardGrid,
  SkeletonTwoColumn,
  SkeletonText,
} from "@/components/common/PageSkeleton";

/** Home page: Hero (tall) → stat bar → 2×2 services → 2-col features → testimonials row */
export default function Loading() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero */}
      <SkeletonHero tall />

      {/* Certifications / stats bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SkeletonStats count={4} />
      </div>

      {/* Services grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonText lines={2} center />
          <div className="mt-12">
            <SkeletonCardGrid cols={2} count={4} cardHeight="h-72" />
          </div>
        </div>
      </div>

      {/* Features two-column */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SkeletonTwoColumn leftHeight="h-80" rightHeight="h-80" />
      </div>
    </div>
  );
}
