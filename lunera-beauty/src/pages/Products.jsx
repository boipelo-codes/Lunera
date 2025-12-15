import PageWrapper from "../components/PageWrapper";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products() {
  return (
    <PageWrapper>
      <section className="px-16 py-20">
        <h1 className="font-serif text-4xl text-gold mb-12">
          Our Collection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
