import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LinkBase = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const ProductLink = styled(Link)`
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  margin-top: 9px;
  margin-bottom: 7px;
  font-size: 16px;
  line-height: 1.625;
  color: #22222b;
  text-decoration: none;
  &:hover {
    color: #fdbf70;
  }
`;

type BackgroundImageProps = {
  image: string;
  imageHover: string;
};

export const BackgroundImage = styled(Box)<BackgroundImageProps>`
  width: 257px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  height: 283px;
  margin-left: auto;
  transition: all 0.1s ease-out;
  margin-right: auto;
  position: relative;
  &:hover {
    background-image: url(${(props) => props.imageHover});
  }

  &:hover span {
    display: none;
  }

  &:hover div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const GroupIcon = styled(Box)`
  width: 30px;
  height: 33px;
  background-color: #fff;
  margin-top: 6px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease-out;
  transform: translateY(50%);

  & div {
    width: 30px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: #22222b;
  }

  &:hover div {
    color: #fff;
  }
`;

export const MainTitle = styled(Typography)`
  font-size: 10px;
  line-height: 1.1875rem;
  z-index: 3;
  text-align: center;
  color: #ffffff;
`;
type MainTitleWrapper = {
  isHotItem?: boolean;
};
export const MainTitleWrapper = styled(Box)<MainTitleWrapper>`
  background-color: #fdbf70;
  width: 47px;
  height: 19px;
  position: absolute;
  top: ${({ isHotItem }) => (isHotItem ? "15%" : "5%")};
  left: 0;
`;
