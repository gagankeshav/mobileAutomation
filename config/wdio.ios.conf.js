const {config} = require('./wdio.shared.conf')
const path = require("path")
config.specs = [
    './../test/specs/ios/todo-list-screens.spec.js'
]

config.port = 4721

config.capabilities = [{
    'appium:platformName': 'ios',
    'appium:platformVersion': '16.4',
    'appium:deviceName': 'iPhone 14 Pro',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(), './app/ios/MVCTodo.app'),
}]

exports.config = config