import { Link } from "react-router-dom";

export default function BestSellers({ className }) {
    const sellers = [
        { name: "Shopno BD", image: "saller-1.png" },
        { name: "Eecoms Shop", image: "saller-2.png" },
        { name: "Fusion X", image: "saller-3.png" },
        { name: "Rikayi Rox", image: "saller-4.png" },
        { name: "Habbriyi", image: "saller-5.png" },
        { name: "Rayhans", image: "saller-6.png" },
    ];

    return (
        <div className={`w-full ${className || ""}`}>
            <div className="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 xl:gap-[30px] gap-5">
                {sellers.map((seller, index) => (
                    <div
                        key={index}
                        data-aos="fade-left"
                        data-aos-duration={500 - index * 100}
                        className="item w-full flex flex-col items-center group cursor-pointer"
                    >
                        <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2 group-hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={`${
                                    import.meta.env.VITE_PUBLIC_URL
                                }/assets/images/${seller.image}`}
                                alt={seller.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <Link to="/saller-page">
                            <p className="text-base font-500 text-center group-hover:text-qh2-green transition-colors duration-300">
                                {seller.name}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
