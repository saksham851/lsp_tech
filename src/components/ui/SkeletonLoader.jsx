// src/components/ui/SkeletonLoader.jsx
const SkeletonBox = ({ className = '' }) => (
  <div className={`shimmer rounded-xl ${className}`} />
)

export const CardSkeleton = () => (
  <div className="bg-dark-card rounded-2xl p-6 space-y-4">
    <SkeletonBox className="h-12 w-12 rounded-xl" />
    <SkeletonBox className="h-5 w-3/4" />
    <SkeletonBox className="h-4 w-full" />
    <SkeletonBox className="h-4 w-5/6" />
    <SkeletonBox className="h-4 w-2/3" />
  </div>
)

export const ProjectCardSkeleton = () => (
  <div className="bg-dark-card rounded-2xl overflow-hidden">
    <SkeletonBox className="h-52 w-full rounded-none" />
    <div className="p-6 space-y-3">
      <SkeletonBox className="h-5 w-3/4" />
      <SkeletonBox className="h-4 w-1/2" />
      <SkeletonBox className="h-4 w-full" />
      <SkeletonBox className="h-10 w-32 rounded-full" />
    </div>
  </div>
)

export const TestimonialSkeleton = () => (
  <div className="glass rounded-2xl p-8 space-y-4">
    <div className="flex items-center gap-4">
      <SkeletonBox className="h-14 w-14 rounded-full" />
      <div className="space-y-2 flex-1">
        <SkeletonBox className="h-4 w-32" />
        <SkeletonBox className="h-3 w-24" />
      </div>
    </div>
    <SkeletonBox className="h-4 w-full" />
    <SkeletonBox className="h-4 w-full" />
    <SkeletonBox className="h-4 w-3/4" />
  </div>
)

export const GridSkeleton = ({ count = 6, Skeleton = CardSkeleton }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <Skeleton key={i} />
    ))}
  </div>
)

export default CardSkeleton
