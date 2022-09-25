import { Breadcrumbs, Typography } from "@mui/material";
import { BreadcrumbLink } from "src/components/Breadcrumb/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type BreadcrumbProps = {
  breadcrumbList: Array<{
    title: string;
    link?: string;
  }>;
  breadcrumbALign: string;
};

const Breadcrumb = ({ breadcrumbList, breadcrumbALign }: BreadcrumbProps) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<ChevronRightIcon fontSize="small" sx={{ color: "#7f7f82" }} />}
      sx={{
        display: "flex",
        paddingTop: "0.25rem",
        justifyContent: breadcrumbALign,
      }}
    >
      {breadcrumbList.map((item, index) => {
        if (!item.link) {
          return (
            <Typography
              key={index}
              variant="h6"
              sx={{ lineHeight: "28px", color: "#7f7f82" }}
            >
              {item.title}
            </Typography>
          );
        } else {
          return (
            <BreadcrumbLink key={index} to={item.link}>
              {item.title}
            </BreadcrumbLink>
          );
        }
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
