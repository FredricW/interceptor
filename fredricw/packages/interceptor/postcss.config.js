const { join } = require('path');

// Note: If you use library-specific PostCSS/Tailwind configuration then you should remove the `postcssConfig` build
// option from your application's configuration (i.e. project.json).
//
// See: https://nx.dev/guides/using-tailwind-css-in-react#step-4:-applying-configuration-to-libraries

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
    'postcss-prefixwrap': '#interceptor-root',
    // This is a workaround for making sure that tailwind preflight is
    // scoped to the interceptor-root. Regular tailwind classes are
    // scoped by the prefix option in tailwind.config.js.
  },
};
