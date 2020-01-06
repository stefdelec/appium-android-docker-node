const {remote} = require('webdriverio');

(async function(){

    const capabilities=
        {
            'appium:app' : '/root/tmp/YOURAPPAPK.apk',
            'appium:platformName': 'Android',
            'appium:deviceName': 'Android Emulator',
            'appium:avd': 'nexus_5_7.1.1'
        }


    const options={
        logLevel: 'trace',
        capabilities:capabilities
    };

const appClient= await remote(options);

// Setting context to webview
const contexts=await appClient.getContexts();
await appClient.switchContext(contexts[1]);

/// Change the here the id.
    let element=await appClient.$('CSS SElECTOR');
    await   element.waitForDisplayed(3500);
    await    element.click();

})()
