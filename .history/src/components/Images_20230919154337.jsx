import React, { useContext, useState } from "react";
import Card from "./UI/Card";
import AuthContext from "../context/auth-context";
const Images = () => {
  const ctx = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
        `http://localhost:3000/api/dashboard/upload/${ctx.user.id}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
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

  return (
    <div className="mx-auto ">
      <Card>
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
      </Card>
    </div>
  );
};
export default Images;
