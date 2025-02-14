# Next.js 15 Hydration Mismatch Error
This repository demonstrates a hydration mismatch error in a Next.js 15 application.  The error occurs when attempting to access a DOM element directly within a client-side component that was initially rendered on the server.  This is a common issue when mixing client-side and server-side rendering.

## Reproduction
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.

You will observe a hydration mismatch error in your browser's console.

## Solution
The solution involves ensuring that any DOM manipulation is only performed after the component has fully hydrated on the client-side.  This can be achieved using `useEffect` hook from React.