import fastai
from fastai.vision.all import *
import torch

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

# Path to the image you want to classify
image_path = 'C:/Users/nandi/OneDrive/Desktop/wheat.jpg'

# Predict the crop
predicted_crop = predict_crop(image_path)
print("Predicted crop:", predicted_crop)
