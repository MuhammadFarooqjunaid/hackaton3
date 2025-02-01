

import Home from "./components/home";
import Latest from "./components/latest";
import Products from "./components/products";
import Offer from "./components/Offers";

import TrendingProducts from "./components/TrendingProducts";
import Discount from "./components/Discount";
import TopCategories from "./components/TopCategories";
import Newslater from "./components/Newslater";
import BlogSection from "./components/BlogSection";





const Page = () => {
    return (
        <div>
            
            <br/>
            <br/>
            
            <Home />
            <Products /> {/* Corrected component name */}
            <Latest />
            <Offer />
           
            <TrendingProducts />
            <Discount />
            <TopCategories />
            <Newslater />
            <BlogSection />
            
        </div>
    );
};

export default Page;

