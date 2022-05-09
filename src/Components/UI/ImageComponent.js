const ImageComponent = ({ children }) => {
  return <div className="d-flex">{children}</div>;
};
ImageComponent.img = (props) => {
  return <div>{props.children}</div>;
};
ImageComponent.description = (props) => {
  return (
    <div>
      <h4>{props.children}</h4>
    </div>
  );
};
export default ImageComponent;
