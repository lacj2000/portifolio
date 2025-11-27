export async function GET(req: Request) {
  return new Response(JSON.stringify({ message: 'Hello from API' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
