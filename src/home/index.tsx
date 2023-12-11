import { Link } from "react-router-dom";
import axios from "axios";
import useStore from "../context/useStore";
import { useQuery } from "react-query";

export const HomePage = () => {

    const { data: itens, addItems } = useStore();

    const { data, isLoading } = useQuery(
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
        <>
            <div>Home Page</div>
            <Link to={'/character'}>character</Link>


            {
                isLoading ? <div>Carregandi...</div> :
                    <div style={{ marginTop: 20 }}>
                        {itens?.map((character, index) => (
                            <div key={index}>
                                <div>{character.name}</div>
                            </div>
                        ))}
                    </div>
            }

        </>
    );
};