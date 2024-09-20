import { ProductPage } from "../componets/ProductPage";
import Cartpage from "../componets/Cartpage";

const Homepage = () => {
  return (
    <div className="flex items-center md:items-start  flex-col md:flex-row md:px-10 py-4">
      <ProductPage />
      <Cartpage />
    </div>
  );
};

export default Homepage;
