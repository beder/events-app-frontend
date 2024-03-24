export async function deleteEvent(id: number) {
  try {
    const response = await fetch(
      new URL(`events/${id}`, process.env.NEXT_PUBLIC_API_URL).toString(),
      {
        method: 'DELETE',
      },
    )

    return response.json()
  } catch (error) {
    return {}
  }
}
