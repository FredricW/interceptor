import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { Intercept, InterceptsDict, InterceptState } from './interceptor.types'
import { getDefaultIntercepts } from './intercepts'

interface InterceptsState {
  isVisisble: boolean
  intercepts: InterceptsDict
  interceptsIds: () => string[]
  getInterceptById: (id: string) => InterceptState
  updateIntercept: (intercept: Intercept) => void
  addInterceptRequest: (interceptId: string, request: unknown) => void
  reset: () => void
  setIsVisible: (state: boolean) => void
  toggleIsVisible: () => void
}

export const useInterceptsStore = create<InterceptsState>()(
  persist(
    immer((set, get) => ({
      /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
      isVisisble: true,
      intercepts: getDefaultIntercepts(),
      interceptsIds: () => Object.keys(get().intercepts),
      getInterceptById: (id) => get().intercepts[id],
      updateIntercept: (newIntercept) =>
        set((state) => {
          state.intercepts[newIntercept.id].data = newIntercept
        }),
      addInterceptRequest: (interceptId: string, request: unknown) =>
        set((state) => {
          state.intercepts[interceptId].meta.requests.push(request)
        }),
      reset: () =>
        set((state) => {
          state.intercepts = getDefaultIntercepts()
        }),
      setIsVisible: (newState) =>
        set((state) => {
          state.isVisisble = newState
        }),
      toggleIsVisible: () =>
        set((state) => {
          state.isVisisble = !state.isVisisble
        }),
      /* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
    })),
    { name: 'interceptor-storage' }
  )
)
