import React from 'react'
import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';
import imageData from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

function Main() {
    return (
      <main>
        {/*bootstrap placeholder*/}
        {/*image placement*/}
        <Container>
          <Row>
            <Col><HornedBeast keyword = {imageData[0].keyword} description = {imageData[0].description} title = {imageData[0].title} imageUrl = {imageData[0].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[1].keyword} description = {imageData[1].description} title = {imageData[1].title} imageUrl = {imageData[1].image_url}/></Col>
            <Col> <HornedBeast keyword = {imageData[2].keyword} description = {imageData[2].description} title = {imageData[2].title} imageUrl = {imageData[2].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[3].keyword} description = {imageData[3].description} title = {imageData[3].title} imageUrl = {imageData[3].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[4].keyword} description = {imageData[4].description} title = {imageData[4].title} imageUrl = {imageData[4].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[5].keyword} description = {imageData[5].description} title = {imageData[5].title} imageUrl = {imageData[5].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[6].keyword} description = {imageData[6].description} title = {imageData[6].title} imageUrl = {imageData[6].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[7].keyword} description = {imageData[7].description} title = {imageData[7].title} imageUrl = {imageData[7].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[8].keyword} description = {imageData[8].description} title = {imageData[8].title} imageUrl = {imageData[8].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[9].keyword} description = {imageData[9].description} title = {imageData[9].title} imageUrl = {imageData[9].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[10].keyword} description = {imageData[10].description} title = {imageData[10].title} imageUrl = {imageData[10].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[11].keyword} description = {imageData[11].description} title = {imageData[11].title} imageUrl = {imageData[11].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[12].keyword} description = {imageData[12].description} title = {imageData[12].title} imageUrl = {imageData[12].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[13].keyword} description = {imageData[13].description} title = {imageData[13].title} imageUrl = {imageData[13].image_url}/></Col>
            <Col> <HornedBeast keyword = {imageData[14].keyword} description = {imageData[14].description} title = {imageData[14].title} imageUrl = {imageData[14].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[15].keyword} description = {imageData[15].description} title = {imageData[15].title} imageUrl = {imageData[15].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[16].keyword} description = {imageData[16].description} title = {imageData[16].title} imageUrl = {imageData[16].image_url}/></Col>
            <Col> <HornedBeast keyword = {imageData[17].keyword} description = {imageData[17].description} title = {imageData[17].title} imageUrl = {imageData[17].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[18].keyword} description = {imageData[18].description} title = {imageData[18].title} imageUrl = {imageData[18].image_url}/></Col>
            <Col><HornedBeast keyword = {imageData[19].keyword} description = {imageData[19].description} title = {imageData[19].title} imageUrl = {imageData[19].image_url}/></Col>
          </Row>
        </Container>

      </main>
    );
  }


export default Main;