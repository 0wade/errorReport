import React, {Component} from 'react';
import {Table} from 'antd';
import {connect} from 'react-redux';
import {getchErrorReportData} from '@/store/action';
import moment from 'moment';
import UA from 'ua-device';

const mapStateToProps = state => {
    let data = state.report.data || [];
    data.forEach((item, index) => item.key = index);
    return {data};
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                	title: '时间',
                    dataIndex: 'timer',
                    render: text => {
                        let timer = moment(text).format('YYYY-MM-DD HH:mm:ss');
                        return <span>{timer}</span>
                    }
                }, {
                    title: '堆栈信息',
                    dataIndex: 'desc'
                }, {
                    title: '路径',
                    dataIndex: 'route'
                }, {
                    title: 'userAgent',
                    dataIndex: 'userAgent'
                }, {
                    title: 'type',
                    dataIndex: 'type'
                }, {
                    title: 'ip',
                    dataIndex: 'ip'
                }, {
                    title: '用户ID',
                    dataIndex: 'userId'
                }, {
                    title: '浏览器',
                    dataIndex: 'userAgent',
                    key: 'browser',
                    render: text => {
                        let browser = new UA(text).browser;
                        return <div><p>{browser.name} {browser.version.original}</p></div>
                    }
                }, {
                    title: '操作系统',
                    dataIndex: 'userAgent',
                    key: 'os',
                    render: text => {
                        let os = new UA(text).os;
                        return <div><p>{os.name} {os.version.original}</p></div>
                    }
                }
            ],
            params: this.props.match.params
        };
    }
    componentDidMount() {
        let {dispatch} = this.props;
        dispatch(getchErrorReportData({}));
    }
    render() {
        return (<div className="js-report">
            <Table columns={this.state.columns} dataSource={this.props.data || []}/>
        </div>)
    }
}

export default connect(mapStateToProps)(Main);
