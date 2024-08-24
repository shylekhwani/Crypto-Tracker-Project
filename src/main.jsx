import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryclient = new QueryClient();

createRoot(document.getElementById('root')).render(
<QueryClientProvider client={queryclient}>

  <BrowserRouter>
     <App />
  </BrowserRouter>
    
</QueryClientProvider>
)
