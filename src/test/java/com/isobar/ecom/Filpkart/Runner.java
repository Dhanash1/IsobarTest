package com.isobar.ecom.Filpkart;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(dryRun=false,monochrome=true,features= {"Feature/Test.feature"},glue="glue",format= {"pretty","html:reports","json:reports/test.json"})
public class Runner {

}
