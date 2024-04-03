import { EventList } from '@/components/EventList'
import { getEvents } from '@/services/getEvents'

export default async function Home() {
  const events = await getEvents()

  if (!events) {
    return (
      <div className="mt-4 text-center text-red-500">
        We couldn&apos;t load the events. Please try again later.
      </div>
    )
  }

  return <EventList events={events} />
}
