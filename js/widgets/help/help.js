﻿/*global define,dojo,alert,moment,$ */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,indent:4 */
/*
| Copyright 2014 Esri
|
| Licensed under the Apache License, Version 2.0 (the "License");
| you may not use this file except in compliance with the License.
| You may obtain a copy of the License at
|
|    http://www.apache.org/licenses/LICENSE-2.0
|
| Unless required by applicable law or agreed to in writing, software
| distributed under the License is distributed on an "AS IS" BASIS,
| WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
| See the License for the specific language governing permissions and
| limitations under the License.
*/
define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/text!./templates/help.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/domReady!"
], function (
    declare,
    domConstruct,
    template,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin

) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,

        postCreate: function () {
            domConstruct.place(template, document.body, 'last');
            $('#myModal').find('.modal-title').html(this.config.helpDialogTitle);
            $('#myModal').find('.modal-body').html(this.config.helpDialogContent);
        },

        startup: function () {
            this.inherited(arguments);
        },

        /**
        * Shows modal dialog
        * @memberOf widgets/help/help
        */
        showDialog: function () {
            $("#myModal").modal("show");
            //Set modal templates scroll position to 0
            setTimeout(function () {
                $('#myModal').find('.modal-body')[0].scrollTop = 0;
            }, 200);
        }
    });
});
