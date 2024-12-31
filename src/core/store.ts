import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { authService } from "../services/auth-service";
import { productService } from "../services/product-service";
// import { userService } from "../services/user-service";
// import { budgetService } from "../services/budget-service";

export const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [productService.reducerPath]: productService.reducer,
    // [budgetService.reducerPath]: budgetService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authService.middleware,
      productService.middleware,
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
