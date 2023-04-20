import React, { useState } from 'react'

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
  // Favorited = () => {
  //   this.setState({ Favorites: this.state.Favorites + 1 });
  // }
    return (
        <div>
        <h2>{props.title}</h2> {/* title of image */}
        <img onClick={() => Favorited(Favorites+1)} src={props.imageUrl} alt={props.keyword}  title={props.title}/> {/*path to image*/}
        <p>{props.description}</p> {/*description of the image*/}
        <p>❤ {Favorites}</p>
      </div>
    );
  }


export default HornedBeast;