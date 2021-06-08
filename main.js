const { Builder } = require('selenium-webdriver');

class TestHarness {
  constructor(browser) {
    this.browser = browser;
  }
  async build() {
    try {
      this.driver = await new Builder()
        .forBrowser(this.browser)
        .build();
      if (!this.driver)
        return false;
      await this.driver.get('https://claytonjwong.com');
      await this.driver.quit();
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  }
}

Promise.all([
  new TestHarness('chrome').build(),
  new TestHarness('firefox').build(),
]).then(() => console.log('done!'))
  .catch((error) => console.log(error));
