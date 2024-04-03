import { useAuthenticatedFetch } from '@/hooks/useAuthenticatedFetch'
import { Event } from '@/types'

async function deleteEvent(
  id: number,
  fetcher: typeof fetch,
): Promise<Event | undefined> {
  try {
    const response = await fetcher(
      new URL(`events/${id}`, process.env.NEXT_PUBLIC_API_URL).toString(),
      {
        method: 'DELETE',
      },
    )

    if (!response.ok) {
      return undefined
    }

    return response.json()
  } catch (error) {
    return undefined
  }
}

export const useDeleteEvent = () => {
  const fetcher = useAuthenticatedFetch()
  return (id: number) => deleteEvent(id, fetcher.fetch)
}
