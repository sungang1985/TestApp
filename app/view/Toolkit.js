Ext.define('TestApp.view.Toolkit', {
	extend: 'Ext.Panel',
	xtype: 'toolkit',
	requires: [
		'TestApp.view.Shuijiao'
	],
	config: {
		title: '工具箱',
		iconCls: 'settings',
		layout: 'card',
		items: [{
			xtype: 'panel',
			layout: {
				type: 'vbox'
			},
			items: [{
				xtype: 'container',
				padding: '15px 5px 5px 10px',
				style: 'background-color: #5E99CC',
				html: '<div style="width: 100%; text-align: center;">' + '欢迎使用超级奶爸系列之家有儿女初长成' + '<br/>' + '希望这个小软件能帮到你！' + '<br/>' + '作者:oxpatient1985@gmail.com' + '</div>',
				flex: 1
			}, {
				xtype: 'panel',
				layout: {
					type: 'hbox'
				},
				defaults: {
					flex: 1
				},
				items: [{
					xtype: 'button',
					text: '爱睡觉',
					style: {
						background: '#de3554'
					},
					handler: function() {
						this.up('panel').up('panel').up('toolkit').setActiveItem(1);
					}
				}, {
					xtype: 'button',
					text: '多吃奶',
					style: {
						background: '#ffffcc'
					}
				}, {
					xtype: 'button',
					text: '长肉肉',
					style: {
						background: '#ff0000'
					}
				}, {
					xtype: 'button',
					text: '长个子',
					style: {
						background: '#00cc33'
					}
				}],
				flex: 1
			}, {
				xtype: 'panel',
				layout: {
					type: 'hbox'
				},
				defaults: {
					flex: 1
				},
				items: [{
					xtype: 'button',
					text: '拉臭臭',
					style: {
						background: '#996633'
					}
				}, {
					xtype: 'button',
					text: '其他',
					style: {
						background: '#6a6a6a'
					},
				}, {
					xtype: 'button',
					text: '',
					style: {
						background: '#ffffff'
					},
					disabled: true
				}, {
					xtype: 'button',
					text: '',
					style: {
						background: '#ffffff'
					},
					disabled: true
				}],
				flex: 1
			}, {
				xtype: 'container',
				padding: '15px 5px 5px 10px',
				style: 'background-color: #5E99CC',
				flex: 1
			}]
		}, {
			xtype: 'shuijiao'
		}]
	}
});