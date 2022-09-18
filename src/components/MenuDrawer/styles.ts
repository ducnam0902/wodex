import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
export const NavLinkBase = styled(NavLink)`
  padding: 12px 15px;
  color: #dddddd;
  font-size: 14px;
  line-height: 14px;
  font-weigh: 400;
  text-decoration: none;

  &&.active {
    color: #fdbf70;
    background-color: #22222b;
  }
`;

export const HomeIcon = styled(FaHome)`
  margin-right: 5px;
  margin-bottom: -1px;
`;
