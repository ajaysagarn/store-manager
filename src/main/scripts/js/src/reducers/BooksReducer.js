import produce from 'immer'
import { CLEAR_FORM, SET_ADD_FORM_DATA, SET_FETCHED_BOOKS, SET_FILTERS, SET_PAGINATION } from './BookActions'

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
        case SET_FILTERS:
            newState.filters = payload
            return newState;
        case SET_ADD_FORM_DATA:
            newState.form = payload
            return newState
        case CLEAR_FORM:
            newState.form = initialState.form
            return newState
    }
}, initialState)

export default BooksReducer