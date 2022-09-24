import { Stack, Grid } from "@mui/material";
import CategoriesItem from "src/components/CategoriesItem";

type CategoriesListProps = {
  categoriesList: Array<{
    image: string;
    title: string;
    accessory?: string;
  }>;
  newCollection?: boolean;
};
const CategoriesList = ({ categoriesList, newCollection }: CategoriesListProps) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto" }}
    >
      <Grid container>
        {categoriesList.map((item, index) => (
          <Grid item key={index} xs={12} sm={newCollection ? 6 : 4}>
            <CategoriesItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default CategoriesList;
