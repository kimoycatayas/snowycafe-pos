import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Snowy Cafe POS
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Manage your ice cream shop with ease
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Link
          href="/inventory"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Inventory
            </h3>
            <p className="text-gray-600">
              Manage your ice cream products and stock levels
            </p>
          </div>
        </Link>

        <Link
          href="/pos"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="text-center">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Point of Sale
            </h3>
            <p className="text-gray-600">
              Process customer orders and transactions
            </p>
          </div>
        </Link>

        <Link
          href="/admin"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Admin Dashboard
            </h3>
            <p className="text-gray-600">View sales reports and analytics</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
