import React from 'react';

export const AllData = (props: any) => {
  const { selectValue, data } = props;

  let x; 
  if (selectValue === 'Cases' || selectValue === 'Country') {
    return x=<div>{data.cases.toLocaleString()}</div>;
  } else if (selectValue === 'Deaths') {
    return x=<div>{data.deaths.toLocaleString()}</div>;
  } else if (selectValue === 'Recovered') {
    return x=<div>{data.recovered.toLocaleString()}</div>;
  }

return <div>{x}</div>;
};
