Feature: Automate and Verification of  Affiliate module
  I want to use this template for my feature file

  Background: Automate and Verify user is able to Login into the website so that user can access the application
    Given User navigates to Uniform website
    And User enters  username as "admin" and password as "admin@123"
    When User clicks on Login button
    When User gets success message
    When User is on Dashboard page of application
    And User clicks on Affiliate submenu
    Then user should be navigated to Affiliate page

  Scenario Outline: Verify Delete affiliate functionality so that user can delete the unwanted and inappropriate records from the Affiliate list.
    Given User is on Affiliate page
    When User clicks on Create button
    When User enters and save user details as "<f1>","<l1>","<e1>","<tel1>","<p1>","<cp1>","<add1>","<city1>","<post1>","<country1>","<state1>" and "<pname1>"
    And user enters and save second user details as "<f2>","<l2>","<e2>","<tel2>","<p2>","<cp2>","<add2>","<city2>","<post2>","<country2>","<state2>" and "<pname2>"
    When User click on the checkbox of new created record and delete record
    Then success message is displayed

    Examples: 
      | f1   | l1       | e1              | tel1     | p1    | cp1   | add1        | city1    | post1  | country1 | state1      | pname1 | f2    | l2       | e2              | tel2    | p2   | cp2  | add2        | city2  | post2  | country2 | state2      | pname2 |
      | Alex | Solankhi | alexs@gmail.com | 63436756 | alex1 | alex1 | Room no 602 | Goregaon | 421200 | India    | Maharashtra | Alexa  | Dipti | Bhandari | dipti@gmail.com | 6337822 | dipz | dipz | Room no 004 | Shahad | 421304 | India    | Maharashtra | Dipti  |

  Scenario Outline: Automate and Verify Filter Functionality by entering all the filter input  fields so that user can retrieve the records as per required.
    Given User is on Affiliate Page
    When User enters Affiliate name "<aname>" and status as "<astatus>"
    When User enters "<Date>","<aemail>" and "<approved>"
    And click on filter button
    Then user gets the details of required Affiliate

    Examples: 
      | aname      | astatus | Date       | aemail         | approved |
      | Ajit Singh | Enabled | 2021-09-04 | ajit@gmail.com | Yes      |

  Scenario Outline: Automate and Verify whether Filter Functionality works by entering one or two filter fields and does validation
    Given User enters name "<aname>" and "<email>"
    And Click on Filter button
    Then User gets the details of required affiliates
    And user enters affilate name not present in database
    Then user gets appropriate message on it

    Examples: 
      | aname         | email                   |
      | Nimisha Bhoir | nimishavbhoir@gmail.com |

  Scenario Outline: Automate and verify Create Affilate Page so that admin is able to create affilate records
    Given User Clicks on create button
    When User enters firstname as"<fname>" and "<lname>"
    When User enters email as "<email>" and "<telephoneno>"
    When user enters password as "<pas>" and "<cpass>"
    When user enters address details as "<add1>" and "<city>"
    When user enters postalcode as "<post>" and "<country>"
    When user enters state as "<state>"
    When user clicks on payment details tab
    And user enters payee name as "<pname>"
    When user clicks on save button
    Then user will get success message on saving

    Examples: 
      | fname | lname  | email                 | telephoneno | pas   | cpass | add1                    | city  | post   | country | state | pname |
      | Manoj | Mishra | manojmishra@gmail.com |     6416397 | manoj | manoj | Shastri Ngar Kurla East | Kurla | 421200 | India   | Goa   | Manoj |

  Scenario Outline: Verify Edit Affiliate Page
    Given when user clicks on Edit button
    When user enter name as "<edname>" and "<edeamil>" and clicks on Save
    Then User is able to see success message on modification

    Examples: 
      | edname | edeamil            |
      | Chinu  | chinmaya@gmail.com |

  Scenario Outline: Verify Pagination of the website
    Given user is navigated to the Affiliates page
    When user creates the record for an affiliate with details as "<f3>","<l3>","<e3>","<tel3>","<p3>","<cp3>","<add3>","<city3>","<post3>","<country3>","<state3>" and "<pname3>"
    Then the user should be able to see modification of the total record number

    Examples: 
      | f3    | l3    | e3              | tel3       | p3    | cp3   | add3                           | city3  | post3  | country3 | state3      | pname3 |
      | Gauri | Patil | gauri@gmail.com | 7845532437 | gauri | gauri | G02,Kanifnath Bldg Kalyan West | Kalyan | 421301 | India    | Maharashtra | Gauri  |

  Scenario: Automate and verify Sorting functionality so that user can easily verify and access the records and for increasing readability.
    Given user is on current Affiliate page
    When user clicks on sort list dropdown
    Then user is able to see the record in sorted manner

  Scenario Outline: Automate and verify that whether user can create a new record by entering invalid credentials
    Given user is navigated to the Affiliates page of webssite
    When user creates the record for an affiliate with details as follows "<f4>","<l4>","<e4>","<tel4>","<p4>","<cp4>","<add4>","<city4>","<post4>","<country4>","<state4>" and "<pname4>"
    Then the user should be able to see whether new record is added or not.

    Examples: 
      | f4     | l4    | e4            | tel4     | p4   | cp4  | add4        | city4  | post4    | country4 | state4      | pname4 |
      | Eli123 | Muth1 | eli@gmail.com | 36e8db98 | elio | elio | G02 ,ABC rd | Nashik | 42130wed | India    | Maharashtra | Eli    |

  Scenario: Automate and verify the affiliate records are getting approved or not so that user can retrieve data faster
    Given user is on the Affiliate record page
    When user approves one record
    Then the user is able to see that approved Affiliate list gets updated.

  Scenario Outline: Automate and verify that whether user gets proper validation message on leaving the input fields blank
    Given user is navigated to the Affiliates page of webssites
    When user creates the record for an affiliate with details as follows as "<f5>","<l5>","<e5>","<tel5>","<p5>","<cp5>","<add5>","<city5>","<post5>","<country5>","<state5>" and "<pname5>"
    Then the user should be able to see whether validation message is displayed or not.

    Examples: 
      | f5   | l5  | e5             | tel5 | p5   | cp5  | add5  | city5 | post5  | country5 | state5      | pname5 |
      | Zeba | Ali | zeba@gmail.com |      | zeba | zeba | KFKFK | Pune  | 432101 | India    | Maharashtra | Zeba   |
