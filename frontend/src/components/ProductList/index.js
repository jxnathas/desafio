import * as C from "./styles";
import {FaTrash, FaEdit } from "react-icons/fa";

const ProductList = () => {
    return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th>Nome</C.Th>
                    <C.Th>Descrição</C.Th>
                    <C.Th>Categoria</C.Th>
                    <C.Th>Preço</C.Th>
                    <C.Th>Estoque</C.Th>
                    <C.Th></C.Th>
                    <C.Th></C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                <C.Tr>
                    <C.Td width="30%">Nome</C.Td>
                    <C.Td width="30%">Descrição</C.Td>
                    <C.Td width="30%">Categoria</C.Td>
                    <C.Td width="30%">Preço</C.Td>
                    <C.Td width="30%">Estoque</C.Td>
                    <C.Td alignCenter width="5%"><FaEdit></FaEdit></C.Td>
                    <C.Td alignCenter width="5%"><FaTrash></FaTrash></C.Td>
                </C.Tr>
            </C.Tbody>
        </C.Table>
    );

};

export default ProductList;