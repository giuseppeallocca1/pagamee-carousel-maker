// Vercel Serverless Function — proxy sicuro verso Anthropic API
// La ANTHROPIC_API_KEY viene impostata come env var su Vercel (mai esposta al client)

export const config = { runtime: 'edge' }

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin':  '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  // Legge la API key: prima da env Vercel, poi dall'header (uso locale/dev)
  const apiKey =
    process.env.ANTHROPIC_API_KEY ||
    req.headers.get('x-client-api-key') ||
    ''

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'ANTHROPIC_API_KEY non configurata' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }

  let body
  try {
    body = await req.json()
  } catch {
    return new Response(
      JSON.stringify({ error: 'Body JSON non valido' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // Inoltra la richiesta ad Anthropic
  const upstream = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key':          apiKey,
      'anthropic-version':  '2023-06-01',
      'content-type':       'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await upstream.json()

  return new Response(JSON.stringify(data), {
    status: upstream.status,
    headers: {
      'Content-Type':               'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
