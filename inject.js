
import { initialize, Event } from './sdk.client.js'


function getTarget(){
    var targetObj
    if(typeof(Storage) !== "undefined"){

        if((typeof(window.localStorage.targetIdentifier) !== "undefined") ){
        
            var ffID = (window.localStorage.targetIdentifier).replace(/[^a-zA-Z]/g, "");
            targetObj = {
                    identifier: ffID,
                    name: window.localStorage.targetIdentifier,
                    attributes: {
                        email: window.localStorage.targetIdentifier+"@harness.io",
                        Company: "Harness",
                        Name: window.localStorage.targetIdentifier
                    }
                    }
        }
        else{
            targetObj = {
                identifier: 'Guest',
                name: "Guest",
                attributes: {
                    email: "community@harness.io",
                    Company: "Community",
                    Name: "Visitor"
                }
            }
        }
    }
    else
    {
        targetObj = {
            identifier: 'Guest',
            name: "Guest",
            attributes: {
                email: "community@harness.io",
                Company: "Community",
                Name: "Visitor"
            }
        }
    }
    return targetObj
}

var customCode = ""
var functions = []
var flag = ""

function startSDK(){
    console.log("Diego Koala - FF Chrome Extension Plugin")

    console.log(window.localStorage.customCode)
    customCode = window.localStorage.customCode
    flag = window.localStorage.flagIdentifier

    var customCodeFunction = Function(customCode);
    customCodeFunction()("Diego 10")
    var teste = customCodeFunction()
    teste("Diego 20")
    var dictFunction = {}
    dictFunction[flag] = teste

    //functions.push({"code1": customCodeFunction})
    functions.push(dictFunction)
    /* console.log(functions.toString())
    for (const [key, value] of Object.entries(functions)) {
        for (const [key2, value2] of Object.entries(value)) {
            console.log(key2+value2)
            var ffFeature = Function(value2)
            if (key2 === flag) {
                console.log(key2+" = "+flag)
                ffFeature(key2)
            } else {
                console.log("key != flag")
                ffFeature()(key2)
            }
        }
        
    } */


    // Load time captured for future metric gathering
    var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
    console.debug("FF loadTime = " + loadTime)
    // Get variables from storage
    console.debug("script successfully injected, enabled = " + window.localStorage.enabled);
    if(typeof(Storage) !== "undefined"){
        console.log("Extension Enabled: " + window.localStorage.enabled)
        if (window.localStorage.enabled == "true") {
            
            var target = window.localStorage.targetIdentifier;

            target = getTarget()

            console.log(target)

            const cf = initialize(
                window.localStorage.clientSDK,
                target
            );
            cf.on(Event.READY, flags => {
                console.log("FLAGS:"+JSON.stringify(flags, null, 2));
        
                for (const [key, value] of Object.entries(flags)) {
                    console.log(key);
                    console.log(value);
                    var stringFunction = key+"('"+value+"')";
                    console.log(stringFunction)
                    try{
                        for (const [i, fnDict] of Object.entries(functions)) {
                            for (const [fnName, fn] of Object.entries(fnDict)) {
                                console.log(key)
                                console.log(fnName+fn)
                                var ffFeature = Function(fn)
                                if (key === fnName) {

                                    ffFeature(value)
                                } 
                            }
                            
                        }
                        // ADD HERE YOURS FLAGS LOGIC AND ACTION FOR Flags changes ex: www.itau.com.br
                        if (key == "login_enabled") {
                            if (value == true) {
                                $(".login-form").attr("style","display: visibility;");
                            } else {
                                $(".login-form").attr("style","display: none;");
                            }
                        }
                        if (key == "cards_enabled") {
                            if (value == true) {
                                $(".icon-itaufonts_cartao").parent().parent().attr("style","display: visibility;");
                            } else {
                                $(".icon-itaufonts_cartao").parent().parent().attr("style","display: none;");
                            }
                        }
                        if (key == "loans_enabled") {
                            if (value == true) {
                                $(".icon-itaufonts_credito_imobiliario").parent().parent().attr("style","display: visibility;");
                            } else {
                                $(".icon-itaufonts_credito_imobiliario").parent().parent().attr("style","display: none;");
                            }
                        }
                    }
                    catch(e){
                        console.log(e)
                    }
            
                }
            
            
            });
        
        
            
            cf.on(Event.CHANGED, flagInfo => {
                console.log("FLAG Changed:"+JSON.stringify(flagInfo, null, 2));
                console.log("FLAG Name:"+flagInfo.flag)
                console.log("FLAG identifier:"+flagInfo.identifier)
                console.log("FLAG kind:"+flagInfo.kind)
                console.log("FLAG value:"+flagInfo.value)
                console.log("type of:"+typeof(flagInfo))
                var stringFunction = flagInfo.flag+"('"+flagInfo.value+"')";
                console.log(stringFunction)

                for (const [i, fnDict] of Object.entries(functions)) {
                    for (const [fnName, fn] of Object.entries(fnDict)) {
                        console.log("Flag Changed key "+flagInfo.flag)
                        console.log("Flag Changed value "+flagInfo.value)
                        console.log("Flag FF name "+fnName+" - function: "+fn)
                        if (flagInfo.flag === fnName) {
                            console.log("Running FF flag feature: "+fnName)
                            var ffFeature = fn
                            ffFeature(flagInfo.value)
                            console.log("Success "+fnName)
                        } 
                    }
                    
                }
                // ADD HERE YOURS FLAGS LOGIC AND ACTION FOR Flags changes ex: www.itau.com.br
                console.log("FF is Awesome");
                if (flagInfo.flag == "login_enabled") {
                    if (flagInfo.value == true) {
                        $(".login-form").attr("style","display: visibility;");
                    } else {
                        $(".login-form").attr("style","display: none;");
                    }
                    
                }
                if (flagInfo.flag == "cards_enabled") {
                    if (flagInfo.value == true) {
                        $(".icon-itaufonts_cartao").parent().parent().attr("style","display: visibility;");
                    } else {
                        $(".icon-itaufonts_cartao").parent().parent().attr("style","display: none;");
                    }
                }
                if (flagInfo.flag == "loans_enabled") {
                    if (flagInfo.value == true) {
                        $(".icon-itaufonts_credito_imobiliario").parent().parent().attr("style","display: visibility;");
                    } else {
                        $(".icon-itaufonts_credito_imobiliario").parent().parent().attr("style","display: none;");
                    }
                }
                if (flagInfo.deleted) {
                  console.log('Flag'+flagInfo.flag+' is deleted');

                } 
            });
            cf.on(Event.DISCONNECTED, () => {
              // Event happens when connection is disconnected
              console.log("FF Disconnected");
            })
            
            cf.on(Event.ERROR, error => {
              console.log("FF Errror");
              console.log(error);
              cf.off()
              cf.close();
              // Event happens when connection some error has occurred
            })
        
            console.log("FF SDK Injected!")
        }
        else {
            console.log("FF Demo Disabled");
        } 
    }
};


export function init() {

    $(document).ready(function() { 
        startSDK();
    });

    
}


init()