import React, { useEffect, useMemo } from 'react'

import HttpRequestMock from 'http-request-mock'
import { Disable } from 'http-request-mock/src/types'

import { InterceptCard } from './InterceptCard'
import { useInterceptsStore } from './store'

export const App = () => {
  const {
    interceptsIds,
    intercepts,
    getInterceptById,
    addInterceptRequest,
    reset,
    toggleIsVisible,
    isVisisble,
  } = useInterceptsStore()

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'i') {
        toggleIsVisible()
      }
    }
    document.addEventListener('keyup', onKeyUp)
    return () => document.removeEventListener('keyup', onKeyUp)
  }, [])

  // save to localstorage on unmount
  useEffect(() => {
    interceptsIds().map((interceptId) => {
      const intercept = getInterceptById(interceptId).data
      const mock = mocker.mock({
        key: intercept.id,
        url: intercept.origin + intercept.url,
        method: intercept.method,
        response: (req: unknown) => {
          addInterceptRequest(interceptId, req)
          return intercept.response
        },
      })
      if (mock) {
        mock.disable = intercept.enabled ? Disable.NO : Disable.YES
      }
    })
  }, [JSON.stringify(intercepts)])

  const mocker = useMemo(() => HttpRequestMock.setup(), [])

  return (
    <div className='pointer-events-none fixed top-0 left-0 z-50 h-[90vh] w-full max-w-md p-4 pt-16'>
      <div
        className={`relative max-h-full w-full resize overflow-y-scroll rounded-lg bg-gradient-to-br from-gray-50 to-slate-200 shadow-2xl shadow-slate-700 transition-all ${
          isVisisble
            ? 'pointer-events-auto visible opacity-100'
            : ' -translate-x-32 opacity-0'
        }`}
      >
        <div className='relative px-1 py-8'>
          <h1 className='text-center font-serif text-3xl font-bold text-slate-600'>
            Interceptor
          </h1>
        </div>
        <div className='relative flex flex-col gap-4 overflow-y-scroll p-4'>
          {interceptsIds().map((id) => (
            <InterceptCard id={id} key={id} />
          ))}
          <button
            className='mt-32 w-full rounded-md p-4 font-semibold uppercase text-slate-500 hover:bg-slate-300'
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
