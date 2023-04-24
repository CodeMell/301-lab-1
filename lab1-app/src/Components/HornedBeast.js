import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function HornedBeast(props) {
  const[Favorites,Favorited] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
        <div>
          <Card style={{ width: '18rem' }}>
            <img onClick={SelectedBeast} src={props.imageUrl} alt={props.keyword}  title={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Button onClick={() => Favorited(Favorites+1)} variant='outline-danger'>❤ {Favorites}</Button>
            
          </Card>        
      </div>
    );
  }


export default HornedBeast;