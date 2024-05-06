from flask import Flask, request, jsonify
from fastai.vision.all import *
import os
import re
import pandas as pd

# Load the exported .pkl model
learn = load_learner('abcforgraph.pkl')

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image = request.files['image']
    image_path = os.path.join('uploads', image.filename)
    image.save(image_path)

    # Log image path
    print("Image path:", image_path)

    # Predict the crop
    predicted_crop = predict_with_actual_label(image_path)

    # Delete the uploaded image after prediction
    os.remove(image_path)

    # Log predicted crop
    print("Predicted crop:", predicted_crop)

    return jsonify({'predicted_crop': predicted_crop}), 200

def predict_with_actual_label(image_path):
    img = PILImage.create(image_path)
    pred, _, probs = learn.predict(img)
    
    return pred

if __name__ == '__main__':
    app.run(debug=True)
