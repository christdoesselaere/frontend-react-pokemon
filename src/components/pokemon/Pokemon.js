import React, {useEffect, useState} from "react";
import axios from "axios";
import './Pokemon.css';
import missingNo from '../../assets/missingno.png'

function Pokemon({pokemonUrl}) {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonSprite, setPokemonSprite] = useState('');
    const [pokemonSpriteFront, setPokemonSpriteFront] = useState('');
    const [pokemonSpriteBack, setPokemonSpriteBack] = useState('');
    const [pokemonWeight, setPokemonWeight] = useState('');
    const [pokemonHeight, setPokemonHeight] = useState('')
    const [pokemonStats, setPokemonStats] = useState('')
    const [pokemonType, setPokemonType] = useState([])
    const [pokemonIndex, setPokemonIndex] = useState('')
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchPokemon() {
            setError('')

            try {
                const {data} = await axios.get(pokemonUrl);
                setPokemonName(data.name);
                setPokemonSprite(data.sprites.front_default);
                setPokemonSpriteFront(data.sprites.front_default);
                setPokemonSpriteBack(data.sprites.back_default);
                setPokemonWeight(data.weight);
                setPokemonHeight(data.height);
                setPokemonStats(data.stats)
                setPokemonType(data.types);
                setPokemonIndex(data.id);
            } catch (error) {
                console.error(error);
                setError(`Something went wrong retrieving the Pokemon.`);
            }
        }

        fetchPokemon();
    }, [pokemonUrl])

    return (
        <>
            {error &&
            <div className="error-container">
                <h5 className="poke-index">No: ???</h5>
                <h2 className="poke-name">MISSINGNO.</h2>
                <div className="poke-image-container">
                    <img className="poke-image" src={missingNo} alt="missingNo"/>
                </div>
                <p className="error-message">{error}</p>
            </div>
            }
            {!error &&
            <div
                className="poke-container"
                onMouseOver={() => setPokemonSprite(pokemonSpriteBack)}
                onMouseOut={() => setPokemonSprite(pokemonSpriteFront)}
            >
                <h5 className="poke-index">No: {pokemonIndex}</h5>
                <h2 className="poke-name">{pokemonName}</h2>
                <div className="poke-image-container">
                    <img className="poke-image" src={pokemonSprite} alt={pokemonName}/>
                </div>
                <img id="poke-image-loader" src={pokemonSpriteBack} alt={pokemonName}/>
                <div className="poke-stats-container">
                    <div className="poke-stats-group">
                        <p className="poke-stats-item">Weight:</p>
                        <p className="poke-stats-item">{pokemonWeight}</p>
                    </div>
                    <div className="poke-stats-group">
                        <p className="poke-stats-item">Height:</p>
                        <p className="poke-stats-item">{pokemonHeight}</p>
                    </div>
                </div>
                <div className="poke-stats-container">
                    {pokemonStats && pokemonStats.map((stats) => {
                        return (

                            <div className="poke-stats-group" key={stats.stat.name}>
                                <p className="poke-stats-item">{stats.stat.name}</p>
                                <p className="poke-stats-item">{stats.base_stat}</p>
                            </div>

                        )
                    })}
                </div>
                <div className="poke-type-container">
                    {pokemonType && pokemonType.map((types) => {
                        return (
                            <p className="poke-type-item" id={types.type.name}
                               key={types.type.name}>{types.type.name}</p>)
                    })}
                </div>
            </div>
            }

        </>
    )

}

export default Pokemon;