import { useState, useEffect } from "react";
import { Col, Row, Spinner, Alert, useAccordionToggle } from "react-bootstrap";

import PosterComponent from "./PosterComponent";

const ShowsRowComponent = (props) => {
  // state = {
  //   films: [],
  //   isLoading: true,
  //   hasError: false,
  //   errorMessage: "",
  // };

  const [ref, setRef] = useState({
    films: [],
    isLoading: true,
    hasError: false,
    errorMessage: "",
  });

  const rowsFiller = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=97daa7a1&s=${props.toFetch}`);

      if (response.ok) {
        const array = await response.json();
        const filmsArray = await array.Search;
        // this.setState({
        //   films: filmsArray,
        //   isLoading: false,
        // });

        setRef({
          ...ref,
          films: filmsArray,
          isLoading: false,
        });
      } else {
        // this.setState({
        //   isLoading: false,
        //   hasError: true,
        //   errorMessage: `C'è stato un errore, error --> ${response.status}`,
        // });

        setRef({
          ...ref,
          isLoading: false,
          hasError: true,
          errorMessage: `C'è stato un errore, error --> ${response.status}`,
        });
      }
    } catch (error) {
      // this.setState({
      //   isLoading: false,
      //   hasError: true,
      //   errorMessage: `Errore fatale durante il caricamento: ${error.message}`,
      // });

      setRef({
        ...ref,
        isLoading: false,
        hasError: true,
        errorMessage: `Errore fatale durante il caricamento: ${error.message}`,
      });
    }
  };

  // componentDidMount = () => {
  //   this.rowsFiller();
  // };

  useEffect(() => {
    rowsFiller();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row className="mt-4 rowComponent">
      {ref.isLoading && (
        <div className="text-center spinnerContainer">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
      <Col xs={12}>
        <h4>{props.typo}</h4>
      </Col>
      <Row className="d-flex justify-content-center justify-content-lg-between align-items-center mx-2 w-100">
        {ref.films
          .slice(0, 6)

          .map((film) => {
            return <PosterComponent poster={film} key={film.imdbID} className="m-2" />;
          })}
        {ref.hasError && <Alert variant="secondary">{ref.errorMessage}</Alert>}
      </Row>
    </Row>
  );
};

export default ShowsRowComponent;
