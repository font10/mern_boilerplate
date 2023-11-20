import PropTypes from "prop-types";
import { Navbar } from "../index";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="flex-1 h-full mx-auto w-10/12 md:w-8/12 mt-5 justify-center">
        {children}        
      </section>

    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
