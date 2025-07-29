export const initialStore = () => {
    return {
        ninjas: [],
        bestias: [],
        akatsuki: [],
        ninja: null,
        bestia: null,
        akat: null,
        favoritos: []
    }
}

export default function storeReducer(store, action = {}) {
    switch (action.type) {
        case 'set_ninjas':
            return {
                ...store,
                ninjas: action.payload,// le digo que rellene ninjas con "characteres"

            }
        case 'set_bestias':
            return {
                ...store,
                bestias: action.payload
            }
        case 'set_akatsuki':
            return {
                ...store,
                akatsuki: action.payload
            }

        case 'set_ninja':
            return {
                ...store,
                ninja: action.payload
            }
        case 'set_bestia':
            return {
                ...store,
                bestia: action.payload
            }
        case 'set_akat':
            return {
                ...store,
                akat: action.payload
            }
        case 'set_favs':
            return {
                ...store,
                favoritos: [...store.favoritos, action.payload]
            }
        case 'set_deleteFav':
            const newfavorites = store.favoritos.filter((favorito) => favorito !== action.payload)
            return {
                ...store,
                favoritos: newfavorites
            }
        default:
            return store
    }
}
