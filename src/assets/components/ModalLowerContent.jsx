const ModalLowerContent = (props) => {
  return (
    <>
      <div className="imgModalContainer">
        <img src={props.props.Poster} alt="of the film onclick" className="h-100" />
      </div>
      <div className="textModalContainer">
        <ul>
          <li>
            <h5>Descrizione:</h5>
            <p>{props.props.Plot}</p>
          </li>
          <li>
            <h5>Awards:</h5>
            <p>{props.props.Awards}</p>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ModalLowerContent;
