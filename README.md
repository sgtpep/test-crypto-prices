# test-crypto-prices

Allows to display prices of up to ten selected cryptos in a table.

## Installation

```
git clone https://github.com/sgtpep/test-crypto-prices.git
cd test-crypto-prices
npm i
npm start
```

## Scripts

- `npm run start` — Start a local development server.
- `npm run build` — Build static files for production.
- `npm run typecheck` — Perform type checking.
- `npm run lint` — Run lint checks.
- `npm run format` — Format code.
- `npm run test` — Run tests.
- `npm run check` — Run all the above scripts.

## Structure

- `components/` — reusable components.
- `features/` — app code organized in "feature folders", as recommended by `@redux/toolkit`.
- `helpers/` — reusable functions.
- `App.tsx`, `index.tsx` — entrypoints.
- `store.ts` — an app store.

## Comments

- The app was created from [`redux-typescript`](https://github.com/reduxjs/cra-template-redux-typescript) template.
- The state management is based on `@react/toolkit` with its concept of state slices.
