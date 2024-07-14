import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "../pages/Index/Index"
import AnimmeDetails from "../pages/animeDetails/AnimmeDetails"

const AppRouter = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={< Index/>} />
        <Route path="/anime/:id" element={<AnimmeDetails/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter