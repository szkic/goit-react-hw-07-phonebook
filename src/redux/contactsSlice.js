import { addContact, deleteContact, fetchContacts } from './operations';
const { createSlice } = require('@reduxjs/toolkit');

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  extraReducers: {
    [fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.fulfilled](state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
