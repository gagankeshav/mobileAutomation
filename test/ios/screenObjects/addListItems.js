class AddListItems {
    get addListItemBtn () {
        return $('~Add')
    }

    get listItemTitle() {
        const titleBox = 'value == "Title"'
        return $(`-ios predicate string:${titleBox}`)
    }

    get listItemDueDate() {
        const dueBox = 'value == "Due"'
        return $(`-ios predicate string:${dueBox}`)
    }

    async addListItemTitle(title) {
        return await this.listItemTitle.addValue(title)
    }

    async addListItemDueDate(date) {
        return await this.listItemDueDate.addValue(date)
    }

    async add_list_item(title, date) {
        await this.addListItemTitle(title)
        await this.addListItemDueDate(date)
    }

    async itemTitle(title) {
        return await $(`~${title}`)
    }

    async itemDate(date) {
        return await $(`~${date}`)
    }
}

module.exports = new AddListItems()