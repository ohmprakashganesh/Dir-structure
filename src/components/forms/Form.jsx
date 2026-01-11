import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Controller } from "react-hook-form";
// Import your components here
 import { Input} from "./Input";
import { TextArea } from "./TextArea";
import { RadioGroup } from "./RadioGroup";
import { Checkbox } from "./checkbox";
import { Select } from "./Select";
import { SearchableSelect } from "../ui/SearchSelect";
import { categories } from "../../data/Mock";
import { Button } from "@headlessui/react";
import { DropDown } from "../ui/DropDown";
import TimePicker from "./TimePicker";
import CustomDatePicker from "./CustomDatePicker";
// 1. Validation Schema
const schema = z.object({
  fullName: z.string().min(2, "Name is too short"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  gender: z.enum(["male", "female", "other"], { errorMap: () => ({ message: "Select gender" }) }),
  country: z.string().min(1, "Please select a country"),
  nation:z.string().min(1,"please select one nation "),
  time: z.string().min(1, "Please select a time"), 
  date: z.string().min(1, "Please select a date"),
  terms: z.literal(true, { errorMap: () => ({ message: "You must accept terms" }) }),
});

export default function ProfessionalForm() {
  const { register,control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { terms: false }
  });

  const onSubmit = (data) => {
    console.log("Form Results:", data);
  };
  
  return (
    <div className=" min-h-screen max-h-fit bg-base pb-20  flex justify-center items-center">
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-120 sm:w-120 md:w-120 w-full mx-3  lg:mx-auto md:mx-auto sm:mx-auto  p-6 space-y-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-bold text-gray-800 text-center border-b pb-2">User Registration</h2>

      <Input 
        label="Full Name" 
        placeholder="Enter name" 
        {...register("fullName")} 
        error={errors.fullName?.message} 
      />

      <TextArea 
        label="Biography" 
        placeholder="Tell us about yourself" 
        {...register("bio")} 
        error={errors.bio?.message} 
      />
      <Controller
     name="country"
      control={control}
      render={({ field }) => (
      <DropDown
      label="Country"
      error={errors.country?.message}
      options={[
        { label: "United States", value: "usa" },
        { label: "Canada", value: "canada" },
        { label: "United Kingdom", value: "uk" },
      ]}
      value={field.value}
      onChange={field.onChange}
    />
  )}
/>

<Select 
  label="Country"
  {...register("country")}
  error={errors.country?.message}
  options={[
    { label: "United States", value: "usa" },
    { label: "Canada", value: "canada" },
    { label: "United Kingdom", value: "uk" },
  ]}
/>


      <RadioGroup 
        label="Gender" 
        name="gender"
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" }
        ]}
        {...register("gender")}
        error={errors.gender?.message}
      />

      <Checkbox 
        label="I agree to the terms and conditions" 
        {...register("terms")}
        error={errors.terms?.message}
      />

   <Controller
  name="nation"
  control={control}
  render={({ field }) => (
    <SearchableSelect 
      label="Nation" 
      options={categories} 
      error={errors.nation?.message}
      // field.value is the current value in the form state
      value={field.value} 
      // field.onChange updates the form state and clears the error
      onSelect={(val) => field.onChange(val)} 
    />
  )}
/>
{/* --- Time Picker Section --- */}
<Controller
  name="time" // Matches Schema
  control={control}
  render={({ field }) => (
    <TimePicker
      label="Appointment Time"
      value={field.value}
      onChange={field.onChange}
      error={errors.time?.message} // Matches Name
      required
    />
  )}
/>

{/* --- Date Picker Section --- */}
{/* --- Date Picker Section --- */}
<Controller
  name="date"
  control={control}
  render={({ field }) => (
    <CustomDatePicker
      label="Scheduled Date"
      value={field.value}      // Controlled value
      onChange={field.onChange} // Updates Zod/Hook Form
      error={errors.date?.message}
      size={16}
      className="text-gray-400" // Styled for the icon
    />
  )}
/>

      <Button 
        type="submit" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "submit Form"}
      </Button>
    </form>
    </div>
  );
}