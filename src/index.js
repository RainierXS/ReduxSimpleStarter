import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAjcW2-Lb-HzB7MfdSz7DiFsQ0YWgid2nQ';

//Create a component. Should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//insert generated html into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
