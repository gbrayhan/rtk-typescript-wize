import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export type Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
    order: number;
    base_experience: number;
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            }
        }
    }
};
export type ItemCart = {
    pokemon: Pokemon | null,
    quantity: number
}

export interface PokemonState {
    filtered_data: Pokemon[];
    all_data: Pokemon[];
    current: Pokemon | null;
    status: 'idle' | 'loading' | 'failed';
    cart: ItemCart[];
}

const initialState: PokemonState = {
    current: null,
    filtered_data: [],
    all_data: [],
    status: 'idle',
    cart: [],
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
        },
        addToCart(state: PokemonState,
                  action: PayloadAction<number>) {
            let exist: boolean = false;

            state.cart = state.cart.map((item) => {
                if (item.pokemon?.name === state.current?.name) {
                    item.quantity = item.quantity + action.payload
                    exist = true;
                    return item;
                }
                return item
            })

            if (!exist) {
                state.cart = [...state.cart, {pokemon: state.current, quantity: action.payload,}]
            }

        },
        removeFromCart(state: PokemonState,
                       action: PayloadAction<string | undefined>) {
            state.cart = state.cart.filter((item) => item.pokemon?.name !== action.payload)

        },
        emptyCart(state: PokemonState,
                  action: PayloadAction) {
            state.cart = initialState.cart;
        },
        modifyQuantityItem(state: PokemonState,
                           action: PayloadAction<{ quantity: number, name: string | undefined }>) {

            state.cart = state.cart.map((item) => {
                if (item.pokemon?.name === action.payload.name) {
                    item.quantity = action.payload.quantity;
                }
                return item
            })

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

export const {
    filterPokemon,
    resetCurrent,
    addToCart,
    modifyQuantityItem,
    removeFromCart,
    emptyCart
} = pokemonSlice.actions;

export const selectCurrent = (state: RootState) => state.pokemon.current;
export const selectFilteredList = (state: RootState) => state.pokemon.filtered_data;
export const selectCart = (state: RootState) => state.pokemon.cart;

export default pokemonSlice.reducer;
