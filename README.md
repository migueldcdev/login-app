## Login app

This is a Next.js app with a Login, Sign up, Home and Error page. The user can create a profile or login with the proper credentials, the backend issues a JWT Session Token to persist the session. All user data is mocked.

For test the app the user email: *user@mail.com* and user password: _user_

### Installation

First, install the project dependencies:

```bash
npm install --force
```

(I'm testing latest Next.js stuff so I needed to include React Canary)

### Development

To start the development server and begin working on your project, run:

```bash
npm run dev
```

### Testing

To run the test suite and ensure everything is functioning correctly, use:

```bash
npm run test
```

To run playwright:

```bash
npx playwright test
```

To run playwright in a specific browser:

```bash
npx playwright test --project=chromium
```

To run playwiright in UI mode:

```bash
npx playwright test --ui
```

### Code formatting

To format your code using Prettier, execute:

```bash
npx prettier . --write
```
