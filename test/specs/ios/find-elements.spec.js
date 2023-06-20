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

        // Create an empty list to capture all the elements
        const list = []

        // Iterate through the elements to get their text and push to the above list
        for (const ele of clsElement) {
            list.push(ele.getText())
        }

        // Log the above list
        console.log(list)
    })

    it ('should be able to find elements using XPath', async()=>{
        // Open the Simple alert box
        await $('//XCUIElementTypeStaticText[@value="Alert Views"]').click()
        await $('//XCUIElementTypeStaticText[@name="Simple"]').click()

        // Assert that the alert box is open
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")

        // Close the alert
        await driver.acceptAlert()
    })

    it ('should be able to find elements using class chain', async()=>{
        // Open the Simple alert box
        const alertTxt = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]'
        await $(`-ios class chain:${alertTxt}`).click()
        const simpleAlert = '**/XCUIElementTypeStaticText[`label == "Simple"`]'
        await $(`-ios class chain:${simpleAlert}`).click()

        // Assert that the alert box is open
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")

        // Close the alert
        await driver.acceptAlert()
    })

    it ('should be able to find elements using predicate string', async()=>{
        // Open the Simple alert box
        const alertTxt = 'value BEGINSWITH[c] "alert"'
        await $(`-ios predicate string:${alertTxt}`).click()
        const simpleAlert = 'label == "Simple"'
        await $(`-ios predicate string:${simpleAlert}`).click()

        // Assert that the alert box is open
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")

        // Close the alert
        await driver.acceptAlert()
    })

    it ('Search Input Field Exercise', async ()=>{
        // Open the default search
        await $('~Search').click()
        await $('~Default').click()

        // Add a value to the default search
        const searchField = 'type == "XCUIElementTypeSearchField"'
        await $(`-ios predicate string:${searchField}`).addValue("New Zealand")

        // Assert that the value has been added to the search box
        await expect($(`-ios predicate string:${searchField}`)).toHaveAttr("value")

        // Clear the text of the search box
        await $('~Clear text').click()

        // Assert that the search box has been cleared of any value
        await expect($(`-ios predicate string:${searchField}`)).not.toHaveAttr("value")
    })
})