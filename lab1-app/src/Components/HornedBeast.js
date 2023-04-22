import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';
import Card from 'react-bootstrap/Card';

// class HornedBeast extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>{this.props.title}</h2> {/* title of image */}
//                 <img src={this.props.imageUrl} alt={this.props.keyword}  title={this.props.title}/> {/*image*/}
//                 <p>{this.props.description}</p> {/*description of the image*/}
//             </div>
//         )
//     }
// }
function HornedBeast(props) {
  const[Favorites,Favorited] = useState(0);
    return (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img onClick={SelectedBeast} src={props.imageUrl} alt={props.keyword}  title={props.title} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.description}</Card.Text>
              <Button onClick={() => Favorited(Favorites+1)} variant='outline-danger'>❤ {Favorites}</Button>
            </Card.Body>
          </Card>        
      </div>
    );
  }


export default HornedBeast;