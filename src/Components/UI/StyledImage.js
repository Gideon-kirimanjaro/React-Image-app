import Style from "styled-components";
const StyledImage = Style.img`
src: url(${(props) => props.src});
height: 230px;
width: 180px;
`;
export default StyledImage;
