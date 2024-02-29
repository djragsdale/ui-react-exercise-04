import { useRef, useState } from "react";

import type { User } from "../types/User";
import { useDelayedEffect } from "./useDelayedEffect";

const users: User[] = [
  {
    idUser: 1001,
    profile: {
      firstName: "Adam",
      lastName: "Alpaca",
    },
    role: "Engineer",
  },
  {
    idUser: 1002,
    profile: {
      firstName: "Bradly",
      lastName: "Buffalo",
    },
    role: "Administrator",
  },
  {
    idUser: 1003,
    profile: {
      firstName: "Charles",
      lastName: "Chinchilla",
    },
    role: "Support Technician",
  },
];

export const TIME_DELAY = 2_000;

export const useUsers = () => {
  const [data, setData] = useState<User[] | undefined>();
  const isDelayedUpdateCancelled = useRef(false);

  useDelayedEffect(
    TIME_DELAY,
    () => {
      if (isDelayedUpdateCancelled.current) return;
      setData(users);
    },
    [setData]
  );

  const handleUpdateUser = (idUser: number, user: User) => {
    isDelayedUpdateCancelled.current = true;

    // TODO: How would you do this?
  };

  if (!data) {
    return {
      isLoading: true,
      updateUser: handleUpdateUser,
    };
  }

  return {
    data,
    isLoading: false,
    updateUser: handleUpdateUser,
  };
};
