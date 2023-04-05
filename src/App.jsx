import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/home'
import NotFound from './pages/error/NotFound'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import HomeView from './pages/home/homeview'
import Products from './pages/Products/products'
import Details from './pages/Products/details'
import Login from './pages/auth/login'
import Car from "./pages/Car/car"
import Profile from './pages/auth/profile'
import Perfil from './pages/auth/Perfil/perfil'
import { AuthLayout, LoginLayout } from "./components/AuthLayout.jsx"

function App() {
  //const [count, setCount] = useState(0)

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: "#1d212c"
      }
    },
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <HomeView />
        },
        {
          path: "products",
          children: [
            {
              index: true,
              element: <Products />,

            },
            {
              path: "details/:id",
              element: <Details />
            }
          ]
        },
        {
          element: <AuthLayout />,
          children: [
            {
              path: "carrito",
              element: <Car />
            },
            {
              path: "profile",
              element: <Profile />,
              children: [
                {
                  index: true,
                  element: <Perfil />,
                }
              ]
            },
          ]
        },
      ]
    },
    {
      element: <LoginLayout />,
      children: [
        {
          path: "login",
          element: <Login />
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />
    },
  ])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
