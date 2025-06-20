import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface roleType {
  selectedRole: any | null;
  user: any
  token: any,
  isLogin: boolean,
}
const initialState = {
    selectedRole: "",
    user: {},
    token: null,
    isLogin: false,
  } satisfies roleType as roleType;
const userSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.selectedRole = action.payload;
    },
    clearRole: (state) => {
      state.selectedRole = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLogin: (state) => {
      state.isLogin = true;
    },
    removeUser: (state,) => {
      state.user = {}
      state.token = null
      state.isLogin = false
  },
  },
});
export const { setRole, setUser, setToken, clearRole, removeUser, setLogin } = userSlice.actions;
export default userSlice.reducer;