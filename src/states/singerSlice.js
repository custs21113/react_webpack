import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSettleSinger } from "../service/singerAndDjradio";
export const initialState = {
    singer: []
};
export const getSinger = createAsyncThunk('getSettleSinger', async () => {
    try {
        let res = await getSettleSinger()
        return res.data
    } catch (error) {
        console.log(error)
    }
})
export const counterSlice = createSlice({
    name: "singer",
    initialState,
    reducers: {
        clearSingers: (state) => {
            console.log('清空reduxjs/toolkit使用axios从服务器上获取的数据')
            state.singer = []
        },
    },
    extraReducers: {
        [getSinger.fulfilled]: (state, action) => {
            state.singer = action?.payload?.artists;
            return state;
        },
        [getSinger.rejected]: (state, action) => {
            return state.singer = []
        }
    }
})

export const { clearSingers } = counterSlice.actions;
export default counterSlice.reducer;