// export async function onRequest(context) {
//   try {
//     return await context.next();
//   } catch (err) {
//     return new Response(`${err.message}\n${err.stack}`, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';

export function middleware(req) {
  console.log(req)
  if (req.headers.get('referer')?.includes('facebook.com')) {
    const targetURL = `${process.env.WORDPRESS_REDIRECT_DOMAIN}/${req.nextUrl.pathname.replace('/posts/', '')}`;
    return NextResponse.redirect(targetURL);
  }
}
