import React, { useState } from 'react';
import { validateContactForm } from '../utils/validation';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Validate form
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(process.env.GATSBY_FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ type: 'danger', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.message && (
        <div className={`p-4 mb-4 rounded-md ${
          status.type === 'success' 
            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' 
            : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
        }`}>
          {status.message}
        </div>
      )}
      
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 bg-white dark:bg-slate-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.name 
              ? 'border-red-500 dark:border-red-400' 
              : 'border-slate-300 dark:border-slate-600'
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 bg-white dark:bg-slate-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.email 
              ? 'border-red-500 dark:border-red-400' 
              : 'border-slate-300 dark:border-slate-600'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={`w-full px-3 py-2 bg-white dark:bg-slate-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.message 
              ? 'border-red-500 dark:border-red-400' 
              : 'border-slate-300 dark:border-slate-600'
          }`}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
        )}
      </div>
      
      <button 
        type="submit" 
        className="px-6 py-2 text-white bg-accent hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;