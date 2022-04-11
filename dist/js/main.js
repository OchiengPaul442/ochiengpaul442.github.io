$(document).ready(function() {
    //code to slide in the signup form on click and hide the login form
    $("#signupBtn,#signupBtnfwd").click(function() {
        $("#login").hide(300);
        $("#signup").show(300);
        $("#forgotpwd").hide(300);
        $("#it_1").hide(300);
        $("#it_2").show(300);
        $("#it_3").hide(300);
        $(".color1").addClass("change1");
        $(".color2").addClass("change2");
        $("#othersec").addClass("change3");
        $("#formcard").addClass("change4");
    });
    //code to slide in the login form on click and hide the signup form
    $("#signinBtn").click(function() {
        $("#login").show(300);
        $("#signup").hide(300);
        $("#it_1").show(300);
        $("#it_2").hide(300);
        $(".color1").removeClass("change1");
        $(".color2").removeClass("change2");
        $("#othersec").removeClass("change3");
        $("#formcard").removeClass("change4");
    });
    //code to slide in the forgot password form on click and hide the login form
    $("#fwdbtn").click(function() {
        $("#login").hide(300);
        $("#forgotpwd").show(300);
        $("#it_1").hide(300);
        $("#it_3").show(300);
    });
    // code to show signup form and hide forgotpwd form
    $("#signupshown").click(function() {
        $("#signup").show(300);
        $("#it_1,#it_2").hide();
        $("#it_3").show();
        $("#forgotpwd").hide(300);
    });
    // code to show signin form and hide login form
    $("#signupshown1").click(function() {
        $("#signup").show(top, 300);
        $("#it_1,#it_3").hide();
        $("#it_2").show();
        $("#login").hide(300);
    });
    //code to show the login form and hide the signup form
    $("#signinshown2").click(function() {
        $("#signup").hide(300);
        $("#it_1").show();
        $("#it_2,#it_3").hide();
        $("#login").show(300);
    });
});