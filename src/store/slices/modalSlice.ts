import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Modal {
  isOpen: boolean;
  size:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
}

interface ModalState {
  modals: Record<string, Modal>; // Record to store modal states by their IDs
}

const initialState: ModalState = {
  modals: {}, // Initialize an empty object to store modal states
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ id: string; size: Modal["size"] }>
    ) => {
      const { id, size } = action.payload;
      state.modals[id] = { isOpen: true, size }; // Set the modal with ID `id` to open with specified size
    },
    closeModal: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.modals[id]) {
        state.modals[id].isOpen = false; // Set the modal with ID `id` to close
      }
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
