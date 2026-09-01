import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

function EntryForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagramHandle: '',
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.instagramHandle.trim()) {
      newErrors.instagramHandle = 'Instagram username is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (serverError) setServerError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${API_URL}/api/entry`, {
        name: formData.name.trim(),
        email: formData.email.trim(),
        instagramHandle: formData.instagramHandle.trim(),
      });
      navigate('/tasks');
    } catch (err) {
      const message =
        err.response?.data?.message || 'Something went wrong. Please try again.';
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="entry-form" noValidate>
      {/* Server Error */}
      {serverError && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium flex items-center gap-2 animate-slide-down" id="server-error">
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {serverError}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Rahul Sharma"
          className={`input-field ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : ''}`}
          autoComplete="name"
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={`input-field ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : ''}`}
          autoComplete="email"
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.email}</p>
        )}
      </div>

      {/* Instagram Handle */}
      <div>
        <label htmlFor="instagramHandle" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Instagram Username
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
            @
          </span>
          <input
            type="text"
            id="instagramHandle"
            name="instagramHandle"
            value={formData.instagramHandle}
            onChange={handleChange}
            placeholder="your_username"
            className={`input-field pl-9 ${errors.instagramHandle ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : ''}`}
            autoComplete="off"
          />
        </div>
        {errors.instagramHandle && (
          <p className="mt-1.5 text-xs text-red-500 font-medium">
            {errors.instagramHandle}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        id="submit-entry"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            🎁 Submit & Enter Giveaway
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center leading-relaxed">
        By entering, you agree to our terms. We'll never spam your email.
      </p>
    </form>
  );
}

export default EntryForm;
