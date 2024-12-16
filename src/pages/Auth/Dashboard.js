import React from 'react'

const Dashboard = () => {
  return (
    <main className="p-6">
      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-700">Total Users</h3>
          <p className="text-2xl font-semibold text-blue-500 mt-2">1,234</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-700">Active Sessions</h3>
          <p className="text-2xl font-semibold text-green-500 mt-2">56</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-700">Server Load</h3>
          <p className="text-2xl font-semibold text-red-500 mt-2">85%</p>
        </div>
      </div>

      {/* Content Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700">Card Title</h3>
          <p className="text-gray-600 mt-2">
            This is a card with some placeholder text.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700">Another Card</h3>
          <p className="text-gray-600 mt-2">
            Another card with a different description.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700">One More Card</h3>
          <p className="text-gray-600 mt-2">
            Yet another card for additional content.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard