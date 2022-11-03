import { HttpVerb } from 'http-request-mock/src/types'

// import { CONFIG } from '../../../config';

export const INTERCEPTOR_STORAGE_KEY = 'interceptor-endpoints'

export const STORE_API = 'https://storeapi.com'
export const CLOUD_API = 'https://cloudapi.com'

export interface Intercept {
  url: string
  origin: string
  id: string
  response: unknown
  enabled: boolean
  method: HttpVerb
  statusCode: number
}

export type Intercepts = Record<string, Intercept>

export interface InterceptMeta {
  requests: unknown[]
}

export interface InterceptState {
  id: string
  data: Intercept
  meta: InterceptMeta
}

export type InterceptsDict = Record<string, InterceptState>
