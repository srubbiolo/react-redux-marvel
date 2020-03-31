import React from 'react';
import Card from 'react-bootstrap/Card';

const FlagItem = ({ text, available }) => {
  return (
    <Card.Text>
      {text} {(available > 0) ?  <span role="img" aria-label="yes">&#9989;</span> : <span role="img" aria-label="yes">&#10060;</span>}
    </Card.Text>
  )
}

export default FlagItem;