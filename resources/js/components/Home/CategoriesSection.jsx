import React from "react";

export default function CategoriesSection() {
    const categories = [
        { name: "Medicine", icon: "/assets/images/medic.webp" },
        { name: "HealthCare", icon: "/assets/images/care.webp" },
        { name: "Baby & Mom Care", icon: "/assets/images/baby.webp" },
        { name: "Herbal", icon: "/assets/images/herbal.webp" },
        { name: "Suppliment", icon: "/assets/images/energy.webp" },
        { name: "Sexul Wellness", icon: "/assets/images/sex.webp" },
        { name: "Home Care", icon: "/assets/images/homecare.webp" },
        { name: "Beauty", icon: "/assets/images/beauty.webp" },
        { name: "Food and Nutrition", icon: "/assets/images/food.webp" },
        { name: "Pet Care", icon: "/assets/images/petcare.webp" },
        { name: "Veterinary", icon: "/assets/images/vet.webp" },
        { name: "Homeopathy", icon: "/assets/images/homi.webp" },
    ];

    return (
        <div className="categories-section-wrapper w-full">
            <div className="container-x mx-auto">
                <div className="w-full categories-iems">
                    <div className="grid xl:grid-cols-8 sm:grid-cols-4 grid-cols-2 gap-10 mb-[46px]">
                        {categories.slice(0, 8).map((category, index) => (
                            <CategoryItem key={index} category={category} />
                        ))}
                    </div>

                    <div className="grid xl:grid-cols-8 sm:grid-cols-4 grid-cols-2 gap-10">
                        {categories.slice(8).map((category, index) => (
                            <CategoryItem key={index} category={category} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const CategoryItem = ({ category }) => (
    <div className="item w-full group cursor-pointer">
        <div className="w-full flex justify-center">
            <div className="w-[110px] h-[110px] rounded-full bg-[#EEF1F1] group-hover:bg-qh2-green mb-2.5 flex justify-center items-center">
                <span className="text-qblack group-hover:text-white">
                    <img
                        src={category.icon}
                        alt={category.name}
                        width="60"
                        height="60"
                        className="transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                    />
                </span>
            </div>
        </div>
        <div className="w-full flex justify-center">
            <p className="text-base text-qblack whitespace-nowrap">
                {category.name}
            </p>
        </div>
    </div>
);
