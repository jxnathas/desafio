import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding:20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 16px;
    max-width: 800px;
    margin: 20px auto;
    word-break; break-all;
`;

export const Thead = styled.thead`

`;
export const Tbody = styled.thead`

`;

export const Tr = styled.tr`

`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};
`;

export const Th = styled.th`
    text-align:start;
    border-bottom: inset;
    padding-bottom: 5px;
`;
