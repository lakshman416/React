const getData = ()=>{
    var location = document.getElementById('location').value;
    baseurl1="https://api.openweathermap.org/data/2.5/weather?q=";
    baseurl2="&appid=4e8fe55b900263c5f83603ed631e15ad";
    var Url= baseurl1+location+baseurl2;

    $.ajax({
        url: Url,
        success: function (data){
            console.log(data);
            document.getElementById('out1').innerHTML=`Current Temperature`;
            document.getElementById('out2').innerHTML=`${location.toUpperCase()}: ${data.main.temp}`;
        },
        error: function (error){
            console.log(error)
        }
    });
    
    
    
    
}