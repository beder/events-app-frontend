export async function getEvent(id: number) {
  const response = await fetch(
    new URL(`events/${id}`, process.env.NEXT_PUBLIC_API_URL).toString(),
  )

  return response.json()
}
