declare module '@shadow/config/prettier-config/index.js' {
  interface PrettierConfig {
    semi: boolean;
    singleQuote: boolean;
    tabWidth: number;
    trailingComma: 'none' | 'es5' | 'all';
    printWidth: number;
    bracketSpacing: boolean;
    endOfLine: 'lf' | 'crlf' | 'cr' | 'auto';
  }

  const config: PrettierConfig;
  export default config;
}