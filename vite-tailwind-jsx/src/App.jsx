import React, { useState } from 'react';
import './App.css';

const ImageUpload = () => {
  const [result , setresult] = useState('');
  const [file, setFile] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://127.0.0.1:5000/api/ocr', {
          method: 'POST',
          body: formData,
        });
        
        if (response.ok) {
          const res = await response.json();
          console.log(res);
          setresult(res.text);
          //alert(`Upload successful: ${JSON.stringify(result)}`);
        } else {
          console.log('post error');
        }
      } catch (error) {
        console.error('Error:', error);
        //alert('An error occurred while uploading the image.');
      }
    } else {
      alert('Please select an image first.');
    }
  };

  return (
    <>
    <div className="image-upload-container">
      <input 
        type="file" 
        id="image-upload" 
        className="image-upload-input" 
        accept="image/*" 
        onChange={handleImageChange} 
      />
      <label htmlFor="image-upload" className="image-upload-label">
        Select Your Image <span className="upload-icon">⬆️</span>
      </label>
      <button className="upload-button" onClick={handleUpload}>
        Upload
      </button>
      {file && <p className="file-name">{file.name}</p>}
    </div>
    <div className="output-container">
    <span className="output-label">Output:</span>
    <div className="output-box">{result}</div>
  </div>
  </>
  );
};

const App = () => {
  return (
    <div className="wrapper">
      <div className="contents">
        <h1 className="header">Scribble Sense</h1>
        <ImageUpload />
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default App;
