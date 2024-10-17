import { BrowserRouter,Routes,Route } from "react-router-dom"
import Nav from "./component/nav"
import Home from "./component/Home"
import Contact from "./component/Contact"
import About from "./component/About"
import Products from "./component/Products"

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Product" element={<Products/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
