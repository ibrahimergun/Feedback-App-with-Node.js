import React from 'react';

function Card(props) {
  return (
    // <div className={`card ${props.reverse && 'reverse'}`}>{props.children}</div>

    <div
      className='card'
      style={{
        backgroundColor: props.reverse ? 'rgba(0, 0, 0, 0.4)' : '#fff',
        color: props.reverse ? '#fff' : '#000',
      }}
    >
      {props.children}{' '}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

export default Card;
