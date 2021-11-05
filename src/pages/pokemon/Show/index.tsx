import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {addToCart, fetchByName, resetCurrent, selectCurrent} from '../../../features/pokemon/slice'
import {
    AddToCart,
    CardPokemon,
    ImageCard,
    InformationCard,
    ItemInformation,
    QuantityCart,
    TitleCard,
    Wrapper
} from "./index.styled";
import {Button, Input, Notification, toaster} from 'rsuite'

interface Props {
    match: {
        params: {
            name: string
        }
    }
}

function ShowPokemonPage({match: {params: {name}}}: Props) {
    const [quantity, setQuantity] = useState(1);
    const message = (
        <Notification type="success" header="success" closable>
            <h5>Pokemon successfully added to cart</h5>
        </Notification>
    );

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
                <InformationCard>
                    <ItemInformation>
                        <strong>Height:</strong> {currentPokemon?.height}
                    </ItemInformation>
                    <ItemInformation>
                        <strong>Weight:</strong> {currentPokemon?.weight}
                    </ItemInformation>
                    <ItemInformation>
                        <strong>Experience:</strong> {currentPokemon?.weight}
                    </ItemInformation>
                    <ItemInformation>
                        <strong>Order:</strong> {currentPokemon?.order}
                    </ItemInformation>
                </InformationCard>
                <AddToCart>
                    <label>Quantity: </label>
                    <QuantityCart>
                        <Input value={quantity}
                               onChange={(value: any) => {
                                   typeof parseInt(String(value)) !== 'number' || value === "" ? setQuantity(0) : setQuantity(parseInt(String(value)));
                               }}
                               size="sm"/>
                    </QuantityCart>
                    <Button type="button" onClick={() => {
                        if(quantity === 0) {
                            return
                        }
                        dispatch(addToCart(quantity));
                        toaster.push(message, {placement: "topEnd"});
                        setQuantity(1);
                    }}>Add to cart</Button>
                </AddToCart>
            </CardPokemon>
        </Wrapper>
    );
}

export default ShowPokemonPage;
