import { Form } from "react-bootstrap";
import ImageHolder from "./ImageHolder";
import CategorySelect from "./SelectObjects/CategorySelect";
import FetchedPhotos from "./SelectObjects/FetchedPhotos";
import PhotoSelect from "./SelectObjects/PhotoSelect";

const photos = () => {
  const onLiftImage = (liftedImage) => {
    console.log(liftedImage);
  };
  return (
    <div>
      <h2>Photo pocket</h2>
      {/* choose photo from the loal drive then choose a category and date. After that post to an api and fetch.
      The fetched photos should have filters for date & category. Then there should be a search bar to search a photo 
      by name. */}
      <PhotoSelect></PhotoSelect>
      <Form>
        <Form.Group className="" controlId="formBasicText">
          <Form.Control
            style={{
              borderColor: "green",
              borderRadius: "5px",
              padding: "4px",
            }}
            type="text"
            placeholder="Enter a description"
          />
        </Form.Group>
      </Form>
      <CategorySelect></CategorySelect>
      <div className="mt-4">
        <ImageHolder liftImage={onLiftImage}></ImageHolder>
      </div>
      <FetchedPhotos></FetchedPhotos>
    </div>
  );
};
export default photos;
