'use client'

import { usePathname } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"

export default function PageLoading() {
  const pathname = usePathname()

  if (pathname === "/login" || pathname === "/signup") {
    return (
      <div className="p-6 space-y-6">
        <Skeleton className="h-10 w-1/2 mx-auto" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-1/3 mx-auto" />
      </div>
    )
  }

  if (pathname.startsWith("/dashboard")) {
    return (
      <div className="p-6 space-y-8">
        {/* Dashboard Header */}
        <Skeleton className="h-8 w-1/3" />
        {/* Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-lg" />
          ))}
        </div>
        {/* Chart Section */}
        <Skeleton className="h-80 w-full rounded-lg" />
      </div>
    )
  }

  // Default to homepage loading
  return (
    <div className="p-6 space-y-8">
      {/* Hero section */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>

      {/* Big Call to Action button */}
      <Skeleton className="h-12 w-40" />

      {/* Features section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-4">
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}