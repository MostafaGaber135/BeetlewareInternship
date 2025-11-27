import React from "react";
import { Zoom } from "react-awesome-reveal";

export default function ItemList({ itemsData }) {
    return (

        <div className="w-full mx-auto p-4">

            <Zoom>

                {
                    itemsData.length >= 1 ? (itemsData.map((items) => {
                        return (
                            <div key={items.id} className="w-full bg-white rounded-xl shadow flex flex-row overflow-hidden mt-4">
                                <div className="w-48 h-32 shrink-0">
                                    <img
                                        src={items.image}
                                        alt={items.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex-1 relative px-6 py-4 flex flex-col justify-center">
                                    <span className="absolute top-3 left-4 text-sm font-semibold text-orange-600">
                                        {items.price}
                                    </span>
                                    <h2 className="text-base font-semibold text-gray-800 mb-2">
                                        {items.title}
                                    </h2>
                                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                                        {items.description}
                                    </p>
                                </div>
                            </div>)
                    })) : <h3>لا يوجد اسناف</h3>
                }
            </Zoom>
        </div>
    );
}
