export async function getEvent(id: number) {
  try {
    const response = await fetch(
      new URL(`events/${id}`, process.env.NEXT_PUBLIC_API_URL).toString(),
    )

    return response.json()
  } catch (error) {
    return []
  }
}
