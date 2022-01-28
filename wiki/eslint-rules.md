# Some information about ESLint rules:

## There are levels of rules:

- "off" or 0 - turn the rule off
- "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
- "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

### For example:

- react/no-did-mount-set-state: 0 — won't show the error, if you use setState in componentDidMount
- react/no-did-mount-set-state: 1 — will show the warning
- react/no-did-mount-set-state: 2 — will show the error.

### So these values are similar to:

- react/no-did-mount-set-state: "off" == react/no-did-mount-set-state: 0
- react/no-did-mount-set-state: "warning" == react/no-did-mount-set-state: 1
- react/no-did-mount-set-state: "error" === react/no-did-mount-set-state: 2

#### Also, you can check it in the documentation:

- *https://eslint.org/docs/user-guide/configuring#configuring-rules*
- *https://eslint.org/docs/user-guide/getting-started*
