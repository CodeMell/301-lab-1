
import Form from 'react-bootstrap/Form';

{/*sort by horns*/}
function HornForm({updateNum}) {
  function pickSortNum(event){
    updateNum(parseInt(event.target.value));
  }
      return (
        <Form>
          <Form.Label>Number Of Horns</Form.Label>
          <Form.Select aria-label="Default select example" onChange={pickSortNum}>
            <option value="0">select a numder</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One Hundred</option>
          </Form.Select>
        </Form>
      );
    }
  
  
  export default HornForm;