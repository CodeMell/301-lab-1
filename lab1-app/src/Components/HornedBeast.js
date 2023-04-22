import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

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
            <img onClick={SelectedBeast} src={props.imageUrl} alt={props.keyword}  title={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Button onClick={() => Favorited(Favorites+1)} variant='outline-danger'>❤ {Favorites}</Button>
          </Card>        
      </div>
    );
  }


export default HornedBeast;