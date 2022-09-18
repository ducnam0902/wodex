import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const NavLinkBase = styled(NavLink)`
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: #0a0a0a;
  padding-left: 8px;
  padding-right: 8px;
  text-decoration: none;

  &:hover {
    color: #95e045;
  }
`;

export const NavLinkIcon = styled(NavLink)`
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: #0a0a0a;
  padding-left: 7px;
  padding-right: 7px;

  &:hover {
    color: #95e045;
  }
`;
