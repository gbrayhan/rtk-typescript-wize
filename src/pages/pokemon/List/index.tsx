import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchAll, filterPokemon, selectFilteredList} from '../../../features/pokemon/slice'
import CardPokemon from "../../../components/CardPokemon";
import {Search, Wrapper} from "./index.styled";
import {CustomInputGroup} from "../../../components/inputs/CursomInputGroup";


function ListPokemonPage() {
    const filteredListPokemon = useSelector(selectFilteredList);
    const dispatch = useDispatch();

    useEffect(() => {
        const getListPokemon = async () => {
            await dispatch(fetchAll());
        };
        getListPokemon().then(r => {
            dispatch(filterPokemon(""));
        });


    }, [dispatch]);


    return (
        <div>
            <Search>
                <CustomInputGroup
                    size="lg"
                    placeholder="Search Pokemon"
                    onChange={(value: any) => {
                        dispatch(filterPokemon(value));
                    }}/>

            </Search>
            <Wrapper>
                {filteredListPokemon.map(pokemon => (<CardPokemon pokemon={pokemon}></CardPokemon>))}
            </Wrapper>
        </div>
    );
}

export default ListPokemonPage;
