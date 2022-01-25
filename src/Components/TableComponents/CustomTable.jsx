import React, {useState} from 'react';

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import {Button, TextField} from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import BasicTable from "./BasicTable";

const CustomTable = ({elements, isSorted, setSorted, elementsPerPage, elementsQuantity, nextPage, prevPage, paginate}) => {
    const [isOpenTitleColumn, setOpenTitleColumn] = useState(false);
    const [isOpenCountColumn, setOpenCountColumn] = useState(false);
    const [isOpenDistanceColumn, setOpenDistanceColumn] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [conditionValue, setConditionValue] = useState('')

    const handleClickTitleColumn = () => setOpenTitleColumn(!isOpenTitleColumn);
    const handleClickCountColumn = () => setOpenCountColumn(!isOpenCountColumn);
    const handleClickDistanceColumn = () => setOpenDistanceColumn(!isOpenDistanceColumn);

    const handleChangeInputVale = event => setInputValue(event.target.value);

    const handleChangeConditionValue = event => setConditionValue(event.target.value);

    if (isSorted === 'distance') {
        let tempArr = []
        if (conditionValue === 'increase') {
            elements.map(element => {
                if (element.distance > inputValue) tempArr.push(element);
            })
            elements = tempArr.slice()
        }
        if (conditionValue === 'decrease') {
            elements.map(element => {
                if (element.distance < inputValue) tempArr.push(element);
            })
            elements = tempArr.slice()
        }
        if (conditionValue === 'includes') {
            elements.map(element => {
                if (element.distance === Number(inputValue)) tempArr.push(element);
            })
            elements = tempArr.slice();
        }
    }
    if (isSorted === 'count') {
        let tempArr = []
        if (conditionValue === 'increase') {
            elements.map(element => {
                if (element.count > inputValue) tempArr.push(element);
            })
            elements = tempArr.slice()
        }
        if (conditionValue === 'decrease') {
            elements.map(element => {
                if (element.count < inputValue) tempArr.push(element);
            })
            elements = tempArr.slice()
        }
        if (conditionValue === 'includes') {
            elements.map(element => {
                if (element.count === Number(inputValue)) tempArr.push(element);
            })
            elements = tempArr.slice();
        }
    }
    if (isSorted === 'title') {
        let tempArr = [];
        if (conditionValue === 'increase') {
            elements.map(element => {
                if (element.title.length > inputValue) tempArr.push(element);
            })
            elements = tempArr.slice();
        }
        if (conditionValue === 'decrease') {
            elements.map(element => {
                if (element.title.length < inputValue) tempArr.push(element);
            })
            elements = tempArr.slice();
        }
        if (conditionValue === 'includes') {
            elements.map(element => {
                if (element.title.toLowerCase() === inputValue.toLowerCase()) tempArr.push(element);
            })
            elements = tempArr.slice();
        }
    }

    return (
        <div style={{display: 'flex'}}>
            <List sx={{width: '20%', borderRight: 'solid 1px gray', marginRight: '4%'}} subheader={
                <ListSubheader component="div">Отсортировать таблицу по</ListSubheader>
            }>
                <ListItemButton onClick={handleClickTitleColumn}>
                    <ListItemText primary="Названию"/>
                    {isOpenTitleColumn ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={isOpenTitleColumn} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{paddingLeft: "10%", display: "flex", flexDirection: "column"}}>
                            <ListItemText primary="Условие"/>
                            <FormControl>
                                <RadioGroup name="condition-group" value={conditionValue} onChange={handleChangeConditionValue}>
                                    <FormControlLabel value="increase" control={<Radio color="success"/>} label="Длина строки больше введенного числа"/>
                                    <FormControlLabel value="decrease" control={<Radio color="success"/>} label="Длина строки меньше введенного числа"/>
                                    <FormControlLabel value="includes" control={<Radio color="success"/>} label="Содержит введенное слово"/>
                                </RadioGroup>
                            </FormControl>
                            <TextField label="Введите слово" sx={{marginTop: '24px', fontSize: '12px'}} value={inputValue} onChange={handleChangeInputVale}/>
                            <Button color="success" variant="contained" onClick={() => setSorted('title')} sx={{fontSize: "12px"}}>Sort column</Button>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton onClick={handleClickCountColumn}>
                    <ListItemText primary="Количеству"/>
                    {isOpenCountColumn ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={isOpenCountColumn} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{paddingLeft: "10%", display: "flex", flexDirection: "column"}}>
                            <ListItemText primary="Условие"/>
                            <FormControl>
                                <RadioGroup name="condition-group" value={conditionValue} onChange={handleChangeConditionValue}>
                                    <FormControlLabel value="increase" control={<Radio color="success"/>} label="Больше введенного числа"/>
                                    <FormControlLabel value="decrease" control={<Radio color="success"/>} label="Меньше введенного числа"/>
                                    <FormControlLabel value="includes" control={<Radio color="success"/>} label="Содержит введенное число"/>
                                </RadioGroup>
                            </FormControl>
                            <TextField label="Введите число" sx={{marginTop: '24px', fontSize: '12px'}} value={inputValue} onChange={handleChangeInputVale}/>
                            <Button color="success" variant="contained" onClick={() => setSorted('count')} sx={{fontSize: "12px"}}>Sort column</Button>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton onClick={handleClickDistanceColumn}>
                    <ListItemText primary="Расстоянию"/>
                    {isOpenDistanceColumn ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={isOpenDistanceColumn} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{paddingLeft: "10%", display: "flex", flexDirection: "column"}} id="distanceColumn">
                            <ListItemText primary="Условие"/>
                            <FormControl>
                                <RadioGroup name="condition-group" value={conditionValue} onChange={handleChangeConditionValue}>
                                    <FormControlLabel value="increase" control={<Radio color="success"/>} label="Больше введенного числа"/>
                                    <FormControlLabel value="decrease" control={<Radio color="success"/>} label="Меньше введенного числа"/>
                                    <FormControlLabel value="includes" control={<Radio color="success"/>} label="Содержит введенное число"/>
                                </RadioGroup>
                            </FormControl>
                            <TextField label="Введите число" sx={{marginTop: '24px', fontSize: '12px'}} value={inputValue} onChange={handleChangeInputVale}/>
                            <Button color="success" variant="contained" onClick={() => setSorted('distance')} sx={{fontSize: "12px"}}>Sort column</Button>
                        </ListItemButton>
                    </List>
                </Collapse>
                <Button color="success" variant="contained" onClick={() => setSorted('')} sx={{fontSize: "12px", marginTop: "24px", marginLeft: "40%"}}>Reset</Button>
            </List>
            <BasicTable
                elements={elements}
                elementsPerPage={elementsPerPage}
                elementsQuantity={elementsQuantity}
                nextPage={nextPage}
                prevPage={prevPage}
                paginate={paginate}
            />
        </div>
    );
};

export default CustomTable;