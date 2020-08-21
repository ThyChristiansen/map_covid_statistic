import React, { useState } from 'react';
// import { CasesNumber } from './SortData/CasesNumber';
import { Data } from './actions/DataCovid';
// import {Data} from './Apps/App'

interface IState {
  selectValue: string;
}
const OtherDatas = (props: any) => {
  const { listData } = props;
  const [selectValue, setValue] = useState<string>('');

  // listData.sort((a: any, b: any) => parseFloat(b.cases) - parseFloat(a.cases));

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(event.target.value);
  };

  let sortData = [];
  if (selectValue === 'country') {
    sortData = listData.sort((a: any, b: any) =>
      ('' + a.country).localeCompare(b.country)
    );
  } else if (selectValue === 'cases') {
    sortData = listData.sort(
      (a: any, b: any) => parseFloat(b.cases) - parseFloat(a.cases)
    );
  } else if (selectValue === 'deaths') {
    sortData = listData.sort(
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

      <div
        style={{
          position: 'absolute',
          right: '100px',
          top: '120px',
          textAlign: 'center',
          borderRadius: '10px',
        }}
      >
        <p>Sort by: </p>
        <select onChange={handleSort}>
          <option value="country">Country</option>
          <option value="cases">Cases</option>
          <option value="deaths">Deaths</option>
        </select>
      </div>
      
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
