import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { productId } = useParams();

  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div className="px-10 py-20">Product not found</div>;
  }

  return (
    <section className="px-10 py-20 max-w-4xl">
      <img src={product.image} className="rounded-xl mb-6" />
      <h1 className="text-4xl font-serif mb-4">{product.name}</h1>
      <p className="text-gold/70 mb-6">{product.description}</p>
    </section>
  );
}

