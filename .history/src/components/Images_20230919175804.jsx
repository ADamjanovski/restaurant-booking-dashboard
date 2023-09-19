import React, { useContext, useState, useEffect } from "react";
import Card from "./UI/Card";
import AuthContext from "../context/auth-context";
import { useHttp } from "../hooks/useHttp";
const Images = () => {
  const ctx = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const getImages = () => {
    try {
      const data = useHttp({
        url: `http://localhost:3000/api/restaurants/images?restaurantId=${ctx.user.restaurantId}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (data.message !== undefined) {
        alert(data.message);
        return;
      }
      return data;
    } catch (err) {
      alert(err.message);
    }
  };
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      const response = await fetch(
        `http://localhost:3000/api/dashboard/upload/${ctx.user.restaurantId}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Photo uploaded successfully:", data.url);
      } else {
        console.error("Error uploading photo:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };
  useEffect(() => {
    getImages().then((data) => setImages(data));
  }, []);
  return (
    <div className="w-full">
      <Card>
        <div className="">
          <div className="flex flex-col items-center p-3">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-5"
            />
            <button
              onClick={handleUpload}
              className="bg-accent rounded-md w-1/2 "
            >
              Upload Photo
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {images &&
            images.map((image) => (
              <figure>
                <img src={image.url} className="max-w-[500px] max-h-[500px] m-5" />
                <figcaption>{image.i</figcaption>
              </figure>
            ))}
        </div>
      </Card>
    </div>
  );
};
export default Images;
