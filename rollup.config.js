import resolve from '@rollup/plugin-node-resolve';

export default {
    // ... other configurations ...
    plugins: [
        // ... other plugins ...
        resolve({
            extensions: ['.js', '.jsx'], // Add the '.jsx' extension here
        }),
    ],
};
