import { Spinner } from "@blueprintjs/core";
import { useRef, useState } from "react";

import type { User } from "../types/User";
import { EditUserDialog } from "./EditUserDialog";

type UserListProps = {
  isLoading?: boolean;
  onEditUser?: (idUser: number, user: User) => void;
  users?: User[];
};

export const UserList = ({ isLoading, onEditUser, users }: UserListProps) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
  const choosenUser = useRef<User | null>();

  if (isLoading) {
    return <Spinner intent="primary" size={100} />;
  }

  if (!users) {
    return <p>There are no users to be displayed.</p>;
  }

  const handleEditRoleButtonClick = (user: User) => {
    choosenUser.current = user;
    setIsEditDialogOpen(true);
  };

  const handleEditUser = (user: User) => {
    if (onEditUser) {
      onEditUser(user.idUser, user);
      setIsEditDialogOpen(false);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Role</th>
            {onEditUser && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.idUser + user.profile.firstName}>
              <td>{user.idUser}</td>
              <td>{user.profile.firstName}</td>
              <td>{user.profile.lastName}</td>
              <td>{user.role}</td>
              {onEditUser && (
                <td>
                  <button onClick={() => handleEditRoleButtonClick(user)}>
                    Edit role
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {choosenUser.current && onEditUser && (
        <EditUserDialog
          isOpen={isEditDialogOpen}
          user={choosenUser.current}
          onDialogSubmit={handleEditUser}
          onDialogCancel={() => setIsEditDialogOpen(false)}
        />
      )}
    </>
  );
};
