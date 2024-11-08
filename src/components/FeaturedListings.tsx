import React from 'react';

const FEATURED_LISTINGS = [
  {
    id: 1,
    title: "Organic Gardening Workshop",
    type: "Service",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$25",
    time: "2 hours",
    author: "Sarah Green",
    location: "Downtown Community Center"
  },
  {
    id: 2,
    title: "Homemade Sourdough Bread",
    type: "Product",
    image: "https://images.unsplash.com/photo-1585478259715-4d3f8f7334ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$8",
    time: "4 hours",
    author: "Mike Baker",
    location: "East Side"
  },
  {
    id: 3,
    title: "Solar Panel Installation",
    type: "Service",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$200",
    time: "6 hours",
    author: "Tech Solutions Co",
    location: "Various Locations"
  }
];

export default function FeaturedListings() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Listings</h2>
          <p className="mt-4 text-lg text-gray-500">Discover what your community has to offer</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_LISTINGS.map((listing) => (
            <div key={listing.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={listing.image} alt={listing.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-emerald-600">
                    {listing.type}
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{listing.title}</p>
                    <p className="mt-3 text-base text-gray-500">By {listing.author}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-sm font-medium text-gray-500">{listing.location}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      {listing.price} • {listing.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}