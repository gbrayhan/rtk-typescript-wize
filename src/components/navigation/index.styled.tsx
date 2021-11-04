import styled from "styled-components";
import Home from "@rsuite/icons/legacy/Home";

export const WrapperNav = styled.div`
  font-size: 1.1rem;
`;
export const HomeStyled = ({size}: { size: string }) => <Home style={{fontSize: size, marginRight: 10}}/>;
