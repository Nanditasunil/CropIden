from flask import Flask, request, jsonify
from fastai.vision.all import *
import os

app = Flask(__name__)

# Load the exported .pkl model
learn = load_learner('abcforgraph.pkl')

def predict_crop(image_path):
    # Open the image
    img = PILImage.create(image_path)
    
    # Make a prediction
    pred, pred_idx, probs = learn.predict(img)
    
    # Get the predicted class label
    predicted_class = learn.dls.vocab[pred_idx]
    
    return predicted_class

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file found'}), 400
    
    file = request.files['file']
    
    # Save the file temporarily
    image_path = 'temp_image.jpg'
    file.save(image_path)
    
    # Predict the crop
    predicted_crop = predict_crop(image_path)
    
    # Remove the temporary image file
    os.remove(image_path)
    
    return jsonify({'predicted_crop': predicted_crop}), 200

if __name__ == '__main__':
    app.run(debug=True)
