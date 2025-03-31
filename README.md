# Iris Flower Classifier Web App

This project demonstrates the end-to-end process of training, evaluating, and deploying a machine learning model using the Iris dataset. The main goal of this project was to gain practical experience in building a machine learning model and implementing it in a real-world application through a web interface.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Dataset](#dataset)
- [Model Training](#model-training)
- [Web Application](#web-application)
- [How to Run the Project](#how-to-run-the-project)
- [Technologies Used](#technologies-used)
- [Results](#results)

---

## Overview
The Iris Flower Classifier is a web application that predicts the species of an Iris flower based on its sepal and petal dimensions. The project was designed to:
1. Provide hands-on experience with training and evaluating machine learning models.
2. Deploy the trained model in a practical, user-friendly web application.

The application allows users to input flower measurements through a web interface and returns the predicted species along with the confidence level.

---

## Features
- **Model Training**: Train a machine learning model using the Iris dataset.
- **Model Evaluation**: Evaluate the model's performance using metrics like accuracy.
- **Web Interface**: A user-friendly web app where users can input flower measurements and get predictions.
- **Dynamic Predictions**: The app provides real-time predictions with confidence scores.

---

## Dataset
The [Iris dataset](https://archive.ics.uci.edu/ml/datasets/iris) is a classic dataset in machine learning and statistics. It contains 150 samples of Iris flowers, with the following features:
- Sepal Length (cm)
- Sepal Width (cm)
- Petal Length (cm)
- Petal Width (cm)

The dataset is divided into three classes:
1. Setosa
2. Versicolor
3. Virginica

---

## Model Training
The model was trained using a Jupyter Notebook to explore the dataset, preprocess the data, and train a machine learning model. Key steps include:
1. **Data Exploration**: Visualized the dataset to understand feature distributions and relationships.
2. **Preprocessing**: Normalized the data and split it into training and testing sets.
3. **Model Selection**: Trained a Logistic Regression model using scikit-learn.
4. **Evaluation**: Evaluated the model's accuracy and other metrics on the test set.

The trained model was saved as a `.pkl` file using `joblib` for deployment in the web app.

---

## Web Application
The web application was built using Flask, a lightweight Python web framework. It provides:
- A **form-based interface** where users can input flower measurements using sliders.
- A **backend** that loads the trained model and predicts the flower species based on user input.
- A **dynamic result display** showing the predicted species and confidence score.

---

## How to Run the Project

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)
- Flask and required Python libraries (see `requirements.txt` if available)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/iris-flower-classifier.git
   cd iris-flower-classifier
   ```
2. **Set up virtual environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate
    ```
3. **Install dependecies**:
    ```bash
    pip install -r requirements.txt
    ```
4. **Run all cells in the Jupyter Notebook**

5. **Model will be saved in the model folder**

6. **Run the Flask App**
    ```bash
    python server/app.py
    ```
---

## Technologies Used

- **Python**: For model training, data processing, and backend development.
- **Flask**: Lightweight web framework used to build the backend server and API.
- **scikit-learn**: For training, evaluating, and tuning the machine learning classification model.
- **Jupyter Notebook**: Used for exploratory data analysis (EDA), model experimentation, and development.
- **HTML / CSS / JavaScript**: For building the interactive frontend user interface.
- **TailwindCSS**: Utility-first CSS framework used for styling the web application with responsive design.

---

## Results

The model achieved great performance in predicting Iris flower species. Below are the highlights from the exploratory data analysis (EDA), modeling process, and evaluation:

### Data Exploration
- Dataset: 150 samples from 3 Iris classes (Setosa, Versicolor, Virginica)
- Features: Sepal Length, Sepal Width, Petal Length, Petal Width
- Visualizations: Histograms, Pairplots, and Scatterplots showed clear feature separation, especially for Setosa.

### Baseline Model
- A simple manual rule-based model based on petal length achieved **94.59% accuracy**.

### Logistic Regression Model
- Cross-validation accuracy: **97.31%**
- Final model accuracy on the test set: **97.37%**
- Confusion Matrix:
  - Perfect classification of Setosa
  - Minor misclassifications between Versicolor and Virginica
- Final model used:
  ```python
  LogisticRegression(C=1.1, max_iter=200)