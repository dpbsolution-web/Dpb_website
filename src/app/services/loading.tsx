import {
  SkeletonHero,
  SkeletonCardGrid,
  SkeletonStats,
  SkeletonText,
  SkeletonSteps,
} from "@/components/common/PageSkeleton";

/** Services page: Hero → coverage bar → 2×2 service grid → tech standards → process steps */
export default function Loading() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SkeletonHero />

      {/* Network coverage bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <SkeletonStats count={4} />
      </div>

      {/* Services grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonText lines={2} center />
          <div className="mt-12">
            <SkeletonCardGrid cols={2} count={4} cardHeight="h-80" />
          </div>
        </div>
      </div>

      {/* Technology standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SkeletonText lines={2} center />
        <div className="mt-10">
          <SkeletonCardGrid cols={3} count={6} cardHeight="h-36" />
        </div>
      </div>

      {/* Implementation process steps */}
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
