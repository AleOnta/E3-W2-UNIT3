import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <Container fluid className="mt-5 footer">
      <Row>
        <Col xs={6} bg="light" className="offset-3">
          <Row className="mt-5" xs={1} sm={2} xl={4}>
            <Col>
              <ListGroup className="footerList">
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Audio and Subtitles</a>
                </ListGroup.Item>
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Media Center</a>
                </ListGroup.Item>
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Privacy</a>
                </ListGroup.Item>
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Contact us</a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup className="footerList">
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Audio Description</a>
                </ListGroup.Item>
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Investor Relations</a>
                </ListGroup.Item>
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Legal Notices</a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup className="footerList">
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Help Center</a>
                </ListGroup.Item>
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Jobs</a>
                </ListGroup.Item>
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Cookie Preferences</a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup className="footerList">
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Gift Cards</a>
                </ListGroup.Item>
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Terms of use</a>
                </ListGroup.Item>
                <ListGroup.Item className="footerListItem">
                  <a href="#FooterComponent">Corporate informations</a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button className="footerButton" variant="outline">
                Service Code
              </Button>
            </Col>
            <Col className="footerCopyright mt-3">© 1997-2022 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default FooterComponent;
