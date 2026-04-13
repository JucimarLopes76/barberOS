declare module '@ducanh2912/next-pwa' {
  import type { NextConfig } from 'next';
  function withPWAInit(options: Record<string, unknown>): (config: NextConfig) => NextConfig;
  export default withPWAInit;
}
