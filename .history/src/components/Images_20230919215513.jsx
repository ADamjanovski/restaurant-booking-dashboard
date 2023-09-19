import React, { useContext, useState, useEffect } from "react";
import Card from "./UI/Card";
import AuthContext from "../context/auth-context";
import { useHttp } from "../hooks/useHttp";
const Images = () => {
  const authCtx = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const getImages = () => {
    try {
      const data = useHttp({
        url: `http://localhost:3000/api/restaurants/images?restaurantId=${authCtx.user.restaurantId}`,
        method: "GET",
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
  const deleteImage = (imageName, id) => {
    try {
      const data = useHttp({
        url: `http://localhost:3000/api/restaurants/images/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
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
        <h1 className="text-center m-5 ">
          WHEN UPLOADING A PHOTO DON'T USE AN EXISTING NAME IT WILL OVERRIDE
          YOUR EXISTING PHOTO
        </h1>

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
        <div className="flex flex-wrap justify-center md:justify-start">
          {images &&
            images.map((image) => (
              <figure className="self-center" key={`figure ${image.id}`}>
                <img
                  key={image.id}
                  src={image.url}
                  className="max-w-[500px] w-[80%] max-h-[500px] m-5"
                />
                <div className="flex justify-around ">
                  <figcaption className="text-center" key={`caption ${image.id}`}>
                    {image.imageUrl}
                  </figcaption>
                  <button
                    className="bg-accent p-2 rounded-lg"
                    onClick={() => deleteImage(image.imageUrl, id)}
                    key={`button ${image.id}`}
                  >
                    Delete
                  </button>
                </div>
              </figure>
            ))}
        </div>
      </Card>
    </div>
  );
};
export default Images;
