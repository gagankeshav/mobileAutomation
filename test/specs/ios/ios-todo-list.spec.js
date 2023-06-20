describe('Automation Tests for iOS ToDo Lists Live app', ()=> {
    it('should be able to create a todo list', async ()=> {
        // Click on the add list button
        await $('~Add').click()

        // Assert that the add list alert is open
        await expect(await driver.getAlertText()).toContain("Enter the name of the list")

        // Add the title of the list
        await $('//XCUIElementTypeTextField[@value="List Name"]').addValue("Tasks for today")

        // Create the list
        await $('~Create').click()

        // Assert that the list has been created
        await expect($('~Tasks for today')).toBeExisting()
    });

    it('should be able to add items to todo list', async ()=> {
        // Open the list created above
        await $('~Tasks for today').click()

        // Click on Add button
        await $('~Add').click()

        // Assert that the alert box is open
        await expect(await driver.getAlertText()).toContain('Add To Do')

        // Add Title
        const titleBox = 'value == "Title"'
        await $(`-ios predicate string:${titleBox}`).addValue("Walk the dog")

        // Add due date
        const dueBox = 'value == "Due"'
        await $(`-ios predicate string:${dueBox}`).addValue("June 30, 2023")

        // Create the item
        await driver.back()
        await $('~Create').click()

        // Assert that the item has been created
        await expect($('~Walk the dog')).toBeExisting()
        await expect($('~Due Today')).toBeExisting()

    });
});