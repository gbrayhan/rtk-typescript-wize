import styled from "styled-components";


export const Wrapper = styled.div`
  background-color: rgba(169, 169, 169, 0.5);
  width: 40rem;
  padding: 1.5rem;
  color: #ffffff;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0 auto 2rem auto;
  border-radius: .3rem;
  height: 10rem;
  display: flex;
  flex-direction: row;
`;



export const RemoveItem = styled.div`
    width: 2rem;
  margin-top: .4rem;
`

export const WrapperQuantity = styled.div`
  font-size:1.2rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-transform: none;
`


export const QuantityInput = styled.div`
  width: 4rem;
  margin: 0 0.5rem;
`


export const ImageItem = styled.img`
  max-height: 7rem;
  width: 10rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  h4 {
    &:hover {
      color: #EF534F;
      cursor: pointer;
    }
    
  }
`
