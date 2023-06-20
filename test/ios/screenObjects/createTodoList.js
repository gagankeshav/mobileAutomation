class CreateTodoList {
    get addListBtn () {
        return $('~Add')
    }

    get listNameField () {
        return $('//XCUIElementTypeTextField[@value="List Name"]')
    }

    get createListBtn () {
        return $('~Create')
    }

    async listTitle(title) {
        return await $(`~${title}`)
    }

    async openList(listTitle) {
        return await $(`~${listTitle}`).click()
    }
}

module.exports = new CreateTodoList()