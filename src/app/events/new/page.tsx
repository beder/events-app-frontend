import { EventForm } from '@/components/EventForm'

export default function Home() {
  const event = {
    name: '',
    date: new Date(),
    location: 'online',
  }

  return <EventForm event={event} />
}
