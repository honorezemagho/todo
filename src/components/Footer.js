const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center text-capitalize">
        copyright todo app &copy; {year}
      </footer>
    </>
  );
};

export default Footer;
