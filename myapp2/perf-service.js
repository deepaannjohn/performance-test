var request = require('request');

function CallApis(){
    
    var self = this;

    this.callApi = function(){
        return new Promise(function(resolve,reject){
            request.get('http://localhost:3000',(err,req,res)=>{
                if (err) reject(err)
                resolve(res)
            })  
        })
    }

    this.callApiInterface = function(req,res){
        this.callApi().then(
            (result) => {
                console.log('hey');
                console.log(result);
                this.callApi().then(
                    (result) => {
                        console.log('hey1');
                        console.log(result);
                        this.callApi().then(
                            (result) => {
                                console.log('hey2');
                                console.log(result);
                                this.callApi().then(
                                    (result)=>{
                                        console.log('hey3');
                                        console.log(result);
                                        res.status(200).json({'data' : result});    
                                    }
                                )
                            }                       
                        )
                    }
                )
            }
        )

    }
 


}

module.exports = new CallApis;