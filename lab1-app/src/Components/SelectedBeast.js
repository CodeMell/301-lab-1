import React from 'react';
import { Button } from 'bootstrap';
import Modal from 'react-bootstrap/Modal';


{/*image pop-up*/}
function SelectedBeast(imageData,selectedImg) {
      return (
        
        <Modal show={true} onHide={() => selectedImg(null)}>
            <img src={imageData.imageUrl}/> {/*path to image*/}
            <Button>close</Button>
        </Modal>
      );
    }
  
  
  export default SelectedBeast;