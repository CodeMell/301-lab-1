import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function HornedBeast(props,selectedImg) {
  const[Favorites,Favorited] = useState(0);
  const handlePictureClick = (e) => {selectedImg(props);} //clicked image
    return (
        <div>
          <Card style={{ width: '18rem' }}>
            <img onClick={handlePictureClick} src={props.imageUrl} alt={props.keyword}  title={props.title} />{/* Favorited button */}
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Button onClick={() => Favorited(Favorites+1)} variant='outline-danger'>❤ {Favorites}</Button> {/* Favorited button */}
            
          </Card>        
      </div>
    );
  }


export default HornedBeast;