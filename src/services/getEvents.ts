import { Event } from '@/types'

export async function getEvents(): Promise<Event[] | undefined> {
  try {
    const response = await fetch(
      new URL('events', process.env.NEXT_PUBLIC_API_URL).toString(),
    )

    return response.ok ? response.json() : undefined
  } catch (error) {
    return undefined
  }
}
