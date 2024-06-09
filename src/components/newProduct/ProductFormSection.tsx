import React from "react";
import { Control } from "react-hook-form";
import FormFieldWrapper from "@/common/FormFields";

interface Field {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  type: string;
  options?: Array<{ label: string; value: string }>;
}

interface ProductFormSectionProps {
  control: Control<any>;
  fields: Field[];
}

const ProductFormSection: React.FC<ProductFormSectionProps> = ({
  control,
  fields,
}) => (
  <div>
    {fields.map((field) => (
      <FormFieldWrapper
        key={field.name}
        control={control}
        name={field.name}
        label={field.label}
        type={field.type}
        options={field.options}
        placeholder={field.placeholder}
        description={field.description}
      />
    ))}
  </div>
);

export default ProductFormSection;
