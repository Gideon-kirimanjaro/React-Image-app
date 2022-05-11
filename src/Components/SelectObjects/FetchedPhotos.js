/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../firebase";
import ImageComponent from "../UI/ImageComponent";
import StyledImage from "../UI/StyledImage";

const FetchedPhotos = (props) => {
  const [imageList, setImageList] = useState([]);
  const imgListRef = ref(storage, "images/");
  props.liftUrl(imageList);
  useEffect(() => {
    listAll(imgListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prevItem) => [...prevItem, url]);
        });
      });
    });
  }, []);
  return (
    <div className="p-4">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {imageList.map((url, keys) => {
          return (
            <div>
              <ImageComponent>
                <ImageComponent.img key={keys}>
                  <StyledImage src={url} />
                </ImageComponent.img>
                <ImageComponent.description>
                  This is a description
                </ImageComponent.description>
              </ImageComponent>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FetchedPhotos;
