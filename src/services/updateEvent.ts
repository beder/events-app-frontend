import { UpdateEventPayload } from '@/types'
import { useAuthenticatedFetch } from '@/hooks/useAuthenticatedFetch'

async function updateEvent(
  id: number,
  data: UpdateEventPayload,
  fetcher: typeof fetch,
) {
  try {
    const response = await fetcher(
      new URL(`events/${id}`, process.env.NEXT_PUBLIC_API_URL).toString(),
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    return response.json()
  } catch (error) {
    return {}
  }
}

export const useUpdateEvent = () => {
  const fetcher = useAuthenticatedFetch()
  return (id: number, data: UpdateEventPayload) =>
    updateEvent(id, data, fetcher.fetch)
}
