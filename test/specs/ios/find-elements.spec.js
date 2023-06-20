describe('Find elements on iOS app', ()=>{

    it ('should be able to find elements using Accessibility ID', async ()=>{
        // Find the element on UI
        const alertViews = await $('~Alert Views')

        // Click on the above element
        await alertViews.click()

        // Click on the Simple alert type
        await $('~Simple').click()

        // Assertion
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")

        // Close the alert
        await driver.acceptAlert()
    })

    it ('should be able to find elements using Tag name', async()=>{
        // Find element
        const clsElement = await $$('XCUIElementTypeStaticText')

        const list = []

        for (const ele of clsElement) {
            list.push(ele.getText())
        }

        console.log(list)
    })

    it ('should be able to find elements using XPath', async()=>{
        await $('//XCUIElementTypeStaticText[@value="Alert Views"]').click()

        await $('//XCUIElementTypeStaticText[@name="Simple"]').click()

        // Assertion
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")

        // Close the alert
        await driver.acceptAlert()
    })

    it ('should be able to find elements using class chain', async()=>{
        const alertTxt = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]'
        await $(`-ios class chain:${alertTxt}`).click()

        const simpleAlert = '**/XCUIElementTypeStaticText[`label == "Simple"`]'
        await $(`-ios class chain:${simpleAlert}`).click()

        // Assertion
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")

        // Close the alert
        await driver.acceptAlert()
    })

    it ('should be able to find elements using predicate string', async()=>{
        const alertTxt = 'value BEGINSWITH[c] "alert"'
        await $(`-ios predicate string:${alertTxt}`).click()

        const simpleAlert = 'label == "Simple"'
        await $(`-ios predicate string:${simpleAlert}`).click()

        // Assertion
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")

        // Close the alert
        await driver.acceptAlert()
    })

    it.only ('Search Input Field Exercise', async ()=>{
        await $('~Search').click()
        await $('~Default').click()

        const searchField = 'type == "XCUIElementTypeSearchField"'
        await $(`-ios predicate string:${searchField}`).addValue("New Zealand")
        await expect($(`-ios predicate string:${searchField}`)).toHaveAttr("value")

        await $('~Clear text').click()

        await expect($(`-ios predicate string:${searchField}`)).not.toHaveAttr("value")
    })
})