import womenCollection from "src/assets/image/category1.jpg";
import menCollection from "src/assets/image/category2.jpg";
import accessories from "src/assets/image/category3.jpg";
import { MEN_CLOTHING, WOMEN_CLOTHING } from "src/constants/index";

export const getImageCategories = (category: string): string => {
  switch (category) {
    case MEN_CLOTHING:
      return menCollection;

    case WOMEN_CLOTHING:
      return womenCollection;

    default:
      return accessories;
  }
};
