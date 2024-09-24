import PropTypes from "prop-types";

const Footer = ({ footerConstants, color }) => {
  return (
    <footer className={`border-t ${color}`}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-20 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerConstants.map((item, index) => (
            <div key={index} className="pb-6">
              <a href={item.href} className="text-sm font-poppins leading-6">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <a
          href="https://junaidadams.com/"
          className="mt-10 block text-center text-xs leading-5"
        >
          &copy; {new Date().getFullYear()} Junaid Adams. All rights reserved.
        </a>
      </div>
    </footer>
  );
};
Footer.propTypes = {
  footerConstants: PropTypes.array.isRequired,
  color: PropTypes.string,
};
export default Footer;
