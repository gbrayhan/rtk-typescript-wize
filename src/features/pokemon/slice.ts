import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

type Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
};

export interface PokemonState {
    list: Pokemon[];
    current: Pokemon | null;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: PokemonState = {
    current: null,
    list: [],
    status: 'idle'
};

export const fetchById = createAsyncThunk(
    'pokemon/fetchById',
    async (userId: number) => {
        debugger
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userId}`)
        return await response.json()
    }
);

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchById.pending, (state, action) => {
                debugger;
                state.status = 'loading';

            })
            .addCase(fetchById.fulfilled, (state, action:PayloadAction<Pokemon>) => {
                debugger;
                state.status = 'idle';
                state.current =action.payload;
            });
    },
});

// export const {} = pokemonSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default pokemonSlice.reducer;
