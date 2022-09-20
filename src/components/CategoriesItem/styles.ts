import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";

export const ShopLink = styled(Link)`
  text-decoration: none;
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  border-bottom: 1px solid #22222b;
  color: #22222b;
  padding-bottom: 2px;
  transition: 0.5s;
  &:hover {
    color: #fdbf70;
  }
`;

export const ImageBanner = styled(Avatar)`
  width: 100%;
  height: auto;
  img {
    transition: all 1s;
  }
  &:hover img {
    transition: all 1s;
    transform: scale(1.1);
  }
`;

export const ShopButton = styled(Button)`
  border-radius: 0;
  min-width: 175px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #22222b;
  margin-top: 20px;
  padding: 13px 0;
  background-color: #ffffff;
  text-transform: capitalize;
  background: linear-gradient(to right, #fdbf70 50%, #fff 50%);
  background-position: right bottom;
  background-size: 200% 100%;
  transition: all 0.6s ease-out;
  &:hover {
    color: #ffffff;
    background-position: left bottom;
  }

  @media screen and (max-width: 992px) {
    margin-top: 5px;
    padding: 10px 0;
  }
`;
