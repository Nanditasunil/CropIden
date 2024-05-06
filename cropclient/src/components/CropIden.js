import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import "../styles/CropIden.css";
import axios from "axios";

const CropIden = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [predictedCrop, setPredictedCrop] = useState(null);

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (image.size < 2000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      alert("Image size more than 2MB");
    }
  };

  const handleUpload = async () => {
    if (selectedImage) {
      setIsImageUploaded(true);
      const formData = new FormData();
      formData.append("file", selectedImage); // Ensure 'file' matches the key in Flask code

      try {
        const response = await axios.post(
          "http://localhost:5000/predict",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Ensure correct headers
            },
          }
        );
        setPredictedCrop(response.data.predicted_crop);
      } catch (error) {
        console.error("Error occurred during prediction:", error);
      }
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <section id="CropIden">
      <div className="container-crop">
        <p className="text-3xl mt-4 text-green-400 font-semibold ml-4 ">
          Crop Identification
        </p>
        <p className="text-1xl mt-3 text-white-950 mb-3 ml-2">
          Welcome to our Crop Identification tool! Upload an image of a crop,
          and our advanced ResNet53 based model will accurately predict its
          type, helping you make informed agricultural decisions.
        </p>
        <input
          type="file"
          id="file"
          accept="image/*"
          onChange={handleImageChange}
          hidden
        />
        <div
          className={`img-area ${selectedImage ? "active" : ""}`}
          data-img={selectedImage}
        >
          {!selectedImage ? (
            <>
              <BsCloudUpload className="icon" />
              <h3>Upload Image</h3>
              <p>
                Image size must be less than <span>2MB</span>
              </p>
            </>
          ) : (
            <img src={selectedImage} alt="Uploaded" />
          )}
        </div>
        <div className="button-container">
          <button
            className="btn-primary-2"
            onClick={() => document.querySelector("#file").click()}
          >
            Select Image
          </button>
          <button className="btn-primary-2" onClick={handleUpload}>
            Upload
          </button>
        </div>
        {isImageUploaded && (
          <p className="text-1xl mt-6 text-green-500 mb-3 font-semibold ml-2">
            The crop has been identified as {predictedCrop}.
          </p>
        )}
      </div>
    </section>
  );
};

export default CropIden;
