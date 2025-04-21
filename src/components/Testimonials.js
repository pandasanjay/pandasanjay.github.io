import React from 'react';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';

const Testimonials = () => {
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
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={withPrefix(testimonial.image)}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/200x200/1e293b/ffffff?text=Profile';
                  }}
                />
                <div>
                  <h5 className="font-medium text-slate-900 dark:text-white">{testimonial.name}</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 italic">"​{testimonial.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;