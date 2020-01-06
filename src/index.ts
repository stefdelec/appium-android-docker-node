const {remote} = require('webdriverio');

const selectorFactory = (dataAttributeName) => {
    const selectorMaker = (name) => `[data-e2e=${name}]`;

    return dataAttributeName
        .split(' ')
        .map(name => selectorMaker(name)).join(' ');
};

(async function(){



    const capabilities=
        {
            'appium:app' : '/root/tmp/walletV2.apk',
            'appium:platformName': 'Android',
            'appium:deviceName': 'Android Emulator',
            'appium:avd': 'nexus_5_7.1.1'
        }


    const options={
        logLevel: 'trace',
        capabilities:capabilities
    };

const appClient= await remote(options);
const contexts=await appClient.getContexts();
await appClient.switchContext(contexts[1]);

let element=await appClient.$(selectorFactory('onboarding onboarding_slide-0 onboarding_next'));

    await appClient.hideKeyboard();

    await   element.waitForDisplayed(3500);

    await    element.click();

    console.log("champagne");


})()
