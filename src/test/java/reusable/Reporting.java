package reusable;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;

import cucumber.api.Scenario;

public class Reporting {
	static Scenario s;
	static int i;
	static WebDriver driver;
	public Reporting(Scenario s,WebDriver d)
	{
		i=0;
		Reporting.s = s;
		Reporting.driver = d;
	}

	public void screenshot() {
		try {
	        byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
	        TakesScreenshot ss =(TakesScreenshot)driver;
	        File src = ss.getScreenshotAs(OutputType.FILE);
	        File d =new File(System.getProperty("user.dir")+"\\image\\"+s.getName()+"\\"+Integer.toString(i)+".png");
	        try {
	        	FileUtils.copyFile(src,d);
	        }catch (IOException e) {
	        	//TODO Auto-generated catch block
	        	e.printStackTrace();
	        	
	        }    
	        s.embed(screenshot, "image/png");
	    } catch (WebDriverException somePlatformsDontSupportScreenshots) {
	        System.err.println(somePlatformsDontSupportScreenshots.getMessage());
	    }
		i++;
	}
}
