const { Builder, Capabilities } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Cross Off Movie', async () => {
    await crossOffMovie(driver)
    await driver.sleep(2000)
})

test('Delete Movie', async () => {
    await deleteMovie(deiver)
    await driver.sleep(2000)
})

