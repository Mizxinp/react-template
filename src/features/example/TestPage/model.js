const model = {
    namespace: 'test',

    state: {
        value: 'this is models-test',
    },

    effects: {},

    subscriptions: {
        setup() { },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload }
        },
    },
}

export default model
