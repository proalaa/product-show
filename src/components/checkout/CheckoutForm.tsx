import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormFieldWrapper from "@/common/FormFields.tsx";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  address: z.string().min(1, { message: "Address is required." }),
  city: z.string().min(1, { message: "City is required." }),
  state: z.string().min(1, { message: "State is required." }),
  zip: z.string().min(1, { message: "Zip code is required." }),
  "card-number": z.string().min(1, { message: "Card number is required." }),
  expiry: z.string().min(1, { message: "Expiry date is required." }),
  cvc: z.string().min(1, { message: "CVC is required." }),
});

type FormData = z.infer<typeof FormSchema>;

export function CheckoutForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      "card-number": "",
      expiry: "",
      cvc: "",
    },
  });

  const navigate = useNavigate();

  function onSubmit(data: FormData) {
    console.log(data);
    navigate("/congrats");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormFieldWrapper
            control={form.control}
            name="name"
            label="Name"
            placeholder="John Doe"
          />
          <FormFieldWrapper
            control={form.control}
            name="address"
            label="Address"
            placeholder="123 Main St"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <FormFieldWrapper
            control={form.control}
            name="city"
            label="City"
            placeholder="San Francisco"
          />
          <FormFieldWrapper
            control={form.control}
            name="state"
            label="State"
            placeholder="CA"
          />
          <FormFieldWrapper
            control={form.control}
            name="zip"
            label="Zip"
            placeholder="94103"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormFieldWrapper
            control={form.control}
            name="card-number"
            label="Card Number"
            placeholder="4111 1111 1111 1111"
          />
          <FormFieldWrapper
            control={form.control}
            name="expiry"
            label="Expiry"
            placeholder="MM/YY"
          />
        </div>
        <FormFieldWrapper
          control={form.control}
          name="cvc"
          label="CVC"
          placeholder="123"
        />
        <Button type="submit" size="lg" className="w-full mt-6">
          Place Order
        </Button>
      </form>
    </Form>
  );
}
