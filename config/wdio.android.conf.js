const {config} = require('./wdio.shared.conf')
const path = require("path")

config.specs = [
    "./test/specs/android/app_automation_screens.spec.js"
]

config.port = 4722

config.capabilities = [{
    'appium:platformName': 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Pixel 4a',
    'appium:automationName': 'UIAutomator2',
    'appium:app': path.join(process.cwd(), './app/android/ColorNote+Notepad.apk'),
}]

exports.config = config