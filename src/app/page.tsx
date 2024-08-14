'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../app/store/store';
import { increment, decrement, undoAction, redoAction } from '../app/actions/actions';
import {fetchDataRequest} from '../app/actions/actionsType'

const Page: React.FC = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: AppState) => state.counter.present);
  const canUndo = useSelector((state: AppState) => state.counter.past.length > 0);
  const canRedo = useSelector((state: AppState) => state.counter.future.length > 0);
  const { data, loading, error } = useSelector((state: AppState) => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleUndo = () => dispatch(undoAction());
  const handleRedo = () => dispatch(redoAction());

  return (
    <div style={{textAlign:"center"}}>
      <h1>Undo/Redo with Redux Saga</h1>
      <p>Count: {count}</p>
      <button style={{marginRight:"20px"}} onClick={handleIncrement}>Increment</button>
      <button style={{marginRight:"20px"}} onClick={handleDecrement}>Decrement</button>
      <button style={{marginRight:"20px"}} onClick={handleUndo} disabled={!canUndo}>
        Undo
      </button>
      <button onClick={handleRedo} disabled={!canRedo}>
        Redo
      </button>

      <h1 style={{marginTop:"100px"}}>Fetched Data with redux saga</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
