import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-5xl md:text-6xl text-gold leading-tight mb-8">
          Glow with Grace. <br />
          Shine with Lunéra.
        </h1>

        <button className="border border-gold px-10 py-3 text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-sm tracking-widest">
          SHOP NOW
        </button>
      </section>
    </PageWrapper>
  );
}
