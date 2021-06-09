import { User } from "./User";

export interface State {
  auth: {
    isAuth: boolean;
    user: User | null;
  };
  admin: {
    users: User[];
  };
}
