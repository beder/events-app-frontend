import { useAuthenticatedFetch } from '@/hooks/useAuthenticatedFetch'

export async function deleteEvent(id: number, fetcher: typeof fetch) {
  try {
    const response = await fetcher(
      new URL(`events/${id}`, process.env.NEXT_PUBLIC_API_URL).toString(),
      {
        method: 'DELETE',
      },
    )

    if (!response.ok) {
      return null
    }

    return response.json()
  } catch (error) {
    return null
  }
}

export const useDeleteEvent = () => {
  const fetcher = useAuthenticatedFetch()
  return (id: number) => deleteEvent(id, fetcher.fetch)
}
