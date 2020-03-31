import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import { setHero } from '../actions';
import FlagItem from './flagItem';

const HeroesList = () => {
  const allHeroes = useSelector(state => state.allHeroes);
  const dispatch = useDispatch();

  const heroClicked = (hero) => {
    dispatch(setHero({ hero }));
  }

  return (
    allHeroes.map(hero => (
      <Card style={{ width: '16rem', margin: '10px', cursor: 'pointer' }} key={hero.id} onClick={() => heroClicked(hero)}>
        <Card.Img variant="top" src={`${hero.thumbnail.path}/landscape_xlarge.${hero.thumbnail.extension}`} />
        <Card.Body>
          <Card.Title>{hero.name}</Card.Title>
          <FlagItem text="Appears on any comis?" available={hero.comics.available}></FlagItem>
          <FlagItem text="Appears on series?" available={hero.series.available}></FlagItem>
          <FlagItem text="Appears on stories?" available={hero.stories.available}></FlagItem>
          <FlagItem text="Appears on events?" available={hero.events.available}></FlagItem>
        </Card.Body>
      </Card>
    ))
  )
}

export default HeroesList;