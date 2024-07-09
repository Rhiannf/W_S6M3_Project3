import React from 'react';
import Figure from './Figures'; //Figure component is defined elsewhere

export default function Card({ title, text, imageURL, date }) {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <figure>
        <img src={imageURL} alt={title} />
        <figcaption>{date}</figcaption>
      </figure>
    </div>
  );
}