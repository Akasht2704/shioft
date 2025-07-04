// app/api/interest/route.js
import { supabase } from '@/lib/supabaseClient'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email,  message } = body

    if (!name || !email ) {
      return new Response(
        JSON.stringify({ error: 'All fields are required.' }),
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('interested_users')
      .insert([{ name, email,  message }])

    if (error) {
      console.error(error)
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      )
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({ error: 'Server Error' }),
      { status: 500 }
    )
  }
}


export async function GET() {
  try {
    const { data, error } = await supabase
      .from('interested_users')
      .select('*')
      .order('id', { ascending: false })

    if (error) {
      console.error(error)
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}




