import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { getData, getHero } from "../actions/index";
import HeroesList from "./heroesList";
import SelectedHero from "./selectedHero";

const MarvelHeroesHomePage = ({match}) => {
  const dispatch = useDispatch();
  const API_KEY = 'dc2a4b243b45ff4e2086f56ddc5de8f8';
  const [heroId, ] = useState(match.params.hero);

  useEffect(() => {
    //Deep linking: pre load with selected hero here id's to test
    //1011334 => hero id
    //1009149 => hero id
    if (!!heroId) {
      dispatch(getHero(API_KEY, heroId));
    }
    dispatch(getData(API_KEY));
  })

  //Just displaying two components. The list and the selected hero.
  return <Container>
    <Row className="main-app-row">
      <Col className="header-and-user-list-col col-6">
        <Row>
          <HeroesList/>
        </Row>
      </Col>

      <Col className="show-user-col col-6">
      <SelectedHero/>
      </Col>
    </Row>
</Container>
}

export default MarvelHeroesHomePage;