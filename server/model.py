import os
import joblib
import pandas as pd

class Model:
    def __init__(self, model_path="../models/iris_model.pkl"):
        self.model_path = model_path
        self.model = None
        self.load_model()

    def load_model(self):
        if os.path.exists(self.model_path):
            self.model = joblib.load(self.model_path)
        else:
            raise FileNotFoundError(f"Model file not found at {self.model_path}")

    def predict(self, data):
        target_names = ['Setosa', 'Versicolor', 'Virginica']

        if self.model is None:
            raise ValueError("Model is not loaded")
        
        # Convert dict to DataFrame
        if isinstance(data, dict):
            data = pd.DataFrame([data])
        
        prediction = self.model.predict(data)[0]
        probabilities = self.model.predict_proba(data)[0]
        
        predicted_class = target_names[prediction]
        confidence = probabilities[prediction] * 100 

        return {
            "class": predicted_class,
            "confidence": round(confidence, 2) 
        }
