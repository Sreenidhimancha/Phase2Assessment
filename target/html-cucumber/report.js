$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/AddProduct.feature");
formatter.feature({
  "name": "Adding the product into cart Scenario from SauceLabs Application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to add the product into cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \u0027standard_user\u0027 and password as \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.LoginStepDef.i_enter_the_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.LoginStepDef.i_click_on_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add to cart product on \"Sauce Labs Bolt T-Shirt\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.AddProductStepDef.i_click_on_add_to_cart_product_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the basket number should be \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.AddProductStepDef.the_basket_number_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/LabLogin.feature");
formatter.feature({
  "name": "Sauce Lab Login Feature Scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "This scenario is to define the login happy path",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username as \u0027standard_user\u0027 and password as \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.LoginStepDef.i_enter_the_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.LoginStepDef.i_click_on_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to define the failure path",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username as \u0027standard_user\u0027 and password as \u0027secret\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.LoginStepDef.i_enter_the_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.LoginStepDef.i_click_on_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.LoginStepDef.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});