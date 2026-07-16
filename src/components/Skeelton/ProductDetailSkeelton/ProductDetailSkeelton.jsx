import React from 'react';

const ProductDetailSkeelton = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 animate-pulse">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

                {/* Image Skeleton */}
                <div className="w-full h-96 bg-gray-200"></div>

                {/* Details Skeleton */}
                <div className="flex flex-col gap-4">
                    <div className="h-10 bg-gray-200 w-3/4"></div>
                    <div className="h-8 bg-gray-200 w-1/4 mt-4"></div>
                    <div className="h-20 bg-gray-200 w-full mt-2"></div>

                    <div className="flex gap-4 mt-6">
                        <div className="h-10 w-20 bg-gray-200"></div>
                        <div className="h-10 w-20 bg-gray-200"></div>
                    </div>

                    <div className="h-14 bg-gray-200 w-full mt-8"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailSkeelton;