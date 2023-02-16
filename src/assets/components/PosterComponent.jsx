import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalComponent from "./ModalComponent";

const PosterComponent = (props) => {
  return (
    <>
      <Col xs={12} sm={6} lg={4} xl={2} className="my-1 px-1 d-flex justify-content-center">
        <Link to={"/movie-details/" + props.poster.imdbID} className="w-100">
          <Card className="myCard">
            <Card.Img variant="top" src={props.poster.Poster} className="rowPoster" />
            <ModalComponent modalContent={props.poster} />
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default PosterComponent;
