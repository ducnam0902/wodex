import styled from "@emotion/styled";
import { Tab } from "@mui/material";

export const TabLabel = styled(Tab)`
  font-size: 16px;
  height: 32px;
  line-height: 28px;
  font-weight: 400;
  color: #7f7f82 !important;
  text-transform: capitalize;
  padding: 0;
  margin: 0 14px;
  font-family: "Archivo";

  &:hover {
    border-bottom: 1px solid #22222b;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &.Mui-selected {
    color: #22222b !important;
  }
`;
