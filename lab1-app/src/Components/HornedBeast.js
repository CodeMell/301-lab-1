import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

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
          <Dropdown>
            <Dropdown.Toggle>
              <h2>{props.title}</h2> {/* title of image */}
              <img  src={props.imageUrl} alt={props.keyword}  title={props.title}/> {/*path to image*/}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <p>{props.description}</p> {/*description of the image*/}
              <Button onClick={() => Favorited(Favorites+1)} variant='outline-danger'>❤ {Favorites}</Button> {/*favorited image button*/}
            </Dropdown.Menu>
          </Dropdown>
      </div>
    );
  }


export default HornedBeast;