const param={
	getsuite(){
		return this.spec=process.env.spec ? process.env.spec:''
	}
}

module.exports=param;