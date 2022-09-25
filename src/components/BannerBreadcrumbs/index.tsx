import { BannerImageProps } from "src/components/BannerBreadcrumbs/styles";
import { Box, Typography } from "@mui/material";
import Breadcrumb from "src/components/Breadcrumb";

type BannerBreadcrumbsProps = {
  image: string;
  height: string;
  title: string;
  breadcrumbList?: Array<{
    title: string;
    link?: string;
  }>;
  breadcrumbALign?: string;
};
const BannerBreadcrumbs = ({
  image,
  height,
  title,
  breadcrumbList,
  breadcrumbALign,
}: BannerBreadcrumbsProps) => {
  return (
    <BannerImageProps image={image} height={height}>
      <Box padding={{ xs: "50px", sm: "130px" }} textAlign="center">
        <Typography
          variant="h1"
          sx={{
            fontSize: "48px",
            fontWeight: "500",
            lineHeight: "78px",
          }}
        >
          {title}
        </Typography>
        {breadcrumbList && breadcrumbALign && (
          <Breadcrumb
            breadcrumbALign={breadcrumbALign}
            breadcrumbList={breadcrumbList}
          />
        )}
      </Box>
    </BannerImageProps>
  );
};

export default BannerBreadcrumbs;
