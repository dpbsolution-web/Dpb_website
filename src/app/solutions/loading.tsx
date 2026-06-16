import {
  SkeletonHero,
  SkeletonTabs,
  SkeletonTwoColumn,
  SkeletonCardGrid,
  SkeletonText,
} from "@/components/common/PageSkeleton";

/** Solutions page: Hero → 3 industry tabs → 2-col tab content → 3-col additional → benefits */
export default function Loading() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SkeletonHero />

      {/* Industry tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SkeletonText lines={2} center />
        <div className="mt-10">
          <SkeletonTabs count={3} />
          <SkeletonTwoColumn leftHeight="h-96" rightHeight="h-96" />
        </div>
      </div>

      {/* Additional solutions 3-col */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonText lines={2} center />
          <div className="mt-10">
            <SkeletonCardGrid cols={3} count={3} cardHeight="h-52" />
          </div>
        </div>
      </div>

      {/* Why choose — 2-col list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SkeletonTwoColumn leftHeight="h-60" rightHeight="h-60" />
      </div>
    </div>
  );
}
