from flask import Flask, request, jsonify, render_template
import os
from server.model import Model

app = Flask(
    __name__,
    template_folder=os.path.join(os.path.dirname(__file__), "../templates"),
    static_folder=os.path.join(os.path.dirname(__file__), "../static")
)

# Route to serve the HTML page
@app.route('/')
def index():
    return render_template('index.html')

# Route to handle form submission
@app.route('/submit', methods=['POST'])
def submit_data():
    data = request.get_json()

    input_data = [[
        float(data.get('sepal_length')),
        float(data.get('sepal_width')),
        float(data.get('petal_length')),
        float(data.get('petal_width'))
    ]]

    
    # Load the model and make a prediction
    model = Model()
    prediction = model.predict(input_data)


    return jsonify(prediction), 200

if __name__ == '__main__':
    app.run()