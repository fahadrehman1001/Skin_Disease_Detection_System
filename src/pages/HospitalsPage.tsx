
import Map from "@/components/Map";

const HospitalsPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Find Dermatology Hospitals Near You</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Locate skin specialists and dermatology clinics in your area for professional consultation and treatment.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Map />
          
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Why Visit a Dermatologist?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-lg mb-3">Professional Expertise</h3>
                <p className="text-gray-600 mb-4">
                  Dermatologists are specially trained to diagnose and treat over 3,000 different skin conditions. 
                  They can provide accurate diagnosis and treatment plans for various skin, hair, and nail issues.
                </p>
                <h3 className="font-medium text-lg mb-3">Treatment Options</h3>
                <p className="text-gray-600">
                  From prescription medications and specialized procedures to advanced 
                  therapies, dermatologists offer treatments not available over-the-counter.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-3">When to See a Dermatologist</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Persistent acne, rashes, or skin irritations</li>
                  <li>Changes in the size, shape, or color of moles</li>
                  <li>Severe skin conditions like psoriasis or eczema</li>
                  <li>Hair loss or scalp issues</li>
                  <li>Nail disorders or infections</li>
                  <li>Skin cancer screenings and examinations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalsPage;
