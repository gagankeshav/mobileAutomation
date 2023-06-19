describe('Add Notes', ()=> {
    it('should be able to skip the tutorial', async ()=>{
        // Click the skip button to skip the tutorial
        await $('//android.widget.Button[@text="SKIP"]').click()

        // Assert that the tutorial has been skipped
        await expect($('//android.widget.TextView[@text="Add note"]')).toBeDisplayed()
    })

    it('should be able to successfully add a note', async ()=>{
        // Click on Add a note button
        await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click()

        // Select Text as the note type
        await $('//android.widget.TextView[@text="Text"]').click()

        // Add a title
        await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Favourite Anime!!")

        // Add note body
        await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("DBZ\nNaruto\nInvincible")

        // Save the changes
        await driver.back()
        await driver.back()

        // Assertions
        await expect($('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("DBZ\nNaruto\nInvincible");
    })

    it('should be able to delete a note', async ()=>{
        // Go back to the homescreen
        await driver.back()

        // Open the note created in above text
        await $('//*[@text="Favourite Anime!!"]').click()

        // Click on the three dot menu
        await $('~More').click()

        // Click on the delete button
        await $('//*[@text="Delete"]').click()

        // Accept the delete confirmation alert
        await driver.acceptAlert()

        // Assert that the user is redirected back to the home page
        await expect($('//*[@text="Add note"]')).toBeDisplayed()

        // Open the hamburger menun
        await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()

        // Open the trash can
        await $('//*[@text="Trash Can"]').click()

        // Open the deleted note
        await $('//*[@text="Favourite Anime!!"]').click()

        // Assert that the deleted note is present in the trash can
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("DBZ\nNaruto\nInvincible");

        // Open the three dot menu
        await $('//android.widget.ImageButton[@content-desc="More"]').click()

        // Permanently delete the items in the trash can
        await $('//*[@text="Permanently delete"]').click()

        // Accept the alert to empty trash can
        await driver.acceptAlert()

        // Assert that the deleted note is also deleted from the trash can
        await expect($('//*[@text="Favourite Anime!!"]')).not.toBeDisplayed()
    })
});