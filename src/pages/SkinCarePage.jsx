
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Shield, Info, Sun } from "lucide-react";

const SkinCareTip = ({
  title,
  description,
  imageUrl
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
  const tips = [
    {
      title: "Daily Cleansing",
      description: "Wash your face twice daily with a gentle cleanser suitable for your skin type. This removes dirt, excess oil, and impurities without stripping your skin's natural moisture.",
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }, {
    title: "Moisturize Regularly",
    description: "Apply moisturizer while skin is still damp to lock in hydration. Choose non-comedogenic products that won't clog pores, especially if you have acne-prone skin.",
    imageUrl: "https://images.unsplash.com/photo-1728842918094-d5379cb50bec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }, {
    title: "Sun Protection",
    description: "Apply a broad-spectrum sunscreen with at least SPF 30 daily, even on cloudy days. Reapply every two hours when outdoors and wear protective clothing.",
    imageUrl: "https://images.unsplash.com/photo-1637775765405-abd36e1f470f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
  }
  ];

  const preventionTips = [
    "Avoid sharing personal items like towels, razors, or makeup brushes to prevent the spread of skin infections.",
    "Keep skin clean and dry, especially in areas prone to moisture like skin folds.",
    "Change out of wet clothes promptly to prevent fungal infections.",
    "Use fragrance-free laundry detergents if you have sensitive skin.",
    "Avoid extremely hot showers or baths which can strip natural oils.",
    "Pay attention to skin changes and consult a dermatologist for persistent issues.",
    "Don't pick or squeeze pimples, which can lead to scarring and infection.",
    "Use gloves when working with household cleaning products.",
    "Practice good hand hygiene to prevent transferring bacteria to your face."
  ];
  
  // New content - Skin Types section
  const skinTypes = [
    {
      type: "Normal Skin",
      characteristics: "Well-balanced, not too oily or dry, small pores, few imperfections",
      careRoutine: "Basic cleansing, moisturizing, and sun protection are usually sufficient."
    },
    {
      type: "Dry Skin",
      characteristics: "Tight, flaky, rough texture, visible fine lines, prone to irritation",
      careRoutine: "Use cream-based cleansers, rich moisturizers, and avoid harsh products or hot water."
    },
    {
      type: "Oily Skin",
      characteristics: "Shiny appearance, enlarged pores, prone to blackheads and acne",
      careRoutine: "Use oil-free products, gentle foaming cleansers, and lightweight moisturizers."
    },
    {
      type: "Combination Skin",
      characteristics: "Oily T-zone (forehead, nose, chin) with drier cheeks",
      careRoutine: "Target different areas with appropriate products; balance is key."
    },
    {
      type: "Sensitive Skin",
      characteristics: "Easily irritated, may sting or burn after product use, prone to redness",
      careRoutine: "Use hypoallergenic products free from fragrances, alcohol, and harsh chemicals."
    }
  ];
  
  // New content - Detailed routines
  const routineSteps = [
    {
      icon: Droplet,
      title: "Morning Routine",
      steps: [
        "1. Gentle Cleanser: Start with a mild cleanser appropriate for your skin type.",
        "2. Toner: Optional step to balance pH levels and remove any residual impurities.",
        "3. Serum: Apply targeted treatments (e.g., vitamin C for antioxidant protection).",
        "4. Eye Cream: Gently apply to the orbital bone area to address specific concerns.",
        "5. Moisturizer: Apply a lightweight moisturizer suitable for daytime wear.",
        "6. Sunscreen: Finish with SPF 30+ sunscreen, even on cloudy days."
      ]
    },
    {
      icon: Shield,
      title: "Evening Routine",
      steps: [
        "1. Makeup Removal: Use a dedicated makeup remover for thorough cleansing.",
        "2. Cleanser: Wash with a gentle cleanser to remove remaining impurities.",
        "3. Exfoliation: Use 2-3 times weekly to remove dead skin cells.",
        "4. Treatment: Apply serums with active ingredients like retinol or niacinamide.",
        "5. Eye Cream: Apply eye cream for overnight repair and hydration.",
        "6. Night Cream/Oil: Use a richer moisturizer for overnight skin recovery."
      ]
    },
    {
      icon: Sun,
      title: "Weekly Treatments",
      steps: [
        "1. Exfoliation: Chemical or physical exfoliation 1-3 times weekly.",
        "2. Face Masks: Apply targeted masks based on skin concerns (hydrating, clarifying, etc.).",
        "3. Deep Cleansing: Consider a deeper cleansing ritual to reset your skin.",
        "4. Facial Massage: Incorporate facial massage techniques to boost circulation."
      ]
    },
    {
      icon: Info,
      title: "Seasonal Adjustments",
      steps: [
        "1. Winter: Increase hydration with richer moisturizers and hydrating masks.",
        "2. Summer: Lighter formulations and increased sun protection.",
        "3. Seasonal Transitions: Gradually adjust your routine as the weather changes.",
        "4. Environmental Factors: Consider air pollution, humidity levels, and heating/cooling effects."
      ]
    }
  ];
  
  // New content - Key Ingredients section
  const commonIngredients = [
    {
      name: "Hyaluronic Acid",
      benefits: "Powerful hydrator that can hold up to 1000x its weight in water; plumps skin and reduces fine lines",
      bestFor: "All skin types, especially dehydrated skin"
    },
    {
      name: "Retinol (Vitamin A)",
      benefits: "Promotes cell turnover, reduces fine lines, improves texture and tone, helps with acne",
      bestFor: "Aging concerns, acne-prone skin (use with caution for sensitive skin)"
    },
    {
      name: "Vitamin C",
      benefits: "Potent antioxidant protection, brightens complexion, reduces hyperpigmentation, boosts collagen",
      bestFor: "All skin types looking for brightening and protection"
    },
    {
      name: "Niacinamide (Vitamin B3)",
      benefits: "Reduces inflammation, minimizes pores, regulates oil production, strengthens skin barrier",
      bestFor: "All skin types, particularly good for oily and acne-prone skin"
    },
    {
      name: "Glycolic Acid",
      benefits: "Alpha hydroxy acid (AHA) that exfoliates dead skin cells, improves texture and tone",
      bestFor: "Normal to oily skin, not recommended for sensitive skin"
    },
    {
      name: "Salicylic Acid",
      benefits: "Beta hydroxy acid (BHA) that penetrates pores to clear congestion and reduce breakouts",
      bestFor: "Oily, acne-prone skin"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Skin Care Tips & Precautions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover expert recommendations to maintain healthy skin and prevent common skin problems.
          </p>
        </div>
        
        {/* Understanding Your Skin Type */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Understanding Your Skin Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skinTypes.map((skinType, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{skinType.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Characteristics:</h4>
                  <p className="text-gray-600 mb-4">{skinType.characteristics}</p>
                  <h4 className="font-medium mb-2">Care Routine:</h4>
                  <p className="text-gray-600">{skinType.careRoutine}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Skin Care Tips Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Essential Skin Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => <SkinCareTip key={index} title={tip.title} description={tip.description} imageUrl={tip.imageUrl} />)}
          </div>
        </div>
        
        {/* Detailed Skin Care Routine */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Complete Skin Care Routine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {routineSteps.map((routine, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-skinwise-blue-light p-3 rounded-full">
                    <routine.icon className="h-6 w-6 text-skinwise-accent" />
                  </div>
                  <CardTitle>{routine.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {routine.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="text-gray-600">{step}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Key Skincare Ingredients */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Key Skincare Ingredients</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-skinwise-blue-light">
                  <th className="p-4 text-left">Ingredient</th>
                  <th className="p-4 text-left">Benefits</th>
                  <th className="p-4 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                {commonIngredients.map((ingredient, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 border-t font-medium">{ingredient.name}</td>
                    <td className="p-4 border-t text-gray-600">{ingredient.benefits}</td>
                    <td className="p-4 border-t text-gray-600">{ingredient.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Precautions Section */}
        <div id="precautions" className="bg-skinwise-blue-light bg-opacity-30 rounded-lg p-8 mb-12">
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
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Professional Consultation</h2>
          <p className="text-gray-600 mb-4">
            While these tips provide general guidance, everyone's skin is unique. 
            For specific concerns or persistent issues, consult a dermatologist for personalized advice.
          </p>
          <p className="text-skinwise-accent font-medium">
            Remember: Consistency is key to healthy skin!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkinCarePage;
