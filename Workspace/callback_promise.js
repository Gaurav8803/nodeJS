//Promise
function ajaxWithPromise() {
    return new Promise(
        function(resolve,reject){
            setTimeout(
                function(){
                    resolve('call succeds');
                }, 2000
            );
            
            setTimeout(
                function () {
                    reject('call fails');
                }, 5000
            )
        }
    )
}

ajaxWithPromise()
    .then(
        (data) => { console.log('success ->',data) },
    ).catch(    
        (error) => { console.log('Failed ->',error) }
    );