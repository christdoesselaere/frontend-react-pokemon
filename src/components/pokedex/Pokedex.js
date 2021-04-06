import React, {useEffect, useState} from "react";
import axios from "axios";
import Pokemon from "../pokemon/Pokemon";
import './Pokedex.css';

const pokeApi = `https://pokeapi.co/api/v2/pokemon`;

function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState('');
    const [pokemonIndex, setPokemonIndex] = useState(0);

    function previousPokemon() {
        pokemonIndex > 0 && setPokemonIndex(pokemonIndex - 20);
    }

    function nextPokemon() {
        pokemonIndex < 880 && setPokemonIndex(pokemonIndex + 20);
    }

    useEffect(() => {
        async function fetchPokemons() {
            setError('')

            try {
                const response = await axios.get(`${pokeApi}/?limit=20&offset=${pokemonIndex})`);
                setPokemons(response.data.results);
            } catch (error) {
                console.error(error);
                setError(`Something went wrong retrieving the data.`)
            }
        }

        fetchPokemons();
    }, [pokemonIndex])

    return (
        <>
            {console.log(pokemonIndex)}
            {error && <p>{error}</p>}
            <div className="button-container">
                <button type="button" className="button" onClick={previousPokemon}>Previous</button>
                <button type="button" className="button" onClick={nextPokemon}>Next</button>
            </div>
            <div className="pokedex-items">
            {pokemons && pokemons.map((pokemon) => {
                return (
                    <div className="pokebal" key={pokemon.name}>
                        <Pokemon pokemonUrl={pokemon.url}/>
                    </div>
                )
            })}
            </div>
        </>
    );
}

export default Pokedex;