class DeleteNoteScreen {
    get threeDotMenu() {
        return $('~More')
    }

    get deleteButton() {
        return $('//*[@text="Delete"]')
    }
}

module.exports = new DeleteNoteScreen()