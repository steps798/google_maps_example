import { Server } from '@airy/maleo/server'

const PORT = process.env.PORT || 3000

const maleoServer = Server.init({
  port: PORT,
  csp: {
    directives: {
      defaultSrc: [
        `'self'`,
        '*.google.com',
        '*.airyrooms.com',
        '*.amazonaws.com',
        '*.cloudfront.net',
      ],
      styleSrc: [`'self'`, `'unsafe-inline'`],
      fontSrc: [`'self'`, `data:`],
      imgSrc: [
        `'self'`,
        `blob:`,
        `data:`,
        '*.amazonaws.com',
        '*.cloudfront.net',
      ],
    },
  },
})

maleoServer.run(() => {
  console.log('Server running on port :', PORT)
})
