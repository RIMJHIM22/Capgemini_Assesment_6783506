import {test} from "@playwright/test"

//span[text()=Womens]-this will not show because women is in between but we can do
//span[contains()]
//  //span[contains(@class,"shortcut-name nav-assistant-card-font")]
//span[contains(text(),"Wed, 11 Mar")]
  

//section[ ]/child::div/child::h1[] or //section[]/des
//span[@aria-hidden="true"]
//div[@id="form"]/child::div/child::input[@id="username"]
//li[@id="menu-item-19"]/child::a[@href="https://practicetestautomation.com/blog/"]
//div[@id="form"]/descendant::input[@id="username"]/preceding-sibling::label/following-sibling::input

//input[@id="username"]/ancestor::div[@id="form"]
//input[@name="password"]/ancestor::div[@id="form"]


//div[@class="col col-7-12"]/child::div/child::div[text()='Google Pixel 9A (Porcelain, 256 GB)']
//div[text()="Google Pixel 9A (Porcelain, 256 GB)"]/ancestor::div[contains(@class, "col")]//div[text()="₹39,999"]
//*[name()="svg"]
