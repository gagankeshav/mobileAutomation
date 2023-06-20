class CommonUtils {
    get createBtn () {
        return $('~Create')
    }
    async getAlertText() {
        return await driver.getAlertText()
    }

    async goBack() {
        return await driver.back()
    }
}

module.exports = new CommonUtils()