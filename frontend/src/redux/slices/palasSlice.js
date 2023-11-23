import { createSlice } from '@reduxjs/toolkit'
import { addPala, deletePala, editPala, fetchPalas } from '../thunks/palasThunks'

const initialState = {
  palas: [],
  status: "idle",
  error: null,
  id: ""
}

const palasSlice = createSlice({
  name: 'palas',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload
    },
    changeId: (state, action) => {
      state.id = action.payload
    },
    clearId: (state) => {
      state.id = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPalas.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchPalas.fulfilled, (state, action) => {
        state.status = "succeeded"
        console.log(action.payload)
        state.palas = action.payload;
      })
      .addCase(fetchPalas.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })

      .addCase(addPala.pending, (state) => {
        state.status = "loading"
      })
      .addCase(addPala.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.palas.push(action.payload)
      })
      .addCase(addPala.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(editPala.pending, (state) => {
        state.status = "loading"
      })
      .addCase(editPala.fulfilled, (state, action) => {
        state.status = "succeeded"
        const index = state.palas.findIndex(pala => pala._id === action.payload._id)
        state.palas[index] = action.payload
      })
      .addCase(editPala.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(deletePala.pending, (state) => {
        state.status = "loading"
      })
      .addCase(deletePala.fulfilled, (state) => {
        state.status = "succeeded"
      })
      .addCase(deletePala.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export const { changeStatus, changeId, clearId  } = palasSlice.actions
export default palasSlice.reducer