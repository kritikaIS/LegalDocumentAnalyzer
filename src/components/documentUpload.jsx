import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/documentUpload.css';

const DocumentUpload = ({ onUpload, isLoading }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    validateFile(selectedFile);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    validateFile(droppedFile);
  };

  const validateFile = (selectedFile) => {
    if (selectedFile) {
      const validTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (validTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setError('');
      } else {
        setError('Please upload a PDF or Word document');
        setFile(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      await onUpload(file);
      navigate('/results');
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <section id="upload" className="document-upload-section">
      <div className="legal-pattern"></div>
      <div className="containerUpload">
        <div className="section-header">
          <h2>Document Analysis</h2>
          <p className="subtitle">Upload your legal document for AI-powered review</p>
          <div className="divider"></div>
        </div>

        <form onSubmit={handleSubmit} className="upload-form">
          <div 
            className={`upload-area ${isDragging ? 'dragging' : ''} ${file ? 'has-file' : ''}`}
            onClick={triggerFileInput}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="document-upload"
              ref={fileInputRef}
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              disabled={isLoading}
            />
            <div className="upload-content">
              {file ? (
                <div className="file-preview">
                  <div className="file-icon">📄</div>
                  <div className="file-info">
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                  <button 
                    type="button" 
                    className="clear-file"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                    }}
                  >
                    ×
                  </button>
                </div>
              ) : (
                <>
                  <div className="upload-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                  <div className="upload-text">
                    <p>Drag & drop your document here</p>
                    <p className="or-text">or</p>
                    <p className="browse-text">Browse files</p>
                  </div>
                  <p className="file-types">Supported formats: PDF, DOC, DOCX</p>
                </>
              )}
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button
            type="submit"
            className={`analyze-btn ${!file || isLoading ? 'disabled' : ''}`}
            disabled={!file || isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Analyzing Document...
              </>
            ) : (
              <>
                <span>Analyze Document</span>
                <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DocumentUpload;