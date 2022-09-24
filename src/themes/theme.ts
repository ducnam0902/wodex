import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 992,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontSize: 16,
    fontWeightRegular: 400,
    fontFamily: "Archivo",
    h1: {
      fontSize: "2.8125rem",
      fontWeight: 400,
      color: "#22222b",
      lineHeight: 1.625,
    },
    h2: {
      fontSize: "1.875rem",
      fontWeight: 400,
      color: "#22222b",
      lineHeight: 1.625,
    },
    h3: {
      fontSize: "1.5625rem;",
      fontWeight: 400,
      color: "#22222b",
      lineHeight: 1.625,
    },
    h4: {
      fontSize: "1.375rem;",
      fontWeight: 400,
      color: "#22222b",
      lineHeight: 1.625,
    },
    h5: {
      fontSize: "1.125rem;",
      fontWeight: 400,
      color: "#22222b",
      lineHeight: 1.625,
    },
    h6: {
      fontSize: "1rem;",
      fontWeight: 400,
      color: "#22222b",
      lineHeight: 1.625,
    },
  },
});

export const BoxSpacing = styled(Box)`
  padding: 10px;
  width: 100%;
`;
