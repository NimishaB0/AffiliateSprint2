package Hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HookAff {

public static WebDriver driver;
	
	@Before
	public void initilaization()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Nimisha\\Documents\\CapgeminiJSWorkspace\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@After
	public void closedriver()
	{
		System.out.println("Browser is closing");
		driver.quit();
	}
}
