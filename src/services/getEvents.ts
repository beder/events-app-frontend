import { Event } from '@/types'

export async function getEvents(): Promise<Event[] | undefined> {
  try {
    const response = await fetch(
      new URL('events', process.env.NEXT_PUBLIC_API_URL).toString(),
    )

    if (!response.ok) {
      return undefined
    }

    return response.json()
  } catch (error) {
    return undefined
  }
}
