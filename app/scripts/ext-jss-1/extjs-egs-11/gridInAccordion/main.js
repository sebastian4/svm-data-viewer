// vim: sw=4:ts=4:nu:nospell:fdc=4
/**
 * Simplest Border Layout Example
 *
 * @author    Ing. Jozef Sakáloš
 * @copyright (c) 2008, by Ing. Jozef Sakáloš
 * @date      10. April 2008
 * @version   $Id: simplestbl.js 17 2008-04-24 14:57:16Z jozo $
 *
 * @license simplestbl.js is licensed under the terms of the Open Source
 * LGPL 3.0 license. Commercial use is permitted to the extent that the
 * code/component(s) do NOT become part of another Open Source or Commercially
 * licensed development library or toolkit without explicit permission.
 *
 * License details: http://www.gnu.org/licenses/lgpl.html
 */

/*global Ext */

Ext.BLANK_IMAGE_URL = './ext/resources/images/default/s.gif';

// application main entry point
Ext.onReady(function() {

    Ext.QuickTips.init();

    var panel = new Ext.Panel({
        title:Ext.getDom('page-title').innerHTML
        ,id:'simplestbl'
        ,layout:'border'
        ,width:600
        ,height:400
        ,renderTo:Ext.getBody()
        ,items:[{
            region:'center'
            ,layout:'fit'
            ,frame:true
            ,border:false
        },{
            region:'east'
            ,layout:'fit'
            ,frame:true
            ,border:false
            ,width:200
            ,split:true
            ,collapsible:true
            ,collapseMode:'mini'
        }]
    });

}); // eo function onReady

// eof
