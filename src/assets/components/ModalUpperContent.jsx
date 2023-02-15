const ModalUpperContent = (props) => {
  return (
    <>
      <h4>{props.props.Title}</h4>
      <ul>
        <li>
          <span>Attori: </span>
          {props.props.Actors}
        </li>
        <li>
          <span>Genere: </span>
          {props.props.Genre}
        </li>
        <li>
          <span>Anno: </span>
          {props.props.Year}
        </li>
        <li>
          <span>Box Office: </span>
          {props.props.BoxOffice}
        </li>
      </ul>
    </>
  );
};
export default ModalUpperContent;
