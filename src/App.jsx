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
          path: "carrito",
          element: <Car />
        },

        {
          path: "profile",
          element: <Profile />
        },
      ]
    },
    {
      path: "login",
      element: <Login />
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
