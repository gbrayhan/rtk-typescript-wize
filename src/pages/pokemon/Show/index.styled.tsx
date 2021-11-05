import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardPokemon = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
  margin: 1rem;
  height: 35rem;
  width: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleCard = styled.h2`
  font-size: 2rem;
  color: #252525;
  text-align: center;
  text-transform: uppercase;
`
export const ImageCard = styled.img`
  height: 18rem;
  max-width: 25rem;
  margin: 0 auto;
`

export const InformationCard = styled.div`
  width: 70%;
  margin: 2rem auto 0 auto;
  display: flex;
  flexDirection: row;
  flex-wrap: wrap;
  font-size: 1rem;
  background-color: rgba(190, 189, 189, 0.29);
  border-radius: 10px;
  padding: .5rem 1rem;
`

export const ItemInformation = styled.div`
  min-width: 45%;
  text-align: justify-all;
  margin: 0 auto;
`


export const AddToCart = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 20rem;
  margin: 1rem auto;
  align-items: center;

`

export const QuantityCart = styled.div`
  width: 4rem;
  margin: 0 1rem;
`
