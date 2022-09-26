import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: #22222b;

  &:hover {
    color: #fdbf70;
  }
`;
