$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/prac.feature");
formatter.feature({
  "name": "Automate and Verification of  Affiliate module",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Delete affiliate functionality so that user can delete the unwanted and inappropriate records from the Affiliate list.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Affiliate page",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on Create button",
  "keyword": "When "
});
formatter.step({
  "name": "User enters and save user details as \"\u003cf1\u003e\",\"\u003cl1\u003e\",\"\u003ce1\u003e\",\"\u003ctel1\u003e\",\"\u003cp1\u003e\",\"\u003ccp1\u003e\",\"\u003cadd1\u003e\",\"\u003ccity1\u003e\",\"\u003cpost1\u003e\",\"\u003ccountry1\u003e\",\"\u003cstate1\u003e\" and \"\u003cpname1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters and save second user details as \"\u003cf2\u003e\",\"\u003cl2\u003e\",\"\u003ce2\u003e\",\"\u003ctel2\u003e\",\"\u003cp2\u003e\",\"\u003ccp2\u003e\",\"\u003cadd2\u003e\",\"\u003ccity2\u003e\",\"\u003cpost2\u003e\",\"\u003ccountry2\u003e\",\"\u003cstate2\u003e\" and \"\u003cpname2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click on the checkbox of new created record and delete record",
  "keyword": "When "
});
formatter.step({
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "f1",
        "l1",
        "e1",
        "tel1",
        "p1",
        "cp1",
        "add1",
        "city1",
        "post1",
        "country1",
        "state1",
        "pname1",
        "f2",
        "l2",
        "e2",
        "tel2",
        "p2",
        "cp2",
        "add2",
        "city2",
        "post2",
        "country2",
        "state2",
        "pname2"
      ]
    },
    {
      "cells": [
        "Alex",
        "Solankhi",
        "alexs@gmail.com",
        "63436756",
        "alex1",
        "alex1",
        "Room no 602",
        "Goregaon",
        "421200",
        "India",
        "Maharashtra",
        "Alexa",
        "Dipti",
        "Bhandari",
        "dipti@gmail.com",
        "6337822",
        "dipz",
        "dipz",
        "Room no 004",
        "Shahad",
        "421304",
        "India",
        "Maharashtra",
        "Dipti"
      ]
    }
  ]
});
formatter.background({
  "name": "Automate and Verify user is able to Login into the website so that user can access the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_navigates_to_Uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  username as \"admin\" and password as \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets success message",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_gets_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Dashboard page of application",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_is_on_Dashboard_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Affiliate submenu",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Affiliate_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to Affiliate page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_should_be_navigated_to_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Delete affiliate functionality so that user can delete the unwanted and inappropriate records from the Affiliate list.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Affiliate page",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_is_on_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create button",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters and save user details as \"Alex\",\"Solankhi\",\"alexs@gmail.com\",\"63436756\",\"alex1\",\"alex1\",\"Room no 602\",\"Goregaon\",\"421200\",\"India\",\"Maharashtra\" and \"Alexa\"",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_enters_and_save_user_details_as_and(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters and save second user details as \"Dipti\",\"Bhandari\",\"dipti@gmail.com\",\"6337822\",\"dipz\",\"dipz\",\"Room no 004\",\"Shahad\",\"421304\",\"India\",\"Maharashtra\" and \"Dipti\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_and_save_second_user_details_as_and(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the checkbox of new created record and delete record",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_click_on_the_checkbox_of_new_created_record_and_delete_record()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.success_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Automate and Verify Filter Functionality by entering all the filter input  fields so that user can retrieve the records as per required.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Affiliate Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters Affiliate name \"\u003caname\u003e\" and status as \"\u003castatus\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cDate\u003e\",\"\u003caemail\u003e\" and \"\u003capproved\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on filter button",
  "keyword": "And "
});
formatter.step({
  "name": "user gets the details of required Affiliate",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "aname",
        "astatus",
        "Date",
        "aemail",
        "approved"
      ]
    },
    {
      "cells": [
        "Ajit Singh",
        "Enabled",
        "2021-09-04",
        "ajit@gmail.com",
        "Yes"
      ]
    }
  ]
});
formatter.background({
  "name": "Automate and Verify user is able to Login into the website so that user can access the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_navigates_to_Uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  username as \"admin\" and password as \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets success message",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_gets_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Dashboard page of application",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_is_on_Dashboard_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Affiliate submenu",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Affiliate_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to Affiliate page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_should_be_navigated_to_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate and Verify Filter Functionality by entering all the filter input  fields so that user can retrieve the records as per required.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Affiliate Page",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_is_on_Affiliate_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Affiliate name \"Ajit Singh\" and status as \"Enabled\"",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_enters_Affiliate_name_and_status_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"2021-09-04\",\"ajit@gmail.com\" and \"Yes\"",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_enters_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on filter button",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the details of required Affiliate",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_gets_the_details_of_required_Affiliate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Automate and Verify whether Filter Functionality works by entering one or two filter fields and does validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters name \"\u003caname\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Click on Filter button",
  "keyword": "And "
});
formatter.step({
  "name": "User gets the details of required affiliates",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters affilate name not present in database",
  "keyword": "And "
});
formatter.step({
  "name": "user gets appropriate message on it",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "aname",
        "email"
      ]
    },
    {
      "cells": [
        "Nimisha Bhoir",
        "nimishavbhoir@gmail.com"
      ]
    }
  ]
});
formatter.background({
  "name": "Automate and Verify user is able to Login into the website so that user can access the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_navigates_to_Uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  username as \"admin\" and password as \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets success message",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_gets_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Dashboard page of application",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_is_on_Dashboard_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Affiliate submenu",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Affiliate_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to Affiliate page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_should_be_navigated_to_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate and Verify whether Filter Functionality works by entering one or two filter fields and does validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters name \"Nimisha Bhoir\" and \"nimishavbhoir@gmail.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_enters_name_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Filter button",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.click_on_Filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets the details of required affiliates",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_gets_the_details_of_required_affiliates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters affilate name not present in database",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_affilate_name_not_present_in_database()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets appropriate message on it",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_gets_appropriate_message_on_it()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Automate and verify Create Affilate Page so that admin is able to create affilate records",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Clicks on create button",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters firstname as\"\u003cfname\u003e\" and \"\u003clname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters email as \"\u003cemail\u003e\" and \"\u003ctelephoneno\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters password as \"\u003cpas\u003e\" and \"\u003ccpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters address details as \"\u003cadd1\u003e\" and \"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters postalcode as \"\u003cpost\u003e\" and \"\u003ccountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters state as \"\u003cstate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on payment details tab",
  "keyword": "When "
});
formatter.step({
  "name": "user enters payee name as \"\u003cpname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "name": "user will get success message on saving",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "telephoneno",
        "pas",
        "cpass",
        "add1",
        "city",
        "post",
        "country",
        "state",
        "pname"
      ]
    },
    {
      "cells": [
        "Manoj",
        "Mishra",
        "manojmishra@gmail.com",
        "6416397",
        "manoj",
        "manoj",
        "Shastri Ngar Kurla East",
        "Kurla",
        "421200",
        "India",
        "Goa",
        "Manoj"
      ]
    }
  ]
});
formatter.background({
  "name": "Automate and Verify user is able to Login into the website so that user can access the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_navigates_to_Uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  username as \"admin\" and password as \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets success message",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_gets_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Dashboard page of application",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_is_on_Dashboard_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Affiliate submenu",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Affiliate_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to Affiliate page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_should_be_navigated_to_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate and verify Create Affilate Page so that admin is able to create affilate records",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Clicks on create button",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_Clicks_on_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters firstname as\"Manoj\" and \"Mishra\"",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_enters_firstname_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email as \"manojmishra@gmail.com\" and \"6416397\"",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_enters_email_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"manoj\" and \"manoj\"",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_enters_password_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters address details as \"Shastri Ngar Kurla East\" and \"Kurla\"",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_enters_address_details_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters postalcode as \"421200\" and \"India\"",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_enters_postalcode_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters state as \"Goa\"",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_enters_state_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on payment details tab",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_payment_details_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters payee name as \"Manoj\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_payee_name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will get success message on saving",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_will_get_success_message_on_saving()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Edit Affiliate Page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "when user clicks on Edit button",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter name as \"\u003cedname\u003e\" and \"\u003cedeamil\u003e\" and clicks on Save",
  "keyword": "When "
});
formatter.step({
  "name": "User is able to see success message on modification",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "edname",
        "edeamil"
      ]
    },
    {
      "cells": [
        "Chinu",
        "chinmaya@gmail.com"
      ]
    }
  ]
});
formatter.background({
  "name": "Automate and Verify user is able to Login into the website so that user can access the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_navigates_to_Uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  username as \"admin\" and password as \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets success message",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_gets_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Dashboard page of application",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_is_on_Dashboard_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Affiliate submenu",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Affiliate_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to Affiliate page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_should_be_navigated_to_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Edit Affiliate Page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "when user clicks on Edit button",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.when_user_clicks_on_Edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter name as \"Chinu\" and \"chinmaya@gmail.com\" and clicks on Save",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_enter_name_as_and_and_clicks_on_Save(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see success message on modification",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_is_able_to_see_success_message_on_modification()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Pagination of the website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is navigated to the Affiliates page",
  "keyword": "Given "
});
formatter.step({
  "name": "user creates the record for an affiliate with details as \"\u003cf3\u003e\",\"\u003cl3\u003e\",\"\u003ce3\u003e\",\"\u003ctel3\u003e\",\"\u003cp3\u003e\",\"\u003ccp3\u003e\",\"\u003cadd3\u003e\",\"\u003ccity3\u003e\",\"\u003cpost3\u003e\",\"\u003ccountry3\u003e\",\"\u003cstate3\u003e\" and \"\u003cpname3\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user should be able to see modification of the total record number",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "f3",
        "l3",
        "e3",
        "tel3",
        "p3",
        "cp3",
        "add3",
        "city3",
        "post3",
        "country3",
        "state3",
        "pname3"
      ]
    },
    {
      "cells": [
        "Gauri",
        "Patil",
        "gauri@gmail.com",
        "7845532437",
        "gauri",
        "gauri",
        "G02,Kanifnath Bldg Kalyan West",
        "Kalyan",
        "421301",
        "India",
        "Maharashtra",
        "Gauri"
      ]
    }
  ]
});
formatter.background({
  "name": "Automate and Verify user is able to Login into the website so that user can access the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_navigates_to_Uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  username as \"admin\" and password as \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets success message",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_gets_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Dashboard page of application",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_is_on_Dashboard_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Affiliate submenu",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Affiliate_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to Affiliate page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_should_be_navigated_to_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Pagination of the website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is navigated to the Affiliates page",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_is_navigated_to_the_Affiliates_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates the record for an affiliate with details as \"Gauri\",\"Patil\",\"gauri@gmail.com\",\"7845532437\",\"gauri\",\"gauri\",\"G02,Kanifnath Bldg Kalyan West\",\"Kalyan\",\"421301\",\"India\",\"Maharashtra\" and \"Gauri\"",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_creates_the_record_for_an_affiliate_with_details_as_and(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see modification of the total record number",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.the_user_should_be_able_to_see_modification_of_the_total_record_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Automate and Verify user is able to Login into the website so that user can access the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_navigates_to_Uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  username as \"admin\" and password as \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets success message",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_gets_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Dashboard page of application",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_is_on_Dashboard_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Affiliate submenu",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Affiliate_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to Affiliate page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_should_be_navigated_to_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate and verify Sorting functionality so that user can easily verify and access the records and for increasing readability.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on current Affiliate page",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_is_on_current_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sort list dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_sort_list_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to see the record in sorted manner",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_is_able_to_see_the_record_in_sorted_manner()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Automate and verify that whether user can create a new record by entering invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is navigated to the Affiliates page of webssite",
  "keyword": "Given "
});
formatter.step({
  "name": "user creates the record for an affiliate with details as follows \"\u003cf4\u003e\",\"\u003cl4\u003e\",\"\u003ce4\u003e\",\"\u003ctel4\u003e\",\"\u003cp4\u003e\",\"\u003ccp4\u003e\",\"\u003cadd4\u003e\",\"\u003ccity4\u003e\",\"\u003cpost4\u003e\",\"\u003ccountry4\u003e\",\"\u003cstate4\u003e\" and \"\u003cpname4\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user should be able to see whether new record is added or not.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "f4",
        "l4",
        "e4",
        "tel4",
        "p4",
        "cp4",
        "add4",
        "city4",
        "post4",
        "country4",
        "state4",
        "pname4"
      ]
    },
    {
      "cells": [
        "Eli123",
        "Muth1",
        "eli@gmail.com",
        "36e8db98",
        "elio",
        "elio",
        "G02 ,ABC rd",
        "Nashik",
        "42130wed",
        "India",
        "Maharashtra",
        "Eli"
      ]
    }
  ]
});
formatter.background({
  "name": "Automate and Verify user is able to Login into the website so that user can access the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_navigates_to_Uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  username as \"admin\" and password as \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets success message",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_gets_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Dashboard page of application",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_is_on_Dashboard_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Affiliate submenu",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Affiliate_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to Affiliate page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_should_be_navigated_to_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate and verify that whether user can create a new record by entering invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is navigated to the Affiliates page of webssite",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_is_navigated_to_the_Affiliates_page_of_webssite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates the record for an affiliate with details as follows \"Eli123\",\"Muth1\",\"eli@gmail.com\",\"36e8db98\",\"elio\",\"elio\",\"G02 ,ABC rd\",\"Nashik\",\"42130wed\",\"India\",\"Maharashtra\" and \"Eli\"",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_creates_the_record_for_an_affiliate_with_details_as_follows_and(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see whether new record is added or not.",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.the_user_should_be_able_to_see_whether_new_record_is_added_or_not()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat StepDefination.PracAff.the_user_should_be_able_to_see_whether_new_record_is_added_or_not(PracAff.java:1121)\r\n\tat ✽.the user should be able to see whether new record is added or not.(file:src/test/java/Features/prac.feature:90)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Automate and Verify user is able to Login into the website so that user can access the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_navigates_to_Uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  username as \"admin\" and password as \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets success message",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_gets_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Dashboard page of application",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_is_on_Dashboard_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Affiliate submenu",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Affiliate_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to Affiliate page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_should_be_navigated_to_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate and verify the affiliate records are getting approved or not so that user can retrieve data faster",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the Affiliate record page",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_is_on_the_Affiliate_record_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user approves one record",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_approves_one_record()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is able to see that approved Affiliate list gets updated.",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.the_user_is_able_to_see_that_approved_Affiliate_list_gets_updated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Automate and verify that whether user gets proper validation message on leaving the input fields blank",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is navigated to the Affiliates page of webssites",
  "keyword": "Given "
});
formatter.step({
  "name": "user creates the record for an affiliate with details as follows as \"\u003cf5\u003e\",\"\u003cl5\u003e\",\"\u003ce5\u003e\",\"\u003ctel5\u003e\",\"\u003cp5\u003e\",\"\u003ccp5\u003e\",\"\u003cadd5\u003e\",\"\u003ccity5\u003e\",\"\u003cpost5\u003e\",\"\u003ccountry5\u003e\",\"\u003cstate5\u003e\" and \"\u003cpname5\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user should be able to see whether validation message is displayed or not.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "f5",
        "l5",
        "e5",
        "tel5",
        "p5",
        "cp5",
        "add5",
        "city5",
        "post5",
        "country5",
        "state5",
        "pname5"
      ]
    },
    {
      "cells": [
        "Zeba",
        "Ali",
        "zeba@gmail.com",
        "",
        "zeba",
        "zeba",
        "KFKFK",
        "Pune",
        "432101",
        "India",
        "Maharashtra",
        "Zeba"
      ]
    }
  ]
});
formatter.background({
  "name": "Automate and Verify user is able to Login into the website so that user can access the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_navigates_to_Uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  username as \"admin\" and password as \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets success message",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_gets_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Dashboard page of application",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_is_on_Dashboard_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Affiliate submenu",
  "keyword": "And "
});
formatter.match({
  "location": "PracAff.user_clicks_on_Affiliate_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to Affiliate page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.user_should_be_navigated_to_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate and verify that whether user gets proper validation message on leaving the input fields blank",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is navigated to the Affiliates page of webssites",
  "keyword": "Given "
});
formatter.match({
  "location": "PracAff.user_is_navigated_to_the_Affiliates_page_of_webssites()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates the record for an affiliate with details as follows as \"Zeba\",\"Ali\",\"zeba@gmail.com\",\"\",\"zeba\",\"zeba\",\"KFKFK\",\"Pune\",\"432101\",\"India\",\"Maharashtra\" and \"Zeba\"",
  "keyword": "When "
});
formatter.match({
  "location": "PracAff.user_creates_the_record_for_an_affiliate_with_details_as_follows_as_and(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see whether validation message is displayed or not.",
  "keyword": "Then "
});
formatter.match({
  "location": "PracAff.the_user_should_be_able_to_see_whether_validation_message_is_displayed_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});