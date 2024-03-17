import Image from 'next/image'

import backgroundImage from '@/images/background-call-to-action.jpg'

const events = [
  {
    id: 1,
    name: 'Learn to use the basic tools',
    href: 'events',
    date: 'Mon, Jul 26, 8:00 AM',
    description:
      'Get the full set of basic tools and learn how to use them to grow your business.',
    options: '8 colors',
    imageSrc: backgroundImage,
    imageAlt: 'Tools arranged in a pattern.',
    host: 'Chelsea Hagon',
  },
  {
    id: 2,
    name: 'From idea to product',
    href: 'events',
    date: 'Tue, Jul 27, 8:00 AM',
    description:
      'Know how to turn your idea into a product and make it a reality.',
    options: 'Black',
    imageSrc: backgroundImage,
    imageAlt: 'Product screenshot',
    host: 'Piper Dalton',
  },
  {
    id: 3,
    name: 'Fund your business',
    href: 'events',
    date: 'Fri, Jul 30, 8:00 AM',
    description:
      'Get the funds you need to grow your business and make your dreams come true.',
    options: 'Black',
    imageSrc: backgroundImage,
    imageAlt: 'Money in a jar.',
    host: 'Brenna Goyette',
  },
  {
    id: 4,
    name: 'Say goodbye to your job',
    href: 'events',
    date: 'Mon, Aug 2, 8:00 AM',
    description: 'Learn how to quit your job and start your own business.',
    options: 'Black',
    imageSrc: backgroundImage,
    imageAlt: 'Person quitting their job.',
    host: 'Kristin Watson',
  },
  {
    id: 5,
    name: 'How to be a CEO',
    href: 'events',
    date: 'Wed, Aug 4, 8:00 AM',
    description:
      'Learn how to be a CEO and grow your business to the next level.',
    options: 'Black',
    imageSrc: backgroundImage,
    imageAlt: 'Person working on a laptop.',
    host: 'Leslie Alexander',
  },
  // More events...
]

export function EventList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="font-bold text-4xl mb-12">Our events</h1>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <Image
                  src={event.imageSrc}
                  alt={event.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-base font-medium text-gray-500">
                    {event.date}
                  </p>
                </div>
                <h3 className="text-base font-medium text-gray-900">
                  <a href={event.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {event.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{event.host}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
