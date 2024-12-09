import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="p-6 bg-white rounded-md shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Button */}
            <div className="text-right">
              <Link to="/">
                <button className="text-sm bg-white text-black px-3 py-1 rounded-md hover:bg-blue-500">
                  X
                </button>
              </Link>
            </div>

            {/* Heading */}
            <h3 className="text-2xl font-bold text-center mb-4">Contact</h3>

            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md outline-none"
                placeholder="Enter your name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md outline-none"
                placeholder="Enter your email"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Message</label>
              <textarea
                className="w-full px-3 py-2 border rounded-md outline-none"
                placeholder="Enter your message"
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-between">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit
              </button>

              {/* Back Button */}
              <Link to="/">
                <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
