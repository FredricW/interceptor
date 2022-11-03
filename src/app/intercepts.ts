import { Intercept, InterceptsDict } from './interceptor.types'

// Example
export const intercepts: Intercept[] = [
  {
    id: 'users',
    url: '/users',
    enabled: false,
    origin: 'https://api.com',
    method: 'get',
    statusCode: 200,
    response: [
      {
        name: 'Fredric',
      },
    ],
  },
]

export const getDefaultIntercepts = (): InterceptsDict =>
  intercepts.reduce(
    (prev, next) => ({
      ...prev,
      [next.id]: {
        id: next.id,
        data: next,
        meta: {
          requests: [],
        },
      },
    }),
    {}
  )
