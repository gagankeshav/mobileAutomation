describe('Android Native features Tests', () =>{
    it('should be able to access an activity directly', async ()=>{
        // Start an activity directly
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples')

        // Assert that the correct activity is open
        await expect(await $('//*[@text="LIST DIALOG"]')).toBeExisting()
    })

    it('should be able to handle alerts', async ()=>{
        // Start the relevant activity directly
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")

        // Open the OK Cancel dialog with a message alert
        await $('~OK Cancel dialog with a message').click()

        // Assert for the alert
        const alert = await $('//android.widget.TextView[@resource-id="android:id/alertTitle"]')
        await expect(alert).toBeExisting()

        // OK the alert
        await driver.acceptAlert()

        // Assert that the alert is closed
        await expect(alert).not.toBeExisting()

        // Open the alert again to check for cancel functionality
        await $('~OK Cancel dialog with a message').click()
        await expect(alert).toBeExisting()

        // Cancel the alert
        await driver.dismissAlert()

        // Assert that the alert is closed
        await expect(alert).not.toBeExisting()
    })

    it('should be able to vertically scroll through the app', async()=>{
        // Navigate to long list to enable scrolling
        await $('~App').click()
        await $('~Activity').click()

        // Scroll to bottom of the page
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1)')

        // Assert that the list has scrolled to the bottom
        await expect($('~Secure Surfaces')).toBeExisting()

        // Scroll to the top of the list
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1,5)')

        // Assert that the list has scrolled to the top
        await expect($('~Animation')).toBeExisting()

        // Scroll and bring a certain text into view
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')

        // Assert that the element is visible now
        await expect($('~Secure Surfaces')).toBeExisting()
    })

    it('should be able to horizontally scroll through the app', async ()=>{
        // Open a horizontally scrollable activity directly
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1")

        // Scroll to the right
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward(2)')

        // Scroll to the left
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward(2)')
    })

    it('scrolling exercise', async ()=>{
        // Open a scrollable activity directly
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1")

        // Get date before changing it
        const oldDate = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText()

        // Change the date
        await $('~change the date').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await $('//android.view.View[@text="10"]').click()
        await driver.acceptAlert()

        // Assert that the date has changed
        const newDate = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText()
        await expect(newDate).not.toEqual(oldDate)
    })
})