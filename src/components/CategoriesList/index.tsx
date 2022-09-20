import { Stack } from "@mui/material";
import CategoriesItem from "src/components/CategoriesItem";

type CategoriesListProps = {
  categoriesList: Array<{
    image: string;
    title: string;
    accessory?: string;
  }>;
};
const CategoriesList = ({ categoriesList }: CategoriesListProps) => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} sx={{ marginTop: "10px" }}>
      {categoriesList.map((item, index) => (
        <CategoriesItem key={index} {...item} />
      ))}
    </Stack>
  );
};

export default CategoriesList;
