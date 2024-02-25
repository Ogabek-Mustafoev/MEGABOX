import { headerSliceReducer } from '@/features';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    header: headerSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
