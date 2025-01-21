// @ts-check
const { test, expect } = require("@playwright/test");

test("tes layar desktop", async ({ page }) => {

    // Desktop
    await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("https://selapan.smkn8malang.sch.id/login/index.php");

  await page.fill('input[name="username"]', "yourusername");
  await page.fill('input[name="password"]', "yourpassword");
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL("https://selapan.smkn8malang.sch.id/my/");
  
  
});
test("tes layar Tablet", async ({ page }) => {
    
    // Tablet
    await page.setViewportSize({ width: 768, height: 1024 }); 
    await page.goto("https://selapan.smkn8malang.sch.id/login/index.php");
    
    await page.fill('input[name="username"]', "5240123663");
    await page.fill('input[name="password"]', "MS5DRZEZ");
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL("https://selapan.smkn8malang.sch.id/my/");
    
    
    
});
test("tes layar Mobile", async ({ page }) => {
    // Mobile
    await page.setViewportSize({ width: 375, height: 812 }); 
    await page.goto("https://selapan.smkn8malang.sch.id/login/index.php");
    
    await page.fill('input[name="username"]', "5240123663");
    await page.fill('input[name="password"]', "MS5DRZEZ");
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL("https://selapan.smkn8malang.sch.id/my/");


});


