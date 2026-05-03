import Container from "../Container";
import { Skeleton as SkeletonComponent } from "@/components/ui/skeleton"

export default function FormSkeleton() {
  return (
    <Container className="flex flex-col gap-3">
      <div className="w-full flex items-center justify-between">
        <SkeletonComponent className="h-8 w-3/5" />
        <SkeletonComponent className="h-8 w-8 rounded-lg" />
      </div>

      <div className="pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1 sm:col-span-2">
          <SkeletonComponent className="h-4 w-1/6 rounded" />
          <SkeletonComponent className="h-8 w-full" />
        </div>

        <div className="flex flex-col gap-1 sm:col-span-2">
          <SkeletonComponent className="h-4 w-1/6 rounded" />
          <SkeletonComponent className="h-20 w-full" />
        </div>

        <div className="flex flex-row gap-3 sm:col-span-2">
          <SkeletonComponent className="h-10 w-1/6" />
          <SkeletonComponent className="h-10 w-1/6" />
        </div>
      </div>
    </Container>
  )
}
