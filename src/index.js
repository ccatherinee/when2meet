// import relevant packages that all react apps need 
import React from 'react';
import ReactDOM from 'react-dom';
// import our table (where the main functionalities lie)
import Table from './Table';


function App() {
  return <Table/>;
}

// render our finished app!
const root = document.getElementById('root');
ReactDOM.render(
    <App />, root
);
