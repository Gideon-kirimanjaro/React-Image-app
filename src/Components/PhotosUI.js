import { useState } from "react";
import { Form } from "react-bootstrap";
import ImageHolder from "./ImageHolder";
import CategorySelect from "./SelectObjects/CategorySelect";
import FetchedPhotos from "./SelectObjects/FetchedPhotos";
import PhotoSelect from "./SelectObjects/PhotoSelect";
import Button from "./UI/Button";
import axios from "axios";
const Photos = () => {
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [submitData, setSubmitData] = useState([]);
  const api =
    "https://imageuploadapp-d3a25-default-rtdb.firebaseio.com/posts.json";
  function onLiftImage(liftedImage) {
    setImage(liftedImage);
  }

  const descriptionHandler = (e) => {
    const enteredDescription = e.target.value;
    if (enteredDescription.trim().length === 0) {
      setError(true);
    } else if (enteredDescription.trim().length > 0) {
      setError(false);
    }
    setDescription(enteredDescription);
  };
  const categoryHandler = (liftedValue) => {
    setCategory(liftedValue);
  };
  const submitDataHandler = () => {
    setSubmitData({
      description: description,
      category: category,
    });
    if (submitData !== "") {
      axios.post(api, submitData).then((response) => {
        console.log("<<>>", response.data);
      });
      console.log("<><>Submit the Data<><>");
    } else {
      alert("Fill all the details");
    }
  };

  return (
    <div>
      <h2>Photo pocket</h2>
      {/* <PhotoSelect></PhotoSelect>
      <Form>
        <Form.Group className="" controlId="formBasicText">
          <Form.Control
            style={{
              borderColor: error ? "red" : "green",
              borderRadius: "5px",
              padding: "4px",
            }}
            type="text"
            placeholder="Enter a description"
            value={description}
            onChange={descriptionHandler}
          />
        </Form.Group>
      </Form>
      <CategorySelect liftedCategory={categoryHandler}></CategorySelect> */}
      <div className="mt-4">
        <ImageHolder liftImage={onLiftImage}></ImageHolder>
      </div>
      {/* <Button onClick={submitDataHandler}>SUBMIT</Button> */}
    </div>
  );
};
export default Photos;
