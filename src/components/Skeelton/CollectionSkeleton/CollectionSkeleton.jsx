import React from 'react';
const skeletonItems = Array(8).fill(0);
const CollectionSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 animate-pulse">
            {/* Title Skeleton */}
            <div className="h-10 bg-gray-200 w-48 mx-auto mb-12"></div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skeletonItems.map((_, index) => (
                    <div key={index} className="border border-gray-100 p-2">
                        {/* Image Skeleton */}
                        <div className="w-full h-80 bg-gray-200 mb-4"></div>

                        {/* Title & Price Skeleton */}
                        <div className="h-5 bg-gray-200 w-3/4 mb-3"></div>
                        <div className="h-4 bg-gray-200 w-1/2 mb-4"></div>

                        {/* Button Skeleton */}
                        <div className="h-10 bg-gray-200 w-full"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollectionSkeleton;