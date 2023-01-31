import React from 'react';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import './App.css';
import { FieldSheet } from './components/FieldSheet/FieldSheet';
import { useAppDispatch, useAppSelector } from './hooks/storeHooks';
import { fetchField } from './store/action_creators/fieldActions';

export const App = () => {
  const fieldName = 'Северное';
  const dispatch = useAppDispatch();
  const { error, loading, daysDynamic } = useAppSelector(
    (state) => state.field
  );

  const onFetchSheet: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(fetchField(fieldName));
  };

  return (
    <div className="App">
      <h1>Modeltech test by Semen Stepanov</h1>
      <Button
        label="Fetch sheet"
        aria-label="fetch sheet"
        onClick={onFetchSheet}
      />
      {error && <Message severity="error" text={error} />}
      <FieldSheet info={daysDynamic} fieldName={fieldName} loading={loading} />
    </div>
  );
};
