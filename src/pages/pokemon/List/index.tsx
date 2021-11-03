import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchById, selectCurrent} from '../../../features/pokemon/slice'

interface Props {
    match: {
        params: {
            id: number
        }
    }
}

function ListPokemonPage({match: {params: {id}}}: Props) {
    const currentPokemon = useSelector(selectCurrent);
    const dispatch = useDispatch();

    useEffect(() => {
        const getPokemon = async () => {
            await dispatch(fetchById(id));
        };
        getPokemon().then(r => {
        });
    }, [dispatch, id]);

    return (
        <div>
            Show Pokemon:
            <div>
                Name: {currentPokemon?.name}
            </div>
        </div>
    );
}

export default ListPokemonPage;
