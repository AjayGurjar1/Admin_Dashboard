const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="flex flex-col sm:flex-row items-center">
        <h1 className="text-2xl  sm:flex-1 font-semibold text-gray-100">{title}</h1>

        <div className="flex flex-col sm:flex-row items-center mb-3">
          <img
            src="AjayPhoto.jpg"
            alt="Profile"
            className="rounded-full w-20 h-20 object-cover mr-3"
          />

          <div>
            <h3 className="text-lg font-semibold text-gray-100">Ajay Gurjar</h3>
            <p className="text-gray-400">ajaygurjar048@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
