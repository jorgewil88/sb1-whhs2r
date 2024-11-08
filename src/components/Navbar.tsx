import React from 'react';
import { Menu, X, Search, User, Bell } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 font-bold text-2xl">
              econnect
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500">Marketplace</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500">Local Map</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500">Events</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500">Learn</a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-emerald-500">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-emerald-500">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-emerald-500">
              <User className="h-5 w-5" />
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-emerald-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500">Marketplace</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500">Local Map</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500">Events</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500">Learn</a>
          </div>
        </div>
      )}
    </nav>
  );
}