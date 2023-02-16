import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  const [ref, setRef] = useState({
    movieContent: {}, // was {}
    isLoading: true,
    hasError: false,
    errorMessage: "",
    showModal: false,
  });

  const params = useParams();

  const movieDetailsFiller = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=97daa7a1&i=${params.movieId}`);

      if (response.ok) {
        const data = await response.json();

        setTimeout(setRef({ ...ref, movieContent: data, isLoading: false }), 1000);
      } else {
        setRef({
          ...ref,
          isLoading: false,
          hasError: true,
          errorMessage: `C'è stato un errore nella response modale, error --> ${response.status}`,
        });
        alert("errore nella response del modale: error -->", response.status);
      }
    } catch (error) {
      setRef({
        ...ref,
        isLoading: false,
        hasError: true,
        errorMessage: `Errore fatale durante il caricamento del modale: ${error.message}`,
      });
      alert("errore fatale durante il caricamento del modale: error -->", error.message);
    }
  };

  useEffect(() => {
    movieDetailsFiller();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container style={{ height: 57 + "vh" }} className="mt-5">
        <Row className="d-flex align-items-center h-100">
          <Col xs={4}>
            <img src={ref.movieContent.Poster} alt="of the film" />
          </Col>
          <Col xs={8}>
            <Card style={{ backgroundColor: "black", color: "#838383" }} variant="dark">
              <Card.Header as="h5">
                <em>Movie Details</em>
              </Card.Header>
              <Card.Body>
                <Card.Title className="detail title">
                  <strong>Title: </strong>
                  {ref.movieContent.Title}
                </Card.Title>
                <Card.Text className="detail subtitle">
                  <strong>Genre: </strong>
                  {ref.movieContent.Genre}
                </Card.Text>
                <Card.Text className="detail subtitle">
                  <strong>Actors: </strong>
                  {ref.movieContent.Actors}
                </Card.Text>
                <Card.Text className="detail subtitle">
                  <strong>Plot: </strong>
                  {ref.movieContent.Plot}
                </Card.Text>
                <Card.Text className="detail lastDetail">
                  <strong>Director: </strong>
                  {ref.movieContent.Director}, <strong>Writers: </strong> {ref.movieContent.Writer},
                  <strong>Year:</strong> {ref.movieContent.Year}
                </Card.Text>
                <Link className="btn-danger btn" to="/TvShows">
                  Home
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetails;
