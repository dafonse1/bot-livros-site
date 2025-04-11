
export async function POST(request: Request) {
  const body = await request.json();
  console.log("RECEBIDO:", body);

  return new Response(
    JSON.stringify({ status: "ok", recebido: body }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
}
