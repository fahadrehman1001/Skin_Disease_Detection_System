// components/Map.jsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
// Fix Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const RecenterMap = ({ location }) => {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.setView(location, 13);
    }
  }, [location, map]);
  return null;
};

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(coords);
        fetchHospitals(coords.lat, coords.lng);
      },
      (error) => {
        console.error("Geolocation error:", error);
        const fallback = { lat: 40.7128, lng: -74.006 }; // NYC
        setUserLocation(fallback);
        fetchHospitals(fallback.lat, fallback.lng);
      }
    );
  }, []);

  const fetchHospitals = async (lat, lng) => {
    const query = `
      [out:json];
      (
        node["amenity"~"hospital|clinic"](around:5000,${lat},${lng});
        way["amenity"~"hospital|clinic"](around:5000,${lat},${lng});
      );
      out center;
    `;

    try {
      const response = await axios.post(
        "https://overpass-api.de/api/interpreter",
        new URLSearchParams({ data: query }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      const elements = response.data.elements;
      const parsedHospitals = elements.map((el) => ({
        id: el.id,
        name: el.tags?.name || "Unnamed",
        lat: el.lat || el.center?.lat,
        lng: el.lon || el.center?.lon,
        type: el.tags?.amenity,
        address: `${el.tags?.["addr:street"] || ""}, ${el.tags?.["addr:city"] || ""}`,
      }));

      setHospitals(parsedHospitals);
    } catch (err) {
      console.error("Failed to fetch hospitals:", err);
    }
  };

  if (!userLocation) return <div className="h-[400px] bg-gray-200">Loading map...</div>;

  return (
    <div>
      <div className="h-[500px] mb-6">
        <MapContainer center={userLocation} zoom={13} scrollWheelZoom={true} className="h-full w-full z-0">
          <RecenterMap location={userLocation} />
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={userLocation}>
            <Popup><strong>You are here</strong></Popup>
          </Marker>
          {hospitals.map((hospital) => (
            <Marker key={hospital.id} position={[hospital.lat, hospital.lng]}>
              <Popup>
                <strong>{hospital.name}</strong><br />
                {hospital.address}<br />
                Type: {hospital.type}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Hospital Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="p-4 rounded-2xl shadow bg-white">
            <h3 className="text-xl font-semibold">{hospital.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{hospital.address || "No address available"}</p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${hospital.lat},${hospital.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-blue-600 text-white px-4 py-1.5 rounded-xl text-sm hover:bg-blue-700 transition"
            >
              Get Directions
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;




// import { useEffect, useRef, useState } from 'react';
// import { Hospital } from '@/types';
// import { useToast } from '@/hooks/use-toast';

// const mockHospitals: Hospital[] = [
//   {
//     id: "1",
//     name: "City General Hospital",
//     address: "123 Main St, New York, NY",
//     specialties: ["Dermatology", "General Medicine"],
//     rating: 4.5,
//     latitude: 40.712776,
//     longitude: -74.005974
//   },
//   {
//     id: "2",
//     name: "Memorial Healthcare",
//     address: "456 Park Ave, New York, NY",
//     specialties: ["Dermatology", "Plastic Surgery"],
//     rating: 4.8,
//     latitude: 40.730610,
//     longitude: -73.985242
//   },
//   {
//     id: "3",
//     name: "University Medical Center",
//     address: "789 5th Ave, New York, NY",
//     specialties: ["Research", "Dermatology", "Oncology"],
//     rating: 4.7,
//     latitude: 40.748817,
//     longitude: -73.985428
//   }
// ];

// const Map = () => {
//   const mapRef = useRef<HTMLDivElement>(null);
//   const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
//   const [nearbyHospitals, setNearbyHospitals] = useState<Hospital[]>([]);
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const { toast } = useToast();
  
//   // Initialize map with user location
//   useEffect(() => {
//     const getUserLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             setUserLocation({ lat: latitude, lng: longitude });
            
//             // In a real app, you would make an API call to find nearby hospitals
//             // For this demo, we'll just calculate distances to our mock hospitals
//             const hospitalsWithDistance = mockHospitals.map(hospital => {
//               // Calculate rough distance using Haversine formula
//               const distance = calculateDistance(
//                 latitude, longitude, 
//                 hospital.latitude, hospital.longitude
//               );
              
//               return {
//                 ...hospital,
//                 distance: `${distance.toFixed(1)} miles`
//               };
//             });
            
//             setNearbyHospitals(hospitalsWithDistance);
//           },
//           (error) => {
//             console.error("Error getting location:", error);
//             toast({
//               title: "Location access denied",
//               description: "We couldn't access your location. Using default location instead.",
//               variant: "destructive",
//             });
            
//             // Use default location (New York)
//             setUserLocation({ lat: 40.7128, lng: -74.0060 });
//             setNearbyHospitals(mockHospitals);
//           }
//         );
//       } else {
//         toast({
//           title: "Geolocation not supported",
//           description: "Your browser does not support geolocation.",
//           variant: "destructive",
//         });
        
//         // Use default location (New York)
//         setUserLocation({ lat: 40.7128, lng: -74.0060 });
//         setNearbyHospitals(mockHospitals);
//       }
//     };
    
//     getUserLocation();
//   }, [toast]);
  
//   // Render map when userLocation is available
//   useEffect(() => {
//     if (!userLocation || !mapRef.current) return;
    
//     // In a real implementation, we would load a map library like Google Maps or Mapbox
//     // For this demo, we'll just simulate map rendering
//     const simulateMapLoad = () => {
//       setTimeout(() => {
//         setMapLoaded(true);
//       }, 800);
//     };
    
//     simulateMapLoad();
//   }, [userLocation]);
  
//   // Calculate distance between two coordinates using Haversine formula
//   const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
//     const R = 3958.8; // Earth radius in miles
//     const dLat = (lat2 - lat1) * Math.PI / 180;
//     const dLon = (lon2 - lon1) * Math.PI / 180;
    
//     const a = 
//       Math.sin(dLat/2) * Math.sin(dLat/2) +
//       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
//       Math.sin(dLon/2) * Math.sin(dLon/2);
    
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//     const distance = R * c;
    
//     return distance;
//   };

//   return (
//     <div className="w-full">
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div 
//           ref={mapRef}
//           className="h-[400px] bg-gray-200 relative"
//         >
//           {!mapLoaded ? (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-skinwise-accent"></div>
//             </div>
//           ) : (
//             <div className="absolute inset-0 bg-skinwise-blue-light flex items-center justify-center">
//               <div className="text-center px-4">
//                 <p className="text-lg font-semibold mb-2">Map Visualization</p>
//                 <p className="text-sm text-gray-600">In a real implementation, this would display an interactive map with hospital locations.</p>
//               </div>
//             </div>
//           )}
//         </div>
        
//         <div className="p-6">
//           <h3 className="text-lg font-semibold mb-4">Nearby Dermatology Hospitals</h3>
          
//           {nearbyHospitals.length > 0 ? (
//             <div className="space-y-4">
//               {nearbyHospitals.map((hospital) => (
//                 <div 
//                   key={hospital.id} 
//                   className="border border-gray-200 p-4 rounded-lg hover:border-skinwise-accent transition-colors"
//                 >
//                   <div className="flex justify-between">
//                     <h4 className="font-medium">{hospital.name}</h4>
//                     <div className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded">
//                       {hospital.distance || "N/A"}
//                     </div>
//                   </div>
//                   <p className="text-gray-600 text-sm mt-1">{hospital.address}</p>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {hospital.specialties.map((specialty, idx) => (
//                       <span 
//                         key={idx} 
//                         className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
//                       >
//                         {specialty}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex items-center mt-2">
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <svg 
//                           key={i} 
//                           className={`w-4 h-4 ${
//                             i < Math.floor(hospital.rating) 
//                               ? "text-yellow-400" 
//                               : i < hospital.rating 
//                               ? "text-yellow-200" 
//                               : "text-gray-300"
//                           }`}
//                           fill="currentColor" 
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                         </svg>
//                       ))}
//                     </div>
//                     <span className="text-sm text-gray-600 ml-2">{hospital.rating}</span>
//                   </div>
//                   <div className="mt-3">
//                     <button className="text-skinwise-accent hover:underline text-sm">
//                       Get Directions
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-8">
//               <p>Loading nearby hospitals...</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Map;
