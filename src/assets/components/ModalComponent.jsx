import { useState, useEffect } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import ModalLowerContent from "./ModalLowerContent";
import ModalUpperContent from "./ModalUpperContent";

const ModalComponent = (props) => {
  // state = {
  //   modalContent: {},
  //   isLoading: true,
  //   hasError: false,
  //   errorMessage: "",
  //   showModal: false,
  // };

  const [ref, setRef] = useState({
    modalContent: {},
    isLoading: true,
    hasError: false,
    errorMessage: "",
    showModal: false,
  });

  const handelModal = () => {
    // this.setState({ showModal: !this.state.showModal });
    setRef({ ...ref, showModal: !ref.showModal });
  };

  const modalCompiler = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=97daa7a1&i=${props.modalContent.imdbID}`);

      if (response.ok) {
        const data = await response.json();

        // this.setState({
        //   modalContent: data,
        //   isLoading: false,
        // });

        setRef({ ...ref, modalContent: data, isLoading: false });
      } else {
        // this.setState({
        //   isLoading: false,
        //   hasError: true,
        //   errorMessage: `C'è stato un errore nella response modale, error --> ${response.status}`,
        // });

        setRef({
          ...ref,
          isLoading: false,
          hasError: true,
          errorMessage: `C'è stato un errore nella response modale, error --> ${response.status}`,
        });
        alert("errore nella response del modale: error -->", response.status);
      }
    } catch (error) {
      // this.setState({
      //   isLoading: false,
      //   hasError: true,
      //   errorMessage: `Errore fatale durante il caricamento del modale: ${error.message}`,
      // });

      setRef({
        ...ref,
        isLoading: false,
        hasError: true,
        errorMessage: `Errore fatale durante il caricamento del modale: ${error.message}`,
      });
      alert("errore fatale durante il caricamento del modale: error -->", error.message);
    }
  };

  // componentDidMount = () => {
  //   this.modalCompiler();
  // };

  useEffect(() => {
    modalCompiler();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          handelModal();
        }}
        variant="danger"
        className="modalButton m-0 p-1"
      >
        More Info
      </Button>
      <Modal show={ref.showModal}>
        <Modal.Header className="d-flex justify-content-center modalContainer">
          <Modal.Title className="modalHead">
            {!ref.isLoading && <ModalUpperContent props={ref.modalContent} />}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex justify-content-around align-items-center modalContainer modalBody">
          {!ref.isLoading && <ModalLowerContent props={ref.modalContent} />}
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center modalContainer">
          <Button
            variant="danger"
            onClick={() => {
              handelModal();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
        {ref.isLoading && (
          <div className="d-flex justify-content-center align-items-center spinnerContainer">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
      </Modal>
    </>
  );
};
export default ModalComponent;
