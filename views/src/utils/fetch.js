import axios from 'axios';

function hackRequestCache (option) {
	option.params = Object.assign({}, {timer: Date.now()});
	return option;
}

export default function fetch (option={}) {
	option = Object.assign({
		params: {},
		timeout: 5000
	}, option, hackRequestCache(option));
	return new Promise ((resolve, reject)=>{
		axios(option).then(res=>{
			let resObj = res.data || {};
			let {code, data} = resObj;
			if (+code === 0) {
				resolve(data);
			} else {
				reject(data);
			}
		}).catch(e=>{
			console.log(e);
			reject(e);
		})
	})
}
