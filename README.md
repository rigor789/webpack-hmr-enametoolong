# ENAMETOOLONG issue with HMR + Workers

Steps to reproduce:

1. clone repo
2. `yarn` (or `npm install`)
3. `yarn build --watch`
4. make a change in `src/app.js` to trigger HMR
5. build crashes

Observations:

1. commenting out the `new Worker` line in `src/app.js` fixes the crash
2. commenting out the `longLoader` in the config (and keeping everything else as-is) also works

**note:** The very long named loader is to illustrate the case where we have multiple loaders chained together - same behavior can be observed with sane loader names when chaining multiple together.