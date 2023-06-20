class CommonTools {
    async openNote(noteTitle) {
        await $(`//*[@text="${noteTitle}"]`).click()
    }

    async handleAlert(action) {
        if (action==='Ok') {
            await driver.acceptAlert()
        } else if (action==='Cancel') {
            await driver.dismissAlert()
        }
    }

    async findNote (noteTitle) {
        return $(`//*[@text="${noteTitle}"]`)
    }

    async navigate (buttonType) {
        if (buttonType==='Back') {
            await driver.back()
        }
    }
}

module.exports = new CommonTools()