const ImageComponent = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
ImageComponent.img = (props) => {
  return <div>{props.children}</div>;
};
ImageComponent.description = (props) => {
  return (
    <div>
      <h4 style={{ color: "green", fontFamily: "serif" }}>{props.children}</h4>
    </div>
  );
};
export default ImageComponent;
