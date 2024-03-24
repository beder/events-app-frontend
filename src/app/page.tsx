import { EventList } from '@/components/EventList'
import { getEvents } from '@/services/getEvents'

export default async function Home() {
  const events = await getEvents()

  return <EventList events={events} />
}
