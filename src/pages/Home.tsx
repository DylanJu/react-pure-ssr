import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { increase, decrease } from '@actions/counterAction';

function Home() {
  const number = useSelector((state: any) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      My Home
      <h3 style={{ color: 'black' }}>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
      <div>counter: {number}</div>
      <button type="button" onClick={() => dispatch(increase())}>
        increase
      </button>
      <button type="button" onClick={() => dispatch(decrease())}>
        decrease
      </button>
    </div>
  );
}

export default Home;
