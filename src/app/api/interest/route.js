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



export async function PUT(request, { params }) {
  const { id } = params
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name?.trim() || !email?.trim()) {
      return new Response(JSON.stringify({ error: 'Name and email are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const { data, error } = await supabase
      .from('interested_users')
      .update({
        name: name.trim(),
        email: email.trim(),
        message: message?.trim() ?? '',
      })
      .eq('id', id)

    if (error) {
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



import { supabase } from '@/lib/supabaseClient'

export async function DELETE(_, { params }) {
  const { id } = params

  try {
    const { error } = await supabase
      .from('interested_users')
      .delete()
      .eq('id', id)

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ success: true, message: 'User deleted' }), {
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

