import { Routes, Route } from "react-router-dom"
import { Home } from "../Pages/Home"
import { About } from "../Pages/About"
import { Product } from "../Pages/Product"
import { NotFound } from "../Pages/NotFound"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}