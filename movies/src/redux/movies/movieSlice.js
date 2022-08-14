import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_Url = "https://api.themoviedb.org/3/";
const API_Key = "357b1c79719221bd2945afcdf5bcc916";

export const fetchAsyncTrending= createAsyncThunk("movies/fetchAsyncTrending", async () => {
    
    const response1=await fetch (`${API_Url}trending/all/week?api_key=${API_Key}&page=1`)
    const data1=await response1.json();
    const response2=await fetch (`${API_Url}trending/all/week?api_key=${API_Key}&page=2`)
    const data2=await response2.json();
    const response3=await fetch (`${API_Url}trending/all/week?api_key=${API_Key}&page=3`)
    const data3=await response3.json();
    const response4=await fetch (`${API_Url}trending/all/week?api_key=${API_Key}&page=4`)
    const data4=await response4.json();
    const response5=await fetch (`${API_Url}trending/all/week?api_key=${API_Key}&page=5`)
    const data5=await response5.json();
    const data = [...data1.results, ...data2.results, ...data3.results, ...data4.results, ...data5.results]
    return data;
});

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async ({mediaType, page}) => {

    if (!mediaType) {
      mediaType = "all"
    };
  
    if (!page) {
      page = 1
    };

    const response=await fetch (`${API_Url}trending/${mediaType}/week?api_key=${API_Key}&page=${page}`)
    const data=await response.json();
    console.log(data.results)
    return data;
});

export const fetchAsyncItemDetails = createAsyncThunk("movies/fetchAsyncItemDetails", async ({mediaType, itemID}) => {
    const response=await fetch (`${API_Url}${mediaType}/${itemID}?api_key=${API_Key}&include_adult=false`)
    const data=await response.json();
    return data;
});

export const fetchAsyncSearchAll = createAsyncThunk("movies/fetchAsyncSearchAll", async ({query, page}) => {
    const response=await fetch (`${API_Url}search/multi?api_key=${API_Key}&query=${query}&language=en-US&include_adult=false&page=${page}`)
    const data=await response.json();
    return data;
});

const initialState = {
    movies: [],
    selectedItem: {},
    currentPage: 1,
    totalPages: 0,
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        clearMovies: (state) => {
            state.movies = [];
            state.totalPages =  0;
        },
        removeSelectedItem: (state) => {
            state.selectedItem = {};
        }
    },
    extraReducers: {
        [fetchAsyncTrending.fulfilled]: (state, action) => {
            return {...state, 
                movies: action.payload, 
            }
        },
        // [fetchAsyncMovies.pending]: () => {
        //     console.log("pending");
        // },
        [fetchAsyncMovies.fulfilled]: (state, action) => {
            return {...state, 
                movies: action.payload.results, 
                currentPage: action.payload.page, 
                totalPages: action.payload.total_pages,
            }
        },
        // [fetchAsyncMovies.rejected]: () => {
        //     console.log("rejected");
        // },
        [fetchAsyncItemDetails.fulfilled]: (state, action) => {
            return {...state, selectedItem: action.payload}
        },
        [fetchAsyncSearchAll.fulfilled]: (state, action) => {
            return {...state, 
                movies: action.payload.results,
                currentPage: action.payload.page, 
                totalPages: action.payload.total_pages,}
        },
    }
});

export const { removeSelectedItem, clearMovies } = movieSlice.actions;
export const getMovies = (state) => state.movies.movies; //state.name.property
export const getSelectedItemDetails = (state) => state.movies.selectedItem; //state.name.property
export const getCurrentPage = (state) => state.movies.currentPage; //state.name.property
export const getTotalPages = (state) => state.movies.totalPages; //state.name.property
export default movieSlice.reducer;