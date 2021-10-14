package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/Features"
		,glue={"StepDefination","Hooks"},
		plugin = { "pretty" ,"junit:target/report.xml","json:target/jsonreport.json","html:target/cucumber-pretty"}
		
		)
public class TestRun {
	

}
