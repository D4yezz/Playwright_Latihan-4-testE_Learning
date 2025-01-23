// @ts-check
const { test, expect } = require("@playwright/test");

test("test kecepatan dari website", async ({ page }) => {
    const start = Date.now(); 
    await page.goto('https://selapan.smkn8malang.sch.id/login/index.php');
    const end = Date.now(); 
  
    const loadTime = end - start; 
    console.log(`Waktu muat halaman: ${loadTime} ms`);
    expect(loadTime).toBeLessThan(3000);

});
test("test kecepatan dari login di website", async ({ page }) => {
    const start = Date.now(); 
    await page.goto('https://selapan.smkn8malang.sch.id/login/index.php');
    await page.fill('input[name="username"]', "username");
    await page.fill('input[name="password"]', "password");
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL("https://selapan.smkn8malang.sch.id/my/");
    const end = Date.now(); 
  
    const loadTime = end - start; 
    console.log(`Waktu muat halaman: ${loadTime} ms`);
    expect(loadTime).toBeLessThan(3000);

});