import Container from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Container className="flex flex-col gap-3">
      <div className="w-full flex items-center justify-between">
        <Skeleton className="h-8 w-3/5" />
        <Skeleton className="h-8 w-8 rounded-lg" />
      </div>

      <div className="pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1 sm:col-span-2">
          <Skeleton className="h-4 w-1/6 rounded" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="flex flex-col gap-1 sm:col-span-2">
          <Skeleton className="h-4 w-1/6 rounded" />
          <Skeleton className="h-20 w-full" />
        </div>

        <div className="flex flex-row justify-between sm:col-span-2">
          <div className="flex flex-row gap-3 w-full">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
          </div>

          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </Container>
  )
}
