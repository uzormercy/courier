import { isAuthenticated }  from '@/libs/authentication';
import { NextResponse as response } from 'next/server'

export const config = {
    matcher: ['/adminaccess/dashboard', '/adminaccess/parcels/:path*'],
  }

const middleware =  async (req) => {
  const token = req.cookies.get('_token')?.value
  if(!token){
    return response.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/adminaccess`)
  }
  const authenticated = await isAuthenticated(token);
  if(!authenticated){
   return response.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/adminaccess`)
  }
  return response.next();
}


export default middleware;