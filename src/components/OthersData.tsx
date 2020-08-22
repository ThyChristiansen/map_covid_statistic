import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AllData } from './AllData';
import { Data } from './actions/DataCovid';
import { ActionTypes } from './actions/types';
import { Dispatch } from 'redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {Test} from './test'

interface IState {
  selectValue: string;
}

interface Column {
  id: 'country' | 'cases' | 'deaths' | 'revovered';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export interface FetchLocationAction {
  type: ActionTypes.fetchLocation;
  payload: { lat: number; lng: number };
}
export interface ILocation {
  lat: number;
  lng: number;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '70vh',
    borderRadius: '10px',
  },
  paper: {
    width: '100%',
    // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  formControl: {
    width: 150,
    marginBottom: '10px',
  },
});

const OtherDatas = (props: any) => {
  const [selectValue, setValue] = useState<string>('Country');
  const classes = useStyles();

  const handleSort = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setValue(event.target.value as string);
  };

  let sortData = [];
  if (selectValue === 'Country') {
    sortData = props.reduxState.datas.sort((a: any, b: any) =>
      ('' + a.country).localeCompare(b.country)
    );
  } else if (selectValue === 'Cases') {
    sortData = props.reduxState.datas.sort(
      (a: any, b: any) => parseFloat(b.cases) - parseFloat(a.cases)
    );
  } else if (selectValue === 'Deaths') {
    sortData = props.reduxState.datas.sort(
      (a: any, b: any) => parseFloat(b.deaths) - parseFloat(a.deaths)
    );
  } else if (selectValue === 'Recovered') {
    sortData = props.reduxState.datas.sort(
      (a: any, b: any) => parseFloat(b.recovered) - parseFloat(a.recovered)
    );
  }

  const fetchLocation = (x: any) => {
    return async (dispatch: Dispatch) => {
      const response = x;
      console.log(x);

      dispatch<FetchLocationAction>({
        type: ActionTypes.fetchLocation,
        payload: response.data,
      });
    };
  };

  return (
    <div>
      {/* Global cases */}
      <div
        className="total_cases"
        style={{
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
          {props.reduxState.datas
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
          textAlign: 'center',
          borderRadius: '10px',
        }}
      >
        <h3
          style={{
            color: 'gray',
          }}
        >
          Statistics Information COVID-19
        </h3>
        <span>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Sort by:</InputLabel>
            <Select onChange={handleSort} value={selectValue} label="Sort by">
              <MenuItem value="Country">Country</MenuItem>
              <MenuItem value="Cases">Cases</MenuItem>
              <MenuItem value="Deaths">Deaths</MenuItem>
              <MenuItem value="Recovered">Recovered</MenuItem>
            </Select>
          </FormControl>
        </span>
      </div>

      <div
        // className="total_cases"
        style={{
          textAlign: 'center',
          border: '1px solid darkgray',
          backgroundColor: '#2a2f35',
          borderRadius: '10px',
          color: '#fff',
        }}
      >
        <Paper className={classes.paper}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Country</TableCell>
                  <TableCell>
                    {selectValue === 'Country' ? 'Cases' : selectValue}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortData.map((data: Data) => {
                  return (
                    <>
                      <TableRow>
                        <TableCell
                          onClick={() =>
                            Test({
                              lat: data.countryInfo.lat,
                              lng: data.countryInfo.long,
                            })
                          }
                        >
                          {data.country}
                        </TableCell>
                        <TableCell>
                          <AllData data={data} selectValue={selectValue} />
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

const putReduxStateOnState = (reduxState: any) => ({ reduxState });

export default connect(putReduxStateOnState)(OtherDatas);
