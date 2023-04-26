import React, { useState } from 'react'
import HornedBeast from './HornedBeast';
import HornForm from './HornForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Main(props) {
  const [sortNum, setSortNum] = useState(null);
  let beastsImg = props.imageData.filter(function (element){
    if(sortNum === element.horns || sortNum === 0){
      return true;
    }else{
      return false;
    }
  })
    return (
      <main>
        {/*image placement*/}
        <Container>
          {/* fillter image by number of horns */}
          <HornForm updateNum={setSortNum}/>
          <Row>
            {/*image data*/}
            {beastsImg.map(imageData => {
              return(
                <Col>
                <HornedBeast keyword = {imageData.keyword}
                description = {imageData.description}
                title = {imageData.title}
                imageUrl = {imageData.image_url}
                selectedImg={props.selectedImg}
                />
                </Col>
              )
            })}
          </Row>
        </Container>
      </main>
    );
  }


export default Main;

