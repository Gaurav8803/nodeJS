//callbacks - only option to run/call the asynchronous function

// ajax -> server -> response 

function ajaxWithCallback(success, fail) {
    setTimeout(
        function(){
            success('call succeds');
        }, 2000
    );
    
    setTimeout(
        function () {
            fail('call fails');
        }, 5000
    )
}
ajaxWithCallback(
    function(data){ console.log('success ->',data) },
    function(error){ console.log('Failed ->',error) }
);