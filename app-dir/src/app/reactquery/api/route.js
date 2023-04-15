import { NextResponse } from 'next/server';

const headerOptions = {
   'Authorization': 'Basic ' + 'getToken()',
};

export async function POST(req) {
   const { searchParams } = new URL(req.url);
   const offset = searchParams.get('offset');
   const limit = searchParams.get('limit');

   const res = await fetch(`${process.env.NEXT_API_POKEMON}?offset=${offset}&limit=${limit}`, {
      headers: {
         'Content-Type': 'application/json',
         ...headerOptions
      },
   });
   const data = await res.json();

   return NextResponse.json(data);
}