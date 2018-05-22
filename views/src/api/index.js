import fetch from '@/utils/fetch';

export function fetchErrorReportData(params = {}) {
    return fetch({url: '/api/get_error_report_data', method: 'GET', params})
}
