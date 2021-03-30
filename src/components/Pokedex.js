import React, {useEffect, useState} from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import './Pokedex.css';

const pokeApi = `https://pokeapi.co/api/v2/pokemon`;

function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchPokemons() {
            setError('')

            try {
                const response = await axios.get(pokeApi);
                setPokemons(response.data.results);
            } catch (error) {
                console.error(error);
                setError(`Er is iets mis gegaan met het ophalen van de data.`)
            }
        }

        fetchPokemons();
    }, [])

    return (
        <>
            {error && <p>{error}</p>}
            {pokemons && pokemons.map((pokemon) => {
                return (
                    <div className="pokebal" key={pokemon.name}>
                        <Pokemon pokemonUrl={pokemon.url}/>
                    </div>
                )
            })}
        </>
    );
}

export default Pokedex;