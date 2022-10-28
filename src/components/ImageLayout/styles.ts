import styled from "@emotion/styled";
import { ImageListItem, Avatar } from "@mui/material";

export const ImageItem = styled(ImageListItem)`
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 11px;
  cursor: pointer;

  img {
    object-fit: cover !important;
    height: 103px !important;
    width: 103px !important;
  }
`;

export const ImagePresentation = styled(Avatar)`
  width: 528px;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 580px;
  margin-right: 15px;
  cursor: crosshair;

  &:hover img {
    width: 100%;
    height: auto;
    transform: scale(1.2);
    transition: 1s ease-in-out;
  }
`;
