import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import './App.css';
import { FieldSheet } from './components/FieldSheet/FieldSheet';
import { API } from './api/api';

export const App = () => {
  const fieldName = 'Северное';
  const [info, setInfo] = useState<DayDynamic[] | undefined>(undefined);

  useEffect(() => {
    API.fetchFieldData(fieldName).then((response) => setInfo(response));
  }, []);

  return (
    <div className="App">
      <h1>Modeltech test by Semen Stepanov</h1>
      <Button label="Fetch sheet" aria-label="fetch sheet" />
      <FieldSheet info={info} fieldName={fieldName} />
    </div>
  );
};
