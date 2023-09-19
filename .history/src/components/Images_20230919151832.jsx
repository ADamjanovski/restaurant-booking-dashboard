const Images = () => {
  import React, { useState } from "react";

  function UploadPhoto() {
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
      formData.append("file", selectedFile);

      try {
        const response = await fetch("/upload", {
          method: "POST",
          body: formData,
        });

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
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Photo</button>
      </div>
    );
  }

  export default UploadPhoto;
};
