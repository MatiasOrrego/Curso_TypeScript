import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { TodoApp } from './TodoApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)
