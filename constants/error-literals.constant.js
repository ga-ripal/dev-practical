const ERROR_LITERAL = {
    USER: {
        CREATE_USER: {
            SUCCESS: 'USer created successfully',
            IS_EXISTS:'User already exists!',
            FAILURE: 'User not created'
        },
        UPDATE_USER: {
            SUCCESS: 'USer updated successfully',
            IS_EXISTS:'User already exists!',
            FAILURE: 'User not updated'
        },
        GET_USER: {
            SUCCESS: 'USer get successfully',
        },
        GET_ALL_USER: {
            SUCCESS: 'USer get successfully',
        },
        DELETE_USER: {
            SUCCESS: 'USer deleted successfully',
            FAILURE: 'User not deleted'
        }
    },
    SPACES: {
        CREATE_SPACES: {
            SUCCESS: 'spaces created successfully',
            IS_EXISTS:'spaces already exists!',
            FAILURE: 'spaces not created'
        },
        UPDATE_SPACES: {
            SUCCESS: 'spaces updated successfully',
            IS_EXISTS:'spaces already exists!',
            FAILURE: 'spaces not updated'
        },
        GET_SPACES: {
            SUCCESS: 'spaces get successfully',
        },
        GET_ALL_SPACES: {
            SUCCESS: 'spaces get successfully',
        },
        DELETE_SPACES: {
            SUCCESS: 'spaces deleted successfully',
            FAILURE: 'spaces not deleted'
        }
    },
    QUESTIONS: {
        CREATE_QUESTIONS: {
            SUCCESS: 'Question created successfully',
            IS_EXISTS:'Question already exists!',
            FAILURE: 'Question not created'
        },
        UPDATE_QUESTIONS: {
            SUCCESS: 'Question updated successfully',
            IS_EXISTS:'Question already exists!',
            FAILURE: 'Question not updated'
        },
        GET_QUESTIONS: {
            SUCCESS: 'Question get successfully',
        },
        GET_ALL_QUESTIONS: {
            SUCCESS: 'Question get successfully',
        },
        DELETE_QUESTIONS: {
            SUCCESS: 'Question deleted successfully',
            FAILURE: 'Question not deleted'
        }
    },
    ANSWERS: {
        CREATE_ANSWERS: {
            SUCCESS: 'Answers created successfully',
            IS_EXISTS:'Answers already exists!',
            FAILURE: 'Answers not created'
        },
        UPDATE_ANSWERS: {
            SUCCESS: 'Answers updated successfully',
            IS_EXISTS:'Answers already exists!',
            FAILURE: 'Answers not updated'
        },
        GET_ANSWERS: {
            SUCCESS: 'Answers get successfully',
        },
        GET_ALL_ANSWERS: {
            SUCCESS: 'Answers get successfully',
        },
        DELETE_ANSWERS: {
            SUCCESS: 'Answers deleted successfully',
            FAILURE: 'Answers not deleted'
        }
    },
    TOPICS: {
        CREATE_TOPICS: {
            SUCCESS: 'Topics created successfully',
            IS_EXISTS:'Topics already exists!',
            FAILURE: 'Topics not created'
        },
        UPDATE_TOPICS: {
            SUCCESS: 'Topics updated successfully',
            IS_EXISTS:'Topics already exists!',
            FAILURE: 'Topics not updated'
        },
        GET_TOPICS: {
            SUCCESS: 'Topics get successfully',
        },
        GET_ALL_TOPICS: {
            SUCCESS: 'Topics get successfully',
        },
        DELETE_TOPICS: {
            SUCCESS: 'Topics deleted successfully',
            FAILURE: 'Topics not deleted'
        }
    },
    CATCH: {
        ERR: 'Catch, Error occured'
    },
    COMMON_MSG: {
        DATA_NOT_FOUND: 'Data not found'
    }
}
module.exports = ERROR_LITERAL