import produce from 'immer'
import { CLEAR_FORM, RESET_TO_FIRST_PAGE, SET_ADD_FORM_DATA, SET_ALERT_SHOWN, SET_FETCHED_BOOKS, SET_FILTERS, SET_PAGINATION, SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE } from './BookActions'

const initialState = {
    isLoading: false,
    books: [],
    paging: {
        start: 0,
        size: 10
    },
    form: {
        isbn: 0,
        original_publication_year: "",
        title: "",
        language_code: "",
        image_url: "",
        small_image_url: ""
    },
    filters: {
        book_id: null,
        title: null,
        year: null
    },
    snackbar:{
        open: false,
        message: '',
        severity: 'info'
    }
}

const BooksReducer = produce((newState, action) => {
    const { type, payload } = action
    // eslint-disable-next-line default-case
    switch (type) {
        case SET_FETCHED_BOOKS: 
            newState.books = payload
            return newState;
        case SET_PAGINATION:
            newState.paging = payload
            return newState;
        case RESET_TO_FIRST_PAGE:
            newState.paging.start = 0
            return newState;
        case SET_FILTERS:
            newState.filters = payload
            return newState;
        case SET_ADD_FORM_DATA:
            newState.form = payload
            return newState
        case CLEAR_FORM:
            newState.form = initialState.form
            return newState
        case SHOW_SUCCESS_MESSAGE: {
                newState.snackbar.message = payload
                newState.snackbar.severity = 'success'
                newState.snackbar.open = true
                return newState
        }
        case SHOW_ERROR_MESSAGE: {
            newState.snackbar.message = payload
            newState.snackbar.severity = 'error'
            newState.snackbar.open = true
            return newState
        }
        case SET_ALERT_SHOWN: {
            newState.snackbar.open = payload || initialState.snackbar.open
            return newState
          }
    }
}, initialState)

export default BooksReducer