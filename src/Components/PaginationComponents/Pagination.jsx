import React from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from "@mui/material";

import './Pagination.css'


export default function Pagination({elementsPerPage, elementsQuantity, paginate, nextPage, prevPage}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(elementsQuantity / elementsPerPage); i++) pageNumbers.push(i);

    return (
        <div style={{maxWidth: "90%", marginLeft: "2%"}}>
            <ul className="styledPaginationContainer">
                <IconButton onClick={prevPage} size="small" sx={{marginTop: "-2px"}}>
                    <ArrowBackIosIcon fontSize="inherit"/>
                </IconButton>
                { pageNumbers.map(number => (
                        <li key={number} className="styledPaginationContainer-item">
                            <a href="!#" onClick={() => paginate(number)}>{number}</a>
                        </li>
                    )) }
                <IconButton onClick={nextPage} size="small" sx={{marginTop: "-2px"}}>
                    <ArrowForwardIosIcon fontSize="inherit"/>
                </IconButton>
            </ul>
        </div>
    );
}