function step1Completed() 
{
  $("#user-registration-section_1-signup-step1").toggleClass("d-none")
  $("#user-registration-section_1-signup-step2").toggleClass("d-block")
}

function step2Completed() 
{
    $("#user-registration-section_1-signup-step2").removeClass("d-block")
    $("#user-registration-section_1-signup-step3").toggleClass("d-block")
} 

function step3Completed() 
{
    $("#user-registration-section_1-signup-step3").removeClass("d-block")
    $("#user-registration-section_1-signup-step4").toggleClass("d-block")
} 

function step4Completed() 
{
    $("#user-registration-section_1-signup-step4").removeClass("d-block")
    $("#user-registration-section_1-signup-step5").toggleClass("d-block")
} 

function step5Completed() 
{
    $("#user-registration-section_1-signup-step5").removeClass("d-block")
    $("#user-registration-section_1-signup-step6").toggleClass("d-block")
} 