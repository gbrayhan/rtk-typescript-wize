import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export type Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            }
        }
    }
};

export interface PokemonState {
    filtered_data: Pokemon[];
    all_data: Pokemon[];
    current: Pokemon | null;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: PokemonState = {
    current: null,
    filtered_data: [],
    all_data: [],
    status: 'idle'
};

export const fetchByName = createAsyncThunk(
    'pokemon/fetchByName',
    async (name: string) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return await response.json()
    }
);


export const fetchAll = createAsyncThunk(
    'pokemon/fetchAll',
    async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0`)
        const responseData = await response.json()
        return responseData.results
    }
);


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        filterPokemon(
            state: PokemonState,
            action: PayloadAction<string>
        ) {
            if (action.payload === "") {
                state.filtered_data = state.all_data?.slice(0, 15)
            } else {
                state.filtered_data = state.all_data
                    .filter(pokemon => pokemon.name.includes(action.payload.toLowerCase()))?.slice(0, 15)
            }

        },
        resetCurrent(state: PokemonState,
                     action: PayloadAction) {
            state.current = initialState.current
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchByName.pending, (state, action) => {
                state.status = 'loading';

            })
            .addCase(fetchByName.fulfilled, (state, action: PayloadAction<Pokemon>) => {
                state.status = 'idle';
                state.current = action.payload;
            })
            .addCase(fetchAll.pending, (state, action) => {
                state.status = 'loading';

            })
            .addCase(fetchAll.fulfilled, (state, action: PayloadAction<[Pokemon]>) => {
                state.status = 'idle';
                state.all_data = action.payload;
            });
    },
});

export const {filterPokemon, resetCurrent} = pokemonSlice.actions;

export const selectCurrent = (state: RootState) => state.pokemon.current;
export const selectFilteredList = (state: RootState) => state.pokemon.filtered_data;
export default pokemonSlice.reducer;
