import {Paper} from '@mantine/core';
import React from 'react';
import './App.css';
import {Card} from "./components/card/Card";

export const App = () => {
  return (
      <Paper className="layout">
          <div className="body">
          <Card/>
          </div>
          {/*<Button mt='xs'>Hola</Button>*/}
      </Paper>
  );
}
