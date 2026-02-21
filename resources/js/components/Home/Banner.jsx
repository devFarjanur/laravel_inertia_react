import { Link } from "react-router-dom";

export default function Banner({ className }) {
    return (
        <div className={`w-full ${className || ""}`}>
            <div className="container-x mx-auto">
                <div className="main-wrapper w-full">
                    <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px] mb-[30px]">
                        <div
                            data-aos="fade-right"
                            className="xl:w-1/2 w-full h-full"
                        >
                            <Link to="/single-product">
                                <img
                                    src="/assets/images/ban-1.png"
                                    alt="Banner"
                                    className="w-full max-w-full h-auto object-cover"
                                />
                            </Link>
                        </div>
                        <div
                            data-aos="fade-left"
                            className="xl:w-1/2 w-full flex xl:flex-col flex-row xl:space-y-[30px] xl:space-x-0 space-x-4 h-full"
                        >
                            <div className="w-full h-full">
                                <Link to="/single-product">
                                    <img
                                        src="/assets/images/ban-2.png"
                                        alt="Banner"
                                        className="w-full h-full object-cover"
                                    />
                                </Link>
                            </div>
                            <div className="w-full h-full">
                                <Link to="/single-product">
                                    <img
                                        src="/assets/images/ban-2.webp"
                                        alt="Banner"
                                        className="w-full h-full object-cover"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
