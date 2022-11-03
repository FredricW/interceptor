import {
  CLOUD_API,
  Intercept,
  InterceptsDict,
  STORE_API,
} from './interceptor.types'

export const intercepts: Intercept[] = [
  {
    id: 'passcode-request-single',
    url: '/passcode/v1/resets?pending',
    enabled: false,
    origin: CLOUD_API,
    method: 'get',
    statusCode: 200,
    response: [
      {
        Approved: false,
        DeviceID: 'deviceId',
        DeviceName: 'name',
        RequestID: 'requestId',
      },
    ],
  },
  {
    id: 'devices',
    url: '/devices/v1?includeDeleted',
    origin: CLOUD_API,
    enabled: false,
    method: 'get',
    statusCode: 200,
    response: [
      {
        DeviceDesc: 'remarkable',
        DeviceID: 'fake-device-id',
        Modified: '2019-01-01T13:49:6.666000Z',
      },
    ],
  },
  {
    id: 'subscriptions',
    url: '/myrm/subscriptions',
    origin: STORE_API,
    enabled: false,
    response: { data: {} },
    method: 'get',
    statusCode: 200,
  },
  {
    id: 'retail-offer-allowed',
    url: '/v1/myrm/checkout/sff/allowed',
    origin: STORE_API,
    enabled: false,
    response: { data: { allowed: true } },
    method: 'get',
    statusCode: 200,
  },
  {
    id: 'subscription-offer-allowed',
    url: '/v1/myrm/checkout/subscription-offer/allowed',
    origin: STORE_API,
    enabled: false,
    response: { data: { allowed: true } },
    method: 'get',
    statusCode: 200,
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
