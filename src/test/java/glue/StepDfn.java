package glue;

import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import reusable.Reporting;

public class StepDfn {
	private static WebDriver driver;
	Reporting r;
	@Before
	public void before(Scenario scenario) {
		driver = new ChromeDriver();
		r = new Reporting(scenario,driver);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	@After
	public void after() {
		r.screenshot();
		driver.quit();
	}
	@Given("^I am able to access ([^\"]*)$")
	public void i_am_able_to_access_http_flipkart_com(String url) {
	    // Write code here that turns the phrase above into concrete actions
	    driver.get(url);
	    WebElement close = driver.findElement(By.xpath("//button[text()='✕']"));
	    close.click();
	    r.screenshot();
	}

	@When("^I search for a (.*)$")
	public void i_search_for_a_apple_phone(String product) {
	    // Write code here that turns the phrase above into concrete actions
	   WebElement search_bar = driver.findElement(By.name("q"));
	   search_bar.sendKeys(product);
	   /*WebElement first = driver.findElement(By.xpath("//*[starts-with(text(),'iphone')]"));
	   first.click();*/
	   r.screenshot();
	}

	@When("^I choose the first autofill option$")
	public void i_choose_the_first_autofill_option() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		   WebElement first = driver.findElement(By.className("_1va75j"));
		   first.click();
		   WebElement search_bar = driver.findElement(By.name("q"));
		   search_bar.click();
		   search_bar.sendKeys(Keys.ESCAPE);
	}

	@When("^I add the first product to cart$")
	public void i_add_the_first_product_to_cart() {
	    // Write code here that turns the phrase above into concrete actions
	    WebElement first_product = driver.findElement(By.className("_3wU53n"));
	    first_product.click();
	    Set<String> windows = driver.getWindowHandles();
	    Object[] wins = windows.toArray();
	    System.out.println(windows);
	    driver.switchTo().window(wins[1].toString());
	    System.out.println(driver.getCurrentUrl() + driver.getTitle());
	    WebElement buy = driver.findElement(By.xpath("//button[@data-reactid='116' or @data-reactid='111']"));
	    buy.click();   
	}
	
	@Then("^I should be able to checkout the cart$")
	public void i_should_be_able_to_checkout_the_cart()
	{
		// Write code here that turns the phrase above into concrete action
	}
}
