import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fake API delay
const fakeAPI = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 1000));

// Thunks
export const fetchLeaves = createAsyncThunk("leave/fetch", async () => {
  const data = JSON.parse(localStorage.getItem("leaves")) || [];
  return await fakeAPI(data);
});

export const addLeave = createAsyncThunk("leave/add", async (leave) => {
  const leaves = JSON.parse(localStorage.getItem("leaves")) || [];
  leaves.push({ ...leave, id: Date.now(), status: "Pending" });
  localStorage.setItem("leaves", JSON.stringify(leaves));
  return await fakeAPI(leaves);
});

export const deleteLeave = createAsyncThunk("leave/delete", async (id) => {
  let leaves = JSON.parse(localStorage.getItem("leaves")) || [];
  leaves = leaves.filter((l) => l.id !== id);
  localStorage.setItem("leaves", JSON.stringify(leaves));
  return await fakeAPI(leaves);
});

export const updateLeave = createAsyncThunk(
  "leave/update",
  async (updatedLeave) => {
    let leaves = JSON.parse(localStorage.getItem("leaves")) || [];
    leaves = leaves.map((l) =>
      l.id === updatedLeave.id ? updatedLeave : l
    );
    localStorage.setItem("leaves", JSON.stringify(leaves));
    return await fakeAPI(leaves);
  }
);

export const approveLeave = createAsyncThunk(
  "leave/approve",
  async ({ id, status }) => {
    let leaves = JSON.parse(localStorage.getItem("leaves")) || [];
    leaves = leaves.map((l) =>
      l.id === id ? { ...l, status } : l
    );
    localStorage.setItem("leaves", JSON.stringify(leaves));
    return await fakeAPI(leaves);
  }
);

// Slice
const leaveSlice = createSlice({
  name: "leave",
  initialState: {
    leaves: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.loading = false;
          state.leaves = action.payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default leaveSlice.reducer;