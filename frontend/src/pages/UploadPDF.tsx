import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

function UploadPDF () {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        if (event.target.files) {
            setSelectedFile(event.target.files[0])
        }
    };
    const handleUpload = async() =>{
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('file', selectedFile)

        try {
            const response = await axios.post('/api/upload/', formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully:', response.data);
            } catch (error) {
            console.error('Error uploading file:', error);
            }
            };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload File
      </button>
    </div>
  );
}

export default UploadPDF