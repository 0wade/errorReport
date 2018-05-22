let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient();
let ConnetCli = 'mongodb://127.0.0.1:27017/report';

function getConnect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(ConnetCli, function(err, db) {
            if (err) reject(new Error('数据库连接出错'));
            resolve(db)
        });
    });
}
let db = {
    insertReportData(data, callback) {
        let connect = getConnect();
        return connect.then(db => {
            if (data) {
                let collection = db.collection('base');
                collection.insert(data, (err, result) => {
                    if (!err) {
                        callback && callback(result);
                    }
                    return false;
                });
            }
        }).catch(err => {
            console.log(err)
        });
    },
    queryReportData() {
        let connect = getConnect();
        return connect.then(db => {
            let collection = db.collection('base');
			return new Promise((resolve, reject)=>{
				collection.find().toArray((err, result) => {
					if (!err) resolve(result);
					reject(err);
	        	});
			});
        }).catch(err => {
            console.log(err)
        });
    }
};
module.exports = db;