var request = require('request');

function CallApis() {

    var self = this;



    this.ParallelFlow = async function (cb) {

        Promise.all([
            new Promise(function (resolve, reject) {
                request.get('http://localhost:3000', function (err, req, res) {
                    if (err) reject(err)
                    resolve(res)
                })
            }), // 1
            new Promise(function (resolve, reject) {
                request.get('http://localhost:3000', function (err, req, res) {
                    if (err) reject(err)
                    resolve(res)
                })
            }), // 2
            new Promise(function (resolve, reject) {
                request.get('http://localhost:3000', function (err, req, res) {
                    if (err) reject(err)
                    resolve(res)
                })
            })  // 3
        ]).then((responses) => {
            cb(responses);

        }); // 1,2,3 when promises are ready: each promise contributes an array member



    }




}

module.exports = new CallApis;