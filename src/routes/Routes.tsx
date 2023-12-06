import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../home"
import { RenderItems } from "../renderItems"
import axios from "axios";
import useStore from "../context/useStore";
import { useQuery } from "react-query";

export const MyRoutes = () => {

    const { addItems } = useStore();

    const { } = useQuery(
        "characters",
        async () => {
            const response = await axios.get("https://rickandmortyapi.com/api/character");
            const characters = response.data.results;
            return characters;
        },
        {
            staleTime: 1000 * 100,
            onSuccess: (data) => { addItems(data) },
        }
    );

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/character" element={<RenderItems />} />
            </Routes>
        </BrowserRouter>
    )
}