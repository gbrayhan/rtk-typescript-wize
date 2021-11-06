import pokemonReducer, {addToCart, ItemCart, Pokemon, PokemonState, removeFromCart} from './slice';

describe('pokemon reducer', () => {
    const current: Pokemon = {
        id: 1,
        name: "charmander",
        height: 12,
        weight: 22,
        order: 23,
        base_experience: 1,
        sprites: {
            other: {
                dream_world: {
                    front_default: "https://image.com",
                }
            }
        }
    }
    const stateReducer: PokemonState = {
        current: current,
        filtered_data: [],
        all_data: [current],
        status: 'idle',
        cart: [],
    };


    it('should handle initial state', () => {
        expect(pokemonReducer(undefined, {type: 'unknown'})).toEqual({
            current: null,
            filtered_data: [],
            all_data: [],
            status: 'idle',
            cart: [],
        });
    });

    it('should handle add to a cart', () => {
        const expectedCart: ItemCart = {
            quantity: 2,
            pokemon: current
        }
        const actual = pokemonReducer(stateReducer, addToCart(2));
        expect(actual.cart).toEqual([expectedCart]);
    });

    it('should handle remove from cart', () => {
        const stateWithItem: PokemonState = {
            ...stateReducer, cart: [{
                quantity: 2,
                pokemon: current
            }]
        }
        const actual = pokemonReducer(stateReducer, removeFromCart(current.name));
        expect(actual).toEqual(stateReducer);
    });
});
