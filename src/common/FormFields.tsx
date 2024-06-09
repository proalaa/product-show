import React from "react";
import { Controller, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import ImageUploader from "@/components/ui/ImageUploader";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormFieldWrapperProps {
  control: Control<any>;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  description?: string;
  options?: Array<{ label: string; value: string }>;
}

const FormFieldWrapper: React.FC<FormFieldWrapperProps> = ({
  control,
  name,
  label,
  type,
  placeholder,
  description,
  options,
}) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState: { error } }) => (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="mt-1">
          {type === "select" ? (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options?.map((option) => (
                    <SelectItem key={option.label} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : type === "image" ? (
            <ImageUploader onChange={field.onChange} />
          ) : (
            <Input
              placeholder={placeholder}
              {...field}
              onChange={(value) =>
                field.onChange(
                  type === "number"
                    ? value.target.valueAsNumber
                    : value.target.value,
                )
              }
              type={type}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          )}
        </div>
        {description && (
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        )}
        {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
      </div>
    )}
  />
);

export default FormFieldWrapper;
