# UI React Exercise

## Introduction

Welcome, candidate! This exercise is a simple incomplete and broken application that can be used to showcase React and UI skills. The specific technology used here is not necessarily indicative of what is used in a specific project, but is a helpful baseline to see how a candidate can work with the following technologies:

- React
- TypeScript
- Jest
- Blueprint (requires no previous experience)

Feel free to expand upon the hooks and components provided with the application in order to complete the tasks.

### Running the app

`npm run dev`

### Running the tests

`npm test`

or to watch them

`npm test -- --watch`

## Instructions

### Fix the `UserList` component

The file `src/components/UserList.tsx` contains a functional component that is wildly incomplete. The adjacent tests clarify the expected presentation and functional requirements.

### Fix the `useUsers` tests

The file `src/hooks/useUsers.ts` contains a hook meant to simulate acquiring and mutating remote persisted data. The failing tests should describe the functionality that is expected. Update the hook and the test so that it accurately verifies the functionality described in the test.

### Add an `EditUserDialog` component

Once the `UserList` component passes the tests, it should have the necessary functionality for you to create a new `EditUserDialog` component. This component is a bit open-ended, however I recommended using the `Dialog` component from Blueprint (linked below). The `src/components/EditUserDialog.md` file is a representation of a Jira ticket for the component. Do this however you prefer.

## Helpful links

- https://blueprintjs.com/docs/#core - Browse the Blueprint docs to learn how the component library works.
- https://jestjs.io/docs/26.x/expect - Jest's basic assertion API for testing
- https://testing-library.com/docs/react-testing-library/api - Testing Library's utilities designed for React
