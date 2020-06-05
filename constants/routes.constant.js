const ROUTES = {
    USER: {
        CREATE_USER: {
            URL: '/users',
            METHOD: 'POST'
        },
        UPDATE_USER: {
            URL: '/users/:id',
            METHOD: 'PUT'

        },
        GET_ALL_USER: {
            URL: '/users',
            METHOD: 'GET'

        },
        GET_USER: {
            URL: '/users/:id',
            METHOD: 'GET'

        },
        DELETE_USER: {
            URL: '/users/:id',
            METHOD: 'DELETE'

        }
    },
    QUESTIONS: {
        CREATE_QUESTIONS: {
            URL: '/questions',
            METHOD: 'POST'
        },
        UPDATE_QUESTIONS: {
            URL: '/questions/:id',
            METHOD: 'PUT'

        },
        GET_ALL_QUESTIONS: {
            URL: '/questions',
            METHOD: 'GET'

        },
        GET_QUESTIONS: {
            URL: '/questions/:id',
            METHOD: 'GET'

        },
        DELETE_QUESTIONS: {
            URL: '/questions/:id',
            METHOD: 'DELETE'

        }
    },
    ANSWERS: {
        CREATE_ANSWERS: {
            URL: '/answers',
            METHOD: 'POST'
        },
        UPDATE_ANSWERS: {
            URL: '/answers/:id',
            METHOD: 'PUT'

        },
        GET_ALL_ANSWERS: {
            URL: '/answers',
            METHOD: 'GET'

        },
        GET_ANSWERS: {
            URL: '/answers/:id',
            METHOD: 'GET'

        },
        DELETE_ANSWERS: {
            URL: '/answers/:id',
            METHOD: 'DELETE'

        }
    },
    TOPICS: {
        CREATE_TOPICS: {
            URL: '/topics',
            METHOD: 'POST'
        },
        UPDATE_TOPICS: {
            URL: '/topics/:id',
            METHOD: 'PUT'

        },
        GET_ALL_TOPICS: {
            URL: '/topics',
            METHOD: 'GET'

        },
        GET_TOPICS: {
            URL: '/topics/:id',
            METHOD: 'GET'

        },
        DELETE_TOPICS: {
            URL: '/topics/:id',
            METHOD: 'DELETE'

        }
    },
    SPACES: {
        CREATE_SPACES: {
            URL: '/spaces',
            METHOD: 'POST'
        },
        UPDATE_SPACES: {
            URL: '/spaces/:id',
            METHOD: 'PUT'

        },
        GET_ALL_SPACES: {
            URL: '/spaces',
            METHOD: 'GET'

        },
        GET_SPACES: {
            URL: '/spaces/:id',
            METHOD: 'GET'

        },
        DELETE_SPACES: {
            URL: '/spaces/:id',
            METHOD: 'DELETE'

        }
    }
}
module.exports = ROUTES