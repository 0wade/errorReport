/*
* report
*/
const names = { //使用命名空间以防止路径重复
    report: 'REPORT/'
};
export function getchErrorReportData(params) {
    return {type: `${names.report}FETCH_ERROR_REPORT_DATA`, params};
}
export function getchErrorReportDataSuccess(data) {
    return {type: `${names.report}FETCH_ERROR_REPORT_DATA_SUCCESS`, data};
}
export function getchErrorReportDataError(error) {
    return {type: `${names.report}FETCH_ERROR_REPORT_DATA_ERROR`, error};
}
