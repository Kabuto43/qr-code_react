import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
// import { Layout } from './Layout'
import { QRCodeGenerator } from './QRCodeGenerator'
import { QRCodeScanner} from './QRCodeScanner'
import { Navigation } from "./Navigation"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation/>,
  },
  {
    path: "/generate",
    element: <QRCodeGenerator/>,
  },
  {
    path: "/scan",
    element: <QRCodeScanner/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
