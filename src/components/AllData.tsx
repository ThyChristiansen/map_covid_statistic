import React from "react";

export const AllData = (props: any) => {
  const { selectValue, data } = props;

  let displayData;
  if (selectValue === "Cases" || selectValue === "Country") {
    return (displayData = <div>{data.cases.toLocaleString()}</div>);
  } else if (selectValue === "Deaths") {
    return (displayData = <div>{data.deaths.toLocaleString()}</div>);
  } else if (selectValue === "Recovered") {
    return (displayData = <div>{data.recovered.toLocaleString()}</div>);
  }

  return <div>{displayData}</div>;
};
