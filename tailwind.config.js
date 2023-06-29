/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte}",
    require('path').join(require.resolve(
      '@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    ),
  ],
  theme: {
    extend: {
      height: {
        'fit-contend': 'fit-content',
      }
    },
  },
  plugins: [
    // 3. Append the Skeleton plugin to the end of this list
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
  ]
}

