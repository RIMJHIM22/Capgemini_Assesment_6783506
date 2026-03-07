import {test} from "@playwright/test"
test("get by methods",async({page})=>{

    //if there is for in label and id in input and they have same username so it is linked
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.getByLabel("Username",{exact:true}).fill("student")
//   //await page.getByLabel("password").fill("Password123")
//   await page.getByText("Submit").first().click()
//   await page.getByRole("textbox",{name:"username",exact:true}).fill("gbhn")
//   await page.getByPlaceholder("Enter yout name")
await page.goto("https://www.amazon.in/")
 await page.getByAltText("Sponsored Ad - L'Oréal Paris Worth It Festive Favourites Gift Set of 3, 49gm").click()



})