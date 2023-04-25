import React from 'react';
import { Button } from 'bootstrap';
import Modal from 'react-bootstrap/Modal';


{/*image pop-up*/}
function SelectedBeast(props) {
      return (
        
        <Modal show={true} onHide={() => {}}>
            <img src={props.imageUrl}/> {/*path to image*/}
            <Button>close</Button>
        </Modal>
      );
    }
  
  
  export default SelectedBeast;