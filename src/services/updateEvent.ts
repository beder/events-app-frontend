import { UpdateEventPayload } from '@/types'

export async function updateEvent(id: number, data: UpdateEventPayload) {
  const response = await fetch(
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
}
