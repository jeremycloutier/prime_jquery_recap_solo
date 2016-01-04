/**
 * Created by jeremycloutier on 1/4/16.
 */
$.ajax("data.json").then(function(response){
    for (var it = 0; it < response.length; it++){           // Joel uses "it" instead of "i" as the variable.
        var $content = '';

        var id = response[it].id;
        var gender = response[it].gender;
        var firstname = response[it].first_name;
        var lastname = response[it].last_name;
        var email = response[it].email;

        $content = 'ID: ' + id + '<br>' + 'Gender: ' + gender + '<br>' + 'First Name: ' + firstname + '<br>' + 'Last Name: ' + lastname + '<br>' + 'Email: ' + email + '<br>' + '<br>';
        $(".contentdiv").append($content);
        console.log($content);
    }
});