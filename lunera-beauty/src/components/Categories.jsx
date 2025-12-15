import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

export default function Categories() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  if (filteredProducts.length === 0) {
    return (
      <section className="px-10 py-20 text-gold">
        <h1 className="text-3xl font-serif capitalize">
          {category} coming soon
        </h1>
      </section>
    );
  }

  return (
    <section className="px-10 py-20">
      <h1 className="text-4xl font-serif capitalize mb-10">
        {category}
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/shop/${category}/${product.id}`}
            className="border border-gold/20 p-6 hover:border-gold transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl">{product.name}</h3>
            <p className="text-sm text-gold/70">
              {product.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
