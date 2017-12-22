Feature: Purchase of a Product

This feature file deals with the product search and add to cart.
If a product is available in the web page, then it can be added to the cart
If a product is not available, then it can posted on request by a mail.

@tag1
Scenario Outline: Product on stock
Given I am able to access http://flipkart.com
When I search for a <product>
And I choose the first autofill option
And I add the first product to cart
Then I should be able to checkout the cart
Examples:
|product|
|apple phone|
|samsung tv|

@tag2
Scenario: Product on stock2
Given I am able to access http://flipkart.com
When I search for a apple phone
And I choose the first autofill option
And I add the first product to cart
Then I should be able to checkout the cart
