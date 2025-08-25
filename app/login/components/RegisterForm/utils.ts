export type UserState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
type Action =
  | { type: "SET_VALUE"; field: keyof UserState; value: string }
  | { type: "RESET" };

export const initialStateUser = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialStateUser;
    default:
      return state;
  }
};
