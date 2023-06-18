describe('Find elements on Android app', ()=>{

    it('should be able to find elements using Accessibility ID', async ()=>{
        // Find the element on UI
        const app = await $('~App')

        // Click on the above element
        await app.click()

        // Assertion
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting()
    })

    it('should be able to find elements using Class', async()=>{
        // Find element
        const clsElement = await $('android.widget.TextView')

        // Assertion
        await expect(clsElement).toHaveText('API Demos')
    })

    it('should be able to find elements using XPath', async()=>{
        //Navigate to Alert Dialogs
        await $('~App').click()

        // Click on Alert Dialogs using XPath
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()

        // Click on List Dialog button
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()

        // Click on Command one
        await $('//*[@text="Command one"]').click()

        // Verify the final text
        await expect(await $('//*[@resource-id="android:id/message"]')).toHaveText('You selected: 0 , Command one')
    })

    it('should be able to find elements using UIAutomator functions', async()=>{
        // Navigate to Alert Dialog
        await $('~App').click()

        // Click on Alert Dialogs using UIAutomator
        await $('android=new UiSelector().textContains("Alert")').click()

        // Click on List Dialog using UIAutomator
        await $('android=new UiSelector().resourceId("io.appium.android.apis:id/select_button")').click()

        // Click on Command two using UIAutomator
        await $('android=new UiSelector().text("Command two")').click()

        // Assertion on final text using UIAutomator
        await expect(await $('android=new UiSelector().text("You selected: 1 , Command two")')).toBeExisting()
    })
})