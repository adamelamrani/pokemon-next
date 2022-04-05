import styled from "styled-components";

const PokeNavBar = styled.nav`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100vw;
  height: 80px;
  background-color: yellow;
  box-shadow: 10px 0 10px 0 black;
  position: relative;
  top: 0;

  div {
    display: flex;
    align-items: center;
    width: 140px;
  }

  ul {
    width: 100%;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    li {
      display: flex;
      align-items: center;

      a {
        text-decoration: none;
        transition: all ease-in-out 0.3s;
      }

      a:hover {
        font-weight: bolder;
        color: red;
      }
      a:active,
      a:focus {
        color: red;
        font-weight: bolder;
        text-decoration: underline;
      }
    }
  }
`;

export default PokeNavBar;
