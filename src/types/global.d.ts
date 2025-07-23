export {};

declare global {
  interface Window {
    google?: typeof google;
  }

  namespace google {
    namespace accounts.id {
      function initialize(options: any): void;
      function prompt(): void;
      function renderButton(parent: HTMLElement, options: Record<string, any>): void;
      function disableAutoSelect(): void;
      function revoke(hint: string, callback: () => void): void;
    }
  }
}
