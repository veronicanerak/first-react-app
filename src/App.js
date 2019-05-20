import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import photosList from './data/photos.json';
import albumsList from './data/albums.json';

const Photo = (props) => {
  console.log("Props", props);
  return (
    <div className="photo_row">
      <div className="photo_title">{props.photo.title}</div>
      <div className="photo_image"><img alt={props.photo.title} src={props.photo.url} /></div>
    </div>
  );
}

const Album = (props) => {
  console.log("Props", props);
  return (
    <div className="album">
      <div className="album_title">{props.album.title}</div>

    </div>
  );
}

function App() {

  const [albums] = useState(albumsList);
  const [photos] = useState(photosList);
  console.log(albums);
  console.log(photos);
  return (
    <div className="App">
        <h1>First APP with react</h1>
      {albums.slice(0, 10).map(item =>  {
        const thePhotos = photos.filter(photo => photo.albumId === item.id);
        return <Album album={item} thePhotos={thePhotos} key={item.id} />;
      })}
    </div>
  );
}

export default App;
