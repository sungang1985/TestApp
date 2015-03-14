Ext.define('TestApp.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            'list': {
                itemtap: 'showDetail'
            }
        }
    },
    showDetail: function(dataview, index, target, record) {
        // console.log(record.data.remark);
    }
});