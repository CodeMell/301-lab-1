import React from 'react'

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
    return (
        <div>
        <h2>{props.title}</h2> {/* title of image */}
        <img src={props.imageUrl} alt={props.keyword}  title={props.title}/> {/*path to image*/}
        <p>{props.description}</p> {/*description of the image*/}
    
    </div>
    );
  }


export default HornedBeast;