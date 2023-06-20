class HamburgerMenu {
    get trashCanbtn () {
        return $('//*[@text="Trash Can"]')
    }
}

module.exports = new HamburgerMenu()