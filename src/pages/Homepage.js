import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Pokemon from '../components/Pokemon';
import Loader from '../components/Loader';
import './Pokemon.scss'
import Pagination from './Pagination';
import GlobalContext from '../components/GlobalContext';

const Homepage = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true)
    const {search} = useContext(GlobalContext)
    let filterPokemon = pokemon.filter(el => el.data.name.includes(search))


    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i = 1; i <= 151; i ++){
            pokemonArray.push(await getPokemonData(i));
        }
        setPokemon(pokemonArray);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemonList();
        //eslint-disable-next-line
    }, [])


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = pokemon.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div style={{paddingTop:'80px'}}>
        {loading ? (
            <Loader/>
        ) : (
            <Row>
                {filterPokemon.map(p =>(
                    <Col className='hover' key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Pokemon pokemon={p.data}/>
                    </Col>
                ))}
            </Row>
        )}
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={pokemon.length}
        paginate={paginate}
      />
        </div>
    )
}

export default Homepage
