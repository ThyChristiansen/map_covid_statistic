import React, { useState } from 'react';
// import { CasesNumber } from './SortData/CasesNumber';
import { Data } from './actions/DataCovid';
// import {Data} from './Apps/App'

const OtherDatas = (props: any) => {
  const { listData } = props;
  const [sortBy, setSort] = useState(0);

  // listData.sort((a: any, b: any) => parseFloat(b.cases) - parseFloat(a.cases));

  const handleSortByCase = () => {
    setSort(1);
  };
  const handleSortByDeaths = () => {
    setSort(2);
  };
  const handleSortByCountry = () => {
    setSort(0);
  };

  let sortData=[];
  if (sortBy === 0) {
    sortData=listData.sort(
      (a: any, b: any) => ('' + a.country).localeCompare(b.country)
    );
  }else if (sortBy === 1) {
     sortData=listData.sort(
      (a: any, b: any) => parseFloat(b.cases) - parseFloat(a.cases)
    );
  } else if (sortBy === 2) {
    sortData=listData.sort(
      (a: any, b: any) => parseFloat(b.deaths) - parseFloat(a.deaths)
    );
  }
  

  return (
    <div>
      {/* Global cases */}
      <div
        className="total_cases"
        style={{
          position: 'absolute',
          right: '50px',
          width: '200px',
          height: '120px',
          textAlign: 'center',
          border: '1px solid darkgray',
          backgroundColor: '#2a2f35',
          borderRadius: '10px',
          color: '#fff',
        }}
      >
        <h3>Global cases</h3>
        <h1>
          {listData
            .reduce(
              (accumulator: number, current: any) =>
                accumulator + current.cases,
              0
            )
            .toLocaleString()}
        </h1>
      </div>

      
      <button
        style={{
          position: 'absolute',
          right: '50px',
          top: '170px',
          textAlign: 'center',
          borderRadius: '10px',
        }}
        onClick={handleSortByCase}
      >
        Sort by cases
      </button>
      <button
        style={{
          position: 'absolute',
          right: '150px',
          top: '170px',
          textAlign: 'center',
          borderRadius: '10px',
        }}
        onClick={handleSortByDeaths}
      >
        Sort by Deaths
      </button>
      <button
        style={{
          position: 'absolute',
          right: '150px',
          top: '190px',
          textAlign: 'center',
          borderRadius: '10px',
        }}
        onClick={handleSortByCountry}
      >
        Sort by Country
      </button>

      {/*Sorting data by case */}

      <div
        className="total_cases"
        style={{
          position: 'absolute',
          right: '50px',
          top: '200px',
          width: '200px',
          textAlign: 'center',
          border: '1px solid darkgray',
          backgroundColor: '#2a2f35',
          borderRadius: '10px',
          color: '#fff',
        }}
      >
        {sortData.map((data: any) => {
          return (
            <div>
              Country: {data.country}, Cases: {data.cases}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherDatas;
