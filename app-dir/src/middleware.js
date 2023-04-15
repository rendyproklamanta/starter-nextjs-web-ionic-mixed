import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(req) {
   const requestHeaders = new Headers(req.headers);
   //console.log(requestHeaders.get('api-key'));

   if (requestHeaders.get('api-key') !== process.env.NEXT_PUBLIC_API_KEY) {
      return new NextResponse(
         JSON.stringify({
            success: false,
            message: 'apikey failed'
         }),
         {
            status: 401,
            headers: { 'content-type': 'application/json' }
         }
      );
   } else {
      return NextResponse.next();
   }
}

// Supports both a single string value or an array of matchers
export const config = {
   matcher: ['/reactquery/api'],
};