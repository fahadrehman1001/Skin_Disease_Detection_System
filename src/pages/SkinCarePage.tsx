const SkinCareTip = ({
  title,
  description,
  imageUrl
}: {
  title: string;
  description: string;
  imageUrl: string;
}) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>;
};
const SkinCarePage = () => {
  const tips = [{
    title: "Daily Cleansing",
    description: "Wash your face twice daily with a gentle cleanser suitable for your skin type. This removes dirt, excess oil, and impurities without stripping your skin's natural moisture.",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Moisturize Regularly",
    description: "Apply moisturizer while skin is still damp to lock in hydration. Choose non-comedogenic products that won't clog pores, especially if you have acne-prone skin.",
    imageUrl: "https://images.unsplash.com/photo-1556228841-a3a2155ca4a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Sun Protection",
    description: "Apply a broad-spectrum sunscreen with at least SPF 30 daily, even on cloudy days. Reapply every two hours when outdoors and wear protective clothing.",
    imageUrl: "https://images.unsplash.com/photo-1526758097130-bec957889049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Healthy Diet",
    description: "Consume a balanced diet rich in antioxidants, vitamins, and omega-3 fatty acids. Foods like fruits, vegetables, nuts, and fatty fish can promote skin health from within.",
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Stay Hydrated",
    description: "Drink plenty of water throughout the day to maintain skin hydration. Proper hydration helps flush toxins and supports overall skin function and appearance.",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Get Adequate Sleep",
    description: "Aim for 7-9 hours of quality sleep each night. During sleep, your skin repairs itself and produces collagen, which is essential for skin elasticity and health.",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Avoid Harsh Products",
    description: "Minimize use of products containing alcohol, fragrances, and harsh chemicals that can irritate skin. Look for gentle, hypoallergenic formulations for sensitive skin.",
    imageUrl: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Regular Exfoliation",
    description: "Exfoliate 1-3 times weekly to remove dead skin cells and promote cell turnover. Choose chemical exfoliants for sensitive skin and physical scrubs for oilier skin types.",
    imageUrl: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Manage Stress",
    description: "Practice stress-reduction techniques like meditation, yoga, or deep breathing. Chronic stress can trigger or worsen skin conditions like acne, eczema, and psoriasis.",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }];
  const preventionTips = ["Avoid sharing personal items like towels, razors, or makeup brushes to prevent the spread of skin infections.", "Keep skin clean and dry, especially in areas prone to moisture like skin folds.", "Change out of wet clothes promptly to prevent fungal infections.", "Use fragrance-free laundry detergents if you have sensitive skin.", "Avoid extremely hot showers or baths which can strip natural oils.", "Pay attention to skin changes and consult a dermatologist for persistent issues.", "Don't pick or squeeze pimples, which can lead to scarring and infection.", "Use gloves when working with household cleaning products.", "Practice good hand hygiene to prevent transferring bacteria to your face."];
  return <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Skin Care Tips & Precautions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover expert recommendations to maintain healthy skin and prevent common skin problems.
          </p>
        </div>
        
        {/* Skin Care Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tips.map((tip, index) => <SkinCareTip key={index} title={tip.title} description={tip.description} imageUrl={tip.imageUrl} />)}
        </div>
        
        {/* Precautions Section */}
        <div className="bg-skinwise-blue-light bg-opacity-30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Essential Skin Health Precautions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preventionTips.map((tip, index) => <div key={index} className="flex items-start">
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mr-3 text-skinwise-accent">
                  {index + 1}
                </div>
                <p className="text-gray-700">{tip}</p>
              </div>)}
          </div>
        </div>
        
        {/* Additional Resources */}
        
      </div>
    </div>;
};
export default SkinCarePage;