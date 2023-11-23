import { createAsyncThunk } from "@reduxjs/toolkit"
import { addPalaService, deletePalaService, editPalaService, getPalasService } from "../../services/palas.api"

export const fetchPalas = createAsyncThunk("get/fetchPalas", async () => {
  try {
    const response = await getPalasService()
    return response
  } catch (error) {
    return error.message
  }
})

export const addPala = createAsyncThunk("post/addNewPala", async ({newPala, token}) => {
  try {
    console.log(token)
    const response = await addPalaService(newPala, token)
    return response
  } catch (error) {
    return error
  }
})

export const editPala = createAsyncThunk("edit/editPala", async ({id, updPala}) => {
  try {
    const response = await editPalaService(id, updPala)
    return response
  } catch (error) {
    return error.message
  }
})

export const deletePala = createAsyncThunk("delete/deletePala", async (id) => {
  try {
    const response = await deletePalaService(id)
    return response
  } catch (error) {
    return error.message
  }
})