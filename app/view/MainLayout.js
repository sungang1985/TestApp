Ext.define('TestApp.view.MainLayout', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainlayout',
    requires: [
        'Ext.TitleBar',
        'TestApp.view.Toolkit',
        'TestApp.view.About'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [{
            xtype: 'toolkit'
        }, {
            xtype: 'about'
        }]
    }
});