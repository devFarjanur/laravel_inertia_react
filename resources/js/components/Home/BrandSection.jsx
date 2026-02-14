export default function BrandSection({ className, sectionTitle }) {
    const brands = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <div data-aos="fade-up" className={`w-full ${className || ""}`}>
            <div className="container-x mx-auto">
                <div className="section-title flex justify-between items-center mb-5">
                    <div>
                        <h1 className="sm:text-3xl text-xl font-600 text-qblacktext">
                            {sectionTitle}
                        </h1>
                    </div>
                </div>
                <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2">
                    {brands.map((num) => (
                        <div key={num} className="item">
                            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center hover:shadow-lg transition-shadow duration-300">
                                <img
                                    src={`${
                                        import.meta.env.VITE_PUBLIC_URL
                                    }/assets/images/brand-${num}.png`}
                                    alt={`Brand ${num}`}
                                    className="max-w-[120px] max-h-[80px] object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
