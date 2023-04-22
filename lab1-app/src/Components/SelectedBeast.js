import React from 'react'
import Modal from 'react-bootstrap/Modal';


{/*image pop-up*/}
function SelectedBeast(props) {
      return (
        
        <Modal>
            <img src={props.imageUrl}/> {/*path to image*/}
        </Modal>
      );
    }
  
  
  export default SelectedBeast;