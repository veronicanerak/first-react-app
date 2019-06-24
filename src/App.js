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
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './custom.scss';

const Photo = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [hideModal, setHideModal] = useState(true);
  console.log("Click Props", props);

  const handlePhotoClick = (event) => {
    console.log("The Click", event);
    event.currentTarget.style.backgroundColor = '#ccc';
    setShowModal(true);
    setHideModal(false);
  }

  return (
    <div className="photo_row">
      <div className="photo_title">{props.photo.title}</div>
      <div className="photo_image">
        <Button variant="primary" onClick={handlePhotoClick}>
          <Image src={props.photo.url} alt={props.photo.title} rounded />
        </Button>

        <CustomModal photoTitle={props.photo.title} photoImg={props.photo.url} modalShow={showModal} modalHide={hideModal} />

      </div>
    </div>
  );
}

const PhotoCarousel = (props) => {
  console.log("Props", props);
  return (
    <div className="photo_carousel">
      <div className="photo_title_carousel">{props.photo.title}</div>
      <div className="photo_image_carousel">
        <Image src={props.photo.url} alt={props.photo.title} rounded />
      </div>
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

// Modal Component
const CustomModal = (props) => {
  console.log("Custom Modal Props", props);

  return (
    <Modal show={props.modalShow} onHide={props.modalHide}>
      <Modal.Header closeButton>
        <Modal.Title>{props.photoTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Image src={props.photoImg} roundedCircle />
        <StarsRate stars="2 stars" />

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.modalHide}>
          Close
        </Button>
        <Button variant="primary" onClick={props.modalHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

  );
}

// StarsRate component
const StarsRate = (props) => {
  return (
    <div className="stars-rate">
      Here we will display the stars { props.stars }
    </div>
  );
}

const App = (props) => {

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

            {albums.slice(0, 4).map(album =>  {
              const thePhotos = photos.filter(photo => photo.albumId === album.id);
              return (
                <Carousel.Item>

                  <Album album={album} key={album.id} thePhotos={thePhotos} />
                  <Carousel.Caption>
                    <h3 className="photo_title_carousel">{album.title}</h3>
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
