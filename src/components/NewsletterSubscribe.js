import React, { useState } from 'react';
import { validateEmail } from '../utils/validation';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setStatus({ type: '', message: '' });

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${process.env.GATSBY_CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: process.env.GATSBY_CONVERTKIT_API_KEY,
            email,
          }),
        }
      );

      if (response.ok) {
        setStatus({ type: 'success', message: 'Successfully subscribed!' });
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setStatus({ type: 'danger', message: 'Failed to subscribe. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 mt-6">
      <h5 className="border-b border-slate-700 p-2 font-bold bg-slate-800 text-white shadow-md mb-4">NEWSLETTER</h5>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Subscribe to get updates on new posts and projects!</p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        {status.message && (
          <div className={`text-sm p-2 rounded ${
            status.type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 
            'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
          }`}>
            {status.message}
          </div>
        )}
        
        <div>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            className={`w-full px-3 py-2 text-sm bg-white dark:bg-slate-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
              error ? 'border-red-500 dark:border-red-400' : 'border-slate-300 dark:border-slate-600'
            }`}
          />
          {error && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{error}</p>}
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscribe;