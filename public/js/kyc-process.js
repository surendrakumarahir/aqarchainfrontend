function step1Completed() 
{
  $("#kyc-process-section_1-step1").toggleClass("d-none")
  $("#kyc-process-section_1-step2").toggleClass("d-block")
}

function step2Completed() 
{
    $("#kyc-process-section_1-step2").removeClass("d-block")
    $("#kyc-process-section_1-step3").toggleClass("d-block")
} 

function step3Completed() 
{
    $("#kyc-process-section_1-step3").removeClass("d-block")
    $("#kyc-process-section_1-step4").toggleClass("d-block")
} 

function step4Completed() 
{
    $("#kyc-process-section_1-step4").removeClass("d-block")
    $("#kyc-process-section_1-step5").toggleClass("d-block")
} 

function step5Completed() 
{
    $("#kyc-process-section_1-step5").removeClass("d-block")
    $("#kyc-process-section_1-step6").toggleClass("d-block")
} 


function step6Completed() 
{
    $("#kyc-process-section_1-step6").removeClass("d-block")
    $("#kyc-process-section_1-step7").toggleClass("d-block")
} 