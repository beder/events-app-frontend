export type Event = {
  id?: number
  name: string
  date: Date
  description?: string
  location: string
}

export type CreateEventPayload = {
  name: string
  date: Date
  description: string
  location: string
}

export type UpdateEventPayload = CreateEventPayload & {
  id: number
}
