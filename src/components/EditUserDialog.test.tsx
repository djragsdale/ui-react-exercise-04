import { User } from "../types/User";
import { act, fireEvent, render } from "@testing-library/react";
import { EditUserDialog } from "./EditUserDialog";

const testUser: User = {
  idUser: 1,
  profile: {
    firstName: "ABC",
    lastName: "DEF",
  },
  role: "Role1",
};

describe("EditUserDialog", () => {
  it("not causes update if dialog was canceled", () => {
    const onDialogCancel = jest.fn();
    const onDialogSubmit = jest.fn();
    const { queryByRole } = render(
      <EditUserDialog
        isOpen={true}
        user={testUser}
        onDialogSubmit={onDialogSubmit}
        onDialogCancel={onDialogCancel}
      />
    );

    const cancelButton = queryByRole("edit-dialog-cancel-button");
    expect(cancelButton).toBeTruthy();

    act(() => {
      cancelButton?.click();
    });

    expect(onDialogSubmit).not.toHaveBeenCalled();
  });

  it("not causes update if dialog was not saved", () => {
    const onDialogCancel = jest.fn();
    const onDialogSubmit = jest.fn();
    const { queryByRole } = render(
      <EditUserDialog
        isOpen={true}
        user={testUser}
        onDialogSubmit={onDialogSubmit}
        onDialogCancel={onDialogCancel}
      />
    );

    const roleSelector = queryByRole("edit-dialog-role-selector");
    expect(roleSelector).toBeTruthy();

    if (roleSelector) {
      fireEvent.change(roleSelector, { target: { value: "TestRole" } });
      expect(onDialogSubmit).not.toHaveBeenCalled();
    }
  });

  it("invokes onDialogSubmit callback when dialog is submited", () => {
    const onDialogCancel = jest.fn();
    const onDialogSubmit = jest.fn();
    const { queryByRole } = render(
      <EditUserDialog
        isOpen={true}
        user={testUser}
        onDialogSubmit={onDialogSubmit}
        onDialogCancel={onDialogCancel}
      />
    );

    const submitButton = queryByRole("edit-dialog-submit-button");
    expect(submitButton).toBeTruthy();

    act(() => {
      submitButton?.click();
    });
    expect(onDialogSubmit).toHaveBeenCalled();
  });
});
