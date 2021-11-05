import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {emptyCart, selectCart} from '../../../features/pokemon/slice'
import ItemCartPokemon from "../../../components/ItemCart";
import {Header, RemoveAll, Title, Wrapper} from "./index.styled";
import {Button} from 'rsuite'


function CartPokemonPage() {
    const cartPokemon = useSelector(selectCart);
    const dispatch = useDispatch();

    return (
        <div>
            <Header>
                <Title>Cart Pokemon</Title>
                <RemoveAll><Button type='button' color="yellow" appearance="primary" onClick={() => {
                    dispatch(emptyCart())
                }}>Empty Cart</Button></RemoveAll>

            </Header>
            <Wrapper>
                {cartPokemon.map(item => (<ItemCartPokemon itemCart={item}></ItemCartPokemon>))}
            </Wrapper>
        </div>
    );
}

export default CartPokemonPage;
