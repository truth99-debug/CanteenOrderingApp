import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// import your default Image
import adImage from "./../../../../assets/images/advertiser/41CKlQ1b08S.jpg";

const SubmitImageToDb = () => {
  // Ad Image useState
  const [selectedFoodImages, setSelectedFoodImages] = useState([]);
  const [previewImage, setPreviewImage] = useState(adImage); // Default Image

  // Ad Image Input Error useState
  const [AdImageInputErr, setAdImageInputErr] = useState(false); // Initialize with false

  // Function to preview the selected ad image
  const PreviewAdImage = (selectedImages) => {
    if (selectedImages.length === 0) {
      setPreviewImage(adImage); // Set to adImage when no images are selected
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      // after read this file above onload fun run
      reader.readAsDataURL(selectedImages[0]);
    }
  };

  const handleAdimages = (event) => {
    const selectedImages = Array.from(event.target.files);
    setAdImageInputErr(false);
    if (selectedFoodImages.length + selectedImages.length <= 3) {
      // combined already selected and newly selected Images
      setSelectedFoodImages((prevSelectedAdImages) => [
        ...prevSelectedAdImages,
        ...selectedImages,
      ]);

      PreviewAdImage([...selectedFoodImages, ...selectedImages]);
    } else {
      alert("You can only select up to 3 files.");
    }
  };

  const handleRemoveAdImages = (index) => {
    const updatedAdImages = selectedFoodImages.filter((_, i) => i !== index);
    setSelectedFoodImages(updatedAdImages);
    PreviewAdImage(updatedAdImages);
  };

  // Add a handleSubmit function if needed

  return (
    <Container>
      <h2>Create Your Ad</h2>
      <Row className="d-flex justify-content-center">
        <Image src={previewImage} fluid alt="Item" />
      </Row>
      <Row>
        <Col className="AdsHome-right-cont">
          <Form>
            <fieldset>
              <div className="mb-3">
                <p className="mb-0">
                  Upload Item Images (Maximum 3 Images){" "}
                  <sup>
                    <i className="fa-solid fa-asterisk fa-sm AdAstric"></i>
                  </sup>
                </p>
                <input
                  type="file"
                  onChange={handleAdimages}
                  multiple
                  accept=".jpg, .jpeg, .png"
                  className="BrowseImageInput form-control"
                />
                {AdImageInputErr && (
                  <p className="px-3 text-danger">
                    Please select one or more files.
                  </p>
                )}
                {selectedFoodImages.length > 0 && (
                  <div className="p-3 d-flex gap-3">
                    <p>Selected Files:</p>
                    <ul>
                      {selectedFoodImages.map((file, index) => (
                        <div
                          className="d-flex align-items-center justify-content-between gap-3"
                          key={index} // Moved key to the outer element
                        >
                          <li>{file.name}</li>
                          <i
                            className="fa-solid fa-trash fa-lg AddeleteImg"
                            onClick={() => handleRemoveAdImages(index)}
                          ></i>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* Add your Submit button */}
            </fieldset>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SubmitImageToDb;