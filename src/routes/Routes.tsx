import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../home"
import { RenderItems } from "../renderItems"
import { LoginPage } from "../login";

export const MyRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/character" element={<RenderItems />} />
            </Routes>
        </BrowserRouter>
    )
}