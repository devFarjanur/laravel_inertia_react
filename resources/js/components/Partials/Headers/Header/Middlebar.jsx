import { Link } from "react-router-dom";
import Compair from "../../../Helpers/icons/Compair";
import SearchBox from "../../../Helpers/SearchBox";
import ThinLove from "../../../Helpers/icons/ThinLove";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import Cart from "../../../Cart";

export default function Middlebar({ className }) {
    return (
        <div className={`w-full h-[86px] home-two bg-white ${className}`}>
            <div className="container-x mx-auto h-full">
                <div className="relative h-full">
                    <div className="flex justify-between items-center h-full">
                        <div>
                            <Link to="/" className="text-xl font-bold">
                                {/* <img
                  width="152"
                  height="36"
                  src={`${
                    import.meta.env.VITE_PUBLIC_URL
                  }/import SearchBox from './../../../Helpers/SearchBox/index';
assets/images/logo-2import Compair from './../../../Helpers/icons/Compair';
.svg`}

                  alt="logo"
                /> */}
                                <span style={{ color: "#2D6F6D" }}>
                                    Naogaon{" "}
                                </span>
                                Medicine
                            </Link>
                        </div>
                        <div className="w-[517px] h-[44px]">
                            <SearchBox className="search-com" />
                        </div>
                        <div className="flex space-x-6 items-center">
                            <div className="favorite relative">
                                <Link to="/wishlist">
                                    <span>
                                        <ThinLove />
                                    </span>
                                </Link>
                                <span className="w-[18px] h-[18px] rounded-full bg-qh2-green absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-white">
                                    1
                                </span>
                            </div>
                            <div className="cart-wrapper group relative py-4">
                                <div className="cart relative cursor-pointer">
                                    <Link to="/cart">
                                        <span>
                                            <ThinBag />
                                        </span>
                                    </Link>
                                    <span className="w-[18px] h-[18px] rounded-full bg-qh2-green absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-white">
                                        15
                                    </span>
                                </div>
                                {/* <div className="fixed left-0 top-0 w-full h-full z-40"></div> */}
                                {/* hidden group-hover:block" */}
                                <Cart className="absolute -right-[45px] top-11 z-50 hidden group-hover:block" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
