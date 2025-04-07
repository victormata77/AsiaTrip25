import React, { useState } from 'react';
import { Calendar, ChevronRight, Plane, Clock, Hotel, Camera } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeDestination, setActiveDestination] = useState('seoul');
  
  const destinations = [
    { 
      id: 'seoul', 
      name: 'Seoul', 
      dates: 'July 31 - August 4', 
      hotel: 'UH Suite The Coex',
      image: 'https://images.unsplash.com/photo-1538485399081-7c8ed8f9fc67?w=600&auto=format',
      highlights: ['Gyeongbokgung Palace', 'Bukchon Hanok Village', 'DMZ Tour', 'Gwangjang Market']
    },
    { 
      id: 'tokyo', 
      name: 'Tokyo', 
      dates: 'August 4 - 8', 
      hotel: 'MIMARU SUITES Tokyo Nihombashi',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format',
      highlights: ['Meiji Shrine', 'Shibuya Crossing', 'Sensō-ji Temple', 'teamLab Digital Art']
    },
    { 
      id: 'kyoto', 
      name: 'Kyoto', 
      dates: 'August 8 - 10', 
      hotel: 'MIMARU SUITES Kyoto Shijo',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format',
      highlights: ['Fushimi Inari Shrine', 'Golden Pavilion', 'Arashiyama Bamboo Grove', 'Gion District']
    },
    { 
      id: 'singapore', 
      name: 'Singapore', 
      dates: 'August 11 - 14', 
      hotel: 'Village Hotel Sentosa',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&auto=format',
      highlights: ['Sentosa Island', 'Gardens by the Bay', 'Marina Bay Sands', 'Cultural Heritage Tour']
    },
    { 
      id: 'kualalumpur', 
      name: 'Kuala Lumpur', 
      dates: 'August 14 - 16', 
      hotel: 'The Ritz-Carlton',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&auto=format',
      highlights: ['Petronas Twin Towers', 'Batu Caves', 'Central Market', 'Jalan Alor Night Food']
    },
    { 
      id: 'maldives', 
      name: 'Maldives', 
      dates: 'August 16 - 20', 
      hotel: 'Radisson Blu Resort Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&auto=format',
      highlights: ['Overwater Villa', 'Snorkeling & Marine Life', 'Spa Treatments', 'Water Sports']
    }
  ];
  
  // Navigation component
  const Navigation = () => (
    <div className="flex justify-center mb-6">
      <div className="flex space-x-2 bg-white rounded-full p-1 shadow-md">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-full ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('destinations')}
          className={`px-4 py-2 rounded-full ${activeTab === 'destinations' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
        >
          Destinations
        </button>
        <button
          onClick={() => setActiveTab('itinerary')}
          className={`px-4 py-2 rounded-full ${activeTab === 'itinerary' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
        >
          Itinerary
        </button>
      </div>
    </div>
  );
  
  // Overview tab content
  const OverviewContent = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Asia & Maldives Family Adventure</h2>
        <p className="text-lg">July 30 - August 21, 2025</p>
        <div className="mt-3 flex items-center gap-2">
          <Plane size={18} />
          <p>A 23-day journey through Asia's most captivating destinations</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow text-center">
          <div className="flex justify-center mb-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <Plane className="text-blue-600" size={24} />
            </div>
          </div>
          <h4 className="font-medium">6 Destinations</h4>
          <p className="text-sm text-gray-600">Seoul, Tokyo, Kyoto, Singapore, Kuala Lumpur, Maldives</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg shadow text-center">
          <div className="flex justify-center mb-2">
            <div className="bg-purple-100 p-2 rounded-full">
              <Hotel className="text-purple-600" size={24} />
            </div>
          </div>
          <h4 className="font-medium">Luxury Accommodations</h4>
          <p className="text-sm text-gray-600">From city suites to overwater villas</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg shadow text-center">
          <div className="flex justify-center mb-2">
            <div className="bg-green-100 p-2 rounded-full">
              <Camera className="text-green-600" size={24} />
            </div>
          </div>
          <h4 className="font-medium">Unforgettable Experiences</h4>
          <p className="text-sm text-gray-600">Cultural immersion to paradise beaches</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {destinations.map(dest => (
          <div 
            key={dest.id}
            className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer h-48"
            onClick={() => {
              setActiveTab('destinations');
              setActiveDestination(dest.id);
            }}
            style={{backgroundImage: `url(${dest.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold">{dest.name}</h3>
              <p className="flex items-center gap-1 text-sm">
                <Calendar size={14} />
                {dest.dates}
              </p>
            </div>
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <p className="font-bold">Explore {dest.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  // Destinations tab content
  const DestinationsContent = () => {
    const destination = destinations.find(d => d.id === activeDestination);
    
    // Additional images for each destination
    const destinationImages = {
      seoul: [
        'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=600&auto=format', // Gyeongbokgung Palace
        'https://images.unsplash.com/photo-1585993573306-89e61bd9b266?w=600&auto=format', // Bukchon Hanok Village
        'https://images.unsplash.com/photo-1592314228732-58e279f0e9b7?w=600&auto=format'  // Gwangjang Market
      ],
      tokyo: [
        'https://images.unsplash.com/photo-1583400223123-a229926b0f57?w=600&auto=format', // Meiji Shrine
        'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&auto=format', // Shibuya Crossing
        'https://images.unsplash.com/photo-1570521462033-3015e76e7432?w=600&auto=format'  // Senso-ji Temple
      ],
      kyoto: [
        'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&auto=format', // Fushimi Inari
        'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format', // Golden Pavilion
        'https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=600&auto=format'  // Bamboo Forest
      ],
      singapore: [
        'https://images.unsplash.com/photo-1574227492706-f65b24c3688a?w=600&auto=format', // Gardens by the Bay
        'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=600&auto=format', // Marina Bay Sands
        'https://images.unsplash.com/photo-1499659083562-004f32e6897b?w=600&auto=format'  // Sentosa 
      ],
      kualalumpur: [
        'https://images.unsplash.com/photo-1512698335688-864f82a1b92f?w=600&auto=format', // Petronas Towers at night
        'https://images.unsplash.com/photo-1588258219511-64eb629bbcf3?w=600&auto=format', // Batu Caves
        'https://images.unsplash.com/photo-1522547902298-51566e4fb383?w=600&auto=format'  // KL Market
      ],
      maldives: [
        'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600&auto=format', // Overwater Villas
        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&auto=format', // Underwater
        'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&auto=format'  // Beach
      ]
    };
    
    return (
      <div className="space-y-6">
        <div className="flex overflow-x-auto pb-2 gap-2">
          {destinations.map(dest => (
            <button
              key={dest.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeDestination === dest.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setActiveDestination(dest.id)}
            >
              {dest.name}
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div 
            className="h-56 bg-cover bg-center relative"
            style={{backgroundImage: `url(${destination.image})`}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-2xl font-bold">{destination.name}</h2>
              <p className="flex items-center gap-1 mt-2">
                <Calendar size={16} />
                {destination.dates}
              </p>
              <p className="flex items-center gap-1 mt-1">
                <Hotel size={16} />
                {destination.hotel}
              </p>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {destination.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="mt-1 text-blue-600">
                    <ChevronRight size={16} />
                  </div>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Experience {destination.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {destinationImages[destination.id].map((img, index) => (
                <div 
                  key={index}
                  className="rounded-lg overflow-hidden h-36 shadow-md"
                  style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Itinerary tab content
  const ItineraryContent = () => {
    // Featured activity images
    const activityImages = {
      seoul: 'https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?w=600&auto=format',
      tokyo: 'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=600&auto=format',
      kyoto: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?w=600&auto=format',
      singapore: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&auto=format',
      kualalumpur: 'https://images.unsplash.com/photo-1508285296015-c0b524447532?w=600&auto=format',
      maldives: 'https://images.unsplash.com/photo-1544550581-1bcabf842b77?w=600&auto=format'
    };
    
    return (
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Trip Highlights</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">July 30-31, 2025</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Departure</span>
              </div>
              <p className="mt-2 text-sm">Barcelona ✈️ Seoul</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">July 31 - August 4, 2025</h3>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Seoul</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <div 
                    className="h-32 rounded-lg bg-cover bg-center" 
                    style={{backgroundImage: `url(${activityImages.seoul})`}}
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm mb-2">Cultural exploration, DMZ tour, Korean cuisine</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Gyeongbokgung Palace & Guard Changing Ceremony</li>
                    <li>• Bukchon Hanok Village exploration</li>
                    <li>• DMZ Tour with JSA and Third Tunnel</li>
                    <li>• Gwangjang Market street food experience</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">August 4 - 8, 2025</h3>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Tokyo</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <div 
                    className="h-32 rounded-lg bg-cover bg-center" 
                    style={{backgroundImage: `url(${activityImages.tokyo})`}}
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm mb-2">Ancient temples, modern technology, digital art</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Meiji Shrine & Yoyogi Park</li>
                    <li>• Harajuku exploration and Shibuya Crossing</li>
                    <li>• Senso-ji Temple & Skytree</li>
                    <li>• teamLab Digital Art Museum</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">August 8 - 10, 2025</h3>
                <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">Kyoto</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <div 
                    className="h-32 rounded-lg bg-cover bg-center" 
                    style={{backgroundImage: `url(${activityImages.kyoto})`}}
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm mb-2">Traditional Japan, temples, bamboo forest</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Fushimi Inari Shrine torii gates</li>
                    <li>• Kinkaku-ji (Golden Pavilion)</li>
                    <li>• Arashiyama Bamboo Grove</li>
                    <li>• Gion District evening walk</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">August 11 - 14, 2025</h3>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Singapore</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <div 
                    className="h-32 rounded-lg bg-cover bg-center" 
                    style={{backgroundImage: `url(${activityImages.singapore})`}}
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm mb-2">City exploration, Sentosa Island resort</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Gardens by the Bay & Supertree Grove</li>
                    <li>• Sentosa Island attractions</li>
                    <li>• Marina Bay Sands SkyPark</li>
                    <li>• Cultural Heritage Tour of Chinatown</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">August 14 - 16, 2025</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Kuala Lumpur</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <div 
                    className="h-32 rounded-lg bg-cover bg-center" 
                    style={{backgroundImage: `url(${activityImages.kualalumpur})`}}
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm mb-2">Petronas Towers, Batu Caves, night markets</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Petronas Twin Towers at sunset</li>
                    <li>• Batu Caves with 272 colorful steps</li>
                    <li>• Central Market exploration</li>
                    <li>• Jalan Alor Night Food Street</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">August 16 - 20, 2025</h3>
                <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Maldives</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <div 
                    className="h-32 rounded-lg bg-cover bg-center" 
                    style={{backgroundImage: `url(${activityImages.maldives})`}}
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm mb-2">Paradise beaches, overwater villa, snorkeling</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Radisson Blu Resort overwater villa</li>
                    <li>• Snorkeling on the house reef</li>
                    <li>• Spa treatments with ocean views</li>
                    <li>• Water sports and beach relaxation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">August 20-21, 2025</h3>
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Return</span>
              </div>
              <p className="mt-2 text-sm">Maldives ✈️ Singapore ✈️ Barcelona</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Trip Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Clock className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-medium">Duration</h4>
                <p className="text-gray-600">23 days total</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Plane className="text-green-600" size={20} />
              </div>
              <div>
                <h4 className="font-medium">Transportation</h4>
                <p className="text-gray-600">7 flights, bullet train, local transit</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <Hotel className="text-purple-600" size={20} />
              </div>
              <div>
                <h4 className="font-medium">Accommodations</h4>
                <p className="text-gray-600">7 luxury properties</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 p-2 rounded-full">
                <Calendar className="text-amber-600" size={20} />
              </div>
              <div>
                <h4 className="font-medium">Best Time to Visit</h4>
                <p className="text-gray-600">Perfect summer timing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Asia & Maldives Family Adventure</h1>
        <p className="text-lg text-gray-600 mt-2">July 30 - August 21, 2025</p>
      </header>
      
      <Navigation />
      
      <main>
        {activeTab === 'overview' && <OverviewContent />}
        {activeTab === 'destinations' && <DestinationsContent />}
        {activeTab === 'itinerary' && <ItineraryContent />}
      </main>
      
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Created with ❤️ for our family adventure | 6 travelers | Summer 2025</p>
      </footer>
    </div>
  );
};

export default App;
