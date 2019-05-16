import React from 'react';
//import logo from './logo.svg';
import './App.css';
import photos_list from './data/photos.json';
const Photo = (props) => {
  console.log("Props", props);
  return (
    <div className="photo_row">
      <div className="photo_title">{props.photo.title}</div>
      <div className="photo_image"><img alt={props.photo.title} src={props.photo.url} /></div>
    </div>
  );
}

function App() {
  const first_variable = "Gallery Example";
  console.log(photos_list);
  return (
    <div className="App">
        <h1>First APP with react</h1>
        <h2>{ first_variable }</h2>
        <div className="photos_list">
          {photos_list.slice(0, 10).map(item =>  { 
            return <Photo photo={item} key={item.id} />;
           })}
        </div>
    </div>
  );
}

export default App;
