export const selectTableContents = (state) => state?.books?.books?.content;
export const selectTablePaging = (state) => state?.books?.paging;
export const selectTableFilters = (state) => state?.books?.filters;
export const selectTotalRecords = (state) => state?.books?.books?.totalElements || 0;
export const selectFormData = (state) => state?.books?.form || {}
export const selectSnackbar = (state) => state?.books?.snackbar || {}
