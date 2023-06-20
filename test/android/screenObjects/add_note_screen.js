const CommonTools = require('./Common/Common_Tools')
class AddNoteScreen {

    get skipBtn () {
        return $('//android.widget.Button[@text="SKIP"]')
    }

    get addNoteTxt () {
        return $('//android.widget.TextView[@text="Add note"]')
    }

    get addNoteBtn() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]')
    }

    get txtNoteType () {
        return $('//android.widget.TextView[@text="Text"]')
    }

    get addNoteTitle () {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }

    get addNoteBody () {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    }

    get editNoteBtn () {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
    }

    get viewNote (){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
    }

    get hamburgerMenuIcon() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }

    // Save the note
    async saveNote() {
        await driver.back()
        await driver.back()
    }

    async openNote(noteTitle) {
       await CommonTools.openNote(noteTitle)
    }

}

module.exports = new AddNoteScreen()