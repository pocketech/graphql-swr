if (typeof window === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { server } = require('./server')

  server.listen()
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./browser')

  worker.start()
}
export {}
