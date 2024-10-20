import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-5">
      Sorry! This page is been built.
      <Link
        to={"/products"}
        className="bg-[#1F8CD0] text-white lg:px-8 md:px-6 px-4 hover:bg-[#1F8CD0]/50 p-2 rounded-xl"
      >
        Go to /products?
      </Link>
    </div>
  );
};

export default NotFound;
