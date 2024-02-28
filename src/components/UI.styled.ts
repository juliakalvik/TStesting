import styled from "styled-components";

export const Base = styled.button`
background: grey;
min-width: 100px;
min-height: 25px;
border: 1px solid grey;
border-radius: 10px;

&:hover {
    bakground: black;
    cursor: pointer;
}

`;

/*${(props) =>
    props.size === "small" &&
    `
    min-height: 120px`
};*/

export const Primary = styled(Base)`
background-color: blue;
`;

export const Danger = styled(Base)`
background-color: blue;
`;