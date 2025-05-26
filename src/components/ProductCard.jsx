import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="no-underline">
      <Card className="h-[350px] w-full rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col font-poppins">
        <CardActionArea className="h-full flex flex-col">
          <div className="relative bg-white p-4 flex items-center justify-center h-[180px]">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full object-contain"
            />
            <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-[10px] font-medium px-2 py-1 rounded-full uppercase">
              {product.category}
            </span>
          </div>

          <CardContent className="flex flex-col justify-between grow px-4 pb-4 gap-2">
            <Typography
              component="h2"
              className="text-xl font-bold text-gray-800 leading-snug tracking-tight line-clamp-2 font-poppins"
              style={{
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {product.title}
            </Typography>

            <Typography variant="body2" className="text-sm text-green-600 font-medium mt-2">
              ${product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
