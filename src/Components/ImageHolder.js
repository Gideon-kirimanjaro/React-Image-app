import Button from "./UI/Button";
import { useState } from "react";
// The storage, ref and v4 areused to reference the
// storage where the images will be saved using random strings
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
const ImageHolder = (props) => {
  const [imageUpload, setImageUpload] = useState(null);
  const [emptyImage, setEmptyImage] = useState(false);
  const handleFileSelect = (e) => {
    const selectedFile = document.getElementById("file").files[0];
    props.liftImage(selectedFile);
    return setImageUpload(selectedFile);
  };
  const uploadImageHandler = () => {
    if (imageUpload === null) {
      return setEmptyImage(true);
    } else if (imageUpload !== null) {
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload)
        .then(() => {
          alert("image Uploaded successfully");
        })
        .then(setEmptyImage(false), setImageUpload(null));
    }
  };

  return (
    <div className="mb-4">
      <div>
        <div className="mt-2 mb-2 d-flex flex-column">
          <input type="file" onChange={handleFileSelect} id="file" />
          {emptyImage && (
            <h4 style={{ color: "red" }}>please select an image!</h4>
          )}
        </div>
        <div className="d-flex flex-column mt-3">
          <Button onClick={uploadImageHandler}>Upload</Button>
        </div>
      </div>
    </div>
  );
};
export default ImageHolder;
