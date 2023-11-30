import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'moderate-blue': '#5457B6',
                'light-grayish-blue': '#C3C4EF',
                'soft-red': '#ED6468',
                'pale-red': '#FFB8BB',
                'dark-blue': '#324152',
                'grayish-blue': '#67727E',
                'light-gray': '#EAECF1',
                'very-light': '#F5F6FA',
            },
        },
    },
    plugins: [],
}
export default config
