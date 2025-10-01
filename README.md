# 🧑‍⚕️ SkinWise – AI Powered Skin Disease Detection System

![Python](https://img.shields.io/badge/Python-3.9-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-brightgreen?logo=fastapi)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![TensorFlow](https://img.shields.io/badge/TensorFlow-DeepLearning-FF6F00?logo=tensorflow)
![MobileNetV3](https://img.shields.io/badge/Model-MobileNetV3-orange)
![Status](https://img.shields.io/badge/Status-Final%20Year%20Project-red)

---

## 📌 Project Overview

**SkinWise** is my **Final Year Project**, developed to assist in the early detection of skin diseases using **Deep Learning (MobileNetV3Small)** and a **web-based application**.
The system allows users to **upload skin images**, and the trained AI model predicts the most probable skin disease along with a confidence score.

This project combines:

* **MobileNetV3Small (Transfer Learning)** for lightweight, efficient skin disease detection
* **FastAPI Backend** (model inference API)
* **React Frontend** (user-friendly interface with skincare information & hospital locator)
* **Geolocation + API integrations** (hospital locator via Overpass/Foursquare API)

---

## 🎯 Features

* 🔍 **Skin Disease Detection** – Upload an image to get AI-powered predictions
* 📊 **Confidence Scores** – Model returns prediction probability
* 🏥 **Hospital Locator** – Finds nearby hospitals using geolocation + APIs
* 📚 **Skincare Information** – Tips, routines, precautions, and disease-specific information
* 🌐 **Web-Based System** – Built with React (Frontend) + FastAPI (Backend)
* ⚡ **Lightweight Model** – MobileNetV3 ensures **fast & efficient inference**

---

## 🛠️ Tech Stack

### **AI/ML Model**

* **MobileNetV3Small** (Transfer Learning from ImageNet)
* TensorFlow / Keras
* OpenCV + NumPy (image preprocessing)

### **Backend**

* FastAPI (Python)
* Model Inference API (`/predict` endpoint)
* CORS middleware (for frontend-backend communication)

### **Frontend**

* React (Vite + TailwindCSS + ShadCN UI)
* Leaflet.js + Overpass API (hospital locator map)
* Modern UI with interactive skincare pages

### **Other Tools**

* GitHub (Version Control)
* Kaggle/DermNet Dataset (Skin disease images)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/skinwise.git
cd skinwise
```

### 2️⃣ Backend (FastAPI) Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### 3️⃣ Frontend (React) Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📂 Project Structure

```
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
```

---

## 📊 Dataset

* **DermNet Skin Disease Image Dataset** (Public dataset with multiple skin conditions)
* Images resized to `224x224` (for MobileNet input)
* Data augmentation applied for robustness

---

## 🤖 Model Training

* **Base Model**: MobileNetV3Small (pretrained on ImageNet)
* **Fine-Tuning**: Last few layers retrained on skin disease dataset
* **Loss Function**: Categorical Crossentropy
* **Optimizer**: Adam with learning rate scheduling
* **Evaluation**: Accuracy, Precision, Recall, F1-score

📌 Final model saved as: `mobilenet_model.h5`

---

## 🖼️ Screenshots & Demo

### 🔹 Home Page

<img width="835" src="https://github.com/user-attachments/assets/2c00ca04-f155-434d-bf5a-746f992ba815" />  
<img width="821" src="https://github.com/user-attachments/assets/e217c9de-0835-41fc-a94f-96b11522b44e" />  
<img width="859" src="https://github.com/user-attachments/assets/dda1e657-51fc-428c-aab4-80bf13bbb66d" />  
<img width="870" src="https://github.com/user-attachments/assets/7fbdfa0c-ca97-45d2-a779-580c5e2e1615" />  
<img width="871" src="https://github.com/user-attachments/assets/f3259ccc-43d6-46d4-b9c0-e0128ce8e9f2" />  

---

### 🔹 Test Page & Results

<img width="796" src="https://github.com/user-attachments/assets/197ab4e8-55ef-41b7-9ef3-efd07c52ef2a" />  
<img width="869" src="https://github.com/user-attachments/assets/67e69977-419a-41f2-845e-a446ee851583" />  
<img width="855" src="https://github.com/user-attachments/assets/43f3fdd0-789d-4c38-ac35-b2384fb0e544" />  
<img width="867" src="https://github.com/user-attachments/assets/18c9f24c-6ed1-4935-8d4a-efca174dc04f" />  

---

### 🔹 Hospital Locator

<img width="818" src="https://github.com/user-attachments/assets/07a885bd-5714-44ec-a2a1-0242260292db" />  
<img width="861" src="https://github.com/user-attachments/assets/21789519-3c68-49f8-a6df-1faecea50006" />  

---

### 🔹 Skin Care Section

<img width="830" src="https://github.com/user-attachments/assets/2ec4a901-c2de-4360-8f80-c90a2b2c3d3b" />  
<img width="841" src="https://github.com/user-attachments/assets/da95298e-b1f6-4c2a-a2a1-7e3e58b60f8b" />  
<img width="839" src="https://github.com/user-attachments/assets/127563e3-b8a8-4cf4-9d4a-c9a608cc1126" />  
<img width="940" src="https://github.com/user-attachments/assets/8a8309d8-e9e2-4b18-81a1-e3486cfd10ad" />  
<img width="940" src="https://github.com/user-attachments/assets/a7e979f5-2748-4b1b-bf93-8130e3c34cbc" />  

---

## 🎓 Academic Info

This project was developed as my **Final Year Project (FYP)** for my Bachelor’s degree.
It demonstrates the integration of **Artificial Intelligence, Web Development, and Healthcare Applications**.

---

## 👨‍💻 Author

**Fahad Rehman**

---
