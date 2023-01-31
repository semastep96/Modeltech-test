import React, { useEffect } from 'react';
import { Button } from 'primereact/button';
import "./App.css";

export const App = () => {
  useEffect(() => {
    fetch('/api/dynamic/North').then(res => res.json()).then(console.log);
  });
  
  return (
    <div className='App'>
      <h1>Modeltech test by Semen Stepanov</h1>
      <Button label='Fetch sheet' aria-label="show" />
    </div>
  );
};
