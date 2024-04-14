import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js', // Change 'src/index.js' to the entry point of your application
  output: {
    file: 'dist/bundle.js', // Change 'dist/bundle.js' to the desired output bundle file
    format: 'es', // Specify the output format (ES module in this case)
    sourcemap: true, // Generate source maps for debugging
  },
  plugins: [
    nodeResolve(), // Resolve node_modules dependencies
    babel({
      babelHelpers: 'bundled', // Specify babel helpers mode
      presets: ['@babel/preset-env'], // Use @babel/preset-env for transpilation
    }),
  ],
};