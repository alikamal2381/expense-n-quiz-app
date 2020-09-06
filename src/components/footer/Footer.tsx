import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="http://ezsystemspk.surge.sh/" target="_blank">
            {" "}
            EZ Systems - (Ali Kamal)
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
