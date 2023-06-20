describe('iOS Native Features Tests', ()=> {
    it('should be able to handle alert box', async ()=> {
        // Open Okay Cancel Alert
        await $('~Alert Views').click()
        await $('~Okay / Cancel').click()

        // Assert that the alert is displayed
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")

        // Methods to dismiss or accept alerts
        // await driver.dismissAlert()
        await driver.acceptAlert()

        // Assert that after accepting, the alert is no longer displayed
        await expect($('~OK')).not.toExist()
    });

    it('should be able to handle scrolling', async ()=> {
        // Doom scrolling
        await driver.execute('mobile: scroll', {direction:"down"})
        await driver.execute('mobile: scroll', {direction:"up"})

        // Intuitive Scrolling
        // Open picker view
        await $('~Picker View').click()

        // Grab Id's for individual elements in the picker view
        const red = await $('~Red color component value')
        const green = await $('~Green color component value')
        const blue = await $('~Blue color component value')

        // Scroll individual elements
        await driver.execute('mobile: scroll', {element: red.elementId, direction: 'down' })
        await driver.execute('mobile: scroll', {element: green.elementId, direction: 'up' })
        await driver.execute('mobile: scroll', {element: blue.elementId, direction: 'down' })
    });

    it('should be able to work with picker view', async ()=> {
        // Open Picker View
        await $('~Picker View').click()

        // Grab element Id's for individual elements
        const red = $('~Red color component value')
        const green = $('~Green color component value')
        const blue = $('~Blue color component value')

        // Assign values to individual picker elements
        await red.addValue(125)
        await green.addValue(0)
        await blue.addValue(125)
    });
});