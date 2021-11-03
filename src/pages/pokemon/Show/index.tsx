import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {fetchById} from '../../../features/pokemon/slice'

function ShowPokemonPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        const getPokemon = async () => {
            await dispatch(fetchById(1));
        };
        getPokemon().then(r => {
        });
    }, [dispatch]);


    return (
        <div>
            Show Pokemon
        </div>
    );
}

export default ShowPokemonPage;
