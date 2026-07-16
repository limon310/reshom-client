import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

const Collection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('product.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => console.error("Error loading products:", err));
    }, []);


    if (loading) return <span className="loading loading-ring loading-xl"></span>;

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-serif text-gray-800 mb-8 text-center uppercase tracking-widest">
                Our Collections
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Collection;