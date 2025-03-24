import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaGraduationCap, FaGlobe, FaPhone } from "react-icons/fa";
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Register = ({ onClose }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    const preSelectedUniversity = localStorage.getItem('selectedUniversity');
    if (preSelectedUniversity) {
      const { name, country, program } = JSON.parse(preSelectedUniversity);
      setValue('university', name);
      setValue('country', country);
      setValue('program', program);
      // Clear the stored data after using it
      localStorage.removeItem('selectedUniversity');
    }
  }, [setValue]);

  const onSubmit = (data) => {
    console.log(data);
    onClose?.();
  };

  return (
    <div className="text-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Start Your Journey</h2>
        <p className="text-slate-300">
          Register for a free consultation with our education experts
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="relative">
          <FaUser className="absolute top-3 left-3 text-slate-400" />
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Full Name"
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2 px-10 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
          />
          {errors.name && (
            <span className="text-red-400 text-sm mt-1">{errors.name.message}</span>
          )}
        </div>

        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-slate-400" />
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            placeholder="Email Address"
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2 px-10 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
          />
          {errors.email && (
            <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>
          )}
        </div>

        <div className="relative">
          <FaPhone className="absolute top-3 left-3 text-slate-400" />
          <input
            {...register("phone", { required: "Phone number is required" })}
            placeholder="Phone Number"
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2 px-10 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
          />
          {errors.phone && (
            <span className="text-red-400 text-sm mt-1">{errors.phone.message}</span>
          )}
        </div>

        <div className="relative">
          <FaGraduationCap className="absolute top-3 left-3 text-slate-400" />
          <select
            {...register("program", { required: "Program is required" })}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2 px-10 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 appearance-none"
          >
            <option value="">Select Program</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="phd">PhD</option>
            <option value="diploma">Diploma</option>
          </select>
        </div>

        <div className="relative">
          <FaGlobe className="absolute top-3 left-3 text-slate-400" />
          <select
            {...register("country")}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2 px-10 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 appearance-none"
          >
            <option value="">Preferred Country (Optional)</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
            <option value="germany">Germany</option>
          </select>
        </div>

        <input
          type="hidden"
          {...register("university")}
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          Register Now
        </motion.button>
      </form>

      <p className="text-center text-slate-400 text-sm mt-6">
        By registering, you agree to our terms and conditions.
      </p>
    </div>
  );
};

export default Register;