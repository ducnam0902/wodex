import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TabPanel from "src/components/TabPanel";
import { TabLabel } from "src/components/ProductTab/styles";
import { useMediaQuery } from "@mui/material";
import { theme } from "src/themes/theme";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import Grid from "@mui/material/Grid";

import ProductItem from "src/components/ProductItem";
import products from "../../constants/stub/products";

export const ProductTab = () => {
  const [value, setValue] = useState<number>(0);
  const [isShowFilterForm, setIsShowFilterForm] = useState<boolean>(false);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleShowFilterForm = () => {
    setIsShowFilterForm((isShow) => !isShow);
  };

  return (
    <>
      <Box
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1200px",
          textAlign: "center",
          paddingLeft: "15px",
          display: "flex",
          paddingRight: "15px",
          justifyContent: "space-between",
          marginBottom: "28px",
          position: "relative",
          flexDirection: "row",
        }}
      >
        <Box>
          <Tabs
            orientation={matches ? "horizontal" : "vertical"}
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <TabLabel
              value={0}
              label="All Products"
              disableRipple
              disableFocusRipple
            />
            <TabLabel
              value={1}
              label="Hot Products"
              disableRipple
              disableFocusRipple
            />
            <TabLabel
              value={2}
              label="Sales Products"
              disableRipple
              disableFocusRipple
            />
          </Tabs>
          <TabPanel index={0} value={value}>
            <Grid container sx={{ marginTop: "28px" }}>
              {products.map((item, index) => (
                <ProductItem key={index} {...item} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel index={1} value={value}>
            <Grid container sx={{ marginTop: "28px" }}>
              {products
                .filter((item) => item.isHotItem === true)
                .map((item, index) => (
                  <ProductItem key={index} {...item} />
                ))}
            </Grid>
          </TabPanel>
          <TabPanel index={2} value={value}>
            <Grid container sx={{ marginTop: "28px" }}>
              {products
                .filter((item) => item.discountPercent !== 0)
                .map((item, index) => (
                  <ProductItem key={index} {...item} />
                ))}
            </Grid>
          </TabPanel>
        </Box>
        <Box
          height="48px"
          sx={{ display: "flex", position: "absolute", right: "10px" }}
        >
          <ListIcon
            fontSize="small"
            sx={{
              marginLeft: "4px",
              display: "inline-block",
              lineHeight: "48px",
              height: "48px",
              color: "#22222b",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ProductTab;
