# EditUserDialog

## User Story

As an administrator viewing the UserList, I would like to edit users' roles so that only appropriate users have access to restricted functionality.

## Acceptance Criteria

- Role editing is done in a dialog or modal.
- The dialog is opened by an Edit button for the applicable row of the UserList component's table.
- The role choice is available via a native HTML `<select>` element.
  - Note: https://blueprintjs.com/docs/#core/components/html-select offers a styled version of an HTML `<select>` element. This is completely optional.
- If the user chooses to cancel the role change, the UserList does not update.
  - **This should have corresponding tests.** The tests should not include the UserList directly, but should rely on whatever is used to communicate the update.
- The UserList does not update until the user clicks a Save button in the dialog.
  - **This should have corresponding tests.** The tests should not include the UserList directly, but should rely on whatever is used to communicate the update.
- The dialog closes when the user saves the role change.
  - **This should have corresponding tests.**
- The dialog displays all available user data, even values not being changed.
