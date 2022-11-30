import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Pokemon.scss'

// Components
import Loader from '../components/Loader';

const PokemonPage = ({ match }) => {
    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState(true);

    const id = match.params.id;

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, [])

    return (
        <div className='single-pokemon' style={{paddingTop: '120px'}}>
            {loading ? (
                <Loader/>
            ) : (
                <Row>
                    <Col style={{display:'flex'}} xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Link to={`/pokemon/${pokemonDetails.id}`}>
                            {/* <img style={{ width: '15rem' }} src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} /> */}
                            <img style={{ width: '15rem' }} src={pokemonDetails.sprites.other.dream_world.front_default} alt={pokemonDetails.name} />
                        </Link>
                        <div className='pokemon-details mx-5'>
                            <p>Name: <strong>{pokemonDetails.name}</strong></p>
                            <p>Height: <strong>{pokemonDetails.height} feet</strong></p>
                            <p>Special move: <strong>{pokemonDetails.moves[17].move.name}</strong></p>
                            <p>base_experience: <strong>{pokemonDetails.base_experience}</strong></p>
                        </div>
                    </Col>
                    <Link  to={`/`} style={{width:'100px'}} className={`${pokemonDetails.types[0].type.name} rounded text-white mt-3`}>
                        <strong>GO BACK</strong>
                        </Link>
                </Row>
                // <Row>
                //     <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                //         <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                //             <Link to={`/pokemon/${pokemonDetails.id}`}>
                //                 <Card.Img style={{ width: '15rem' }} src={pokemonDetails.sprites.front_default} variant='top'/>
                //                 <p>{pokemonDetails.name}</p>
                //             </Link>
                            
                //         </Card>
                //     </Col>
                // </Row>
            )}
        </div>
    )
}

export default PokemonPage;
