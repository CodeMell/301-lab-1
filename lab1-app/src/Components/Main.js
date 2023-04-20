import React from 'react'
import HornedBeast from './HornedBeast';
import image_url from './data.json';


// class Main extends React.Component{
//     render(){
//         return(
//             <main>
//                 <HornedBeast keyword = "rhino" description = "Parent rhino with two babies" title = "Rhino Family" imageUrl ="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" />
//                 <HornedBeast keyword = "unicorn" description = "Someone wearing a very silly unicorn head mask" title = "Unicorn Head" imageUrl = "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" />
//                 <HornedBeast/>
//             </main>
//         );
//     }
// }

function Main(props) {
    return (
      <main>
        {/*image placement*/}
        <HornedBeast keyword = "rhino" description = "Parent rhino with two babies" title = "Rhino Family" imageUrl ="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" />
        <HornedBeast keyword = "unicorn" description = "Someone wearing a very silly unicorn head mask" title = "Unicorn Head" imageUrl = "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" />
        <HornedBeast keyword = {image_url[0].keyword} description = {image_url[0].description} title = {image_url[0].title} imageUrl = {image_url[0].image_url}/>
      </main>
    );
  }


export default Main;