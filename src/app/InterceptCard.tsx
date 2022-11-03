import { useEffect, useState } from 'react'

import { CaretUp, Pause, Pencil, Play } from 'phosphor-react'

import { useInterceptsStore } from './store'

export const InterceptCard = ({ id }: { id: string }) => {
  const { getInterceptById, updateIntercept } = useInterceptsStore()
  const { data, meta } = getInterceptById(id)
  const [expandCode, setExpandCode] = useState(false)
  const textAreaId = id + '-textarea'
  const [enableEdit, setEnableEdit] = useState(false)
  const [textAreaError, setTextAreaError] = useState<string>()

  useEffect(() => {
    const element = document.getElementById(textAreaId)
    if (!element) return

    element.style.height = '1px'
    element.style.height = `${element.scrollHeight}px`
  }, [])

  const updateResponse = (e: any) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      const updatedResponse = JSON.parse(e.target.value) as unknown
      updateIntercept({ ...data, response: updatedResponse })
      setTextAreaError(undefined)
    } catch (e) {
      const error = 'Invalid JSON, not saved'
      setTextAreaError(error)
      console.error(error)
    }
  }

  return (
    <div
      className={`overflow-hidden rounded-lg bg-gray-50  transition-all ${
        data.enabled
          ? 'text-slate-800 shadow-lg shadow-slate-500'
          : 'text-slate-500 shadow-md shadow-slate-300 hover:opacity-100'
      }`}
    >
      <div className='p-4'>
        <div className='flex justify-between gap-8'>
          <div
            title={data.origin}
            className='truncate text-sm uppercase text-slate-400'
          >
            {data.origin}
          </div>
          <span className='-mt-4 text-slate-400'>
            {meta?.requests.length ?? 0}
          </span>
        </div>
        <div className='flex w-full justify-between gap-8 pt-4'>
          <h3 className='font-mono shrink break-all'>{data.url}</h3>
          <div>
            <div className='rounded-md bg-slate-300 px-8 py-2 uppercase'>
              {data.method}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`group relative border-t-4 border-transparent bg-gray-900 p-4 text-slate-400 ${[
          enableEdit && ' border-cta',
          textAreaError && 'ring-4 ring-red-400',
        ]
          .filter(Boolean)
          .join(' ')}`}
      >
        <div className='font-mono absolute right-16 flex gap-8 text-white'>
          {textAreaError && (
            <span className='mt-4 block whitespace-nowrap text-12 text-red-400'>
              {textAreaError}
            </span>
          )}
          {expandCode && (
            <button
              onClick={() => setEnableEdit(!enableEdit)}
              className={`invisible z-10 group-hover:visible`}
            >
              <Pencil
                weight='fill'
                size={20}
                className={`opacity-70 hover:opacity-100 
                ${enableEdit ? 'text-cta' : ''}
              `}
              />
            </button>
          )}
          <div className='rounded-full py-4'>{data.statusCode}</div>
        </div>
        <code>
          <textarea
            id={id + '-textarea'}
            onClick={(e) => {
              if (expandCode && !enableEdit && e.ctrlKey) {
                setEnableEdit(true)
              }

              if (!expandCode) setExpandCode(true)
            }}
            onSubmit={(e) => {
              updateResponse(e)
              setEnableEdit(false)
            }}
            onBlur={(e) => {
              updateResponse(e)
              setEnableEdit(false)
            }}
            onKeyDown={(e) => {
              if (e.metaKey && e.key === 'Enter') {
                updateResponse(e)
                setEnableEdit(false)
              }
            }}
            readOnly={!enableEdit}
            onChange={(e) => {
              if (!enableEdit) return

              const element = e.target
              element.style.height = '1px'
              element.style.height = `${element.scrollHeight}px`
            }}
            className={
              'w-full border-none bg-transparent outline-none ' +
              (expandCode
                ? 'overflow-x-scroll'
                : 'max-h-80 cursor-pointer overflow-hidden')
            }
            defaultValue={JSON.stringify(data.response, null, 2)}
          ></textarea>
          {expandCode && (
            <div className='invisible absolute bottom-16 left-0 w-full group-hover:visible'>
              <button
                className='m-auto block rounded-lg px-64 py-0 opacity-60 hover:bg-slate-800 hover:opacity-100'
                onClick={() => setExpandCode(false)}
              >
                <CaretUp className='m-auto' weight='fill' size={24} />
              </button>
            </div>
          )}
          <div
            className={
              expandCode
                ? ''
                : 'pointer-events-none absolute top-0 h-full w-full bg-gradient-to-t from-gray-900'
            }
          ></div>
        </code>
        <div className='absolute right-16 bottom-16 cursor-pointer'>
          {data.enabled ? (
            <Pause
              className='text-cta'
              size={24}
              weight='fill'
              onClick={() => {
                updateIntercept({ ...data, enabled: false })
              }}
            />
          ) : (
            <Play
              className='text-green-400'
              size={24}
              weight='fill'
              onClick={() => {
                updateIntercept({ ...data, enabled: true })
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
