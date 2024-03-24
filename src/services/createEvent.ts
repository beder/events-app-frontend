import { CreateEventPayload } from '@/types'

export async function createEvent(data: CreateEventPayload) {
  try {
    const response = await fetch(
      new URL('events', process.env.NEXT_PUBLIC_API_URL).toString(),
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    return response.json()
  } catch (error) {
    return []
  }
}
