import React from 'react';
import * as ReactDOM from 'react-dom';
import {TestThing} from './Test';

const root = ReactDOM.render(<React.StrictMode>
  <TestThing />
</React.StrictMode>,document.getElementById('root'));