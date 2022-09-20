import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ImageSlide from "src/components/ImageSlide";
import imageList from "../../constants/stub/slide";
const Slide = () => {
  return (
    <Carousel
      IndicatorIcon={
        <Box
          style={{
            padding: 0,
            borderRadius: "none",
          }}
        />
      }
      indicatorIconButtonProps={{
        style: {
          padding: "10px",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "inset 0 0 0 2px #ffffff",
        },
      }}
      indicatorContainerProps={{
        style: {
          position: "absolute",
          bottom: "0%",
          zIndex: 4,
        },
      }}
      navButtonsProps={{
        style: {
          backgroundColor: "none",
          borderRadius: "50%",
        },
      }}
    >
      {imageList.map((imageItem, index) => (
        <ImageSlide key={index} {...imageItem} />
      ))}
    </Carousel>
  );
};

export default Slide;
