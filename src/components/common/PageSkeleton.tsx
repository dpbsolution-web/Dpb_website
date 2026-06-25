/**
 * Reusable skeleton building blocks for page-level loading.tsx files.
 * Each block matches a real content shape so the loading state
 * looks like the page it replaces.
 */

/** Full-width hero bar — matches gradient hero sections */
export function SkeletonHero({ tall = false }: { tall?: boolean }) {
  return (
    <div
      className={`w-full animate-pulse bg-linear-to-br from-blue-950/30 to-indigo-900/30 flex flex-col items-center justify-center gap-6 px-4 ${
        tall ? "min-h-[85vh]" : "h-64 md:h-80"
      }`}
    >
      <div className="h-5 w-40 bg-white/20 rounded-full" />
      <div className="h-10 w-full max-w-[20rem] bg-white/25 rounded-lg" />
      <div className="h-5 w-64 bg-white/15 rounded" />
      <div className="flex gap-4 mt-2">
        <div className="h-12 w-36 bg-white/20 rounded-lg" />
        <div className="h-12 w-36 bg-white/15 rounded-lg" />
      </div>
    </div>
  );
}

/** Row of stat boxes — matches CertificationsSection / StatsSection */
export function SkeletonStats({ count = 4 }: { count?: number }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-${count} gap-6`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-100"
        >
          <div className="h-14 w-14 rounded-full bg-gray-300" />
          <div className="h-7 w-20 rounded bg-gray-300" />
          <div className="h-4 w-24 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}

/** Grid of cards — matches services/team/testimonials grids */
export function SkeletonCardGrid({
  cols = 2,
  count,
  cardHeight = "h-56",
}: {
  cols?: number;
  count?: number;
  cardHeight?: string;
}) {
  const items = count ?? cols * 2;
  const colClass: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };
  return (
    <div className={`grid ${colClass[cols] ?? "grid-cols-1 md:grid-cols-2"} gap-8`}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className={`animate-pulse ${cardHeight} bg-gray-200 rounded-xl`} />
      ))}
    </div>
  );
}

/** Two-column split — matches mission/vision, features, contact layouts */
export function SkeletonTwoColumn({
  leftHeight = "h-80",
  rightHeight = "h-80",
}: {
  leftHeight?: string;
  rightHeight?: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className={`animate-pulse ${leftHeight} bg-gray-200 rounded-xl`} />
      <div className={`animate-pulse ${rightHeight} bg-gray-200 rounded-xl`} />
    </div>
  );
}

/** Tab row — matches Solutions / Careers tab-based navigation */
export function SkeletonTabs({ count = 3 }: { count?: number }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-${count} gap-4 mb-10`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse h-14 bg-gray-200 rounded-lg" />
      ))}
    </div>
  );
}

/** Form skeleton — matches contact / application forms */
export function SkeletonForm({ fields = 5 }: { fields?: number }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="animate-pulse h-11 bg-gray-200 rounded-lg" />
        <div className="animate-pulse h-11 bg-gray-200 rounded-lg" />
      </div>
      {Array.from({ length: fields - 2 }).map((_, i) =>
        i === fields - 3 ? (
          <div key={i} className="animate-pulse h-32 bg-gray-200 rounded-lg" />
        ) : (
          <div key={i} className="animate-pulse h-11 bg-gray-200 rounded-lg" />
        )
      )}
      <div className="animate-pulse h-12 w-full bg-gray-300 rounded-lg" />
    </div>
  );
}

/** Three-step row — matches "How it works" / process sections */
export function SkeletonSteps({ count = 3 }: { count?: number }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-${count} gap-8`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-gray-200" />
          <div className="h-5 w-32 bg-gray-300 rounded" />
          <div className="h-4 w-40 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}

/** Simple text block — section heading + lines */
export function SkeletonText({ lines = 3, center = false }: { lines?: number; center?: boolean }) {
  const align = center ? "mx-auto" : "";
  return (
    <div className={`space-y-3 ${center ? "text-center flex flex-col items-center" : ""}`}>
      <div className={`animate-pulse h-8 w-56 bg-gray-300 rounded ${align}`} />
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`animate-pulse h-4 bg-gray-200 rounded ${align}`}
          style={{ width: `${90 - i * 10}%` }}
        />
      ))}
    </div>
  );
}
