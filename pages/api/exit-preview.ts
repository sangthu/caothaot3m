import { NextApiResponse } from 'next'

export const runtime = 'experimental-edge' // 'nodejs' (default) | 'edge'

export default async function exit(_, res: NextApiResponse) {
  // Exit Draft Mode by removing the cookie
  res.setDraftMode({ enable: false })

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: '/' })
  res.end()
}
