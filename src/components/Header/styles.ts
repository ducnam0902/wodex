import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Box } from "@mui/system";
export const NavLinkBase = styled(NavLink)`
  padding-left: 19px;
  padding-right: 19px;
  color: #ffffff;
  font-size: 1rem;
  text-decoration: none;

  &&.active {
    color: #77d843;
  }

  &:hover {
    color: #77d843;
  }
`;

export const HomeIcon = styled(FaHome)`
  margin-right: 9px;
  margin-bottom: -1px;
`;

export const BoxIcon = styled(Box)`
  margin-left: 8px;
  margin-right: 8px;
  font-size: 1.3125rem !important;
  cursor: pointer;
`;
