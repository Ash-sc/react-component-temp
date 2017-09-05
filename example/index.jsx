import React from 'react';
import { render } from 'react-dom';

import EgComponent from '../src/index';
import './index.html';

render(
  <div className="root-bg">
    <EgComponent />
  </div>,
  document.getElementById('app')
);

