import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserStructure } from "../../types/types";

const initialState: UserStructure = {
  id: "",
  username: "",
  isLogged: false,
  token: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (
      currentUserState,
      action: PayloadAction<UserState>
    ): UserStructure => ({
      ...currentUserState,
      token: action.payload.token,
      username: action.payload.username,
      id: action.payload.id,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;