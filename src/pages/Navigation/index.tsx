import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

Navigation.propTypes = {
  children: PropTypes.node,
};
export default Navigation;
