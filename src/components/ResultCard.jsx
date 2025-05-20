
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResultCard = ({ result }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <Card className="hover:shadow-md transition-shadow duration-300 hover-scale">
      <CardHeader className="bg-skinwise-blue-light bg-opacity-50">
        <CardTitle className="text-lg">
          {result.predictedDisease ? (
            <>
              Predicted: <span className="font-semibold">{result.predictedDisease}</span>
            </>
          ) : (
            "Analysis Results"
          )}
        </CardTitle>
        <div className="text-sm text-gray-500">
          {formatDate(result.date)}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {/* Display the uploaded image if available */}
        {result.imageUrl && (
          <div className="mb-6">
            <img 
              src={result.imageUrl} 
              alt="Skin condition" 
              className="rounded-lg max-h-64 mx-auto border border-gray-200 shadow-sm"
            />
          </div>
        )}

        {result.questions && result.questions.length > 0 ? (
          <div className="space-y-4">
            {result.questions.map((qa, index) => (
              <div key={index} className="space-y-1">
                <div className="font-medium text-sm text-gray-700">{qa.question}</div>
                <div className="text-gray-600 pl-4 border-l-2 border-skinwise-blue-light">
                  {qa.answer}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No additional information provided</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultCard;
