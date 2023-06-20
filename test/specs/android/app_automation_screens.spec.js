const CommonTools = require("../../android/screenObjects/common/Common_Tools")
const AddNoteScreen = require("../../android/screenObjects/add_note_screen")
const DeleteNoteScreen = require("../../android/screenObjects/delete_note_screen")
const HamburgerMenu = require("../../android/screenObjects/hamburger_menu_screen")
const TrashCan = require("../../android/screenObjects/trash_can_screen")


describe('Add Notes', ()=> {
    it('should be able to skip the tutorial', async ()=>{
        // Click the skip button to skip the tutorial
        await AddNoteScreen.skipBtn.click()

        // Assert that the tutorial has been skipped
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()
    })

    it('should be able to successfully add a note', async ()=>{
        // Click on Add a note button
        await AddNoteScreen.addNoteBtn.click()

        // Select Text as the note type
        await AddNoteScreen.txtNoteType.click()

        // Add a title
        await AddNoteScreen.addNoteTitle.addValue("Favourite Anime!!")

        // Add note body
        await AddNoteScreen.addNoteBody.addValue("DBZ\nNaruto\nInvincible")

        // Save the changes
        await AddNoteScreen.saveNote()

        // Assertions
        await expect(AddNoteScreen.editNoteBtn).toBeDisplayed()
        await expect(AddNoteScreen.viewNote).toHaveText("DBZ\nNaruto\nInvincible");
    })

    it('should be able to delete a note', async ()=>{
        // Go back to the home-screen
        await CommonTools.navigate('Back')

        // Open the note created in above text
        await AddNoteScreen.openNote("Favourite Anime!!")

        // Click on the three dot menu
        await DeleteNoteScreen.threeDotMenu.click()

        // Click on the delete button
        await DeleteNoteScreen.deleteButton.click()

        // Accept the delete confirmation alert
        await CommonTools.handleAlert('Ok')

        // Assert that the user is redirected back to the home page
        await expect(AddNoteScreen.addNoteBtn).toBeDisplayed()

        // Open the hamburger menu
        await AddNoteScreen.hamburgerMenuIcon.click()

        // Open the trash can
        await HamburgerMenu.trashCanbtn.click()

        // Open the deleted note
        await CommonTools.openNote("Favourite Anime!!")

        // Assert that the deleted note is present in the trash can
        await expect(TrashCan.viewNote).toHaveText("DBZ\nNaruto\nInvincible");

        // Open the three dot menu
        await TrashCan.threeDotMenu.click()

        // Permanently delete the items in the trash can
        await TrashCan.permanentlyDeleteBtn.click()

        // Accept the alert to empty trash can
        await CommonTools.handleAlert('Ok')

        // Assert that the deleted note is also deleted from the trash can
        await expect(CommonTools.findNote("Favourite Anime!!")).not.toBeDisplayed()
    })
});