import Container from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Container>
      <div className="w-full flex items-center justify-between">
        <Skeleton className="h-8 w-2/5" />
        <Skeleton className="h-8 w-8 rounded-lg" />
      </div>

      <div className="flex flex-col gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div>
              <Skeleton className="h-6 w-1/5 rounded" />
              <Skeleton className="h-3 w-[30%] mt-1 rounded" />
            </div>

            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 4 }).map((_, badgeIndex) => (
                <Skeleton key={badgeIndex} className="h-8 w-1/6 rounded-full"/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
