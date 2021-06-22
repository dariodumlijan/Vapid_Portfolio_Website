<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$fName = $_POST['fname'];
$lName = $_POST['lname'];
$mailFrom = $_POST['femail'];
$jobType = $_POST['jobType'];
$jobDetails = $_POST['fdetails'];
$refFiles = $_POST['frefs'];
$budget = $_POST['fbudget'];
$deadlineDay = $_POST['fdeadlineDAY'];
$deadlineMonth = $_POST['fdeadlineMONTH'];
$deadlineYear = $_POST['fdeadlineYEAR'];

//Validate first
if(empty($fName)||empty($lName)||empty($mailFrom)) 
{
    echo "Required fields are not filled!";
    exit;
}

if(IsInjected($mailFrom))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'dario@dariodumlijan.com';//<== update the email address
$email_subject = "Dario Website";
$email_body = "From: $fName $lName\n".
"Email: $mailFrom\n".
"Job Type: $jobType\n".
"Details:\n$jobDetails\n".
"References: $refFiles\n".
"Budget: £$budget\n".
"Deadline (DD.MM.YYYY): $deadlineDay.$deadlineMonth.$deadlineYear\n\n".
    
$to = "dario@dariodumlijan.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $mailFrom \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: ' . $_SERVER['HTTP_REFERER']);


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 