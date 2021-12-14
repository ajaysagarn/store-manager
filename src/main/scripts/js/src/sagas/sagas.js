import { debounce, fork, put, select, takeEvery } from 'redux-saga/effects'
import API from "../app/api"
import { selectFormData, selectTableFilters, selectTablePaging } from '../app/selectors'
import { clearForm, setFetchedBooks, SET_FILTERS, SET_PAGINATION, SUBMIT_FORM, UPLOAD_BOOKS } from '../reducers/BookActions'

function * fetchAllBooks () {
    try{
        const paging = yield select(selectTablePaging)
        const filters = yield select(selectTableFilters)

        const books = yield API.get(["api","v1","books"],{
            ...paging,
            ...filters
        }).then((res)=> res?.data || {})
        yield put(setFetchedBooks(books))
    }catch(e){
        console.log(e)
    }
}

function* submitForm(){
    try{
        const data = yield select(selectFormData)
        yield API.post(["api","v1","book"],data)
        yield put(clearForm())
    }catch(e){
        console.log(e)
    }
}

function * uploadAllBooks({ payload }){
    try{
        const formData = new FormData()
        formData.append('file', payload)
        yield  API.post(['api', 'v1', 'books'], formData, {}, {}, {
          'Content-Type': 'multipart/form-data'
        })
    }catch(e){
        console.log(e)
    }
}


function * mySaga () {
    yield fork(fetchAllBooks)
    yield takeEvery( SET_PAGINATION, fetchAllBooks)
    yield debounce(500,SET_FILTERS, fetchAllBooks)
    yield takeEvery(SUBMIT_FORM, submitForm)
    yield takeEvery(UPLOAD_BOOKS, uploadAllBooks)
}

export default mySaga;