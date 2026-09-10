import { defineConfig } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
    ...nextCoreWebVitals,
    {
        rules: {
            '@next/next/no-img-element': 'off',
        },
    },
]);
