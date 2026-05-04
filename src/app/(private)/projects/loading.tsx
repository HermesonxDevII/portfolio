import Container from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Container>
      <div className="w-full flex items-center justify-between">
        <Skeleton className="h-8 w-2/5" />
        <Skeleton className="h-8 w-8 rounded-lg" />
      </div>

      <div className="flex flex-col gap-3 mt-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-30 py-2 flex flex-row gap-3 rounded"/>
        ))}
      </div>
    </Container>
  )
}
