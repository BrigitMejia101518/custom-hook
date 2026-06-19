import { useFetch } from "../hooks/useFetch";


function Characters() {
    const { data, isLoading, error } = useFetch("https://rickandmortyapi.com/api/character",
        
    );

    if (isLoading) return <p>Cargando</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data?.results.map((character) => {
                return <li key={character.id}>{character.name}</li>;
            })}
        </ul>
    );
}
export {
    Characters
}