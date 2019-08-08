// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setDirtyMark(false)
                .setLeft("27.5em")
                .setTop("5.833333333333333em")
                .setWidth("9.583333333333334em")
                .setHeight("2.8333333333333335em")
                .setCaption("Toggle Attacker")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button4")
                .setDirtyMark(false)
                .setLeft("27.5em")
                .setTop("31.666666666666668em")
                .setWidth("9.583333333333334em")
                .setHeight("3.6666666666666665em")
                .setCaption("Run Combat!")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setDirtyMark(false)
                .setLeft("25em")
                .setTop("10.833333333333334em")
                .setWidth("14.666666666666666em")
                .setHeight("20.833333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("Text Area")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button11")
                .setDirtyMark(false)
                .setLeft("27.5em")
                .setTop("37.5em")
                .setWidth("9.583333333333334em")
                .setHeight("2.8333333333333335em")
                .setCaption("Level up Attacker")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput24")
                .setDirtyMark(false)
                .setLeft("0.8333333333333334em")
                .setTop("39.166666666666664em")
                .setWidth("17.166666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("Weapon")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput25")
                .setDirtyMark(false)
                .setLeft("0.8333333333333334em")
                .setTop("41.666666666666664em")
                .setWidth("17.166666666666668em")
                .setHeight("1.8333333333333333em")
                .setLabelSize("8em")
                .setLabelCaption("Terrain")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});