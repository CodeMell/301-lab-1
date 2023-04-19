import React from 'react'

// class HornedBeast extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>{this.props.title}</h2>
//                 <img src={this.props.imageUrl} alt={this.props.keyword}  title={this.props.title}/>
//                 <p>{this.props.description}</p>
            
//             </div>
//         )
//     }
// }
function HornedBeast(props) {
    return (
        <div>
        <h2>{props.title}</h2>
        <img src={props.imageUrl} alt={props.keyword}  title={props.title}/>
        <p>{props.description}</p>
    
    </div>
    );
  }


export default HornedBeast;