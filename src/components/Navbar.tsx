import { User, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          E-commo
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link to="new-product" className="text-gray-800 hover:text-blue-500">
            Add New Product
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Heart className="text-gray-800 hover:text-blue-500 cursor-pointer" />
          <User className="text-gray-800 hover:text-blue-500 cursor-pointer" />
          <Link to="cart">
            <ShoppingCart className="text-gray-800 hover:text-blue-500 cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
