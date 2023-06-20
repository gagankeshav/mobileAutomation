class TrashCan {
    get viewNote () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
    }

    get threeDotMenu () {
        return $('//android.widget.ImageButton[@content-desc="More"]')
    }

    get permanentlyDeleteBtn () {
        return $('//*[@text="Permanently delete"]')
    }
}

module.exports = new TrashCan()