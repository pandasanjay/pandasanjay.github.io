import React from 'react';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

const Testimonials = () => {
  const { theme } = useTheme(); // Get theme context
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          testimonials {
            name
            title
            text
            image
          }
        }
      }
    }
  `);

  const testimonials = data.site.siteMetadata.testimonials;

  return (
    // Container margin
    <div className="mb-10 md:mb-16 lg:mb-20">
      {/* Title color */}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-10 text-center">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          // Card background, shadow, border
          <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-slate-700/50 hover:shadow-lg transition-shadow duration-300 h-full border border-slate-200 dark:border-slate-700">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={withPrefix(testimonial.image)}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-slate-200 dark:border-slate-600"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/200x200/1e293b/ffffff?text=Profile';
                  }}
                />
                <div>
                  {/* Name color */}
                  <h5 className="font-medium text-slate-900 dark:text-white">{testimonial.name}</h5>
                  {/* Title color */}
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                </div>
              </div>
              {/* Text color */}
              <p className="text-slate-700 dark:text-slate-300 italic">"​{testimonial.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;