import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
   content: [
      './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
      './storage/framework/views/*.php',
      './resources/views/**/*.blade.php',
      './resources/js/**/*.{t,j}sx',
   ],

   theme: {
      extend: {
         fontFamily: {
            sans: ['Figtree', ...defaultTheme.fontFamily.sans],
         },
         colors: {
            primary: 'rgba(255, 201, 84, 1)',
            secondary: 'rgba(118, 46, 94, 1)',
            tertiary: 'rgba(64, 43, 74, 1)',
         }
      },
   },

   // plugins: [forms],
};
