import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-10 text-black">Галерея Ароматов</h1>
      
      {/* Сетка для карточек */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ProductCard name="Total White" price={6300} />
        <ProductCard name="Вудсток" price={4500} />
        <ProductCard name="Гера" price={5200} />
      </div>
    </main>
  );
}