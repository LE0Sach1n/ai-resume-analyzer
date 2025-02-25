
import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const UploadZone = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files && files.length > 0 && files[0].type === 'application/pdf') {
      setFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && files[0].type === 'application/pdf') {
      setFile(files[0]);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <div
        className={`relative p-8 text-center ${
          isDragging ? 'bg-primary/5' : 'bg-background'
        } border-2 border-dashed rounded-lg transition-colors duration-200 ease-in-out`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".pdf"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileInput}
        />
        <div className="space-y-4">
          <div className="flex justify-center">
            <Upload className="w-12 h-12 text-primary animate-float" />
          </div>
          <div>
            <p className="text-lg font-medium">
              {file ? file.name : 'Drop your resume here'}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {file ? 'File uploaded successfully' : 'or click to browse (PDF only)'}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
