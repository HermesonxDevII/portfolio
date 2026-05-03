'use client'

import { useState, useCallback } from 'react'

export function useLoading() {
  const [loading, setLoading] = useState<boolean>(false)

  const withLoading = useCallback(async (callback: () => Promise<void>) => {
    try {
      setLoading(true)

      await callback()
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, withLoading }
}
