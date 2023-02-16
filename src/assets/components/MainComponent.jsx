import { Container } from "react-bootstrap";
import ShowsRowComponent from "./ShowsRowComponent";
import UpperComponent from "./UpperComponent";

const MainComponent = () => {
  return (
    <Container fluid bg="dark" variant="dark" className="pt-3">
      <UpperComponent />
      <ShowsRowComponent typo="Trending Now" toFetch="harry%20potter" />
      <ShowsRowComponent typo="Watch it Again" toFetch="pokemon" />
      <ShowsRowComponent typo="New Releases" toFetch="dragon%20ball" />
    </Container>
  );
};

export default MainComponent;
