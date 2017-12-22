$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Test.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase of a product",
  "description": "",
  "id": "purchase-of-a-product",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Product on stock",
  "description": "",
  "id": "purchase-of-a-product;product-on-stock",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am able to acess the webpage http://flipkart.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for a apple phone",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I choose the first autofill option",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I add the product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to checkout the cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "purchase-of-a-product;product-on-stock;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 11,
      "id": "purchase-of-a-product;product-on-stock;;1"
    },
    {
      "cells": [
        "apple phone"
      ],
      "line": 12,
      "id": "purchase-of-a-product;product-on-stock;;2"
    },
    {
      "cells": [
        "samsung tv"
      ],
      "line": 13,
      "id": "purchase-of-a-product;product-on-stock;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5054719439,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Product on stock",
  "description": "",
  "id": "purchase-of-a-product;product-on-stock;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am able to acess the webpage http://flipkart.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for a apple phone",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I choose the first autofill option",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I add the product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to checkout the cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://flipkart.com",
      "offset": 31
    }
  ],
  "location": "StepDfn.i_am_able_to_acess_the_webpage(String)"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 17429203377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple phone",
      "offset": 15
    }
  ],
  "location": "StepDfn.i_search_for_a_apple_phone(String)"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 1152906008,
  "status": "passed"
});
formatter.match({
  "location": "StepDfn.i_choose_the_first_autofill_option()"
});
formatter.result({
  "duration": 3977655004,
  "status": "passed"
});
formatter.match({
  "location": "StepDfn.i_add_the_product_to_cart()"
});
formatter.result({
  "duration": 5019507323,
  "status": "passed"
});
formatter.match({
  "location": "StepDfn.i_should_be_able_to_checkout_the_cart()"
});
formatter.result({
  "duration": 45833,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 680764157,
  "status": "passed"
});
formatter.before({
  "duration": 5369309590,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Product on stock",
  "description": "",
  "id": "purchase-of-a-product;product-on-stock;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am able to acess the webpage http://flipkart.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for a apple phone",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I choose the first autofill option",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I add the product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to checkout the cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://flipkart.com",
      "offset": 31
    }
  ],
  "location": "StepDfn.i_am_able_to_acess_the_webpage(String)"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 14197454550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple phone",
      "offset": 15
    }
  ],
  "location": "StepDfn.i_search_for_a_apple_phone(String)"
});
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 1093001553,
  "status": "passed"
});
formatter.match({
  "location": "StepDfn.i_choose_the_first_autofill_option()"
});
formatter.result({
  "duration": 3691458178,
  "status": "passed"
});
formatter.match({
  "location": "StepDfn.i_add_the_product_to_cart()"
});
formatter.result({
  "duration": 10492912731,
  "status": "passed"
});
formatter.match({
  "location": "StepDfn.i_should_be_able_to_checkout_the_cart()"
});
formatter.result({
  "duration": 39115,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 642056511,
  "status": "passed"
});
});