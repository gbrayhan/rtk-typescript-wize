import React from 'react';
import {ImageItem, InfoItem, QuantityInput, RemoveItem, Wrapper, WrapperQuantity} from "./index.styled";
import {ItemCart, modifyQuantityItem, removeFromCart} from "../../features/pokemon/slice";
import {useHistory} from "react-router-dom";
import {Button, Input} from 'rsuite'
import {useDispatch} from "react-redux";

interface Props {
    itemCart: ItemCart;
}

function ItemCartPokemon(props: Props) {
    const dispatch = useDispatch();

    const history = useHistory();
    const handleRoute = (route: string) => {
        history.push(route);
    };

    const {itemCart} = props;
    return (
        <Wrapper>
            <ImageItem src={itemCart.pokemon?.sprites.other.dream_world.front_default}
                       onClick={() => handleRoute(`/pokemon/show/${itemCart.pokemon?.name}`)}/>
            <InfoItem>
                <h4 onClick={() => handleRoute(`/pokemon/show/${itemCart.pokemon?.name}`)}>{itemCart.pokemon?.name}</h4>
                <WrapperQuantity>
                    <strong>Quantity: </strong>
                    <QuantityInput>
                        <Input value={itemCart.quantity}
                               onChange={(value: any) => {
                                   typeof parseInt(String(value)) !== 'number' || value === "" ? dispatch(modifyQuantityItem({
                                       quantity: 0,
                                       name: itemCart.pokemon?.name
                                   })) : dispatch(modifyQuantityItem({
                                       quantity: parseInt(String(value)),
                                       name: itemCart.pokemon?.name
                                   }));
                               }}/>
                    </QuantityInput>
                </WrapperQuantity>
                <RemoveItem>
                    <Button color="red" appearance="primary" onClick={() => {
                        dispatch(removeFromCart(itemCart.pokemon?.name))
                    }}>Remove</Button>

                </RemoveItem>
            </InfoItem>
        </Wrapper>
    );
}

export default ItemCartPokemon;
