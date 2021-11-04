import React from 'react';
import {Wrapper} from "./index.styled";
import {Pokemon} from "../../features/pokemon/slice";
import {useHistory} from "react-router-dom";

interface Props {
    pokemon: Pokemon;
}

function CardPokemon(props: Props) {
    const history = useHistory();
    const handleRoute = (route: string) => {
        history.push(route);
    };

    const {pokemon} = props;
    return (
        <Wrapper onClick={() => handleRoute(`/pokemon/show/${pokemon.name}`)}>
            <p>{pokemon.name}</p>
        </Wrapper>
    );
}

export default CardPokemon;
