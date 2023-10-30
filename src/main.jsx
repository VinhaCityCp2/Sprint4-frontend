import { } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  

    children:[
      {path: '/', element: <Home/>},
      {path: '/home', element: <Home/>},
      /*{path: '/doacao', element: <Doacao/>},
      {path: '/login', element: <Login/>},*/

    ]
    

  
  
  
  }


])





ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
