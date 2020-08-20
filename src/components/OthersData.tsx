import React from 'react';
import { CasesNumber } from './SortData/CasesNumber';
import { Data } from './actions/DataCovid';
// import {Data} from './Apps/App'

const OtherDatas = (props: any) => {
  const { listData } = props;

  // let numbersArray: number[] = listData
  //   .map((data: any) => {
  //     return data.cases;
  //   })
  //   .sort((n1: number, n2: number) => n2 - n1);

  listData.sort((a: any, b: any) => parseFloat(b.cases) - parseFloat(a.cases));

  
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
        // onClick={handleSortByCase}
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
      >
        Sort by country
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
        {listData.map((data: any) => {
          return (
            <div>
              Country: {data.country}, Cases: {data.cases}
            </div>
          );
        })}
      </div>
      {/*Sorting data by country */}
    </div>
  );
};

export default OtherDatas;
