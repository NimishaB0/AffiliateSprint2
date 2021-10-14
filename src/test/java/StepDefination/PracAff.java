package StepDefination;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import Hooks.HookAff;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PracAff {

	WebDriver driver =HookAff.driver;

	@Given("User navigates to Uniform website")
	public void user_navigates_to_Uniform_website() {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.get("http://uniformm1.upskills.in/admin");
			driver.manage().window().maximize();
			String expectedtitle = driver.getTitle();
			String actual = "Administration";
			Assert.assertEquals(actual, expectedtitle);

		} catch (Exception e) {
			System.out.println("Title is not found " + e);
		}

	}

	@Given("User enters  username as {string} and password as {string}")
	public void user_enters_username_as_and_password_as(String uname, String pwd) {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.name("username")).sendKeys(uname);
			driver.findElement(By.name("password")).sendKeys(pwd);
		} catch (Exception e) {
			System.out.println("Try again" + e);
		}
	}

	@When("User clicks on Login button")
	public void user_clicks_on_Login_button() {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.xpath("//button[@class='btn btn-primary']")).click();
			System.out.println("Login Button Clicked");

		} catch (Exception e) {
			System.out.println("Try again " + e);
		}
	}

	@When("User gets success message")
	public void user_gets_success_message() {
		// Write code here that turns the phrase above into concrete actions
		try {
			String actual = "Dashboard";
			String expected = driver.getTitle();

			if (actual.equals(expected)) {
				System.out.println("Successfully Logged in");
			} else {
				System.out.println("Login Failed!");
				Assert.fail();
			}
		} catch (Exception e) {
			System.out.println("Try to login again! " + e);
			Assert.fail();
		}
	}

	@When("User is on Dashboard page of application")
	public void user_is_on_Dashboard_page_of_application() {
		// Write code here that turns the phrase above into concrete actions
		try {
			System.out.println("I am on " + driver.getTitle() + " page.");
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@When("User clicks on Affiliate submenu")
	public void user_clicks_on_Affiliate_submenu() {
		// Write code here that turns the phrase above into concrete actions
		try {
			Actions action = new Actions(driver);
			Thread.sleep(2000);
			WebElement el = driver.findElement(By.xpath("//a/i[@class='fa fa-share-alt fa-fw']"));
			action.click(el).build().perform();
			Thread.sleep(1000);
			WebElement ele = driver.findElement(By.xpath("//*[@id=\"menu\"]/li[7]/ul/li[2]/a"));
			action.click(ele).build().perform();
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@Then("user should be navigated to Affiliate page")
	public void user_should_be_navigated_to_Affiliate_page() {
		// Write code here that turns the phrase above into concrete actions
		try {
			System.out.println("I am on " + driver.getTitle() + " page.");
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@Given("User is on Affiliate page")
	public void user_is_on_Affiliate_page() {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.tagName("h1")).getText();
		} catch (Exception e) {
			System.out.println("User is not on Affiliates page " + e);
			Assert.fail();
		}
	}

	@When("User clicks on Create button")
	public void user_clicks_on_Create_button() {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.xpath("//a[@data-original-title='Add New']")).click();
			System.out.println("Add new button clicked");
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println(e);
			Assert.fail();
		}
	}

	@When("User enters and save user details as {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string} and {string}")
	public void user_enters_and_save_user_details_as_and(String f1, String l1, String e1, String tel1, String p1,
			String cp1, String add1, String city1, String post1, String country1, String state1, String pname1) {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.id("input-firstname")).sendKeys(f1);
			System.out.println("Firstname added");
			Thread.sleep(1000);

			driver.findElement(By.id("input-lastname")).sendKeys(l1);
			System.out.println("Lastname added");
			Thread.sleep(1000);

			driver.findElement(By.id("input-email")).sendKeys(e1);
			System.out.println("Email added");
			Thread.sleep(1000);

			driver.findElement(By.id("input-telephone")).sendKeys(tel1);
			System.out.println("Telephone added");
			Thread.sleep(1000);

			driver.findElement(By.id("input-password")).sendKeys(p1);
			System.out.println("Password added");
			Thread.sleep(1000);

			driver.findElement(By.id("input-confirm")).sendKeys(cp1);
			System.out.println("Password Confirmed");
			Thread.sleep(1000);

			driver.findElement(By.id("input-address-1")).sendKeys(add1);
			System.out.println("Address1 added");
			Thread.sleep(1000);

			driver.findElement(By.id("input-city")).sendKeys(city1);
			System.out.println("City1 added");
			Thread.sleep(1000);

			driver.findElement(By.id("input-postcode")).sendKeys(post1);
			System.out.println("Postcode added");
			Thread.sleep(1000);

			Select sel = new Select(driver.findElement((By.xpath("//select[@name='country_id']"))));
			sel.selectByVisibleText(country1);
			System.out.println("Country  added");
			Thread.sleep(1000);

			Select sel1 = new Select(driver.findElement((By.xpath("//select[@name='zone_id']"))));
			sel1.selectByVisibleText(state1);
			System.out.println("State1 added");
			Thread.sleep(1000);

			driver.findElement(By.xpath("//a[contains(text(),'Payment Details')]")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@id='input-cheque']")).sendKeys(pname1);
			Thread.sleep(1000);

			WebElement savebtn = driver.findElement(By.xpath("//button[@data-original-title='Save']"));
			savebtn.click();
			System.out.println("Save button clicked for first user");

		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@When("user enters and save second user details as {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string} and {string}")
	public void user_enters_and_save_second_user_details_as_and(String f2, String l2, String e2, String tel2, String p2,
			String cp2, String add2, String city2, String post2, String country2, String state2, String pname2) {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.xpath("//a[@data-original-title='Add New']")).click();
			System.out.println("Add new button clicked");
			Thread.sleep(1000);

			driver.findElement(By.id("input-firstname")).sendKeys(f2);
			Thread.sleep(1000);
			driver.findElement(By.id("input-lastname")).sendKeys(l2);
			Thread.sleep(1000);

			driver.findElement(By.id("input-email")).sendKeys(e2);
			Thread.sleep(1000);
			driver.findElement(By.id("input-telephone")).sendKeys(tel2);
			Thread.sleep(1000);

			driver.findElement(By.id("input-password")).sendKeys(p2);
			Thread.sleep(1000);
			driver.findElement(By.id("input-confirm")).sendKeys(cp2);
			Thread.sleep(1000);

			driver.findElement(By.id("input-address-1")).sendKeys(add2);
			Thread.sleep(1000);
			driver.findElement(By.id("input-city")).sendKeys(city2);
			Thread.sleep(1000);
			driver.findElement(By.id("input-postcode")).sendKeys(post2);
			Thread.sleep(1000);

			Select sel = new Select(driver.findElement((By.xpath("//select[@name='country_id']"))));
			sel.selectByVisibleText(country2);
			Thread.sleep(1000);

			Select sel1 = new Select(driver.findElement((By.xpath("//select[@name='zone_id']"))));
			sel1.selectByVisibleText(state2);
			Thread.sleep(1000);

			driver.findElement(By.xpath("//a[contains(text(),'Payment Details')]")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@id='input-cheque']")).sendKeys(pname2);
			Thread.sleep(1000);

			WebElement savebtn = driver.findElement(By.xpath("//button[@data-original-title='Save']"));
			savebtn.click();
			System.out.println("Save button clicked for second user");

		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@When("User click on the checkbox of new created record and delete record")
	public void user_click_on_the_checkbox_of_new_created_record_and_delete_record() {
		// Write code here that turns the phrase above into concrete actions
		try {
			WebElement check1 = driver.findElement(By.xpath("//td[contains(text(),'Alex')]/../td/input"));
			check1.click();
			System.out.println("First user Checkbox clicked");
			Thread.sleep(2000);
			WebElement check2 = driver.findElement(By.xpath("//td[contains(text(),'Dipti')]/../td/input"));
			check2.click();
			System.out.println("Second user Checkbox clicked");
			Thread.sleep(2000);
			WebElement delbtn1 = driver.findElement(By.xpath("//button[@data-original-title='Delete']"));
			delbtn1.click();
			driver.switchTo().alert().accept();
			System.out.println("Delete Button clicked");

		} catch (Exception e) {
			System.out.println(e);
			
		}
	}

	@Then("success message is displayed")
	public void success_message_is_displayed() {
		// Write code here that turns the phrase above into concrete actions
		try {
			System.out.println(driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText());
		} catch (Exception e) {
			System.out.println("Message not displayed " + e);
		}
	}

	// 2nd Scenario(Filter)
	@Given("User is on Affiliate Page")
	public void user_is_on_Affiliate_Page() {
		// Write code here that turns the phrase above into concrete actions
		try {
			System.out.println("I am on " + driver.getTitle() + " page.");
		} catch (Exception e) {
			System.out.println(e);
			Assert.fail();
		}

	}

	@When("User enters Affiliate name {string} and status as {string}")
	public void user_enters_Affiliate_name_and_status_as(String aname, String astatus) {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.xpath("//input[@name='filter_name']")).sendKeys(aname);
			System.out.println("Affiliate name entered " + aname);
			Thread.sleep(1000);

			Select sel = new Select(driver.findElement((By.xpath("//select[@name='filter_status']"))));
			sel.selectByVisibleText(astatus);
			System.out.println("Status field  added " + astatus);
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@When("User enters {string},{string} and {string}")
	public void user_enters_and(String date, String email, String appr) {
		// Write code here that turns the phrase above into concrete actions
		try {

			driver.findElement(By.xpath("//input[@name='filter_date_added']")).sendKeys(date);
			System.out.println("Affiliate date entered " + date);
			Thread.sleep(1000);

			driver.findElement(By.xpath("//input[@name='filter_email']")).sendKeys(email);
			System.out.println("Affiliate email entered " + email);
			Thread.sleep(1000);

			Select sel = new Select(driver.findElement((By.xpath("//select[@name='filter_approved']"))));
			sel.selectByVisibleText(appr);
			System.out.println("Approved field  added " + appr);
			Thread.sleep(1000);

		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@When("click on filter button")
	public void click_on_filter_button() {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.xpath("//button[@id='button-filter']")).click();
			System.out.println("Filter button added");
		} catch (Exception e) {
			System.out.println();
		}

	}

	@Then("user gets the details of required Affiliate")
	public void user_gets_the_details_of_required_Affiliate() {
		// Write code here that turns the phrase above into concrete actions
		try {
			String actualText1 = driver.findElement(By.xpath("//input[@id='input-name']")).getAttribute("value");
			String expText1 = driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr/td[2]"))
					.getText();
			Assert.assertEquals(actualText1, expText1);
			System.out
					.println("Actual Affiliate name is " + actualText1 + " and expected Affiliate name is " + expText1);
			
			String actualText2 = driver.findElement(By.xpath("//input[@id='input-email']")).getAttribute("value");
			String expText2 = driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr/td[3]"))
					.getText();
			Assert.assertEquals(actualText2, expText2);
			System.out
					.println("Actual Affiliate email is " + actualText2 + " and expected Affiliate email is " + expText2);
			
			
			//String actualText3 = driver.findElement(By.xpath("//input[@id='input-date-added']")).getText();
			String expText3 = driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr/td[6]"))
					.getText();
			//Assert.assertEquals(actualText3, expText3);
			System.out
					.println(" Affiliate Date added is " + expText3);
			
			
			//String actualText4 = driver.findElement(By.xpath("//*[@id=\"input-status\"]/option[1]")).getText();
			Select sel = new Select(driver.findElement((By.xpath("//select[@name='filter_status']"))));
			WebElement o = sel.getFirstSelectedOption();
		      String actualText4 = o.getText();
			String expText4 = driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr/td[5]"))
					.getText();
			Assert.assertEquals(actualText4, expText4);
			System.out
					.println("Actual Affiliate Status is " + actualText4 + " and expected Affiliate Status is " + expText4);
			
			Select sel1= new Select(driver.findElement((By.xpath("//select[@name='filter_approved']"))));
			WebElement p = sel1.getFirstSelectedOption();
		      String actualText5 = p.getText();
			boolean app= driver.findElement(By.xpath("//button[@class='btn btn-success']")).isDisplayed();
					
			//Assert.assertEquals(actualText4, expText4);
			System.out
					.println("Approved option selected is " + actualText5 + " and expected Affiliate Approved status is " + app);
			
			/*
			 * List<WebElement> element =
			 * driver.findElements(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr"
			 * )); System.out.println("Information is:- "+element.size());
			 * 
			 * String headers; for(int i=0;i<element.size();i++) { WebElement obj
			 * =element.get(i); headers = obj.getText(); System.out.println(headers); }
			 */

		} catch (Exception e) {
			System.out.println(e);
		}
	}

	// Create affiliate scenario
	@Given("User Clicks on create button")
	public void user_Clicks_on_create_button() {
		// Write code here that turns the phrase above into concrete actions
		try {
			System.out.println("I am creating new Affiliate");
			WebElement cbtn = driver.findElement(By.xpath("//a[@data-original-title='Add New']"));
			cbtn.click();
			System.out.println("Add New button clicked");
			Thread.sleep(1000);
		}
		/*
		 * boolean fl = cbtn.isEnabled(); if(fl==false) {
		 * System.out.println("Create button not clicked"); } }
		 */
		catch (Exception e) {
			System.out.println(e);
		}
	}

	@When("User enters firstname as{string} and {string}")
	public void user_enters_firstname_as_and(String fname, String lname) {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.id("input-firstname")).sendKeys(fname);
			Thread.sleep(1000);
			driver.findElement(By.id("input-lastname")).sendKeys(lname);
			Thread.sleep(1000);

		} catch (Exception e) {

			System.out.println(e);
		}
	}

	@When("User enters email as {string} and {string}")
	public void user_enters_email_as_and(String email, String telno) {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.id("input-email")).sendKeys(email);
			Thread.sleep(1000);
			driver.findElement(By.id("input-telephone")).sendKeys(telno);
			Thread.sleep(1000);

		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@When("user enters password as {string} and {string}")
	public void user_enters_password_as_and(String pass, String cpass) {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.id("input-password")).sendKeys(pass);
			Thread.sleep(1000);
			driver.findElement(By.id("input-confirm")).sendKeys(cpass);
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@When("user enters address details as {string} and {string}")
	public void user_enters_address_details_as_and(String add1, String city) {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.id("input-address-1")).sendKeys(add1);
			Thread.sleep(1000);
			driver.findElement(By.id("input-city")).sendKeys(city);
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@When("user enters postalcode as {string} and {string}")
	public void user_enters_postalcode_as_and(String postal, String country) {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.id("input-postcode")).sendKeys(postal);
			Thread.sleep(1000);

			Select sel = new Select(driver.findElement((By.xpath("//select[@name='country_id']"))));
			sel.selectByVisibleText(country);
			Thread.sleep(1000);

		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@When("user enters state as {string}")
	public void user_enters_state_as(String state) {
		// Write code here that turns the phrase above into concrete actions
		try {
			Select sel1 = new Select(driver.findElement((By.xpath("//select[@name='zone_id']"))));
			sel1.selectByVisibleText(state);
			Thread.sleep(1000);

		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@When("user clicks on payment details tab")
	public void user_clicks_on_payment_details_tab() {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.xpath("//a[contains(text(),'Payment Details')]")).click();
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@When("user enters payee name as {string}")
	public void user_enters_payee_name_as(String pname) {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.xpath("//input[@id='input-cheque']")).sendKeys(pname);
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@When("user clicks on save button")
	public void user_clicks_on_save_button() {
		// Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.xpath("//button[@data-original-title='Save']")).click();

		} catch (Exception e) {
			System.out.println("Try again to save " + e);
		}
	}

	@Then("user will get success message on saving")
	public void user_will_get_success_message_on_saving() {
		// Write code here that turns the phrase above into concrete actions
		try {
			if (isDisplayed()) {
				System.out.println("Affiliate saved successfully");
			} else if (driver
					.findElement(By.xpath("//*[contains(text(),'Telephone must be between 3 and 32 characters!')]"))
					.isDisplayed()) {
				System.out.print("Telephone field gave warining message " + " ");
				System.out.println("Telephone must be between 3 and 32 characters!");
			}
			else {

				System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
			}
			
			/*
			 * if (isDisplayed()) { System.out.println(); } else if (driver .findElement(By.
			 * xpath("//*[contains(text(),'E-Mail Address does not appear to be valid!')]"))
			 * .isDisplayed()) { System.out.print("Email ID field gave warining message " +
			 * " "); System.out.println("E-Mail Address does not appear to be valid!"); }
			 * else {
			 * 
			 * System.out.println(driver.findElement(By.
			 * xpath("//*[@class='alert alert-danger']")).getText()); }
			 */

		} catch (Exception e) {
			System.out.println(e);
			Assert.fail();
		}
	}

	public boolean isDisplayed() {
		try {
			WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Success')]"));
			boolean flag = element.isDisplayed();
			return flag;

		} catch (Exception e) {
			return false;
		}
	}

	@Given("User enters name {string} and {string}")
	public void user_enters_name_and(String filtname, String filtemail) {
		// Write code here that turns the phrase above into concrete actions
		try
	    {
	    	System.out.println("Scenario Name:- Verify whether Filter Functionality works by entering one or two filter fields and does validation");
	    	driver.findElement(By.xpath("//input[@name='filter_name']")).sendKeys(filtname);
			System.out.println("Affiliate name entered " + filtname);
			Thread.sleep(1000);
	    	


           driver.findElement(By.xpath("//input[@name='filter_email']")).sendKeys(filtemail);
			System.out.println("Affiliate email entered " + filtemail);
			Thread.sleep(1000);
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }


	}

	@Given("Click on Filter button")
	public void click_on_Filter_button() {
		// Write code here that turns the phrase above into concrete actions
		try
	    {
			driver.findElement(By.xpath("//button[@id='button-filter']")).click();
			System.out.println("Filter button added");
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }


	}

	@Then("User gets the details of required affiliates")
	public void user_gets_the_details_of_required_affiliates() {
		// Write code here that turns the phrase above into concrete actions
		try
	    {
			String actualText1 = driver.findElement(By.xpath("//input[@id='input-name']")).getAttribute("value");
			String expText1 = driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr/td[2]")).getText();
			Assert.assertEquals(actualText1, expText1);
			System.out.println("Actual Affiliate name is " + actualText1 + " and expected Affiliate name is " + expText1);
			
			String actualText2 = driver.findElement(By.xpath("//input[@id='input-email']")).getAttribute("value");
			String expText2 = driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr/td[3]")).getText();
			Assert.assertEquals(actualText2, expText2);
			System.out.println("Actual Affiliate name is " + actualText2 + " and expected Affiliate name is " + expText2);
			
			if(driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr/td[2]")).isDisplayed() &&driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr/td[3]")).isDisplayed())
			{
				System.out.println("Record Founded!");
				System.out.println(driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr/td")).getText());
				
			}
			else
			{
			   System.out.println("No record found");
			   Assert.fail();
			}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }


	}

	@Then("user enters affilate name not present in database")
	public void user_enters_affilate_name_not_present_in_database() {
		// Write code here that turns the phrase above into concrete actions
		try
	    {
			String filtname ="Paritosh";
			System.out.println("Scenario Name:- Verify whether Filter Functionality works by entering one or two filter fields and does validation");
			driver.findElement(By.xpath("//input[@name='filter_name']")).clear();
			driver.findElement(By.xpath("//input[@name='filter_email']")).clear();
			driver.findElement(By.xpath("//input[@name='filter_name']")).sendKeys(filtname);
			System.out.println("Affiliate name entered " + filtname);
			Thread.sleep(1000);
			driver.findElement(By.xpath("//button[@id='button-filter']")).click();
			System.out.println("Filter button added");
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }


	}

	@Then("user gets appropriate message on it")
	public void user_gets_appropriate_message_on_it() {
		// Write code here that turns the phrase above into concrete actions
		try
	    {
			WebElement ele =driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr/td"));
			boolean flag = ele.isDisplayed();
	    	if(flag)
	    	{
               System.out.println("The result of the affiliate starting with Paritosh is given as  "+driver.findElement(By.xpath("//*[contains(text(),'No results!')]")).getText());
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }


	}
	
	@Given("when user clicks on Edit button")
	public void when_user_clicks_on_Edit_button() {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
	    	System.out.println("I am in Edit Affiliate Scenario!");
	    	System.out.println("Name and Email of Affiliate Before Editing:-");
	    	System.out.println("Name :- "+driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[3]/td[2]")).getText());
	    	System.out.println("Email :- "+driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[3]/td[3]")).getText());
	    	driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[3]/td[7]/a[@data-original-title='Edit']")).click();
	    	System.out.println("Edit Button Clicked");
	    	Thread.sleep(2000);
	    	driver.findElement(By.xpath("//input[@value='Chinmaya']")).clear();
	    	driver.findElement(By.xpath("//input[@id='input-email']")).clear();
	    	
	    }
	    catch(Exception e)
	    {
	      	System.out.println(e);
	    }
	  
	}
	
	@When("user enter name as {string} and {string} and clicks on Save")
	public void user_enter_name_as_and_and_clicks_on_Save(String name, String email) {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
	    	driver.findElement(By.xpath("//input[@value='Chinmaya']")).sendKeys(name);
	    	Thread.sleep(2000);
	    	System.out.println("Name for Editing record entered is "+name);
	    	driver.findElement(By.xpath("//input[@id='input-email']")).sendKeys(email);
	    	Thread.sleep(2000);
	    	System.out.println("Email for Editing record entered is "+email);
	    	
	    	driver.findElement(By.xpath("//button[@data-original-title='Save']")).click();
			Thread.sleep(2000);
			
			//WebElement en =driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[3]/td[2]"));
			//WebElement em =driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[3]/td[2]"));
			
			System.out.println("Name and Email after Editing of record are:- ");
			System.out.println("Name :- "+driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[3]/td[2]")).getText());
	    	System.out.println("Email :- "+driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[3]/td[3]")).getText());
	
	    	
	    }
	    catch(Exception e)
	    {
	      	System.out.println(e);
	    }
	}



	@Then("User is able to see success message on modification")
	public void user_is_able_to_see_success_message_on_modification() {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
	    	if(driver.findElement(By.xpath("//*[contains(text(),'Success')]")).isDisplayed())
	    	{
	    		System.out.println("Record Edited Successfully!");
	    	}
	    }
	    catch(Exception e)
	    {
	      	System.out.println(e);
	      	Assert.fail();
	    }
	}
	
	
	@Given("user is navigated to the Affiliates page")
	public void user_is_navigated_to_the_Affiliates_page() {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	System.out.println("I am on "+driver.getTitle()+" page.");
	    	System.out.println("Before Creating records the total affilaites are given Below:- ");
	    	System.out.println(driver.findElement(By.xpath("//div[contains(text(),'Showing 1 to')]")).getText());
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("user creates the record for an affiliate with details as {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string} and {string}")
	public void user_creates_the_record_for_an_affiliate_with_details_as_and(String fname, String lname, String email, String telno, String pass, String cpass, String add1, String city, String postal, String country, String state, String pname) {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	System.out.println("Creating record for verifying Pagination functionality!");
	    	WebElement cbtn = driver.findElement(By.xpath("//a[@data-original-title='Add New']"));
			cbtn.click();
			System.out.println("Add New button clicked");
			Thread.sleep(1000);
	    	driver.findElement(By.id("input-firstname")).sendKeys(fname);
			Thread.sleep(1000);
			driver.findElement(By.id("input-lastname")).sendKeys(lname);
			Thread.sleep(1000);

			driver.findElement(By.id("input-email")).sendKeys(email);
			Thread.sleep(1000);
			driver.findElement(By.id("input-telephone")).sendKeys(telno);
			Thread.sleep(1000);

			driver.findElement(By.id("input-password")).sendKeys(pass);
			Thread.sleep(1000);
			driver.findElement(By.id("input-confirm")).sendKeys(cpass);
			Thread.sleep(1000);

			driver.findElement(By.id("input-address-1")).sendKeys(add1);
			Thread.sleep(1000);
			driver.findElement(By.id("input-city")).sendKeys(city);
			Thread.sleep(1000);

			driver.findElement(By.id("input-postcode")).sendKeys(postal);
			Thread.sleep(1000);

			Select sel = new Select(driver.findElement((By.xpath("//select[@name='country_id']"))));
			sel.selectByVisibleText(country);
			Thread.sleep(1000);

			Select sel1 = new Select(driver.findElement((By.xpath("//select[@name='zone_id']"))));
			sel1.selectByVisibleText(state);
			Thread.sleep(1000);

			driver.findElement(By.xpath("//a[contains(text(),'Payment Details')]")).click();
			Thread.sleep(1000);


			driver.findElement(By.xpath("//input[@id='input-cheque']")).sendKeys(pname);
			Thread.sleep(1000);

			WebElement save=driver.findElement(By.xpath("//button[@data-original-title='Save']"));
			save.click();
			if(isDisplayed())
			{
				System.out.println("Record created successfully");
			}
					
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("the user should be able to see modification of the total record number")
	public void the_user_should_be_able_to_see_modification_of_the_total_record_number() {
	    // Write code here that turns the phrase above into concrete actions
	    try 
	    {
	    	System.out.println("After adding record the number of affiliate record changes to:-");
	    	System.out.println(driver.findElement(By.xpath("//div[contains(text(),'Showing 1 to')]")).getText());
	    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}
	
	@Given("user is on current Affiliate page")
	public void user_is_on_current_Affiliate_page() {
	    // Write code here that turns the phrase above into concrete actions
	    try 
	    {
	    	System.out.println("I am in Sort Functionality Scenario");
	    	System.out.println(driver.findElement(By.xpath("//h3")).getText());
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }
	}

	@When("user clicks on sort list dropdown")
	public void user_clicks_on_sort_list_dropdown() {
	    // Write code here that turns the phrase above into concrete actions
		try 
	    {
			System.out.println("Records in Ascending Order");
			WebElement el1 = driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[1]/td[2]"));
			String str1 = el1.getText();
			System.out.println(str1);
			WebElement el2 = driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[last()]/td[2]"));
			String str2 = el2.getText();
			System.out.println(str2);
			//System.out.println(el2.getText());
			
			WebElement btn=driver.findElement(By.xpath("//a[@class='asc']"));
			btn.click();
			Thread.sleep(1000);
			
			System.out.println("");
			System.out.println("Records in Descending Order");
			
			WebElement el3 = driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[1]/td[2]"));
			String str3 = el3.getText();
			System.out.println(str3);
			//System.out.println(el3.getText());
			WebElement el4 = driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[last()]/td[2]"));
			String str4 = el4.getText();
			System.out.println(str4);
			//System.out.println(el4.getText());
			
			if((str1.equalsIgnoreCase(str4)) && (str2.equalsIgnoreCase(str3)))
			{
				System.out.println("Sorting Functionality working Properly");
			}
			else {
				System.out.println("Sorting Functionality not working Properly");
				Assert.fail();
			}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }
	}

	@Then("user is able to see the record in sorted manner")
	public void user_is_able_to_see_the_record_in_sorted_manner() {
	    // Write code here that turns the phrase above into concrete actions
		try 
	    {
	    	System.out.println("This Scenario is working properly");
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }
	}

	
	@Given("user is on the Affiliate record page")
	public void user_is_on_the_Affiliate_record_page() {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	System.out.println("I am in Sort Functionality Scenario");
	    	System.out.println(driver.findElement(By.xpath("//h3")).getText());
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }
	}

	@When("user approves one record")
	public void user_approves_one_record() {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			 WebElement baseTable = driver.findElement(By.tagName("table"));
			 
			 WebElement tableRow = baseTable.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[2]"));
	         String rowtext = tableRow.getText();
			 System.out.println("Second row of table : "+rowtext);
			 System.out.println("Before approving the 2nd affiliate's record the Approval list was");
			 Select sel = new Select(driver.findElement((By.xpath("//select[@name='filter_approved']"))));
				sel.selectByVisibleText("Yes");
				//System.out.println("Approved field  added " + appr);
				Thread.sleep(1000);
				driver.findElement(By.xpath("//button[@id='button-filter']")).click();
			     List<WebElement> element =driver.findElements(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr"));
				System.out.println("Total Approved Affiliate records are "+element.size());
					  
					  String headers;
					  for(int i=0;i<element.size();i++)
					  {
						  WebElement obj =element.get(i); 
						  headers = obj.getText();
						  System.out.println(headers);
						  }
			 
					  driver.navigate().back();
					  driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr[2]/td[7]/a[@data-original-title='Approve']")).click();
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }
	}

	@Then("the user is able to see that approved Affiliate list gets updated.")
	public void the_user_is_able_to_see_that_approved_Affiliate_list_gets_updated() {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
			System.out.println("");
			 System.out.println("After approving the 8th affiliate's record the Approval list is");
			 Select sel1 = new Select(driver.findElement((By.xpath("//select[@name='filter_approved']"))));
				sel1.selectByVisibleText("Yes");
				//System.out.println("Approved field  added " + appr);
				Thread.sleep(1000);
				driver.findElement(By.xpath("//button[@id='button-filter']")).click();
			
			 List<WebElement> element1 =
			  driver.findElements(By.xpath("//*[@id=\"form-affiliate\"]/div/table/tbody/tr"));
			  System.out.println("Total Approved Affiliate records are "+element1.size());
			  
			  String headers1;
			  for(int i=0;i<element1.size();i++)
			  {
				  WebElement obj =element1.get(i); 
				  headers1 = obj.getText();
				  System.out.println(headers1);
				  }
			 
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }
	}
	
	@Given("user is navigated to the Affiliates page of webssite")
	public void user_is_navigated_to_the_Affiliates_page_of_webssite() {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	driver.findElement(By.tagName("h1")).getText();
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }
	}
	
	@When("user creates the record for an affiliate with details as follows {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string} and {string}")
	public void user_creates_the_record_for_an_affiliate_with_details_as_follows_and(String fname, String lname, String email, String telno, String pass, String cpass, String add1, String city, String postal, String country, String state, String pname) {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
			WebElement cbtn = driver.findElement(By.xpath("//a[@data-original-title='Add New']"));
			cbtn.click();
			System.out.println("Add New button clicked");
			Thread.sleep(1000);
	    	driver.findElement(By.id("input-firstname")).sendKeys(fname);
			Thread.sleep(1000);
			driver.findElement(By.id("input-lastname")).sendKeys(lname);
			Thread.sleep(1000);

			driver.findElement(By.id("input-email")).sendKeys(email);
			Thread.sleep(1000);
			driver.findElement(By.id("input-telephone")).sendKeys(telno);
			Thread.sleep(1000);

			driver.findElement(By.id("input-password")).sendKeys(pass);
			Thread.sleep(1000);
			driver.findElement(By.id("input-confirm")).sendKeys(cpass);
			Thread.sleep(1000);

			driver.findElement(By.id("input-address-1")).sendKeys(add1);
			Thread.sleep(1000);
			driver.findElement(By.id("input-city")).sendKeys(city);
			Thread.sleep(1000);

			driver.findElement(By.id("input-postcode")).sendKeys(postal);
			Thread.sleep(1000);

			Select sel = new Select(driver.findElement((By.xpath("//select[@name='country_id']"))));
			sel.selectByVisibleText(country);
			Thread.sleep(1000);

			Select sel1 = new Select(driver.findElement((By.xpath("//select[@name='zone_id']"))));
			sel1.selectByVisibleText(state);
			Thread.sleep(1000);

			driver.findElement(By.xpath("//a[contains(text(),'Payment Details')]")).click();
			Thread.sleep(1000);


			driver.findElement(By.xpath("//input[@id='input-cheque']")).sendKeys(pname);
			Thread.sleep(1000);

			
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }
	}

	@Then("the user should be able to see whether new record is added or not.")
	public void the_user_should_be_able_to_see_whether_new_record_is_added_or_not() {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
			WebElement save=driver.findElement(By.xpath("//button[@data-original-title='Save']"));
			save.click();
			System.out.println("Oops there's a Bug!");
				System.out.println(" Record is created with invalid Affiliate details");
				Assert.fail();
			
			
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }
	}
	
	@Given("user is navigated to the Affiliates page of webssites")
	public void user_is_navigated_to_the_Affiliates_page_of_webssites() {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	 driver.findElement(By.tagName("h1")).getText();
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }
	}

	@When("user creates the record for an affiliate with details as follows as {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string} and {string}")
	public void user_creates_the_record_for_an_affiliate_with_details_as_follows_as_and(String fname, String lname, String email, String telno, String pass, String cpass, String add1, String city, String postal, String country, String state, String pname) {
	    // Write code here that turns the phrase above into concrete actions
		 try
		    {
			
			 WebElement cbtn = driver.findElement(By.xpath("//a[@data-original-title='Add New']"));
				cbtn.click();
				System.out.println("Add New button clicked");
				Thread.sleep(1000);
		    	driver.findElement(By.id("input-firstname")).sendKeys(fname);
				Thread.sleep(1000);
				driver.findElement(By.id("input-lastname")).sendKeys(lname);
				Thread.sleep(1000);

				driver.findElement(By.id("input-email")).sendKeys(email);
				Thread.sleep(1000);
				driver.findElement(By.id("input-telephone")).sendKeys(telno);
				Thread.sleep(1000);

				driver.findElement(By.id("input-password")).sendKeys(pass);
				Thread.sleep(1000);
				driver.findElement(By.id("input-confirm")).sendKeys(cpass);
				Thread.sleep(1000);

				driver.findElement(By.id("input-address-1")).sendKeys(add1);
				Thread.sleep(1000);
				driver.findElement(By.id("input-city")).sendKeys(city);
				Thread.sleep(1000);

				driver.findElement(By.id("input-postcode")).sendKeys(postal);
				Thread.sleep(1000);

				Select sel = new Select(driver.findElement((By.xpath("//select[@name='country_id']"))));
				sel.selectByVisibleText(country);
				Thread.sleep(1000);

				Select sel1 = new Select(driver.findElement((By.xpath("//select[@name='zone_id']"))));
				sel1.selectByVisibleText(state);
				Thread.sleep(1000);

				driver.findElement(By.xpath("//a[contains(text(),'Payment Details')]")).click();
				Thread.sleep(1000);


				driver.findElement(By.xpath("//input[@id='input-cheque']")).sendKeys(pname);
				Thread.sleep(1000);

		    }
		    catch(Exception e)
		    {
		    	System.out.println(e);
		    }
	}

	@Then("the user should be able to see whether validation message is displayed or not.")
	public void the_user_should_be_able_to_see_whether_validation_message_is_displayed_or_not() {
	    // Write code here that turns the phrase above into concrete actions
		 try
		    {
			 WebElement save=driver.findElement(By.xpath("//button[@data-original-title='Save']"));
				save.click();
			 if (isDisplayed()) {
					System.out.println("Affiliate saved successfully");
				} else if (driver
						.findElement(By.xpath("//*[contains(text(),'Telephone must be between 3 and 32 characters!')]"))
						.isDisplayed()) {
					System.out.print("Telephone field gave warining message " + " ");
					System.out.println(driver.findElement(By.xpath("//div[@class='text-danger']")).getText());
				}
				else {

					System.out.println("Noerror");
				}
		    }
		    catch(Exception e)
		    {
		    	System.out.println(e);
		    }
	}


}
