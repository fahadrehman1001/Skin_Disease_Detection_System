from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import cv2
from keras.models import load_model

app = FastAPI()

# CORS setup - allow React frontend on localhost:8080 to access this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Your disease classes
class_labels = {
    0: 'Cellulitis Impetigo and other Bacterial Infections',
    1: 'Atopic Dermatitis Photos',
    2: 'Hair Loss Photos Alopecia and other Hair Diseases',
    3: 'Nail Fungus and other Nail Disease',
    4: 'Exanthems and Drug Eruptions',
    5: 'Warts Molluscum and other Viral Infections',
    6: 'Lupus and other Connective Tissue diseases',
    7: 'Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions',
    8: 'Systemic Disease',
    9: 'Eczema Photos'
}

# Load your trained model once at startup
model = load_model('weights.keras')

def preprocess_image_from_bytes(image_bytes, target_size=(224, 224)):
    """
    Convert uploaded image bytes to a numpy array for prediction.
    """
    npimg = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
    if img is None:
        raise ValueError("Could not decode image")
    img_resized = cv2.resize(img, target_size)
    img_rgb = cv2.cvtColor(img_resized, cv2.COLOR_BGR2RGB)
    img_expanded = np.expand_dims(img_rgb, axis=0)
    return img_expanded

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """
    Receive image file, preprocess, predict and return results.
    """
    try:
        image_bytes = await file.read()
        img = preprocess_image_from_bytes(image_bytes)

        preds = model.predict(img)
        predicted_index = int(np.argmax(preds[0]))
        confidence = float(np.max(preds[0]) * 100)
        predicted_label = class_labels[predicted_index]

        return {
            "prediction": predicted_label,
            "confidence": round(confidence, 2),
            "index": predicted_index
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error processing image: {str(e)}")


# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8001)
