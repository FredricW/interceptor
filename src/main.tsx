import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import './index.css'

export const render = (tagId: string = 'interceptor') =>
  ReactDOM.createRoot(document.getElementById(tagId) as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
