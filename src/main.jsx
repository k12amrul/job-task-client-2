import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './components/Router/Router.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/cotexts/AuthProvider.jsx'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider  >
    <QueryClientProvider client={queryClient}>

    <RouterProvider   router={ router}></RouterProvider>
    </QueryClientProvider>
    <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>,
)
