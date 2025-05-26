import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <div className="flex justify-center mt-10"><CircularProgress /></div>;
    }

    if (!product) return <div className="text-center mt-10">Product not found</div>;

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 font-poppins">
            <Button
                variant="outlined"
                onClick={() => navigate("/")}
                className="pb-6"
            >
                Back to Products
            </Button>

            <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-5">

                <div className="flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="object-contain h-80 w-full max-w-sm"
                    />
                </div>

                <div className="space-y-5">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight tracking-tight">
                        {product.title}
                    </h1>
                    <p className="text-2xl text-green-600 font-semibold">${product.price}</p>
                    <p className="text-sm uppercase text-gray-500 font-medium">{product.category}</p>
                    <p className="text-gray-700 leading-relaxed text-[15px]">
                        {product.description}
                    </p>

                    <Button
                        variant="contained"
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}
