Ext.define('TestApp.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'TestApp.view.MainLayout'
    ],
    config: {
        layout: {
            type: 'vbox'
        },
        items: [{
            xtype: 'titlebar',
            title: '家有儿女初长成',
            docked: 'top',
            height: 35
        }, {
            xtype: 'mainlayout',
            flex: 1
        }]
    }
});