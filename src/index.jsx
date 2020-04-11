import React from 'react';
import ReactDOM from 'react-dom';
import TestPage from './pages/TestPage/TestPage';

ReactDOM.render(<TestPage />, document.getElementById('root'));

console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
