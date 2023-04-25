import React from 'react'
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Main(props) {
    return (
      <main>
        {/*image placement*/}
        <Container>
          <Row>
            {/*image data*/}
            {props.imageData.map(imageData => {
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