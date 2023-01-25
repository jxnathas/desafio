import * as C from "./styles";
import {FaTrash, FaEdit } from "react-icons/fa";

const CupomList = () => {
    return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th>Validade</C.Th>
                    <C.Th>Quantidade</C.Th>
                    <C.Th></C.Th>
                    <C.Th></C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                <C.Tr>
                    <C.Td width="30%">Validade</C.Td>
                    <C.Td width="30%">Quantidade</C.Td>
                    <C.Td alignCenter width="5%"><FaEdit></FaEdit></C.Td>
                    <C.Td alignCenter width="5%"><FaTrash></FaTrash></C.Td>
                </C.Tr>
            </C.Tbody>
        </C.Table>
    );

};

export default CupomList;