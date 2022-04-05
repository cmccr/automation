const { By } = require('selenium-webdriver')

const crossOffMovie = async (driver) => {
    const movie = 'Coach Carter'

    await driver.findElement(By.xpath('//input')).sendKeys(movie)

    await driver.findElement(By.xpath('//button')).click()

    
}