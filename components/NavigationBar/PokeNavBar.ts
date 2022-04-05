import styled from "styled-components";

const PokeNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100vw;
  height: 80px;
  background-color: yellow;
  box-shadow: 10px 0 10px 0 black;
  position: relative;
  top: 0;

  ul {
    width: 100%;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    li:first-child {
      width: 140px;
    }

    li {
      display: flex;
      align-items: center;
    }
  }
`;

export default PokeNavBar;
