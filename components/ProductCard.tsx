export default function ProductCard({ name, price }: { name: string; price: number }) {
    return (
      <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-lg transition-all">
        {/* Заглушка вместо фото */}
        <div className="w-full h-64 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
          Фото флакона
        </div>
        
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-500 mt-2 text-lg">{price} ₽</p>
        
        <button className="mt-5 w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          В корзину
        </button>
      </div>
    );
  }