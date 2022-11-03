import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Axios from "./Axios"
import GetData from "./GetData"

export default function NavbarForm() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Axios/>}></Route>
            <Route path="/user" element={<GetData/>}></Route>
        </Routes>
      </BrowserRouter>
   </div>
  )
}
