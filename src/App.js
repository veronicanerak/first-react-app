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
      <div className="album_title"><span className="album_number">Album # {props.album.id}</span> - {props.album.title}</div>
      <div className="photos_album">
        {props.thePhotos.slice(0, 4).map(photo => {
          return (
            <Photo photo={photo} key={photo.id} />
          );
        })}
      </div>
    </div>
  );
}

function App() {

  const [albums] = useState(albumsList);
  const [photos] = useState(photosList);
  //console.log(albums);
  //console.log(photos);
  return (
    <div className="App">
      <h1>First APP with React - Gallery</h1>

      <div className="albums">
        {albums.slice(0, 10).map(album =>  {
          const thePhotos = photos.filter(photo => photo.albumId === album.id);
            return (
              <Album album={album} thePhotos={thePhotos} key={album.id} />
            );
        })}
      </div>
    </div>
  );
}

export default App;
