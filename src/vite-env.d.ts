/// <reference types="vite/client" />

// Vite only types lowercase extensions; two of your assets use uppercase (.PNG)
declare module '*.PNG' {
  const src: string
  export default src
}
