import { Skeleton as SkeletonComponent } from "@/components/ui/skeleton"

export default function Skeleton() {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex items-center justify-between">
        <SkeletonComponent className="h-8 w-3/5" />
        <SkeletonComponent className="h-8 w-8 rounded-lg" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <SkeletonComponent className="h-8 w-2/5" />

          <div className="flex flex-wrap gap-3">
            <SkeletonComponent className="h-8 w-1/6" />
            <SkeletonComponent className="h-8 w-1/6" />
            <SkeletonComponent className="h-8 w-1/6" />
            <SkeletonComponent className="h-8 w-1/6" />
          </div>
        </div>
      </div>
    </div>
  )
}
