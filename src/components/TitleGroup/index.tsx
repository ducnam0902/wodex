import { Box, Container, Typography } from "@mui/material";

type TitleGroupProps = {
  collection: string;
  mainTitle: string;
  description: string;
};

const TitleGroup = ({ collection, mainTitle, description }: TitleGroupProps) => {
  return (
    <Container
      sx={{
        padding: "10px",
        textAlign: "center",
        paddingLeft: { xs: "60px", md: "10px" },
        paddingRight: { xs: "60px", md: "10px" },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: "20px",
          lineHeight: 1,
          color: "#fdbf70",
          textTransform: "capitalize",
        }}
      >
        {collection}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          marginBottom: "20px",
          lineHeight: 1,
          fontWeight: 600,
          color: "#22222b",
          textTransform: "uppercase",
        }}
      >
        {mainTitle}
      </Typography>
      <Typography variant="h6" sx={{ lineHeight: 1, color: "#747474" }}>
        {description}
      </Typography>
    </Container>
  );
};

export default TitleGroup;
