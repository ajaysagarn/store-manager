export const SET_FETCHED_BOOKS = "SET_FETCHED_BOOKS"
export const setFetchedBooks = (content) => ({ type:SET_FETCHED_BOOKS, payload: content})

export const SET_PAGINATION = "SET_PAGINATION"
export const setPagination = (paging) => ({ type: SET_PAGINATION, payload: paging })

export const RESET_TO_FIRST_PAGE = "RESET_TO_FIRST_PAGE"
export const resetTofirstPage = () => ({ type: RESET_TO_FIRST_PAGE })

export const SET_FILTERS = "SET_FILTERS"
export const setFilters = (filters) => ({ type: SET_FILTERS, payload: filters})

export const SET_ADD_FORM_DATA = "SET_ADD_FORM_DATA"
export const setAddFormData = (data) => ({ type: SET_ADD_FORM_DATA, payload:data })

export const SUBMIT_FORM = "SUBMIT_FORM"
export const submitAddForm = () => ({ type: SUBMIT_FORM })

export const CLEAR_FORM = 'CLEAR_FORM'
export const clearForm = () => ({ type: CLEAR_FORM })

export const UPLOAD_BOOKS = 'UPLOAD_BOOKS'
export const uploadBooks = (file) => ({ type: UPLOAD_BOOKS, payload: file })

export const SHOW_SUCCESS_MESSAGE = 'SHOW_SUCCESS_MESSAGE'
export const showSuccessMessage = (message) => ({ type: SHOW_SUCCESS_MESSAGE, payload: message })

export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE'
export const showErrorMessage = (message) => ({ type: SHOW_ERROR_MESSAGE, payload: message })

export const SET_ALERT_SHOWN = 'SET_ALERT_SHOWN'
export const setAlertShown = (open) => ({ type: SET_ALERT_SHOWN, payload: open })