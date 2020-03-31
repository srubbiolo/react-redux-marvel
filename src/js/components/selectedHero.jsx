import React from 'react';
import { useSelector } from 'react-redux';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const SelectedHero = () => {

  const selectedHero = useSelector(state => state.selectedHero);

  return ( !(Object.keys(selectedHero).length === 0) ? <Card style={{ width: '30rem', marginTop: '10px' }}>
    <Card.Img variant="top" src={`${selectedHero.thumbnail.path}/landscape_incredible.${selectedHero.thumbnail.extension}`} />
    <Card.Body>
      <Card.Title>{selectedHero.name}</Card.Title>
      <Card.Text>{selectedHero.description || 'No description available for this Hero   :('}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      {selectedHero.urls.map((link, index) => (
        <ListGroupItem key={index}>
          <Card.Link href={link.url} target="_blank">{{detail: "Details of hero", wiki: "Wiki of hero", comiclink: "Comic link"}[link.type]}</Card.Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  </Card> : <h4>No hero selected!</h4>
  )
}

export default SelectedHero;