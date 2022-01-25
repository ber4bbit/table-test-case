import React from 'react';

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

import Pagination from "../PaginationComponents/Pagination";

export default function BasicTable({elements, elementsPerPage, elementsQuantity, nextPage, prevPage, paginate}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '90%',
            marginRight: '4%'
        }}>
            <TableContainer sx={{marginRight: '4%'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Дата</TableCell>
                            <TableCell align="right">Название</TableCell>
                            <TableCell align="right">Количество калорий</TableCell>
                            <TableCell align="right">Расстояние в метрах</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            elements.map((element) => (
                                <TableRow key={element.id}>
                                    <TableCell>
                                        {element.date}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.title}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.count}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.distance}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                elementsPerPage={elementsPerPage}
                elementsQuantity={elementsQuantity}
                nextPage={nextPage}
                prevPage={prevPage}
                paginate={paginate}
            />
        </div>
    );
}
