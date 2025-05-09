const Footer = () => {
  return (
    <footer className="bg-black w-full flex shadow-md">
      <div className="container py-2 flex justify-between items-center container">
        <p className="text-3xl text-white font-medium font-sans">
            © {new Date().getFullYear()}
        </p>
        <div className="rounded-lg border-2 border-solid border-white p-2">
          <a className="text-xl font-bold text-white font-sans" href="">
            Nick
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
