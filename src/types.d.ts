export type CreateEventPayload = {
  name: string
  date: string
  description: string
  location: string
}

export type Event = {
  id?: number
  name: string
  date: string
  description?: string
  location: string
}

export type SelectOption = {
  id: string
  name: string
}

export type UpdateEventPayload = CreateEventPayload & {
  id: number
}
