// app/api/register/route.js
import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    

    const sqlQuery = "INSERT INTO users (name, email, message) VALUES (?, ?, ?)";

    const [result] = await pool.query(
        sqlQuery,
      [name, email, message]
    );

    return NextResponse.json(
      { success: true,  data: result.insertId },
      { status: 201 }
    );

  } catch (error) {
    console.error("REGISTER ERROR → ", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
