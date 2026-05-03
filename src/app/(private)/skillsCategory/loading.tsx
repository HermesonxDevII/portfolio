import Container from "@/components/Container"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
 return (
    <Container className="flex flex-col gap-3">
      <div className="w-full flex items-center justify-between">
        <Skeleton className="h-8 w-3/5" />
        <Skeleton className="h-8 w-8 rounded-lg" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-8 w-2/5" />

          <div className="flex flex-wrap gap-3">
            <Skeleton className="h-8 w-1/6" />
            <Skeleton className="h-8 w-1/6" />
            <Skeleton className="h-8 w-1/6" />
            <Skeleton className="h-8 w-1/6" />
          </div>
        </div>
      </div>
    </Container>
 )
}
