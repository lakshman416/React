const getData = ()=>{
    var uname = document.getElementById('username').value
    var baseurl = 'http://api.github.com/users/'
    var Url = baseurl + uname;

const data = $.ajax({
    url: Url,
    success: function (data){
        console.log(data);
        var intro="Here you go!";
        document.getElementById('out1').innerHTML= intro;
        document.getElementById('out2').innerHTML= data.name;
        document.getElementById('out3').innerHTML= data.location;
            },
    error:function(error){

    }
});

}