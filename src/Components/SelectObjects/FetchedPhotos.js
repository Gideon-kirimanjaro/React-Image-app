/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../firebase";
import ImageComponent from "../UI/ImageComponent";
import StyledImage from "../UI/StyledImage";

const FetchedPhotos = () => {
  const [imageList, setImageList] = useState([]);
  const imgListRef = ref(storage, "images/");
  useEffect(() => {
    listAll(imgListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prevItem) => [...prevItem, url]);
        });
      });
    });
    console.log("i fire once");
  }, []);

  return (
    <div className="d-flex flex-column">
      {imageList.map((url, keys) => {
        return (
          <ImageComponent>
            <ImageComponent.img>
              <StyledImage key={keys} src={url} />
            </ImageComponent.img>
            <ImageComponent.description>
              This is a description
            </ImageComponent.description>
          </ImageComponent>
        );
      })}
    </div>
  );
};
export default FetchedPhotos;
