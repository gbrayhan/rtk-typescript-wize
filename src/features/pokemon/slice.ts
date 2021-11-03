import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

type Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
};

export interface PokemonState {
    list: {
        total_elements: number;
        current_page: number;
        offset: number;
        limit: number;
        prev_page: number
        next_page: number
        last_page: number;
        data: Pokemon[]
    };
    current: Pokemon | null;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: PokemonState = {
    current: null,
    list: {
        total_elements: 0,
        current_page: 1,
        offset: 0,
        limit: 100,
        prev_page: 0,
        next_page: 1,
        last_page: 1,
        data: []
    },
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


export const fetchAll = createAsyncThunk(
    'pokemon/fetchAll',
    async ({next, prev}: { next: boolean, prev: boolean }, {getState}) => {
        const {pokemon} = getState() as { pokemon: PokemonState };
        let limit = pokemon.list.limit;
        let offset = 0;
        if (next) {
            offset = pokemon.list.offset + pokemon.list.limit;
        }
        if (prev) {
            offset = pokemon.list.offset - pokemon.list.limit;
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
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
            .addCase(fetchById.fulfilled, (state, action: PayloadAction<Pokemon>) => {
                debugger;
                state.status = 'idle';
                state.current = action.payload;
            })
            .addCase(fetchAll.fulfilled, (state , action: PayloadAction<[Pokemon]>) => {
                debugger;
                state.status = 'idle';
                state.list.data = action.payload;
            });
    },
});

// export const {} = pokemonSlice.actions;

export const selectCurrent = (state: RootState) => state.pokemon.current;

export default pokemonSlice.reducer;
