import React from 'react';

interface FileUploadPreviewProps {
  files: FileList;
  onRemoveFile: (fileName: string) => void;
}

const FileUploadPreview: React.FC<FileUploadPreviewProps> = ({ files, onRemoveFile }) => {
  return (
    <div className="flex flex-wrap gap-3 mt-4 bg-gray-100 p-3 rounded-lg relative">
      {Array.from(files).map((file) =>
        file.type.startsWith("image") ? (
          <div key={file.name} className="relative w-20 h-20 group">
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="w-full h-full rounded-md object-cover"
            />
            <button 
              onClick={() => onRemoveFile(file.name)}
              className="text-xs text-center absolute w-5 h-5 top-0 right-0 bg-red-500 text-white rounded-full p-1 m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              title="Remove file"
            >X
            </button>
          </div>
        ) : (
          <div
            key={file.name}
            className="relative p-2 w-32 h-16 overflow-hidden border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 flex items-center group"
          >
            <span 
              className="text-sm text-gray-700 dark:text-gray-300 truncate w-full text-left" 
              title={file.name}
            >
              {file.name}
            </span>
            <button 
              onClick={() => onRemoveFile(file.name)}
              className="text-xs text-center absolute top-0 w-5 h-5 right-0 bg-red-500 text-white rounded-full p-1 m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              title="Remove file"
            >X
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default FileUploadPreview;