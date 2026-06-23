import React, { useState, useRef } from 'react';
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';

const FileUpload = ({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  multiple = false,
  maxFiles = 5,
  maxSize = 5 * 1024 * 1024, // 5MB
  accept = 'image/*',
  className = '',
  helperText,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [previews, setPreviews] = useState([]);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles);
    
    // Validate file count
    if (multiple && fileArray.length > maxFiles) {
      alert(`Maximum ${maxFiles} files allowed`);
      return;
    }

    // Validate file size
    const oversizedFiles = fileArray.filter(file => file.size > maxSize);
    if (oversizedFiles.length > 0) {
      alert('Some files are larger than the maximum allowed size');
      return;
    }

    // Create previews
    const newFiles = multiple ? [...files, ...fileArray] : fileArray;
    const newPreviews = newFiles.map(file => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setFiles(newFiles);
    setPreviews(newPreviews);
    
    if (onChange) {
      onChange({
        target: {
          name,
          value: multiple ? newFiles : newFiles[0],
        },
      });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (disabled) return;
    
    const droppedFiles = e.dataTransfer.files;
    handleFileChange(droppedFiles);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleRemoveFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    
    setFiles(newFiles);
    setPreviews(newPreviews);
    
    if (onChange) {
      onChange({
        target: {
          name,
          value: multiple ? newFiles : newFiles[0] || null,
        },
      });
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-6
          transition-all duration-200
          ${dragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}
          ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-70' : 'cursor-pointer hover:border-gray-400'}
          ${error ? 'border-red-500' : ''}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={!disabled ? handleButtonClick : undefined}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={(e) => {
            if (e.target.files) {
              handleFileChange(e.target.files);
            }
            e.target.value = ''; // Reset input
          }}
          className="hidden"
        />
        
        <div className="text-center">
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            {dragActive ? 'Drop files here' : 'Drag & drop files here, or click to select'}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {multiple ? `Upload up to ${maxFiles} files` : 'Upload one file'}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Max size: {maxSize / (1024 * 1024)}MB
          </p>
        </div>
      </div>
      
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helperText && !error && <p className="text-gray-500 text-sm mt-1">{helperText}</p>}
      
      {/* Preview */}
      {previews.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {previews.map((preview, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={preview.url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFile(index);
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-lg opacity-0 group-hover:opacity-100"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
              <p className="text-xs text-gray-500 truncate mt-1">
                {preview.file.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;