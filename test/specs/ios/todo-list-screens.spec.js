const CreateTodoList = require('./../../ios/screenObjects/createTodoList')
const AddListItems = require('./../../ios/screenObjects/addListItems')
const CommonUtils = require('./../../ios/Utils/CommonUtils')

describe('Automation Tests for iOS ToDo Lists Live app with screen objects', ()=> {
    it('should be able to create a todo list', async ()=> {
        // Click on the add list button
        await CreateTodoList.addListBtn.click()

        // Assert that the add list alert is open
        await expect(await CommonUtils.getAlertText()).toContain("Enter the name of the list")

        // Add the title of the list
        await CreateTodoList.listNameField.addValue("Tasks for today")

        // Create the list
        await CommonUtils.createBtn.click()

        // Assert that the list has been created
        await expect(CreateTodoList.listTitle('Tasks for today')).toBeExisting()
    });

    it('should be able to add items to todo list', async ()=> {
        // Open the list created above
        await CreateTodoList.openList('Tasks for today')

        // Click on Add button
        await AddListItems.addListItemBtn.click()

        // Assert that the alert box is open
        await expect(await CommonUtils.getAlertText()).toContain('Add To Do')

        // Add Item Title and due date
        await AddListItems.add_list_item("Walk the dog!!", "June 30, 2023")

        // Create the item
        await CommonUtils.goBack()
        await CommonUtils.createBtn.click()

        // Assert that the item has been created
        await expect(AddListItems.itemTitle('Walk the dog!!')).toBeExisting()
        await expect(AddListItems.itemDate('Due Today')).toBeExisting()

    });
});