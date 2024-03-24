export async function getEvents() {
  const response = await fetch(
    new URL('events', process.env.NEXT_PUBLIC_API_URL).toString(),
  )

  return response.json()
}
