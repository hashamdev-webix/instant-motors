import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaEnvelope, 
  FaArrowLeft, 
  FaArrowRight,
  FaCar,
  FaShieldAlt,
  FaHeadset,
  FaCheckCircle,
  FaSpinner,
  FaPaperPlane,
  FaUserCheck
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Email form, 2: Success message
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStep(2);
      toast.success('Password reset link sent!');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Reset link resent successfully!');
    } catch (error) {
      toast.error('Failed to resend. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold">
              <span className="text-primary-600">Instant</span>
              <span className="text-gray-900">Motors</span>
            </h1>
          </Link>
          <p className="text-gray-600 mt-2 text-sm">
            {step === 1 ? 'Reset your password' : 'Check your email'}
          </p>
        </motion.div>

        {/* Forgot Password Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
        >
          {/* Back to Login */}
          <Link
            to="/auth/login"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 transition-colors mb-6"
          >
            <FaArrowLeft className="text-xs" />
            Back to Login
          </Link>

          {step === 1 ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <FaPaperPlane className="text-primary-500" />
                Forgot Password
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Enter your email address and we'll send you a link to reset your password.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full pl-10 pr-4 py-3 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Reset Link <FaArrowRight />
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <>
              {/* Success Step */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserCheck className="text-4xl text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Check Your Email
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  We've sent a password reset link to:
                </p>
                <p className="text-primary-600 font-semibold text-sm mb-4">
                  {formData.email}
                </p>
                <p className="text-gray-500 text-xs mb-6">
                  If you don't see the email, check your spam folder.
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleResend}
                    disabled={isLoading}
                    className="bg-primary-50 hover:bg-primary-100 text-primary-600 font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      <>
                        <FaPaperPlane />
                        Resend Link
                      </>
                    )}
                  </button>
                  
                  <Link
                    to="/auth/login"
                    className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    Back to Login
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-3 gap-4 mt-6"
        >
          <div className="text-center">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-2">
              <FaShieldAlt className="text-primary-500" />
            </div>
            <p className="text-xs text-gray-500">Secure Process</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-2">
              <FaHeadset className="text-primary-500" />
            </div>
            <p className="text-xs text-gray-500">24/7 Support</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-2">
              <FaCheckCircle className="text-primary-500" />
            </div>
            <p className="text-xs text-gray-500">Instant Delivery</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;