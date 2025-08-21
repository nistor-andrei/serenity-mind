type FormState = { value: string; error: string };

export type UserState = {
  name: FormState;
  email: FormState;
  password: FormState;
  confirmPassword: FormState;
};
type Action =
  | { type: "SET_VALUE"; field: keyof UserState; value: string }
  | { type: "SET_ERROR"; field: keyof UserState; error: string }
  | { type: "RESET" };

export const initialStateUser = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  password: { value: "", error: "" },
  confirmPassword: { value: "", error: "" },
};
export const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        [action.field]: { ...state[action.field], value: action.value },
      };
    case "SET_ERROR":
      return {
        ...state,
        [action.field]: { ...state[action.field], error: action.error },
      };
    case "RESET":
      return initialStateUser;
    default:
      return state;
  }
};
