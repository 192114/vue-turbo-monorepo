declare module '@shadow/config/tailwind-config/index.js' {
  import type { Config } from 'tailwindcss';

  interface ThemeConfig {
    colors?: {
      [key: string]: string | {
        DEFAULT?: string;
        foreground?: string;
        [key: string]: string | undefined;
      };
    };
    borderRadius?: {
      [key: string]: string;
    };
  }

  interface TailwindConfig extends Omit<Config, 'theme'> {
    theme?: ThemeConfig;
  }

  function preset(config?: Partial<TailwindConfig>): TailwindConfig;
  export default preset;
}