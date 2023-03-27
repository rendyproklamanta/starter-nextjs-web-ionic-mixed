import dynamic from 'next/dynamic';

/**
* Load page mode CSR, with SSR disabled
*/
export const loadCSR = (Component) => dynamic(
   () => Promise.resolve(Component),
   { ssr: false },
);