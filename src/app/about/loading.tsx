import {
  SkeletonHero,
  SkeletonStats,
  SkeletonTwoColumn,
  SkeletonCardGrid,
  SkeletonText,
} from "@/components/common/PageSkeleton";

/** About page: Hero → stats (4) → mission/vision (2-col) → story → team (4 cards) → values */
export default function Loading() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SkeletonHero />

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SkeletonStats count={4} />
      </div>

      {/* Mission / Vision */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonText lines={2} center />
          <div className="mt-10">
            <SkeletonTwoColumn leftHeight="h-52" rightHeight="h-52" />
          </div>
        </div>
      </div>

      {/* Company story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SkeletonText lines={5} />
      </div>

      {/* Team cards */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonText lines={2} center />
          <div className="mt-10">
            <SkeletonCardGrid cols={4} count={4} cardHeight="h-64" />
          </div>
        </div>
      </div>
    </div>
  );
}
