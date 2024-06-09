import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { toast } from "sonner";

interface ImageUploaderPropsType {
  onChange: (images: File[]) => void;
}

const MAX_FILE_SIZE_MB = 5;
const VALID_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif"];

const ImageUploader: React.FC<ImageUploaderPropsType> = ({ onChange }) => {
  const [images, setImages] = useState<File[]>([]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSelectFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    handleFiles(selectedFiles);
  };

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter((file) => {
      if (!VALID_IMAGE_TYPES.includes(file.type)) {
        toast(`Invalid file type: ${file.name}`);
        return false;
      }
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        toast(`File is too large: ${file.name}`);
        return false;
      }
      return true;
    });

    if (validFiles.length) {
      const updatedImages = [...images, ...validFiles];
      setImages(updatedImages);
      onChange(updatedImages);
    }
  };

  return (
    <div className="grid gap-4">
      <Card
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="group border-0 shadow-none"
      >
        <CardContent className="grid gap-4">
          <div
            className={`flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg transition-colors ${
              images.length > 0 ? "" : "border-gray-300 dark:border-gray-700"
            } group-[.drag-over]:border-primary group-[.drag-over]:bg-primary/10`}
          >
            {images.length === 0 && (
              <>
                <Upload className="w-10 h-10 text-gray-400 dark:text-gray-500" />
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  Drag and drop your images here
                </p>
              </>
            )}
            {images.length > 0 && (
              <p className="text-xl font-bold text-center">
                {images.length} Images Uploaded
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <Button size="sm" type="button" onClick={handleClickFileInput}>
              <Upload className="mr-2 h-4 w-4" />
              Select Files
            </Button>
            <input
              id="file-input"
              type="file"
              ref={fileInputRef}
              multiple
              className="hidden"
              onChange={handleSelectFiles}
            />
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            width={300}
            height={300}
            alt="Uploaded Image"
            className="aspect-square object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
