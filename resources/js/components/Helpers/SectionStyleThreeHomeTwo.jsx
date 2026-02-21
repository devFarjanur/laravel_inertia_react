import DataIteration from "./DataIteration";
import ViewMoreTitle from "./ViewMoreTitle";
import ProductCardStyleOne from "./Cards/ProductCardStyleOne";

export default function SectionStyleThreeHomeTwo({
    className,
    sectionTitle,
    seeMoreUrl,
    products = [],
    showProducts,
}) {
    return (
        <div className={`section-style-one ${className || ""}`}>
            <ViewMoreTitle categoryTitle={sectionTitle} seeMoreUrl={seeMoreUrl}>
                <div className="products-section w-full">
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10">
                        <DataIteration
                            datas={products}
                            startLength={0}
                            endLength={showProducts}
                        >
                            {({ datas }) => (
                                <div
                                    data-aos="fade-up"
                                    key={datas.id}
                                    className="item"
                                >
                                    <ProductCardStyleOne datas={datas} />
                                </div>
                            )}
                        </DataIteration>
                    </div>
                </div>
            </ViewMoreTitle>
        </div>
    );
}
