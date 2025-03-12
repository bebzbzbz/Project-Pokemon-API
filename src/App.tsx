import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import Selection from './pages/Selection/Selection'
import { useContext } from 'react'
import { mainContext } from './context/MainProvider'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/selection" element={<Selection/>}/>
    </Route>
  ))

  const { dark } = useContext(mainContext) as any

  return (
    <main className={dark && `dark-mode`}>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App;
