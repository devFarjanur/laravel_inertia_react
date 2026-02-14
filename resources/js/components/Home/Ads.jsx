import { Link } from "react-router-dom";

export default function Ads({ handler }) {
    return (
        <div className="w-full h-full flex fixed left-0 top-0 justify-center z-40 items-center">
            <div
                onClick={handler}
                className="w-full h-full fixed left-0 right-0 bg-black bg-opacity-25"
            ></div>
            <div
                className="md:w-[812px] w-[310px] md:h-[509px] relative z-50 bg-slate-700 md:pl-10 pl-3 py-[108px] flex flex-col justify-between"
                style={{
                    background: `url(${
                        import.meta.env.VITE_PUBLIC_URL
                    }/assets/images/primary-ads.png) no-repeat`,
                    backgroundSize: "cover",
                }}
            >
                <div>
                    <div className="logo mb-[20px]">
                        <Link to="/">
                            <img
                                width="152"
                                height="36"
                                src={`${
                                    import.meta.env.VITE_PUBLIC_URL
                                }/assets/images/logo.svg`}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <p className="md:text-[22px] text-sm text-qblack mb-2">
                        by Subscribe our Newsletter
                    </p>
                    <h1 className="md:text-[30px] text-xl font-bold text-qblack mb-1">
                        Get <span className="mx-1 text-[#EB5757]">20% Off</span>{" "}
                        Discount Coupon
                    </h1>
                    <p className="text-qgray">
                        Get has been the industry's standard dummy text ever
                        since <br />
                        the ey of type andmen unlimiedted offer book.
                    </p>
                </div>
                <div className="md:w-[415px] w-full h-[54px] sm:flex mt-8">
                    <div className="flex-1 bg-white pl-4 flex space-x-2 items-center h-full focus-within:text-qyellow text-qblack">
                        <span>
                            <img
                                src={`${
                                    import.meta.env.VITE_PUBLIC_URL
                                }/assets/images/email-icon.svg`}
                                alt="email"
                                width="17"
                                height="15"
                                className="opacity-70"
                            />
                        </span>
                        <input
                            type="email"
                            name="email"
                            className="w-full h-full focus:outline-none text-sm placeholder:text-xs placeholder:text-qblack text-qblack font-400 tracking-wider"
                            placeholder="EMAIL ADDRESS"
                        />
                    </div>
                    <button
                        type="button"
                        className="w-[120px] h-full bg-qyellow text-sm font-600 hover:bg-qh2-green hover:text-white transition-colors duration-300"
                    >
                        Subscribe
                    </button>
                </div>
                <div className="absolute right-5 top-5">
                    <img
                        onClick={handler}
                        src={`${
                            import.meta.env.VITE_PUBLIC_URL
                        }/assets/images/close-icon.svg`}
                        alt="close"
                        width="54"
                        height="54"
                        className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
                    />
                </div>
            </div>
        </div>
    );
}
