import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-3xl font-bold mb-6">Register for Consultation</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Full Name"
            className="w-full p-2 border rounded"
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        <div>
          <input
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div>
          <select
            {...register("program", { required: "Program is required" })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Program</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate</option>
            <option value="language">Language Course</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-primary text-white p-2 rounded">
          Register Now
        </button>
      </form>
    </div>
  );
};

export default Register;