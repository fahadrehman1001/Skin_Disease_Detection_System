
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Shield, Info } from "lucide-react";

const PrecautionsPage = () => {
  const skinDiseases = [
    'Acne and Rosacea',
    'Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions',
    'Atopic Dermatitis',
    'Bullous Disease',
    'Cellulitis Impetigo and other Bacterial Infections',
    'Eczema',
    'Exanthems and Drug Eruptions',
    'Hair Loss Alopecia and other Hair Diseases',
    'Herpes HPV and other STDs',
    'Light Diseases and Disorders of Pigmentation',
    'Lupus and other Connective Tissue diseases',
    'Melanoma Skin Cancer Nevi and Moles',
    'Nail Fungus and other Nail Disease',
    'Poison Ivy and other Contact Dermatitis',
    'Psoriasis Lichen Planus and related diseases',
    'Scabies Lyme Disease and other Infestations and Bites',
    'Seborrheic Keratoses and other Benign Tumors',
    'Systemic Disease',
    'Tinea Ringworm Candidiasis and other Fungal Infections',
    'Urticaria Hives',
    'Vascular Tumors',
    'Vasculitis',
    'Warts Molluscum and other Viral Infections'
  ];

  // Common precautions that apply to most skin conditions
  const commonPrecautions = [
    "Maintain good hygiene by washing affected areas with mild soap and water",
    "Avoid scratching or picking at affected skin areas to prevent infection",
    "Use prescribed medications as directed by your healthcare provider",
    "Keep the affected area clean and dry to prevent further irritation",
    "Avoid sharing personal items such as towels, clothing, or bedding",
    "Use fragrance-free and hypoallergenic products if you have sensitive skin",
    "Apply sunscreen daily to protect skin from UV damage"
  ];

  // Disease-specific precautions
  const diseasePrecautions = {
    'Acne and Rosacea': [
      "Avoid hot beverages and spicy foods that can trigger flare-ups",
      "Use oil-free and non-comedogenic skincare products",
      "Cleanse face twice daily with gentle cleanser",
      "Avoid harsh scrubbing which can irritate skin further",
      "Keep hair clean and off your face",
      "Don't pop or squeeze pimples as it can lead to scarring"
    ],
    'Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions': [
      "Apply broad-spectrum sunscreen (SPF 30+) daily",
      "Wear protective clothing including hats and sunglasses",
      "Avoid direct sun exposure during peak hours (10am-4pm)",
      "Perform regular skin self-examinations",
      "Follow up with dermatologist regularly for monitoring",
      "Avoid tanning beds and sun lamps"
    ],
    'Atopic Dermatitis': [
      "Moisturize skin multiple times daily with fragrance-free products",
      "Take short, lukewarm showers instead of hot baths",
      "Identify and avoid triggers like certain foods, dust, or pollen",
      "Wear soft, breathable fabrics like cotton",
      "Keep fingernails short to minimize damage from scratching"
    ],
    'Bullous Disease': [
      "Protect blisters from rupturing to prevent infection",
      "Use gentle skin cleansers and avoid harsh soaps",
      "Apply prescribed topical medications carefully",
      "Avoid sun exposure which can worsen symptoms",
      "Follow medical advice for dressing changes and wound care"
    ],
    'Cellulitis Impetigo and other Bacterial Infections': [
      "Complete full course of prescribed antibiotics",
      "Keep affected areas clean and covered with sterile bandages",
      "Wash hands thoroughly before and after touching affected areas",
      "Avoid sharing personal items that may contact the infection",
      "Monitor for signs of spreading infection (increased redness, warmth, swelling)"
    ],
    'Eczema': [
      "Moisturize skin multiple times daily",
      "Use mild, fragrance-free soaps and detergents",
      "Identify and avoid personal triggers (certain foods, stress, etc)",
      "Take shorter showers with lukewarm water",
      "Wear soft, breathable fabrics like cotton",
      "Use prescribed topical steroids only as directed"
    ],
    'Exanthems and Drug Eruptions': [
      "Discontinue suspected medication under medical supervision",
      "Apply cool compresses to relieve itching and discomfort",
      "Use prescribed antihistamines as directed",
      "Maintain detailed records of medications and reactions for future reference",
      "Wear medical alert bracelet if you have severe reactions"
    ],
    'Hair Loss Alopecia and other Hair Diseases': [
      "Avoid tight hairstyles that pull on the hair",
      "Use gentle, sulfate-free shampoos",
      "Limit use of heat styling tools",
      "Consider appropriate supplements under medical guidance",
      "Be gentle when brushing to avoid additional hair loss"
    ],
    'Herpes HPV and other STDs': [
      "Avoid intimate contact during outbreaks",
      "Use barrier protection during sexual activity",
      "Take prescribed antiviral medications as directed",
      "Inform partners about your condition",
      "Keep affected areas clean and dry",
      "Avoid touching lesions and wash hands frequently"
    ],
    'Light Diseases and Disorders of Pigmentation': [
      "Use broad-spectrum sunscreen with high SPF",
      "Wear protective clothing and wide-brimmed hats in sunlight",
      "Avoid sun exposure during peak hours",
      "Use prescribed skin lightening treatments as directed",
      "Consider makeup or cosmetic camouflage products if desired"
    ],
    'Lupus and other Connective Tissue diseases': [
      "Avoid sun exposure and use high SPF sunscreen daily",
      "Take medications as prescribed to manage symptoms",
      "Get adequate rest and manage stress levels",
      "Attend regular follow-up appointments with specialists",
      "Monitor for signs of flare-ups and report them promptly"
    ],
    'Melanoma Skin Cancer Nevi and Moles': [
      "Perform monthly skin self-exams using the ABCDE rule",
      "Visit dermatologist annually for professional skin checks",
      "Protect skin from UV exposure with sunscreen and clothing",
      "Avoid tanning beds and sunburns",
      "Know your risk factors and family history",
      "Report any changing moles promptly to your doctor"
    ],
    'Nail Fungus and other Nail Disease': [
      "Keep nails clean, dry, and trimmed short",
      "Wear breathable footwear and clean socks daily",
      "Avoid walking barefoot in public areas like pools and showers",
      "Don't share nail clippers or other nail tools",
      "Complete full course of antifungal treatment even if symptoms improve"
    ],
    'Poison Ivy and other Contact Dermatitis': [
      "Learn to identify and avoid trigger plants (leaves of three, let it be)",
      "Wash skin immediately with soap and cold water after potential exposure",
      "Wash all clothing that may have touched allergenic plants",
      "Apply calamine lotion or prescribed medications to relieve itching",
      "Consider barrier creams when working outdoors"
    ],
    'Psoriasis Lichen Planus and related diseases': [
      "Keep skin well moisturized with thick creams or ointments",
      "Follow prescribed treatment regimen consistently",
      "Avoid skin injuries which can trigger new lesions (Koebner phenomenon)",
      "Identify and manage stress triggers",
      "Consider phototherapy treatments under medical supervision"
    ],
    'Scabies Lyme Disease and other Infestations and Bites': [
      "Complete full course of prescribed treatments for all household members",
      "Wash all bedding, clothing and towels in hot water and dry on high heat",
      "Vacuum all carpets and furniture thoroughly",
      "Use insect repellent containing DEET when outdoors in tick-prone areas",
      "Check for ticks carefully after outdoor activities"
    ],
    'Seborrheic Keratoses and other Benign Tumors': [
      "Avoid picking or scratching at growths",
      "Protect growths from friction and irritation",
      "Monitor for changes in size, color, or texture",
      "Use gentle cleansers around affected areas",
      "Consult with dermatologist about removal options if desired"
    ],
    'Systemic Disease': [
      "Follow comprehensive treatment plan from healthcare team",
      "Attend all follow-up appointments",
      "Monitor for changes in skin symptoms and report them",
      "Maintain overall health through nutrition and appropriate exercise",
      "Manage underlying conditions that may affect skin"
    ],
    'Tinea Ringworm Candidiasis and other Fungal Infections': [
      "Keep affected areas clean and dry",
      "Use antifungal treatments as prescribed until fully resolved",
      "Avoid sharing personal items that could spread infection",
      "Wear breathable fabrics and change socks and undergarments daily",
      "Dry thoroughly after bathing, especially between toes and skin folds"
    ],
    'Urticaria Hives': [
      "Identify and avoid triggers (foods, medications, etc)",
      "Apply cool compresses to relieve itching",
      "Use antihistamines as directed",
      "Avoid tight clothing and extreme temperatures",
      "Keep a symptom diary to identify patterns and triggers"
    ],
    'Vascular Tumors': [
      "Protect growths from trauma or injury",
      "Monitor for changes in size, color or bleeding",
      "Follow treatment plan from specialist",
      "Avoid constricting clothing over affected areas",
      "Consider compression garments if recommended"
    ],
    'Vasculitis': [
      "Take all prescribed medications consistently",
      "Attend regular monitoring appointments",
      "Report new symptoms promptly to healthcare provider",
      "Monitor blood pressure as directed",
      "Balance activity with adequate rest"
    ],
    'Warts Molluscum and other Viral Infections': [
      "Avoid touching or scratching lesions to prevent spread",
      "Cover warts with bandages during activities",
      "Don't share towels, clothing or personal items",
      "Complete full course of treatments as prescribed",
      "Avoid shaving over areas with warts or lesions"
    ]
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Skin Disease Precautions</h1>
          <div className="flex justify-center items-center gap-2 mb-4">
            <Shield className="text-skinwise-accent" size={24} />
            <p className="text-gray-600 max-w-2xl">
              Essential precautions for various skin conditions to prevent complications and promote healing
            </p>
          </div>
        </div>

        {/* Common Precautions Section */}
        <div className="mb-12">
          <Card className="border-skinwise-accent border-t-4">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2">
                <Shield className="text-skinwise-accent" />
                General Precautions for All Skin Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="grid gap-y-3">
                {commonPrecautions.map((precaution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-blue-100 text-skinwise-accent rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{precaution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* List of all skin diseases with hover functionality */}
        <h2 className="text-2xl font-semibold mb-6">All Skin Conditions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {skinDiseases.map((disease, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          {index + 1}
                        </div>
                        <div>{disease}</div>
                      </div>
                      <Info size={18} className="text-skinwise-accent" />
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm flex items-center gap-2">
                    <Shield size={16} className="text-skinwise-accent" />
                    {disease} Precautions
                  </h3>
                  <ul className="text-sm space-y-1">
                    {diseasePrecautions[disease] ? 
                      diseasePrecautions[disease].map((precaution, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-skinwise-accent shrink-0">•</span> 
                          <span>{precaution}</span>
                        </li>
                      )) : 
                      <li className="text-gray-500 italic">Follow general precautions and consult your healthcare provider</li>
                    }
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 italic">
            Note: This information is for educational purposes only and is not a substitute for professional medical advice. 
            Always consult with a healthcare professional for proper diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrecautionsPage;
