🧑‍⚕️ SkinWise – AI Powered Skin Disease Detection System














📌 Project Overview

SkinWise is my Final Year Project, developed to assist in the early detection of skin diseases using Deep Learning (MobileNetV3Small) and a web-based application.
The system allows users to upload skin images, and the trained AI model predicts the most probable skin disease along with a confidence score.

This project combines:

MobileNetV3Small (Transfer Learning) for lightweight, efficient skin disease detection

FastAPI Backend (model inference API)

React Frontend (user-friendly interface with skincare information & hospital locator)

Geolocation + API integrations (hospital locator via Overpass/Foursquare API)

🎯 Features

🔍 Skin Disease Detection – Upload an image to get AI-powered predictions

📊 Confidence Scores – Model returns prediction probability

🏥 Hospital Locator – Finds nearby hospitals using geolocation + APIs

📚 Skincare Information – Tips, routines, precautions, and disease-specific information

🌐 Web-Based System – Built with React (Frontend) + FastAPI (Backend)

⚡ Lightweight Model – MobileNetV3 ensures fast & efficient inference

🛠️ Tech Stack
AI/ML Model

MobileNetV3Small (Transfer Learning from ImageNet)

TensorFlow / Keras

OpenCV + NumPy (image preprocessing)

Backend

FastAPI (Python)

Model Inference API (/predict endpoint)

CORS middleware (for frontend-backend communication)

Frontend

React (Vite + TailwindCSS + ShadCN UI)

Leaflet.js + Overpass API (hospital locator map)

Modern UI with interactive skincare pages

Other Tools

GitHub (Version Control)

Kaggle/DermNet Dataset (Skin disease images)

Docker (optional, for deployment)

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/skinwise.git
cd skinwise

2️⃣ Backend (FastAPI) Setup
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

3️⃣ Frontend (React) Setup
cd frontend
npm install
npm run dev

4️⃣ Open in Browser

React Frontend: http://localhost:8080

FastAPI Backend: http://localhost:8000/docs

📂 Project Structure
skinwise/
│── backend/               
│   ├── main.py             # API with /predict endpoint
│   ├── mobilenet_model.h5  # Trained MobileNetV3Small weights
│   └── requirements.txt    
│
│── frontend/              
│   ├── src/
│   │   ├── pages/
│   │   │   ├── PrecautionsPage.jsx
│   │   │   ├── SkincareInfo.jsx
│   │   │   └── TestPage.jsx
│   │   ├── components/
│   │   └── App.jsx
│   └── package.json
│
└── README.md

📊 Dataset

DermNet Skin Disease Image Dataset (Public dataset with multiple skin conditions)

Images resized to 224x224 (for MobileNet input)

Data augmentation applied for robustness

🤖 Model Training

Base Model: MobileNetV3Small (pretrained on ImageNet)

Fine-Tuning: Last few layers retrained on skin disease dataset

Loss Function: Categorical Crossentropy

Optimizer: Adam with learning rate scheduling

Evaluation: Accuracy, Precision, Recall, F1-score

Saved as mobilenet_model.h5
