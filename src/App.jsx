import Success from "./Pages/Success"
import Home from "./Pages/Home"
import Error from "./Pages/Error"
import { BrowserRouter,Route,Routes } from "react-router-dom"

const App = () => {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/success" element={<Success/>}/>
    <Route path="/*" element={<Error/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App