import React, {useEffect, useState} from "react";

import axios from "axios";
import CustomTable from "./Components/TableComponents/CustomTable";

export default function App() {
  const activityData = [
    {id: 1, date: '01.01.2022', title: 'Спринт', count: 1200, distance: 21000},
    {id: 2, date: '03.01.2022', title: 'Пробежка', count: 120, distance: 1500},
    {id: 3, date: '03.01.2022', title: 'Спортивная ходьба', count: 160, distance: 2000},
    {id: 4, date: '05.01.2022', title: 'Легкий бег', count: 320, distance: 4000},
    {id: 5, date: '06.01.2022', title: 'Спринт', count: 500, distance: 7000},
    {id: 6, date: '06.01.2022', title: 'Ходьба', count: 30, distance: 500},
    {id: 7, date: '08.01.2022', title: 'Пробежка', count: 140, distance: 1750},
    {id: 8, date: '10.01.2022', title: 'Длительная ходьба', count: 950, distance: 15000},
    {id: 9, date: '11.01.2022', title: 'Пробежка', count: 240, distance: 3000},
    {id: 10, date: '12.01.2022', title: 'Спринт', count: 750, distance: 12000},
    {id: 11, date: '14.01.2022', title: 'Ходьба', count: 50, distance: 750},
    {id: 12, date: '14.01.2022', title: 'Легкий бег', count: 150, distance: 1950},
    {id: 13, date: '15.01.2022', title: 'Длительная ходьба', count: 890, distance: 14500},
    {id: 14, date: '17.01.2022', title: 'Пробежка', count: 550, distance: 5000},
    {id: 15, date: '18.01.2022', title: 'Спортивная ходьба', count: 250, distance: 3500},
    {id: 16, date: '20.01.2022', title: 'Спринт', count: 730, distance: 11500},
    {id: 17, date: '21.01.2022', title: 'Легкий бег', count: 200, distance: 2500},
  ];
  let activities = [];

  activityData.map(element => {
    localStorage.setItem(element.id, JSON.stringify(element))
  });


  for (let i = 1; i <= localStorage.length; i++) {
    activities.push(JSON.parse(localStorage.getItem(i.toString())));
  }


  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(7);
  const [isSorted, setSorted] = useState('');

  const pageNumbers = [];

  const lastElementIndex = currentPage * elementsPerPage;
  const firstElementIndex = lastElementIndex - elementsPerPage;
  const currentElement = activities.slice(firstElementIndex, lastElementIndex);

  for (let i = 1; i <= Math.ceil(activities.length / elementsPerPage); i++) pageNumbers.push(i);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage + 1 > pageNumbers.length) setCurrentPage(prev => prev);
    else setCurrentPage(prev => prev + 1);
  }
  const prevPage = () => {
    if (currentPage - 1 === 0) setCurrentPage(prev => prev);
    else setCurrentPage(prev => prev - 1);
  };


  return (
    <div>
      <CustomTable
          elements={currentElement}
          isSorted={isSorted}
          setSorted={setSorted}
          elementsPerPage={elementsPerPage}
          elementsQuantity={activities.length}
          nextPage={nextPage}
          prevPage={prevPage}
          paginate={paginate}
      />
    </div>
  );
}
