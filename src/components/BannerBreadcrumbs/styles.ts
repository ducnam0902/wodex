import { Box } from "@mui/material";
import styled from "@emotion/styled";

type BannerImageProps = {
  image: string;
  height: string;
};
export const BannerImageProps = styled(Box)<BannerImageProps>`
  width: 100%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: ${(props) => props.height};
  margin-bottom: 70px;
`;
