const { By } = require('selenium-webdriver')

const deleteMovie = async (driver) => {
    
    await driver.findElement(By.xpath('//input')).sendKeys('Coach Carter')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li'))
}