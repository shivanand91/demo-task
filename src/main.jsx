import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReplacementPage from './components/ReplacementPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/services',
    element: <ReplacementPage />,
  },
  {
    path: '/technologies',
    element: <ReplacementPage />,
  },
  {
    path: '/company',
    element: <ReplacementPage />,
  },
  {
    path: '/resources',
    element: <ReplacementPage />,
  },
  {
    path: '/get-in-touch',
    element: <ReplacementPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
