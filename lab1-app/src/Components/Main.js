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
        <HornedBeast keyword = {image_url[0].keyword} description = {image_url[0].description} title = {image_url[0].title} imageUrl = {image_url[0].image_url}/>
        <HornedBeast keyword = {image_url[1].keyword} description = {image_url[1].description} title = {image_url[1].title} imageUrl = {image_url[1].image_url}/>
        <HornedBeast keyword = {image_url[2].keyword} description = {image_url[2].description} title = {image_url[2].title} imageUrl = {image_url[2].image_url}/>
        <HornedBeast keyword = {image_url[3].keyword} description = {image_url[3].description} title = {image_url[3].title} imageUrl = {image_url[3].image_url}/>
        <HornedBeast keyword = {image_url[4].keyword} description = {image_url[4].description} title = {image_url[4].title} imageUrl = {image_url[4].image_url}/>
        <HornedBeast keyword = {image_url[5].keyword} description = {image_url[5].description} title = {image_url[5].title} imageUrl = {image_url[5].image_url}/>
        <HornedBeast keyword = {image_url[6].keyword} description = {image_url[6].description} title = {image_url[6].title} imageUrl = {image_url[6].image_url}/>
        <HornedBeast keyword = {image_url[7].keyword} description = {image_url[7].description} title = {image_url[7].title} imageUrl = {image_url[7].image_url}/>
        <HornedBeast keyword = {image_url[8].keyword} description = {image_url[8].description} title = {image_url[8].title} imageUrl = {image_url[8].image_url}/>
        <HornedBeast keyword = {image_url[9].keyword} description = {image_url[9].description} title = {image_url[9].title} imageUrl = {image_url[9].image_url}/>
        <HornedBeast keyword = {image_url[10].keyword} description = {image_url[10].description} title = {image_url[10].title} imageUrl = {image_url[10].image_url}/>
        <HornedBeast keyword = {image_url[11].keyword} description = {image_url[11].description} title = {image_url[11].title} imageUrl = {image_url[11].image_url}/>
        <HornedBeast keyword = {image_url[12].keyword} description = {image_url[12].description} title = {image_url[12].title} imageUrl = {image_url[12].image_url}/>
        <HornedBeast keyword = {image_url[13].keyword} description = {image_url[13].description} title = {image_url[13].title} imageUrl = {image_url[13].image_url}/>
        <HornedBeast keyword = {image_url[14].keyword} description = {image_url[14].description} title = {image_url[14].title} imageUrl = {image_url[14].image_url}/>
        <HornedBeast keyword = {image_url[15].keyword} description = {image_url[15].description} title = {image_url[15].title} imageUrl = {image_url[15].image_url}/>
        <HornedBeast keyword = {image_url[16].keyword} description = {image_url[16].description} title = {image_url[16].title} imageUrl = {image_url[16].image_url}/>
        <HornedBeast keyword = {image_url[17].keyword} description = {image_url[17].description} title = {image_url[17].title} imageUrl = {image_url[17].image_url}/>
        <HornedBeast keyword = {image_url[18].keyword} description = {image_url[18].description} title = {image_url[18].title} imageUrl = {image_url[18].image_url}/>
        <HornedBeast keyword = {image_url[19].keyword} description = {image_url[19].description} title = {image_url[19].title} imageUrl = {image_url[19].image_url}/>
      </main>
    );
  }


export default Main;