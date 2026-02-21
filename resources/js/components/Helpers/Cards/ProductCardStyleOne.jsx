import { Link } from "react-router-dom";
import Compair from "../icons/Compair";
import QuickViewIco from "../icons/QuickViewIco";
import Star from "../icons/Star";
import ThinLove from "../icons/ThinLove";
import CartIcon from "../icons/CartIcon";

export default function ProductCardStyleOne({ datas, type }) {
    const available =
        (datas.cam_product_sale /
            (datas.cam_product_available + datas.cam_product_sale)) *
        100;
    return (
        <div
            className="product-card-one w-full h-full bg-white relative group overflow-hidden"
            style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
        >
            <div
                className="product-card-img w-full h-[300px]"
                style={{
                    background: `url(/assets/images/${datas.image}) no-repeat center`,
                    backgroundSize: "cover",
                }}
            ></div>
            <div className="product-card-details px-[30px] pb-[30px] relative">
                {/* add to card button - always visible */}
                <div className="absolute w-full h-10 px-[30px] left-0 top-[85px] transition-all duration-300 ease-in-out">
                    <button type="button" className="green-btn">
                        <div className="flex items-center space-x-3">
                            <CartIcon />
                            <span>Add To Cart</span>
                        </div>
                    </button>
                </div>
                <div className="reviews flex space-x-[1px] mb-3">
                    {Array.from(Array(datas.review), () => (
                        <span key={datas.review + Math.random()}>
                            <Star />
                        </span>
                    ))}
                </div>
                <Link to="/single-product">
                    <p className="title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600">
                        {datas.title}
                    </p>
                </Link>
                <p className="price">
                    <span className="main-price text-qgray line-through font-600 text-[18px]">
                        {datas.price}
                    </span>
                    <span className="offer-price text-qred font-600 text-[18px] ml-2">
                        {datas.offer_price}
                    </span>
                </p>
            </div>
            {/* quick-access-btns */}
            <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20 transition-all duration-300 ease-in-out">
                <a href="#">
                    <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                        <QuickViewIco />
                    </span>
                </a>
                <a href="#">
                    <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                        <ThinLove />
                    </span>
                </a>
                <a href="#">
                    <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                        <Compair />
                    </span>
                </a>
            </div>
        </div>
    );
}
