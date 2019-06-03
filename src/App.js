import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import photosList from './data/photos.json';
import albumsList from './data/albums.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './custom.scss';

const Photo = (props) => {
  console.log("Props", props);
  return (
    <div className="photo_row">
      <div className="photo_title">{props.photo.title}</div>
      <div className="photo_image"><img alt={props.photo.title} src={props.photo.url} /></div>
    </div>
  );
}

const PhotoCarousel = (props) => {
  console.log("Props", props);
  return (
    <div className="photo_carousel">
      <div className="photo_title_carousel">{props.photo.title}</div>
      <div className="photo_image_carousel"><img alt={props.photo.title} src={props.photo.url} /></div>
    </div>
  );
}

const Album = (props) => {
  console.log("Props", props);
  return (
    <Row className="album">
      <Col>
        <div className="album_title"><span className="album_number">Album # {props.album.id}</span> - {props.album.title}</div>
        <div className="photos_album">
          {props.thePhotos.slice(0, 4).map(photo => {
            return (
              <Photo photo={photo} key={photo.id} />
            );
          })}
        </div>
      </Col>
    </Row>
  );
}

function App() {

  const [albums] = useState(albumsList);
  const [photos] = useState(photosList);
  //console.log(albums);
  //console.log(photos);
  return (
    <Container className="App">
      <Row>
        <Col>
          <h1>First APP with ReactJS - React Bootstrap</h1>
          <h2>Card React Bootstrap component</h2>

          <br /><br />
          <h1>First APP with React - Gallery</h1>

          <Carousel>

            {photos.slice(0, 3).map(photo =>  {

              return (
                <Carousel.Item>
                  <PhotoCarousel photo={photo} key={photo.id} />
                  <Carousel.Caption>
                    <h3 className="photo_title_carousel">{photo.title}</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );

            })}

          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
