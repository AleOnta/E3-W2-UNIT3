import { Col, Row, Form } from "react-bootstrap";
import { BsGridFill, BsGrid3X3GapFill } from "react-icons/bs";

const UpperComponent = () => {
  return (
    <Row className="d-flex justify-content-between align-items-center mt-3 mb-md-5">
      <Col className="d-flex justify-content-around justify-content-sm-start align-items-center upperMainComponent">
        <h2 className="mr-3 mb-0">TV Shows</h2>
        <Form className="selectContainer">
          <Form.Group controlId="exampleForm.SelectCustom" className="mb-0">
            <Form.Control as="select" custom className="formSelect">
              <option>Genres</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Thriller</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <BsGridFill className="mr-4 upperIcon" />
        <BsGrid3X3GapFill className="mr-3 upperIcon" />
      </Col>
    </Row>
  );
};
export default UpperComponent;
