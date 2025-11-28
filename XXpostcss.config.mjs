// postcss.config.mjs or postcss.config.js (if your project is configured for ESM)
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import postcssPrefixSelector from 'postcss-prefix-selector'

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    postcssPrefixSelector({
      prefix: '.your-parent-class', // Replace with your desired class
      exclude: [], // Add any selectors you want to exclude from prefixing
      transform: (prefix, selector, prefixedSelector, file) => {
        // Only apply prefix to Preflight styles
        if (file.includes('../public/preflight.css')) {
          return prefixedSelector
        }
        return selector // Do not prefix other styles
      },
    }),
  ],
}
