import React, { useState } from 'react';
import { AllData } from './AllData';

interface IState {
  selectValue: string;
}
const OtherDatas = (props: any) => {
  const { listData } = props;
  const [selectValue, setValue] = useState<string>('Country');

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(event.target.value);
  };

  let sortData = [];
  if (selectValue === 'Country') {
    sortData = listData.sort((a: any, b: any) =>
      ('' + a.country).localeCompare(b.country)
    );
  } else if (selectValue === 'Cases') {
    sortData = listData.sort(
      (a: any, b: any) => parseFloat(b.cases) - parseFloat(a.cases)
    );
  } else if (selectValue === 'Deaths') {
    sortData = listData.sort(
      (a: any, b: any) => parseFloat(b.deaths) - parseFloat(a.deaths)
    );
  } else if (selectValue === 'Recovered') {
    sortData = listData.sort(
      (a: any, b: any) => parseFloat(b.recovered) - parseFloat(a.recovered)
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
        <h3
          style={{
            color: 'gray',
          }}
        >
          Sort by:{' '}
        </h3>
        <span>
          <select onChange={handleSort}>
            <option value="Country">Country</option>
            <option value="Cases">Cases</option>
            <option value="Deaths">Deaths</option>
            <option value="Recovered">Recovered</option>
          </select>
        </span>
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
        <table style={{ width: '100%', textAlign: 'center' }}>
          <tr>
            <th>Country</th>
            <th>{selectValue === 'Country' ? 'Cases' : selectValue}</th>
          </tr>
          {sortData.map((data: any) => {
            return (
              <>
                <tr>
                  <td>{data.country}</td>
                  <td>
                    <AllData data={data} selectValue={selectValue} />
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default OtherDatas;
