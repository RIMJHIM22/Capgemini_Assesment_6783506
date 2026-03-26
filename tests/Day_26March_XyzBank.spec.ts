import { test, expect } from '@playwright/test';
import Create_acc from '../pom/Create_account.page.ts';
import Customer_action from '../pom/customer.page.ts';
import path from "path"
import fs from 'fs'

const jsondata = fs.readFileSync(path.join(__dirname,"../test_data/url.json"),"utf-8")
const url = JSON.parse(jsondata)

test.use({
    launchOptions:{
        slowMo:500
    }
})

test('XYZ Bank', async ({ page }) => {
    page.on('dialog', async d => {
        await d.accept()
    })

    await page.goto(url.url)
    await expect(page).toHaveURL(url.url)

    const addCustomerPage = new Create_acc(page)

    await addCustomerPage.add_custm()
   // await expect(page.locator("text=Customer added successfully")).toBeVisible()

    await addCustomerPage.Open_acc()
  //  await expect(page.locator("text=Account created successfully")).toBeVisible()

    const custm_action = new Customer_action(page)
  //  await expect(page.locator("button[ng-click='byebye()']")).toBeVisible()

    await custm_action.custm_deposit()
   // await expect(page.locator("text=Deposit Successful")).toBeVisible()

    await custm_action.custm_withdraw()
   // await expect(page.locator("text=Transaction successful")).toBeVisible()
});