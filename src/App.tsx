import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import Selection from './pages/Selection/Selection'
import { useContext } from 'react'
import { mainContext } from './context/MainProvider'
import PokeListType from './pages/PokeListType/PokeListType'
import PokeCard from './pages/PokeCard/PokeCard'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path=":pokeParam" element={<PokeCard/>}/>
      <Route path="selection" element={<Selection/>}/>
      <Route path="selection/:typeParam" element={<PokeListType/>}/>
    </Route>
  ))

  const { dark } = useContext(mainContext) as any

  return (
    <main className={`${dark && "dark-mode"} px-6 md:px-20 pt-7 pb-15 min-h-screen`}>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App;
