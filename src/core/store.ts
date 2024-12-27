import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { authService } from "../services/auth-service";
// import { userService } from "../services/user-service";
// import { budgetService } from "../services/budget-service";

export const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    // [userService.reducerPath]: userService.reducer,
    // [budgetService.reducerPath]: budgetService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authService.middleware,
      // userService.middleware,
      // budgetService.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
