import { Box, ImageList } from "@mui/material";
import { useState } from "react";
import { ImageItem, ImagePresentation } from "./styles";
type ImageLayoutProps = {
  imageList: string[];
};
const ImageLayout = ({ imageList }: ImageLayoutProps) => {
  const [currentImagePresentation, setCurrentImagePresentation] = useState(0);

  const handleChangeImage = (index: number): void => {
    if (index < imageList.length) {
      setCurrentImagePresentation(index);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
      <ImageList cols={1} sx={{ margin: "0 15px 0 0" }}>
        {imageList.map((item, index) => {
          return (
            <ImageItem key={index} onClick={() => handleChangeImage(index)}>
              <img src={item} />
            </ImageItem>
          );
        })}
      </ImageList>
      <ImagePresentation
        src={imageList[currentImagePresentation]}
        variant="square"
        id="image-presentation"
      />
    </Box>
  );
};

export default ImageLayout;
