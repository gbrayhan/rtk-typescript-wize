import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchByName, resetCurrent, selectCurrent} from '../../../features/pokemon/slice'
import {CardPokemon, ImageCard, TitleCard, Wrapper} from "./index.styled";

interface Props {
    match: {
        params: {
            name: string
        }
    }
}


function ShowPokemonPage({match: {params: {name}}}: Props) {
    const currentPokemon = useSelector(selectCurrent);
    const dispatch = useDispatch();

    useEffect(() => {
        const getPokemon = async () => {
            await dispatch(fetchByName(name));
        };
        getPokemon().then(r => {
        });
        return (() => {
            dispatch(resetCurrent())
        })
    }, [dispatch, name]);

    return (
        <Wrapper>
            <CardPokemon>
                <TitleCard>
                    {currentPokemon?.name}
                </TitleCard>
                <ImageCard src={currentPokemon?.sprites.other.dream_world.front_default}/>
            </CardPokemon>
        </Wrapper>
    );
}

export default ShowPokemonPage;
