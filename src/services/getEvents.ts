export async function getEvents() {
  try {
    const response = await fetch(
      new URL('events', process.env.NEXT_PUBLIC_API_URL).toString(),
    )

    return response.json()
  } catch (error) {
    return []
  }
}
