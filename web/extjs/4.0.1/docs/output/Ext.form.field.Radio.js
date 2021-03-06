Ext.data.JsonP.Ext_form_field_Radio({
  "tagname": "class",
  "name": "Ext.form.field.Radio",
  "doc": "<p>Single radio field. Similar to checkbox, but automatically handles making sure only one radio is checked\nat a time within a group of radios with the same name.</p>\n\n<p><strong>Labeling:</strong>\nIn addition to the <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">standard field labeling options</a>, radio buttons\nmay be given an optional <a href=\"#/api/Ext.form.field.Radio-cfg-boxLabel\" rel=\"Ext.form.field.Radio-cfg-boxLabel\" class=\"docClass\">boxLabel</a> which will be displayed immediately to the right of the input. Also\nsee <a href=\"#/api/Ext.form.RadioGroup\" rel=\"Ext.form.RadioGroup\" class=\"docClass\">Ext.form.RadioGroup</a> for a convenient method of grouping related radio buttons.</p>\n\n<p><strong>Values:</strong>\nThe main value of a Radio field is a boolean, indicating whether or not the radio is checked.</p>\n\n<p>The following values will check the radio:\n<code>true</code>\n<code>'true'</code>\n<code>'1'</code>\n<code>'on'</code></p>\n\n<p>Any other value will uncheck it.</p>\n\n<p>In addition to the main boolean value, you may also specify a separate <a href=\"#/api/Ext.form.field.Radio-cfg-inputValue\" rel=\"Ext.form.field.Radio-cfg-inputValue\" class=\"docClass\">inputValue</a>. This will be sent\nas the parameter value when the form is <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitted</a>. You will want to set this\nvalue if you have multiple radio buttons with the same <a href=\"#/api/Ext.form.field.Radio-cfg-name\" rel=\"Ext.form.field.Radio-cfg-name\" class=\"docClass\">name</a>, as is almost always the case.\n<p><img src=\"doc-resources/Ext.form.Radio/Ext.form.Radio.png\" alt=\"Ext.form.Radio component\"></p>\n<strong>Example usage:</strong></p>\n\n<pre><code>Ext.create('Ext.form.Panel', {\n    title      : 'Order Form',\n    width      : 300,\n    bodyPadding: 10,\n    renderTo   : Ext.getBody(),\n    items: [\n        {\n            xtype      : 'fieldcontainer',\n            fieldLabel : 'Size',\n            defaultType: 'radiofield',\n            defaults: {\n                flex: 1\n            },\n            layout: 'hbox',\n            items: [\n                {\n                    boxLabel  : 'M',\n                    name      : 'size',\n                    inputValue: 'm',\n                    id        : 'radio1'\n                }, {\n                    boxLabel  : 'L',\n                    name      : 'size',\n                    inputValue: 'l',\n                    id        : 'radio2'\n                }, {\n                    boxLabel  : 'XL',\n                    name      : 'size',\n                    inputValue: 'xl',\n                    id        : 'radio3'\n                }\n            ]\n        },\n        {\n            xtype      : 'fieldcontainer',\n            fieldLabel : 'Color',\n            defaultType: 'radiofield',\n            defaults: {\n                flex: 1\n            },\n            layout: 'hbox',\n            items: [\n                {\n                    boxLabel  : 'Blue',\n                    name      : 'color',\n                    inputValue: 'blue',\n                    id        : 'radio4'\n                }, {\n                    boxLabel  : 'Grey',\n                    name      : 'color',\n                    inputValue: 'grey',\n                    id        : 'radio5'\n                }, {\n                    boxLabel  : 'Black',\n                    name      : 'color',\n                    inputValue: 'black',\n                    id        : 'radio6'\n                }\n            ]\n        }\n    ],\n    bbar: [\n        {\n            text: 'Smaller Size',\n            handler: function() {\n                var radio1 = Ext.getCmp('radio1'),\n                    radio2 = Ext.getCmp('radio2'),\n                    radio3 = Ext.getCmp('radio3');\n\n                //if L is selected, change to M\n                if (radio2.getValue()) {\n                    radio1.setValue(true);\n                    return;\n                }\n\n                //if XL is selected, change to L\n                if (radio3.getValue()) {\n                    radio2.setValue(true);\n                    return;\n                }\n\n                //if nothing is set, set size to S\n                radio1.setValue(true);\n            }\n        },\n        {\n            text: 'Larger Size',\n            handler: function() {\n                var radio1 = Ext.getCmp('radio1'),\n                    radio2 = Ext.getCmp('radio2'),\n                    radio3 = Ext.getCmp('radio3');\n\n                //if M is selected, change to L\n                if (radio1.getValue()) {\n                    radio2.setValue(true);\n                    return;\n                }\n\n                //if L is selected, change to XL\n                if (radio2.getValue()) {\n                    radio3.setValue(true);\n                    return;\n                }\n\n                //if nothing is set, set size to XL\n                radio3.setValue(true);\n            }\n        },\n        '-',\n        {\n            text: 'Select color',\n            menu: {\n                indent: false,\n                items: [\n                    {\n                        text: 'Blue',\n                        handler: function() {\n                            var radio = Ext.getCmp('radio4');\n                            radio.setValue(true);\n                        }\n                    },\n                    {\n                        text: 'Grey',\n                        handler: function() {\n                            var radio = Ext.getCmp('radio5');\n                            radio.setValue(true);\n                        }\n                    },\n                    {\n                        text: 'Black',\n                        handler: function() {\n                            var radio = Ext.getCmp('radio6');\n                            radio.setValue(true);\n                        }\n                    }\n                ]\n            }\n        }\n    ]\n});\n</code></pre>\n",
  "extends": "Ext.form.field.Checkbox",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.form.Radio"
  ],
  "xtype": "radio",
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "activeError",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>If specified, then the component will be displayed with this value as its active error when\nfirst rendered. Defaults to undefined. Use <a href=\"#/api/Ext.form.field.Radio-method-setActiveError\" rel=\"Ext.form.field.Radio-method-setActiveError\" class=\"docClass\">setActiveError</a> or <a href=\"#/api/Ext.form.field.Radio-method-unsetActiveError\" rel=\"Ext.form.field.Radio-method-unsetActiveError\" class=\"docClass\">unsetActiveError</a> to\nchange it after component creation.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 206,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-activeError",
      "shortDoc": "If specified, then the component will be displayed with this value as its active error when\nfirst rendered. Defaults ..."
    },
    {
      "tagname": "cfg",
      "name": "activeErrorsTpl",
      "member": "Ext.form.Labelable",
      "type": "Ext.XTemplate",
      "doc": "<p>The template used to format the Array of error messages passed to <a href=\"#/api/Ext.form.field.Radio-method-setActiveErrors\" rel=\"Ext.form.field.Radio-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a>\ninto a single HTML string. By default this renders each message as an item in an unordered list.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 50,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-activeErrorsTpl",
      "shortDoc": "The template used to format the Array of error messages passed to setActiveErrors\ninto a single HTML string. By defau..."
    },
    {
      "tagname": "cfg",
      "name": "autoEl",
      "member": "Ext.AbstractComponent",
      "type": "Mixed",
      "doc": "<p>A tag name or <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> spec used to create the <a href=\"#/api/Ext.form.field.Radio-method-getEl\" rel=\"Ext.form.field.Radio-method-getEl\" class=\"docClass\">Element</a> which will\nencapsulate this Component.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> and <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>,\nthis defaults to <b><tt>'div'</tt></b>. The more complex Sencha classes use a more complex\nDOM structure specified by their own <a href=\"#/api/Ext.form.field.Radio-cfg-renderTpl\" rel=\"Ext.form.field.Radio-cfg-renderTpl\" class=\"docClass\">renderTpl</a>s.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components encapsulated by\ndifferent DOM elements. Example usage:</p>\n\n\n<pre><code>{\n    xtype: 'component',\n    autoEl: {\n        tag: 'img',\n        src: 'http://www.example.com/example.jpg'\n    }\n}, {\n    xtype: 'component',\n    autoEl: {\n        tag: 'blockquote',\n        html: 'autoEl is cool!'\n    }\n}, {\n    xtype: 'container',\n    autoEl: 'ul',\n    cls: 'ux-unordered-list',\n    items: {\n        xtype: 'component',\n        autoEl: 'li',\n        html: 'First list item'\n    }\n}\n</code></pre>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 109,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoEl",
      "shortDoc": "A tag name or DomHelper spec used to create the Element which will\nencapsulate this Component.\n\n\nYou do not normally ..."
    },
    {
      "tagname": "cfg",
      "name": "autoFitErrors",
      "member": "Ext.form.Labelable",
      "type": "Boolean",
      "doc": "<p>Whether to adjust the component's body area to make room for 'side' or 'under'\n<a href=\"#/api/Ext.form.field.Radio-cfg-msgTarget\" rel=\"Ext.form.field.Radio-cfg-msgTarget\" class=\"docClass\">error messages</a>. Defaults to <tt>true</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 184,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-autoFitErrors"
    },
    {
      "tagname": "cfg",
      "name": "autoRender",
      "member": "Ext.AbstractComponent",
      "type": "Mixed",
      "doc": "<p>This config is intended mainly for <a href=\"#/api/Ext.form.field.Radio-cfg-floating\" rel=\"Ext.form.field.Radio-cfg-floating\" class=\"docClass\">floating</a> Components which may or may not be shown. Instead\nof using <a href=\"#/api/Ext.form.field.Radio-cfg-renderTo\" rel=\"Ext.form.field.Radio-cfg-renderTo\" class=\"docClass\">renderTo</a> in the configuration, and rendering upon construction, this allows a Component\nto render itself upon first <i><a href=\"#/api/Ext.form.field.Radio-event-show\" rel=\"Ext.form.field.Radio-event-show\" class=\"docClass\">show</a></i>.</p>\n\n\n<p>Specify as <code>true</code> to have this Component render to the document body upon first show.</p>\n\n\n<p>Specify as an element, or the ID of an element to have this Component render to a specific element upon first show.</p>\n\n\n<p><b>This defaults to <code>true</code> for the <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a> class.</b></p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 478,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoRender",
      "shortDoc": "This config is intended mainly for floating Components which may or may not be shown. Instead\nof using renderTo in th..."
    },
    {
      "tagname": "cfg",
      "name": "autoScroll",
      "member": "Ext.Component",
      "type": "Boolean",
      "doc": "<p><code>true</code> to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, <code>false</code> to clip any overflowing content (defaults to <code>false</code>).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 169,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-cfg-autoScroll",
      "shortDoc": "true to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, false..."
    },
    {
      "tagname": "cfg",
      "name": "autoShow",
      "member": "Ext.AbstractComponent",
      "type": "Boolean",
      "doc": "<p>True to automatically show the component upon creation.\nThis config option may only be used for <a href=\"#/api/Ext.form.field.Radio-cfg-floating\" rel=\"Ext.form.field.Radio-cfg-floating\" class=\"docClass\">floating</a> components or components\nthat use <a href=\"#/api/Ext.form.field.Radio-cfg-autoRender\" rel=\"Ext.form.field.Radio-cfg-autoRender\" class=\"docClass\">autoRender</a>. Defaults to <tt>false</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 471,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoShow",
      "shortDoc": "True to automatically show the component upon creation.\nThis config option may only be used for floating components o..."
    },
    {
      "tagname": "cfg",
      "name": "baseBodyCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The CSS class to be applied to the body content element. Defaults to 'x-form-item-body'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 87,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-baseBodyCls"
    },
    {
      "tagname": "cfg",
      "name": "baseCls",
      "member": "Ext.AbstractComponent",
      "type": "String",
      "doc": "<p>The base CSS class to apply to this components's element. This will also be prepended to\nelements within this component like Panel's body will get a class x-panel-body. This means\nthat if you create a subclass of Panel, and you want it to get all the Panels styling for the\nelement and the body, you leave the baseCls x-panel and use componentCls to add specific styling for this\ncomponent.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 252,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-baseCls",
      "shortDoc": "The base CSS class to apply to this components's element. This will also be prepended to\nelements within this compone..."
    },
    {
      "tagname": "cfg",
      "name": "border",
      "member": "Ext.AbstractComponent",
      "type": "Number/String",
      "doc": "<p>Specifies the border for this component. The border can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 339,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-border",
      "shortDoc": "Specifies the border for this component. The border can be a single numeric value to apply to all sides or\nit can be ..."
    },
    {
      "tagname": "cfg",
      "name": "boxLabel",
      "member": "Ext.form.field.Checkbox",
      "type": "String",
      "doc": "<p>An optional text label that will appear next to the checkbox. Whether it appears before\nor after the checkbox is determined by the <a href=\"#/api/Ext.form.field.Radio-cfg-boxLabelAlign\" rel=\"Ext.form.field.Radio-cfg-boxLabelAlign\" class=\"docClass\">boxLabelAlign</a> config (defaults to after).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 157,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-cfg-boxLabel",
      "shortDoc": "An optional text label that will appear next to the checkbox. Whether it appears before\nor after the checkbox is dete..."
    },
    {
      "tagname": "cfg",
      "name": "boxLabelAlign",
      "member": "Ext.form.field.Checkbox",
      "type": "String",
      "doc": "<p>The position relative to the checkbox where the <a href=\"#/api/Ext.form.field.Radio-cfg-boxLabel\" rel=\"Ext.form.field.Radio-cfg-boxLabel\" class=\"docClass\">boxLabel</a> should\nappear. Recognized values are <tt>'before'</tt> and <tt>'after'</tt>. Defaults to <tt>'after'</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 167,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-cfg-boxLabelAlign",
      "shortDoc": "The position relative to the checkbox where the boxLabel should\nappear. Recognized values are 'before' and 'after'. D..."
    },
    {
      "tagname": "cfg",
      "name": "boxLabelCls",
      "member": "Ext.form.field.Checkbox",
      "type": "String",
      "doc": "<p>The CSS class to be applied to the <a href=\"#/api/Ext.form.field.Radio-cfg-boxLabel\" rel=\"Ext.form.field.Radio-cfg-boxLabel\" class=\"docClass\">boxLabel</a> element</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 162,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-cfg-boxLabelCls"
    },
    {
      "tagname": "cfg",
      "name": "checkChangeBuffer",
      "member": "Ext.form.field.Base",
      "type": "Number",
      "doc": "<p>Defines a timeout in milliseconds for buffering <a href=\"#/api/Ext.form.field.Radio-cfg-checkChangeEvents\" rel=\"Ext.form.field.Radio-cfg-checkChangeEvents\" class=\"docClass\">checkChangeEvents</a> that fire in rapid succession.\nDefaults to 50 milliseconds.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 185,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-cfg-checkChangeBuffer",
      "shortDoc": "Defines a timeout in milliseconds for buffering checkChangeEvents that fire in rapid succession.\nDefaults to 50 milli..."
    },
    {
      "tagname": "cfg",
      "name": "checkChangeEvents",
      "member": "Ext.form.field.Base",
      "type": "Array",
      "doc": "<p>A list of event names that will be listened for on the field's <a href=\"#/api/Ext.form.field.Radio-property-inputEl\" rel=\"Ext.form.field.Radio-property-inputEl\" class=\"docClass\">input element</a>, which\nwill cause the field's value to be checked for changes. If a change is detected, the\n<a href=\"#/api/Ext.form.field.Radio-event-change\" rel=\"Ext.form.field.Radio-event-change\" class=\"docClass\">change event</a> will be fired, followed by validation if the <a href=\"#/api/Ext.form.field.Radio-cfg-validateOnChange\" rel=\"Ext.form.field.Radio-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a>\noption is enabled.</p>\n\n\n<p>Defaults to <tt>['change', 'propertychange']</tt> in Internet Explorer, and <tt>['change', 'input',\n'textInput', 'keyup', 'dragdrop']</tt> in other browsers. This catches all the ways that field values\ncan be changed in most supported browsers; the only known exceptions at the time of writing are:</p>\n\n\n<ul>\n<li>Safari 3.2 and older: cut/paste in textareas via the context menu, and dragging text into textareas</li>\n<li>Opera 10 and 11: dragging text into text fields and textareas, and cut via the context menu in text\nfields and textareas</li>\n<li>Opera 9: Same as Opera 10 and 11, plus paste from context menu in text fields and textareas</li>\n</ul>\n\n\n<p>If you need to guarantee on-the-fly change notifications including these edge cases, you can call the\n<a href=\"#/api/Ext.form.field.Radio-method-checkChange\" rel=\"Ext.form.field.Radio-method-checkChange\" class=\"docClass\">checkChange</a> method on a repeating interval, e.g. using <a href=\"#/api/Ext.TaskManager\" rel=\"Ext.TaskManager\" class=\"docClass\">Ext.TaskManager</a>, or if the field is\nwithin a <a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a>, you can use the FormPanel's <a href=\"#/api/Ext.form.Panel-cfg-pollForChanges\" rel=\"Ext.form.Panel-cfg-pollForChanges\" class=\"docClass\">Ext.form.Panel.pollForChanges</a>\nconfiguration to set up such a task automatically.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 161,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-cfg-checkChangeEvents",
      "shortDoc": "A list of event names that will be listened for on the field's input element, which\nwill cause the field's value to b..."
    },
    {
      "tagname": "cfg",
      "name": "checked",
      "member": "Ext.form.field.Checkbox",
      "type": "Boolean",
      "doc": "<p><tt>true</tt> if the checkbox should render initially checked (defaults to <tt>false</tt>)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 147,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-cfg-checked"
    },
    {
      "tagname": "cfg",
      "name": "checkedCls",
      "member": "Ext.form.field.Checkbox",
      "type": "String",
      "doc": "<p>The CSS class added to the component's main element when it is in the checked state.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 152,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-cfg-checkedCls"
    },
    {
      "tagname": "cfg",
      "name": "clearCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide field clearing (defaults to <tt>'x-clear'</tt>).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 100,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-clearCls",
      "shortDoc": "The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide..."
    },
    {
      "tagname": "cfg",
      "name": "cls",
      "member": "Ext.AbstractComponent",
      "type": "String",
      "doc": "<p>An optional extra CSS class that will be added to this component's Element (defaults to '').  This can be\nuseful for adding customized styles to the component or any of its children using standard CSS rules.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 268,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-cls",
      "shortDoc": "An optional extra CSS class that will be added to this component's Element (defaults to '').  This can be\nuseful for ..."
    },
    {
      "tagname": "cfg",
      "name": "componentCls",
      "member": "Ext.AbstractComponent",
      "type": "String",
      "doc": "<p>CSS Class to be added to a components root level element to give distinction to it\nvia styling.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 262,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentCls"
    },
    {
      "tagname": "cfg",
      "name": "componentLayout",
      "member": "Ext.AbstractComponent",
      "type": "String/Object",
      "doc": "<p>The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager which sizes a Component's internal structure in response to the Component being sized.</p>\n\n\n<p>Generally, developers will not use this configuration as all provided Components which need their internal\nelements sizing (Such as <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">input fields</a>) come with their own componentLayout managers.</p>\n\n\n<p>The <a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">default layout manager</a> will be used on instances of the base <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> class\nwhich simply sizes the Component's encapsulating element to the height and width specified in the <a href=\"#/api/Ext.form.field.Radio-method-setSize\" rel=\"Ext.form.field.Radio-method-setSize\" class=\"docClass\">setSize</a> method.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 221,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentLayout",
      "shortDoc": "The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager..."
    },
    {
      "tagname": "cfg",
      "name": "contentEl",
      "member": "Ext.AbstractComponent",
      "type": "String",
      "doc": "<p>Optional. Specify an existing HTML element, or the <code>id</code> of an existing HTML element to use as the content\nfor this component.</p>\n\n\n<ul>\n<li><b>Description</b> :\n<div class=\"sub-desc\">This config option is used to take an existing HTML element and place it in the layout element\nof a new component (it simply moves the specified DOM element <i>after the Component is rendered</i> to use as the content.</div></li>\n<li><b>Notes</b> :\n<div class=\"sub-desc\">The specified HTML element is appended to the layout element of the component <i>after any configured\n<a href=\"#/api/Ext.form.field.Radio-cfg-html\" rel=\"Ext.form.field.Radio-cfg-html\" class=\"docClass\">HTML</a> has been inserted</i>, and so the document will not contain this element at the time the <a href=\"#/api/Ext.form.field.Radio-event-render\" rel=\"Ext.form.field.Radio-event-render\" class=\"docClass\">render</a> event is fired.</div>\n<div class=\"sub-desc\">The specified HTML element used will not participate in any <code><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a></b></code>\nscheme that the Component may use. It is just HTML. Layouts operate on child <code><b><a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a></b></code>.</div>\n<div class=\"sub-desc\">Add either the <code>x-hidden</code> or the <code>x-hide-display</code> CSS class to\nprevent a brief flicker of the content before it is rendered to the panel.</div></li>\n</ul>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 401,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-contentEl",
      "shortDoc": "Optional. Specify an existing HTML element, or the id of an existing HTML element to use as the content\nfor this comp..."
    },
    {
      "tagname": "cfg",
      "name": "data",
      "member": "Ext.AbstractComponent",
      "type": "Mixed",
      "doc": "<p>The initial set of data to apply to the <code><a href=\"#/api/Ext.form.field.Radio-cfg-tpl\" rel=\"Ext.form.field.Radio-cfg-tpl\" class=\"docClass\">tpl</a></code> to\nupdate the content area of the Component.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 239,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-data"
    },
    {
      "tagname": "cfg",
      "name": "dirtyCls",
      "member": "Ext.form.field.Base",
      "type": "String",
      "doc": "<p>The CSS class to use when the field value <a href=\"#/api/Ext.form.field.Radio-method-isDirty\" rel=\"Ext.form.field.Radio-method-isDirty\" class=\"docClass\">is dirty</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 156,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-cfg-dirtyCls"
    },
    {
      "tagname": "cfg",
      "name": "disabled",
      "member": "Ext.form.field.Field",
      "type": "Boolean",
      "doc": "<p>True to disable the field (defaults to false). Disabled Fields will not be\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitted</a>.</p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 43,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-cfg-disabled"
    },
    {
      "tagname": "cfg",
      "name": "disabledCls",
      "member": "Ext.AbstractComponent",
      "type": "String",
      "doc": "<p>CSS class to add when the Component is disabled. Defaults to 'x-item-disabled'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 281,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabledCls"
    },
    {
      "tagname": "cfg",
      "name": "draggable",
      "member": "Ext.Component",
      "type": "Mixed",
      "doc": "<p>Specify as true to make a <a href=\"#/api/Ext.form.field.Radio-cfg-floating\" rel=\"Ext.form.field.Radio-cfg-floating\" class=\"docClass\">floating</a> Component draggable using the Component's encapsulating element as the drag handle.</p>\n\n\n<p>This may also be specified as a config object for the <a href=\"#/api/Ext.util.ComponentDragger\" rel=\"Ext.util.ComponentDragger\" class=\"docClass\">ComponentDragger</a> which is instantiated to perform dragging.</p>\n\n\n<p>For example to create a Component which may only be dragged around using a certain internal element as the drag handle,\nuse the delegate option:</p>\n\n\n<p><code></p>\n\n<pre>new Ext.Component({\n    constrain: true,\n    floating:true,\n    style: {\n        backgroundColor: '#fff',\n        border: '1px solid black'\n    },\n    html: '&lt;h1 style=\"cursor:move\"&gt;The title&lt;/h1&gt;&lt;p&gt;The content&lt;/p&gt;',\n    draggable: {\n        delegate: 'h1'\n    }\n}).show();\n</pre>\n\n\n<p></code></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 234,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-cfg-draggable",
      "shortDoc": "Specify as true to make a floating Component draggable using the Component's encapsulating element as the drag handle..."
    },
    {
      "tagname": "cfg",
      "name": "errorMsgCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The CSS class to be applied to the error message element. Defaults to 'x-form-error-msg'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 81,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-errorMsgCls"
    },
    {
      "tagname": "cfg",
      "name": "fieldBodyCls",
      "member": "Ext.form.field.Checkbox",
      "type": "String",
      "doc": "<p>An extra CSS class to be applied to the body content element in addition to <a href=\"#/api/Ext.form.field.Radio-cfg-fieldBodyCls\" rel=\"Ext.form.field.Radio-cfg-fieldBodyCls\" class=\"docClass\">fieldBodyCls</a>.\nDefaults to 'x-form-cb-wrap.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 140,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-cfg-fieldBodyCls"
    },
    {
      "tagname": "cfg",
      "name": "fieldCls",
      "member": "Ext.form.field.Checkbox",
      "type": "String",
      "doc": "<p>The default CSS class for the checkbox (defaults to <tt>'x-form-field'</tt>)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 136,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-cfg-fieldCls"
    },
    {
      "tagname": "cfg",
      "name": "fieldLabel",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The label for the field. It gets appended with the <a href=\"#/api/Ext.form.field.Radio-cfg-labelSeparator\" rel=\"Ext.form.field.Radio-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>, and its position\nand sizing is determined by the <a href=\"#/api/Ext.form.field.Radio-cfg-labelAlign\" rel=\"Ext.form.field.Radio-cfg-labelAlign\" class=\"docClass\">labelAlign</a>, <a href=\"#/api/Ext.form.field.Radio-cfg-labelWidth\" rel=\"Ext.form.field.Radio-cfg-labelWidth\" class=\"docClass\">labelWidth</a>, and <a href=\"#/api/Ext.form.field.Radio-cfg-labelPad\" rel=\"Ext.form.field.Radio-cfg-labelPad\" class=\"docClass\">labelPad</a>\nconfigs. Defaults to undefined.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 113,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-fieldLabel",
      "shortDoc": "The label for the field. It gets appended with the labelSeparator, and its position\nand sizing is determined by the l..."
    },
    {
      "tagname": "cfg",
      "name": "fieldStyle",
      "member": "Ext.form.field.Base",
      "type": "String",
      "doc": "<p>Optional CSS style(s) to be applied to the <a href=\"#/api/Ext.form.field.Radio-property-inputEl\" rel=\"Ext.form.field.Radio-property-inputEl\" class=\"docClass\">field input element</a>.\nShould be a valid argument to <a href=\"#/api/Ext.core.Element-method-applyStyles\" rel=\"Ext.core.Element-method-applyStyles\" class=\"docClass\">Ext.core.Element.applyStyles</a>. Defaults to undefined. See also the\n<a href=\"#/api/Ext.form.field.Radio-method-setFieldStyle\" rel=\"Ext.form.field.Radio-method-setFieldStyle\" class=\"docClass\">setFieldStyle</a> method for changing the style after initialization.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 145,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-cfg-fieldStyle",
      "shortDoc": "Optional CSS style(s) to be applied to the field input element.\nShould be a valid argument to Ext.core.Element.applyS..."
    },
    {
      "tagname": "cfg",
      "name": "floating",
      "member": "Ext.Component",
      "type": "Boolean",
      "doc": "<p>Specify as true to float the Component outside of the document flow using CSS absolute positioning.</p>\n\n\n<p>Components such as <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s and <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Menu</a>s are floating\nby default.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will register themselves with the global\n<a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<h3 class=\"pa\">Floating Components as child items of a Container</h3>\n\n\n<p>A floating Component may be used as a child item of a Container. This just allows the floating Component to seek a ZIndexManager by\nexamining the ownerCt chain.</p>\n\n\n<p>When configured as floating, Components acquire, at render time, a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which manages a stack\nof related floating Components. The ZIndexManager brings a single floating Component to the top of its stack when\nthe Component's <a href=\"#/api/Ext.form.field.Radio-method-toFront\" rel=\"Ext.form.field.Radio-method-toFront\" class=\"docClass\">toFront</a> method is called.</p>\n\n\n<p>The ZIndexManager is found by traversing up the <a href=\"#/api/Ext.form.field.Radio-property-ownerCt\" rel=\"Ext.form.field.Radio-property-ownerCt\" class=\"docClass\">ownerCt</a> chain to find an ancestor which itself is floating. This is so that\ndescendant floating Components of floating <i>Containers</i> (Such as a ComboBox dropdown within a Window) can have its zIndex managed relative\nto any siblings, but always <b>above</b> that floating ancestor Container.</p>\n\n\n<p>If no floating ancestor is found, a floating Component registers itself with the default <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a>.</p>\n\n\n<p>Floating components <i>do not participate in the Container's layout</i>. Because of this, they are not rendered until you explicitly\n<a href=\"#/api/Ext.form.field.Radio-event-show\" rel=\"Ext.form.field.Radio-event-show\" class=\"docClass\">show</a> them.</p>\n\n\n<p>After rendering, the ownerCt reference is deleted, and the <a href=\"#/api/Ext.form.field.Radio-property-floatParent\" rel=\"Ext.form.field.Radio-property-floatParent\" class=\"docClass\">floatParent</a> property is set to the found floating ancestor Container.\nIf no floating ancestor Container was found the <a href=\"#/api/Ext.form.field.Radio-property-floatParent\" rel=\"Ext.form.field.Radio-property-floatParent\" class=\"docClass\">floatParent</a> property will not be set.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 175,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-cfg-floating",
      "shortDoc": "Specify as true to float the Component outside of the document flow using CSS absolute positioning.\n\n\nComponents such..."
    },
    {
      "tagname": "cfg",
      "name": "focusCls",
      "member": "Ext.form.field.Checkbox",
      "type": "String",
      "doc": "<p>The CSS class to use when the checkbox receives focus\n(defaults to <tt>'x-form-cb-focus'</tt>)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 130,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-cfg-focusCls"
    },
    {
      "tagname": "cfg",
      "name": "focusOnToFront",
      "member": "Ext.util.Floating",
      "type": "Boolean",
      "doc": "<p>Specifies whether the floated component should be automatically <a href=\"#/api/Ext.form.field.Radio-event-focus\" rel=\"Ext.form.field.Radio-event-focus\" class=\"docClass\">focused</a> when it is\n<a href=\"#/api/Ext.form.field.Radio-method-toFront\" rel=\"Ext.form.field.Radio-method-toFront\" class=\"docClass\">brought to the front</a>. Defaults to true.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 9,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-cfg-focusOnToFront",
      "shortDoc": "Specifies whether the floated component should be automatically focused when it is\nbrought to the front. Defaults to ..."
    },
    {
      "tagname": "cfg",
      "name": "formItemCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>A CSS class to be applied to the outermost element to denote that it is participating in the form\nfield layout. Defaults to 'x-form-item'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 68,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-formItemCls",
      "shortDoc": "A CSS class to be applied to the outermost element to denote that it is participating in the form\nfield layout. Defau..."
    },
    {
      "tagname": "cfg",
      "name": "frame",
      "member": "Ext.AbstractComponent",
      "type": "Boolean",
      "doc": "<p>Specify as <code>true</code> to have the Component inject framing elements within the Component at render time to\nprovide a graphical rounded frame around the Component content.</p>\n\n\n<p>This is only necessary when running on outdated, or non standard-compliant browsers such as Microsoft's Internet Explorer\nprior to version 9 which do not support rounded corners natively.</p>\n\n\n<p>The extra space taken up by this framing is available from the read only property <a href=\"#/api/Ext.form.field.Radio-property-frameSize\" rel=\"Ext.form.field.Radio-property-frameSize\" class=\"docClass\">frameSize</a>.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 198,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-frame",
      "shortDoc": "Specify as true to have the Component inject framing elements within the Component at render time to\nprovide a graphi..."
    },
    {
      "tagname": "cfg",
      "name": "handler",
      "member": "Ext.form.field.Checkbox",
      "type": "Function",
      "doc": "<p>A function called when the <a href=\"#/api/Ext.form.field.Radio-cfg-checked\" rel=\"Ext.form.field.Radio-cfg-checked\" class=\"docClass\">checked</a> value changes (can be used instead of\nhandling the <a href=\"#/api/Ext.form.field.Radio-event-change\" rel=\"Ext.form.field.Radio-event-change\" class=\"docClass\">change event</a>). The handler is passed the following parameters:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>checkbox</b> : Ext.form.field.Checkbox<div class=\"sub-desc\">The Checkbox being toggled.</div></li>\n<li><b>checked</b> : Boolean<div class=\"sub-desc\">The new checked state of the checkbox.</div></li>\n</ul></div>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 185,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-cfg-handler",
      "shortDoc": "A function called when the checked value changes (can be used instead of\nhandling the change event). The handler is p..."
    },
    {
      "tagname": "cfg",
      "name": "height",
      "member": "Ext.AbstractComponent",
      "type": "Number",
      "doc": "<p>The height of this component in pixels.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 334,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-height"
    },
    {
      "tagname": "cfg",
      "name": "hidden",
      "member": "Ext.AbstractComponent",
      "type": "Boolean",
      "doc": "<p>Defaults to false.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 357,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hidden"
    },
    {
      "tagname": "cfg",
      "name": "hideEmptyLabel",
      "member": "Ext.form.Labelable",
      "type": "Boolean",
      "doc": "<p>When set to <tt>true</tt>, the label element (<a href=\"#/api/Ext.form.field.Radio-cfg-fieldLabel\" rel=\"Ext.form.field.Radio-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.field.Radio-cfg-labelSeparator\" rel=\"Ext.form.field.Radio-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>) will be\nautomatically hidden if the <a href=\"#/api/Ext.form.field.Radio-cfg-fieldLabel\" rel=\"Ext.form.field.Radio-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> is empty. Setting this to <tt>false</tt> will cause the empty\nlabel element to be rendered and space to be reserved for it; this is useful if you want a field without a label\nto line up with other labeled fields in the same form. Defaults to <tt>true</tt>.</p>\n\n\n<p>If you wish to unconditionall hide the label even if a non-empty fieldLabel is configured, then set\nthe <a href=\"#/api/Ext.form.field.Radio-cfg-hideLabel\" rel=\"Ext.form.field.Radio-cfg-hideLabel\" class=\"docClass\">hideLabel</a> config to <tt>true</tt>.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 166,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-hideEmptyLabel",
      "shortDoc": "When set to true, the label element (fieldLabel and labelSeparator) will be\nautomatically hidden if the fieldLabel is..."
    },
    {
      "tagname": "cfg",
      "name": "hideLabel",
      "member": "Ext.form.Labelable",
      "type": "Boolean",
      "doc": "<p>Set to <tt>true</tt> to completely hide the label element (<a href=\"#/api/Ext.form.field.Radio-cfg-fieldLabel\" rel=\"Ext.form.field.Radio-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.field.Radio-cfg-labelSeparator\" rel=\"Ext.form.field.Radio-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>).\nDefaults to <tt>false</tt>.</p>\n\n\n<p>Also see <a href=\"#/api/Ext.form.field.Radio-cfg-hideEmptyLabel\" rel=\"Ext.form.field.Radio-cfg-hideEmptyLabel\" class=\"docClass\">hideEmptyLabel</a>, which controls whether space will be reserved for an empty fieldLabel.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 158,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-hideLabel",
      "shortDoc": "Set to true to completely hide the label element (fieldLabel and labelSeparator).\nDefaults to false.\n\n\nAlso see hideE..."
    },
    {
      "tagname": "cfg",
      "name": "hideMode",
      "member": "Ext.AbstractComponent",
      "type": "String",
      "doc": "<p>A String which specifies how this Component's encapsulating DOM element will be hidden.\nValues may be<div class=\"mdetail-params\"><ul>\n<li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>\n<li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>\n<li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area of the document. This\nis useful when a hidden Component must maintain measurable dimensions. Hiding using <code>display</code> results\nin a Component having zero dimensions.</li></ul></div>\nDefaults to <code>'display'</code>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 388,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hideMode",
      "shortDoc": "A String which specifies how this Component's encapsulating DOM element will be hidden.\nValues may be\n'display' : The..."
    },
    {
      "tagname": "cfg",
      "name": "html",
      "member": "Ext.AbstractComponent",
      "type": "String/Object",
      "doc": "<p>An HTML fragment, or a <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> specification to use as the layout element\ncontent (defaults to ''). The HTML content is added after the component is rendered,\nso the document will not contain this HTML at the time the <a href=\"#/api/Ext.form.field.Radio-event-render\" rel=\"Ext.form.field.Radio-event-render\" class=\"docClass\">render</a> event is fired.\nThis content is inserted into the body <i>before</i> any configured <a href=\"#/api/Ext.form.field.Radio-cfg-contentEl\" rel=\"Ext.form.field.Radio-cfg-contentEl\" class=\"docClass\">contentEl</a> is appended.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 419,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-html",
      "shortDoc": "An HTML fragment, or a DomHelper specification to use as the layout element\ncontent (defaults to ''). The HTML conten..."
    },
    {
      "tagname": "cfg",
      "name": "id",
      "member": "Ext.AbstractComponent",
      "type": "String",
      "doc": "<p>The <b><u>unique id of this component instance</u></b> (defaults to an <a href=\"#/api/Ext.form.field.Radio-method-getId\" rel=\"Ext.form.field.Radio-method-getId\" class=\"docClass\">auto-assigned id</a>).</p>\n\n\n<p>It should not be necessary to use this configuration except for singleton objects in your application.\nComponents created with an id may be accessed globally using <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>.</p>\n\n\n<p>Instead of using assigned ids, use the <a href=\"#/api/Ext.form.field.Radio-cfg-itemId\" rel=\"Ext.form.field.Radio-cfg-itemId\" class=\"docClass\">itemId</a> config, and <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> which\nprovides selector-based searching for Sencha Components analogous to DOM querying. The <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>\nclass contains <a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">shortcut methods</a> to query its descendant Components by selector.</p>\n\n\n<p>Note that this id will also be used as the element id for the containing HTML element\nthat is rendered to the page for this component. This allows you to write id-based CSS\nrules to style the specific instance of this component uniquely, and also to select\nsub-elements using this component's id as the parent.</p>\n\n\n<p><b>Note</b>: to avoid complications imposed by a unique <tt>id</tt> also see <code><a href=\"#/api/Ext.form.field.Radio-cfg-itemId\" rel=\"Ext.form.field.Radio-cfg-itemId\" class=\"docClass\">itemId</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of a Component see <code><a href=\"#/api/Ext.form.field.Radio-property-ownerCt\" rel=\"Ext.form.field.Radio-property-ownerCt\" class=\"docClass\">ownerCt</a></code>.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 50,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-id",
      "shortDoc": "The unique id of this component instance (defaults to an auto-assigned id).\n\n\nIt should not be necessary to use this ..."
    },
    {
      "tagname": "cfg",
      "name": "inputId",
      "member": "Ext.form.field.Base",
      "type": "String",
      "doc": "<p>The id that will be given to the generated input DOM element. Defaults to an automatically generated id.\nIf you configure this manually, you must make sure it is unique in the document.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 210,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-cfg-inputId",
      "shortDoc": "The id that will be given to the generated input DOM element. Defaults to an automatically generated id.\nIf you confi..."
    },
    {
      "tagname": "cfg",
      "name": "inputType",
      "member": "Ext.form.field.Base",
      "type": "String",
      "doc": "<p>The type attribute for input fields -- e.g. radio, text, password, file (defaults to <tt>'text'</tt>).\nThe extended types supported by HTML5 inputs (url, email, etc.) may also be used, though using them\nwill cause older browsers to fall back to 'text'.</p>\n\n\n<p>The type 'password' must be used to render that field type currently -- there is no separate <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a>\ncomponent for that. You can use <a href=\"#/api/Ext.form.field.File\" rel=\"Ext.form.field.File\" class=\"docClass\">Ext.form.field.File</a> which creates a custom-rendered file upload\nfield, but if you want a plain unstyled file input you can use a BaseField with inputType:'file'.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 118,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-cfg-inputType",
      "shortDoc": "The type attribute for input fields -- e.g. radio, text, password, file (defaults to 'text').\nThe extended types supp..."
    },
    {
      "tagname": "cfg",
      "name": "inputValue",
      "member": "Ext.form.field.Checkbox",
      "type": "String",
      "doc": "<p>The value that should go into the generated input element's value attribute and\nshould be used as the parameter value when submitting as part of a form. Defaults to <tt>\"on\"</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 173,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-cfg-inputValue",
      "shortDoc": "The value that should go into the generated input element's value attribute and\nshould be used as the parameter value..."
    },
    {
      "tagname": "cfg",
      "name": "invalidCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The CSS class to use when marking the component invalid (defaults to 'x-form-invalid')</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 107,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-invalidCls"
    },
    {
      "tagname": "cfg",
      "name": "invalidText",
      "member": "Ext.form.field.Base",
      "type": "String",
      "doc": "<p>The error text to use when marking a field invalid and no message is provided\n(defaults to 'The value in this field is invalid')</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 134,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-cfg-invalidText",
      "shortDoc": "The error text to use when marking a field invalid and no message is provided\n(defaults to 'The value in this field i..."
    },
    {
      "tagname": "cfg",
      "name": "itemId",
      "member": "Ext.AbstractComponent",
      "type": "String",
      "doc": "<p>An <tt>itemId</tt> can be used as an alternative way to get a reference to a component\nwhen no object reference is available.  Instead of using an <code><a href=\"#/api/Ext.form.field.Radio-cfg-id\" rel=\"Ext.form.field.Radio-cfg-id\" class=\"docClass\">id</a></code> with\n<a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a>.<a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">getCmp</a>, use <code>itemId</code> with\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a> which will retrieve\n<code>itemId</code>'s or <tt><a href=\"#/api/Ext.form.field.Radio-cfg-id\" rel=\"Ext.form.field.Radio-cfg-id\" class=\"docClass\">id</a></tt>'s. Since <code>itemId</code>'s are an index to the\ncontainer's internal MixedCollection, the <code>itemId</code> is scoped locally to the container --\navoiding potential conflicts with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a> which requires a <b>unique</b>\n<code><a href=\"#/api/Ext.form.field.Radio-cfg-id\" rel=\"Ext.form.field.Radio-cfg-id\" class=\"docClass\">id</a></code>.</p>\n\n\n<pre><code>var c = new Ext.panel.Panel({ //\n    <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 300,\n    <a href=\"#/api/Ext.form.field.Radio-cfg-renderTo\" rel=\"Ext.form.field.Radio-cfg-renderTo\" class=\"docClass\">renderTo</a>: document.body,\n    <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a>: 'auto',\n    <a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a>: [\n        {\n            itemId: 'p1',\n            <a href=\"#/api/Ext.panel.Panel--title\" rel=\"Ext.panel.Panel--title\" class=\"docClass\">title</a>: 'Panel 1',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        },\n        {\n            itemId: 'p2',\n            <a href=\"#/api/Ext.panel.Panel--title\" rel=\"Ext.panel.Panel--title\" class=\"docClass\">title</a>: 'Panel 2',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        }\n    ]\n})\np1 = c.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p1'); // not the same as <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp()</a>\np2 = p1.<a href=\"#/api/Ext.form.field.Radio-property-ownerCt\" rel=\"Ext.form.field.Radio-property-ownerCt\" class=\"docClass\">ownerCt</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p2'); // reference via a sibling\n</code></pre>\n\n\n<p>Also see <tt><a href=\"#/api/Ext.form.field.Radio-cfg-id\" rel=\"Ext.form.field.Radio-cfg-id\" class=\"docClass\">id</a></tt>, <code><a href=\"#/api/Ext.form.field.Radio--query\" rel=\"Ext.form.field.Radio--query\" class=\"docClass\">query</a></code>, <code><a href=\"#/api/Ext.form.field.Radio--down\" rel=\"Ext.form.field.Radio--down\" class=\"docClass\">down</a></code> and <code><a href=\"#/api/Ext.form.field.Radio--child\" rel=\"Ext.form.field.Radio--child\" class=\"docClass\">child</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of an item see <tt><a href=\"#/api/Ext.form.field.Radio-property-ownerCt\" rel=\"Ext.form.field.Radio-property-ownerCt\" class=\"docClass\">ownerCt</a></tt>.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 66,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-itemId",
      "shortDoc": "An itemId can be used as an alternative way to get a reference to a component\nwhen no object reference is available. ..."
    },
    {
      "tagname": "cfg",
      "name": "labelAlign",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>Controls the position and alignment of the <a href=\"#/api/Ext.form.field.Radio-cfg-fieldLabel\" rel=\"Ext.form.field.Radio-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a>. Valid values are:</p>\n\n\n<ul>\n<li><tt>\"left\"</tt> (the default) - The label is positioned to the left of the field, with its text\naligned to the left. Its width is determined by the <a href=\"#/api/Ext.form.field.Radio-cfg-labelWidth\" rel=\"Ext.form.field.Radio-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n<li><tt>\"top\"</tt> - The label is positioned above the field.</li>\n<li><tt>\"right\"</tt> - The label is positioned to the left of the field, with its text aligned\nto the right. Its width is determined by the <a href=\"#/api/Ext.form.field.Radio-cfg-labelWidth\" rel=\"Ext.form.field.Radio-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n</ul>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 121,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelAlign",
      "shortDoc": "Controls the position and alignment of the fieldLabel. Valid values are:\n\n\n\n\"left\" (the default) - The label is posit..."
    },
    {
      "tagname": "cfg",
      "name": "labelCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The CSS class to be applied to the label element. Defaults to 'x-form-item-label'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 75,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelCls"
    },
    {
      "tagname": "cfg",
      "name": "labelPad",
      "member": "Ext.form.Labelable",
      "type": "Number",
      "doc": "<p>The amount of space in pixels between the <a href=\"#/api/Ext.form.field.Radio-cfg-fieldLabel\" rel=\"Ext.form.field.Radio-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and the input field. Defaults to <tt>5</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 141,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelPad"
    },
    {
      "tagname": "cfg",
      "name": "labelSeparator",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>Character(s) to be inserted at the end of the <a href=\"#/api/Ext.form.field.Radio-cfg-fieldLabel\" rel=\"Ext.form.field.Radio-cfg-fieldLabel\" class=\"docClass\">label text</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 147,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelSeparator"
    },
    {
      "tagname": "cfg",
      "name": "labelStyle",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>A CSS style specification string to apply directly to this field's label. Defaults to undefined.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 153,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelStyle"
    },
    {
      "tagname": "cfg",
      "name": "labelWidth",
      "member": "Ext.form.Labelable",
      "type": "Number",
      "doc": "<p>The width of the <a href=\"#/api/Ext.form.field.Radio-cfg-fieldLabel\" rel=\"Ext.form.field.Radio-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> in pixels. Only applicable if the <a href=\"#/api/Ext.form.field.Radio-cfg-labelAlign\" rel=\"Ext.form.field.Radio-cfg-labelAlign\" class=\"docClass\">labelAlign</a> is set\nto \"left\" or \"right\". Defaults to <tt>100</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 134,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelWidth"
    },
    {
      "tagname": "cfg",
      "name": "labelableRenderTpl",
      "member": "Ext.form.Labelable",
      "type": "Array/String/Ext.XTemplate",
      "doc": "<p>The rendering template for the field decorations. Component classes using this mixin should include\nlogic to use this as their <a href=\"#/api/Ext.AbstractComponent-cfg-renderTpl\" rel=\"Ext.AbstractComponent-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, and implement the\n<a href=\"#/api/Ext.form.field.Radio--getSubTplMarkup\" rel=\"Ext.form.field.Radio--getSubTplMarkup\" class=\"docClass\">getSubTplMarkup</a> method to generate the field body content.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 29,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelableRenderTpl",
      "shortDoc": "The rendering template for the field decorations. Component classes using this mixin should include\nlogic to use this..."
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.form.field.Radio-method-addListener\" rel=\"Ext.form.field.Radio-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    },
    {
      "tagname": "cfg",
      "name": "loader",
      "member": "Ext.AbstractComponent",
      "type": "Ext.ComponentLoader/Object",
      "doc": "<p>A configuration object or an instance of a <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> to load remote\ncontent for this Component.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 462,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-loader"
    },
    {
      "tagname": "cfg",
      "name": "maintainFlex",
      "member": "Ext.Component",
      "type": "Boolean",
      "doc": "<p><b>Only valid when a sibling element of a <a href=\"#/api/Ext.resizer.Splitter\" rel=\"Ext.resizer.Splitter\" class=\"docClass\">Splitter</a> within a <a href=\"#/api/Ext.layout.container.VBox\" rel=\"Ext.layout.container.VBox\" class=\"docClass\">VBox</a> or\n<a href=\"#/api/Ext.layout.container.HBox\" rel=\"Ext.layout.container.HBox\" class=\"docClass\">HBox</a> layout.</b></p>\n\n\n<p>Specifies that if an immediate sibling Splitter is moved, the Component on the <i>other</i> side is resized, and this\nComponent maintains its configured <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">flex</a> value.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 256,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-cfg-maintainFlex",
      "shortDoc": "Only valid when a sibling element of a Splitter within a VBox or\nHBox layout.\n\n\nSpecifies that if an immediate siblin..."
    },
    {
      "tagname": "cfg",
      "name": "margin",
      "member": "Ext.AbstractComponent",
      "type": "Number/String",
      "doc": "<p>Specifies the margin for this component. The margin can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 351,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-margin",
      "shortDoc": "Specifies the margin for this component. The margin can be a single numeric value to apply to all sides or\nit can be ..."
    },
    {
      "tagname": "cfg",
      "name": "maxHeight",
      "member": "Ext.AbstractComponent",
      "type": "Number",
      "doc": "<p>The maximum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 451,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxHeight",
      "shortDoc": "The maximum value in pixels which this Component will set its height to.\n\n\nWarning: This will override any size manag..."
    },
    {
      "tagname": "cfg",
      "name": "maxWidth",
      "member": "Ext.AbstractComponent",
      "type": "Number",
      "doc": "<p>The maximum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 456,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxWidth",
      "shortDoc": "The maximum value in pixels which this Component will set its width to.\n\n\nWarning: This will override any size manage..."
    },
    {
      "tagname": "cfg",
      "name": "minHeight",
      "member": "Ext.AbstractComponent",
      "type": "Number",
      "doc": "<p>The minimum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 441,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minHeight",
      "shortDoc": "The minimum value in pixels which this Component will set its height to.\n\n\nWarning: This will override any size manag..."
    },
    {
      "tagname": "cfg",
      "name": "minWidth",
      "member": "Ext.AbstractComponent",
      "type": "Number",
      "doc": "<p>The minimum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 446,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minWidth",
      "shortDoc": "The minimum value in pixels which this Component will set its width to.\n\n\nWarning: This will override any size manage..."
    },
    {
      "tagname": "cfg",
      "name": "msgTarget",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The location where the error message text should display.\nMust be one of the following values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>qtip</code> Display a quick tip containing the message when the user hovers over the field. This is the default.\n<div class=\"subdesc\"><b><a href=\"#/api/Ext.tip.QuickTipManager-method-init\" rel=\"Ext.tip.QuickTipManager-method-init\" class=\"docClass\">Ext.tip.QuickTipManager.init</a> must have been called for this setting to work.</b></div></li>\n<li><code>title</code> Display the message in a default browser title attribute popup.</li>\n<li><code>under</code> Add a block div beneath the field containing the error message.</li>\n<li><code>side</code> Add an error icon to the right of the field, displaying the message in a popup on hover.</li>\n<li><code>none</code> Don't display any error message. This might be useful if you are implementing custom error display.</li>\n<li><code>[element id]</code> Add the error message directly to the innerHTML of the specified element.</li>\n</ul></div>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 191,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-msgTarget",
      "shortDoc": "The location where the error message text should display.\nMust be one of the following values:\n\n\n\nqtip Display a quic..."
    },
    {
      "tagname": "cfg",
      "name": "name",
      "member": "Ext.form.field.Base",
      "type": "String",
      "doc": "<p>The name of the field (defaults to undefined). This is used as the parameter\nname when including the field value in a <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit()</a>. If no name is\nconfigured, it falls back to the <a href=\"#/api/Ext.form.field.Radio-cfg-inputId\" rel=\"Ext.form.field.Radio-cfg-inputId\" class=\"docClass\">inputId</a>. To prevent the field from being included in the\nform submit, set <a href=\"#/api/Ext.form.field.Radio-cfg-submitValue\" rel=\"Ext.form.field.Radio-cfg-submitValue\" class=\"docClass\">submitValue</a> to <tt>false</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 111,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-cfg-name",
      "shortDoc": "The name of the field (defaults to undefined). This is used as the parameter\nname when including the field value in a..."
    },
    {
      "tagname": "cfg",
      "name": "overCls",
      "member": "Ext.AbstractComponent",
      "type": "String",
      "doc": "<p>An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and removed when the mouse moves out. (defaults to '').  This can be\nuseful for adding customized 'active' or 'hover' styles to the component or any of its children using standard CSS rules.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 274,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-overCls",
      "shortDoc": "An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and..."
    },
    {
      "tagname": "cfg",
      "name": "padding",
      "member": "Ext.AbstractComponent",
      "type": "Number/String",
      "doc": "<p>Specifies the padding for this component. The padding can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 345,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-padding",
      "shortDoc": "Specifies the padding for this component. The padding can be a single numeric value to apply to all sides or\nit can b..."
    },
    {
      "tagname": "cfg",
      "name": "plugins",
      "member": "Ext.AbstractComponent",
      "type": "Object/Array",
      "doc": "<p>An object or array of objects that will provide custom functionality for this component.  The only\nrequirement for a valid plugin is that it contain an init method that accepts a reference of type <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.\nWhen a component is created, if any plugins are available, the component will call the init method on each\nplugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the\ncomponent as needed to provide its functionality.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 491,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-plugins",
      "shortDoc": "An object or array of objects that will provide custom functionality for this component.  The only\nrequirement for a ..."
    },
    {
      "tagname": "cfg",
      "name": "preventMark",
      "member": "Ext.form.Labelable",
      "type": "Boolean",
      "doc": "<p><tt>true</tt> to disable displaying any <a href=\"#/api/Ext.form.field.Radio-method-setActiveError\" rel=\"Ext.form.field.Radio-method-setActiveError\" class=\"docClass\">error message</a> set on this object.\nDefaults to <tt>false</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 177,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-preventMark"
    },
    {
      "tagname": "cfg",
      "name": "readOnly",
      "member": "Ext.form.field.Base",
      "type": "Boolean",
      "doc": "<p><tt>true</tt> to mark the field as readOnly in HTML\n(defaults to <tt>false</tt>).</p>\n\n<br><p><b>Note</b>: this only sets the element's readOnly DOM attribute.\n\n\n<p>Setting <code>readOnly=true</code>, for example, will not disable triggering a\nComboBox or Date; it gives you the option of forcing the user to choose\nvia the trigger without typing in the text box. To hide the trigger use\n<code><a href=\"#/api/Ext.form.field.Trigger-cfg-hideTrigger\" rel=\"Ext.form.field.Trigger-cfg-hideTrigger\" class=\"docClass\">hideTrigger</a></code>.</p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 194,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-cfg-readOnly",
      "shortDoc": "true to mark the field as readOnly in HTML\n(defaults to false).\n\nNote: this only sets the element's readOnly DOM attr..."
    },
    {
      "tagname": "cfg",
      "name": "readOnlyCls",
      "member": "Ext.form.field.Base",
      "type": "String",
      "doc": "<p>The CSS class applied to the component's main element when it is <a href=\"#/api/Ext.form.field.Radio-cfg-readOnly\" rel=\"Ext.form.field.Radio-cfg-readOnly\" class=\"docClass\">readOnly</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 205,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-cfg-readOnlyCls"
    },
    {
      "tagname": "cfg",
      "name": "renderSelectors",
      "member": "Ext.AbstractComponent",
      "type": "Object",
      "doc": "<p>An object containing properties specifying <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a> selectors which identify child elements\ncreated by the render process.</p>\n\n<p>After the Component's internal structure is rendered according to the <a href=\"#/api/Ext.form.field.Radio-cfg-renderTpl\" rel=\"Ext.form.field.Radio-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, this object is iterated through,\nand the found Elements are added as properties to the Component using the <code>renderSelector</code> property name.</p>\n\n<p>For example, a Component which rendered an image, and description into its element might use the following properties\ncoded into its prototype:</p>\n\n<pre><code>renderTpl: '&amp;lt;img src=\"{imageUrl}\" class=\"x-image-component-img\"&gt;&amp;lt;div class=\"x-image-component-desc\"&gt;{description}&amp;gt;/div&amp;lt;',\n\nrenderSelectors: {\n    image: 'img.x-image-component-img',\n    descEl: 'div.x-image-component-desc'\n}\n</code></pre>\n\n<p>After rendering, the Component would have a property <code>image</code> referencing its child <code>img</code> Element,\nand a property <code>descEl</code> referencing the <code>div</code> Element which contains the description.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 158,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderSelectors",
      "shortDoc": "An object containing properties specifying DomQuery selectors which identify child elements\ncreated by the render pro..."
    },
    {
      "tagname": "cfg",
      "name": "renderTo",
      "member": "Ext.AbstractComponent",
      "type": "Mixed",
      "doc": "<p>Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into.</p>\n\n\n<div><ul>\n<li><b>Notes</b> : <ul>\n<div class=\"sub-desc\">Do <u>not</u> use this option if the Component is to be a child item of\na <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>. It is the responsibility of the\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>'s <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout manager</a>\nto render and manage its child items.</div>\n<div class=\"sub-desc\">When using this config, a call to render() is not required.</div>\n</ul></li>\n</ul></div>\n\n\n<p>See <code><a href=\"#/api/Ext.form.field.Radio-event-render\" rel=\"Ext.form.field.Radio-event-render\" class=\"docClass\">render</a></code> also.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 183,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTo",
      "shortDoc": "Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into.\n\n\n\nNot..."
    },
    {
      "tagname": "cfg",
      "name": "renderTpl",
      "member": "Ext.AbstractComponent",
      "type": "Mixed",
      "doc": "<p>An <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">XTemplate</a> used to create the internal structure inside this Component's\nencapsulating <a href=\"#/api/Ext.form.field.Radio-method-getEl\" rel=\"Ext.form.field.Radio-method-getEl\" class=\"docClass\">Element</a>.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\nand <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>, this defaults to <b><code>null</code></b> which means that they will be initially rendered\nwith no internal structure; they render their <a href=\"#/api/Ext.form.field.Radio-method-getEl\" rel=\"Ext.form.field.Radio-method-getEl\" class=\"docClass\">Element</a> empty. The more specialized ExtJS and Touch classes\nwhich use a more complex DOM structure, provide their own template definitions.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components with customized\ninternal structure.</p>\n\n\n<p>Upon rendering, any created child elements may be automatically imported into object properties using the\n<a href=\"#/api/Ext.form.field.Radio-cfg-renderSelectors\" rel=\"Ext.form.field.Radio-cfg-renderSelectors\" class=\"docClass\">renderSelectors</a> option.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 143,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTpl",
      "shortDoc": "An XTemplate used to create the internal structure inside this Component's\nencapsulating Element.\n\n\nYou do not normal..."
    },
    {
      "tagname": "cfg",
      "name": "resizable",
      "member": "Ext.Component",
      "type": "Mixed",
      "doc": "<p>Specify as <code>true</code> to apply a <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a> to this Component\nafter rendering.</p>\n\n\n<p>May also be specified as a config object to be passed to the constructor of <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a>\nto override any defaults. By default the Component passes its minimum and maximum size, and uses\n<code><a href=\"#/api/Ext.resizer.Resizer-cfg-dynamic\" rel=\"Ext.resizer.Resizer-cfg-dynamic\" class=\"docClass\">Ext.resizer.Resizer.dynamic</a>: false</code></p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 154,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-cfg-resizable",
      "shortDoc": "Specify as true to apply a Resizer to this Component\nafter rendering.\n\n\nMay also be specified as a config object to b..."
    },
    {
      "tagname": "cfg",
      "name": "resizeHandles",
      "member": "Ext.Component",
      "type": "String",
      "doc": "<p>A valid <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Ext.resizer.Resizer</a> handles config string (defaults to 'all').  Only applies when resizable = true.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 163,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-cfg-resizeHandles"
    },
    {
      "tagname": "cfg",
      "name": "saveBuffer",
      "member": "Ext.state.Stateful",
      "type": "Number",
      "doc": "<p>A buffer to be applied if many state events are fired within\na short period. Defaults to 100.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Stateful.js",
      "linenr": 74,
      "html_filename": "Stateful.html",
      "href": "Stateful.html#Ext-state-Stateful-cfg-saveBuffer"
    },
    {
      "tagname": "cfg",
      "name": "scope",
      "member": "Ext.form.field.Checkbox",
      "type": "Object",
      "doc": "<p>An object to use as the scope ('this' reference) of the <a href=\"#/api/Ext.form.field.Radio-cfg-handler\" rel=\"Ext.form.field.Radio-cfg-handler\" class=\"docClass\">handler</a> function\n(defaults to this Checkbox).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 194,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-cfg-scope"
    },
    {
      "tagname": "cfg",
      "name": "shadow",
      "member": "Ext.util.Floating",
      "type": "String/Boolean",
      "doc": "<p>Specifies whether the floating component should be given a shadow. Set to\n<tt>true</tt> to automatically create an <a href=\"#/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a>, or a string indicating the\nshadow's display <a href=\"#/api/Ext.Shadow-cfg-mode\" rel=\"Ext.Shadow-cfg-mode\" class=\"docClass\">Ext.Shadow.mode</a>. Set to <tt>false</tt> to disable the shadow.\n(Defaults to <tt>'sides'</tt>.)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 16,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-cfg-shadow",
      "shortDoc": "Specifies whether the floating component should be given a shadow. Set to\ntrue to automatically create an Ext.Shadow,..."
    },
    {
      "tagname": "cfg",
      "name": "stateEvents",
      "member": "Ext.state.Stateful",
      "type": "Array",
      "doc": "<p>An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). <code>stateEvents</code> may be any type\nof event supported by this object, including browser or custom events\n(e.g., <tt>['click', 'customerchange']</tt>).</p>\n\n\n<p>See <code><a href=\"#/api/Ext.form.field.Radio-cfg-stateful\" rel=\"Ext.form.field.Radio-cfg-stateful\" class=\"docClass\">stateful</a></code> for an explanation of saving and\nrestoring object state.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Stateful.js",
      "linenr": 64,
      "html_filename": "Stateful.html",
      "href": "Stateful.html#Ext-state-Stateful-cfg-stateEvents",
      "shortDoc": "An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). stateEvents may..."
    },
    {
      "tagname": "cfg",
      "name": "stateId",
      "member": "Ext.state.Stateful",
      "type": "String",
      "doc": "<p>The unique id for this object to use for state management purposes.</p>\n\n<p>See <a href=\"#/api/Ext.form.field.Radio-cfg-stateful\" rel=\"Ext.form.field.Radio-cfg-stateful\" class=\"docClass\">stateful</a> for an explanation of saving and restoring state.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Stateful.js",
      "linenr": 58,
      "html_filename": "Stateful.html",
      "href": "Stateful.html#Ext-state-Stateful-cfg-stateId",
      "shortDoc": "The unique id for this object to use for state management purposes.\n\nSee stateful for an explanation of saving and re..."
    },
    {
      "tagname": "cfg",
      "name": "stateful",
      "member": "Ext.state.Stateful",
      "type": "Boolean",
      "doc": "<p>A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. The object must have\na <code><a href=\"#/api/Ext.form.field.Radio-cfg-stateId\" rel=\"Ext.form.field.Radio-cfg-stateId\" class=\"docClass\">stateId</a></code> for state to be managed. \nAuto-generated ids are not guaranteed to be stable across page loads and \ncannot be relied upon to save and restore the same state for a object.<p>\n<p>For state saving to work, the state manager's provider must have been\nset to an implementation of <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> which overrides the\n<a href=\"#/api/Ext.state.Provider-method-set\" rel=\"Ext.state.Provider-method-set\" class=\"docClass\">set</a> and <a href=\"#/api/Ext.state.Provider-method-get\" rel=\"Ext.state.Provider-method-get\" class=\"docClass\">get</a>\nmethods to save and recall name/value pairs. A built-in implementation,\n<a href=\"#/api/Ext.state.CookieProvider\" rel=\"Ext.state.CookieProvider\" class=\"docClass\">Ext.state.CookieProvider</a> is available.</p>\n<p>To set the state provider for the current page:</p>\n<pre><code>Ext.state.Manager.setProvider(new Ext.state.CookieProvider({\n    expires: new Date(new Date().getTime()+(1000*60*60*24*7)), //7 days from now\n}));\n</code></pre>\n<p>A stateful object attempts to save state when one of the events\nlisted in the <code><a href=\"#/api/Ext.form.field.Radio-cfg-stateEvents\" rel=\"Ext.form.field.Radio-cfg-stateEvents\" class=\"docClass\">stateEvents</a></code> configuration fires.</p>\n<p>To save state, a stateful object first serializes its state by\ncalling <b><code><a href=\"#/api/Ext.form.field.Radio-method-getState\" rel=\"Ext.form.field.Radio-method-getState\" class=\"docClass\">getState</a></code></b>. By default, this function does\nnothing. The developer must provide an implementation which returns an\nobject hash which represents the restorable state of the object.</p>\n<p>The value yielded by getState is passed to <a href=\"#/api/Ext.state.Manager-method-set\" rel=\"Ext.state.Manager-method-set\" class=\"docClass\">Ext.state.Manager.set</a>\nwhich uses the configured <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> to save the object\nkeyed by the <code><a href=\"#/api/stateId\" rel=\"stateId\" class=\"docClass\">stateId</a></code></p>.\n<p>During construction, a stateful object attempts to <i>restore</i>\nits state by calling <a href=\"#/api/Ext.state.Manager-method-get\" rel=\"Ext.state.Manager-method-get\" class=\"docClass\">Ext.state.Manager.get</a> passing the\n<code><a href=\"#/api/Ext.form.field.Radio-cfg-stateId\" rel=\"Ext.form.field.Radio-cfg-stateId\" class=\"docClass\">stateId</a></code></p>\n<p>The resulting object is passed to <b><code><a href=\"#/api/Ext.form.field.Radio-method-applyState\" rel=\"Ext.form.field.Radio-method-applyState\" class=\"docClass\">applyState</a></code></b>.\nThe default implementation of <code><a href=\"#/api/Ext.form.field.Radio-method-applyState\" rel=\"Ext.form.field.Radio-method-applyState\" class=\"docClass\">applyState</a></code> simply copies\nproperties into the object, but a developer may override this to support\nmore behaviour.</p>\n<p>You can perform extra processing on state save and restore by attaching\nhandlers to the <a href=\"#/api/Ext.form.field.Radio-event-beforestaterestore\" rel=\"Ext.form.field.Radio-event-beforestaterestore\" class=\"docClass\">beforestaterestore</a>, <a href=\"#/api/Ext.form.field.Radio-event-staterestore\" rel=\"Ext.form.field.Radio-event-staterestore\" class=\"docClass\">staterestore</a>,\n<a href=\"#/api/Ext.form.field.Radio-event-beforestatesave\" rel=\"Ext.form.field.Radio-event-beforestatesave\" class=\"docClass\">beforestatesave</a> and <a href=\"#/api/Ext.form.field.Radio-event-statesave\" rel=\"Ext.form.field.Radio-event-statesave\" class=\"docClass\">statesave</a> events.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Stateful.js",
      "linenr": 18,
      "html_filename": "Stateful.html",
      "href": "Stateful.html#Ext-state-Stateful-cfg-stateful",
      "shortDoc": "A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. ..."
    },
    {
      "tagname": "cfg",
      "name": "style",
      "member": "Ext.AbstractComponent",
      "type": "String",
      "doc": "<p>A custom style specification to be applied to this component's Element.  Should be a valid argument to\n<a href=\"#/api/Ext.core.Element-method-applyStyles\" rel=\"Ext.core.Element-method-applyStyles\" class=\"docClass\">Ext.core.Element.applyStyles</a>.</p>\n\n<pre><code>        new Ext.panel.Panel({\n            title: 'Some Title',\n            renderTo: Ext.getBody(),\n            width: 400, height: 300,\n            layout: 'form',\n            items: [{\n                xtype: 'textarea',\n                style: {\n                    width: '95%',\n                    marginBottom: '10px'\n                }\n            },\n            new Ext.button.Button({\n                text: 'Send',\n                minWidth: '100',\n                style: {\n                    marginBottom: '10px'\n                }\n            })\n            ]\n        });\n     </code></pre>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 300,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-style",
      "shortDoc": "A custom style specification to be applied to this component's Element.  Should be a valid argument to\nExt.core.Eleme..."
    },
    {
      "tagname": "cfg",
      "name": "styleHtmlCls",
      "member": "Ext.AbstractComponent",
      "type": "String",
      "doc": "<p>The class that is added to the content target when you set styleHtmlContent to true.\nDefaults to 'x-html'</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 434,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlCls"
    },
    {
      "tagname": "cfg",
      "name": "styleHtmlContent",
      "member": "Ext.AbstractComponent",
      "type": "Boolean",
      "doc": "<p>True to automatically style the html inside the content target of this component (body for panels).\nDefaults to false.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 427,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlContent"
    },
    {
      "tagname": "cfg",
      "name": "submitValue",
      "member": "Ext.form.field.Field",
      "type": "Boolean",
      "doc": "<p>Setting this to <tt>false</tt> will prevent the field from being\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitted</a> even when it is not disabled. Defaults to <tt>true</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 49,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-cfg-submitValue"
    },
    {
      "tagname": "cfg",
      "name": "tabIndex",
      "member": "Ext.form.field.Base",
      "type": "Number",
      "doc": "<p>The tabIndex for this field. Note this only applies to fields that are rendered,\nnot those which are built via applyTo (defaults to undefined).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 129,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-cfg-tabIndex",
      "shortDoc": "The tabIndex for this field. Note this only applies to fields that are rendered,\nnot those which are built via applyT..."
    },
    {
      "tagname": "cfg",
      "name": "toFrontOnShow",
      "member": "Ext.Component",
      "type": "Boolean",
      "doc": "<p>True to automatically call <a href=\"#/api/Ext.form.field.Radio-method-toFront\" rel=\"Ext.form.field.Radio-method-toFront\" class=\"docClass\">toFront</a> when the <a href=\"#/api/Ext.form.field.Radio-event-show\" rel=\"Ext.form.field.Radio-event-show\" class=\"docClass\">show</a> method is called\non an already visible, floating component (default is <code>true</code>).</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 199,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-cfg-toFrontOnShow",
      "shortDoc": "True to automatically call toFront when the show method is called\non an already visible, floating component (default ..."
    },
    {
      "tagname": "cfg",
      "name": "tpl",
      "member": "Ext.AbstractComponent",
      "type": "Mixed",
      "doc": "<p>An <bold><a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></bold>, <bold><a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a></bold>\nor an array of strings to form an <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>.\nUsed in conjunction with the <code><a href=\"#/api/Ext.form.field.Radio-cfg-data\" rel=\"Ext.form.field.Radio-cfg-data\" class=\"docClass\">data</a></code> and\n<code><a href=\"#/api/Ext.form.field.Radio-cfg-tplWriteMode\" rel=\"Ext.form.field.Radio-cfg-tplWriteMode\" class=\"docClass\">tplWriteMode</a></code> configurations.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 231,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tpl",
      "shortDoc": "An Ext.Template, Ext.XTemplate\nor an array of strings to form an Ext.XTemplate.\nUsed in conjunction with the data and..."
    },
    {
      "tagname": "cfg",
      "name": "tplWriteMode",
      "member": "Ext.AbstractComponent",
      "type": "String",
      "doc": "<p>The Ext.(X)Template method to use when\nupdating the content area of the Component. Defaults to <code>'overwrite'</code>\n(see <code><a href=\"#/api/Ext.XTemplate-method-overwrite\" rel=\"Ext.XTemplate-method-overwrite\" class=\"docClass\">Ext.XTemplate.overwrite</a></code>).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 245,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tplWriteMode",
      "shortDoc": "The Ext.(X)Template method to use when\nupdating the content area of the Component. Defaults to 'overwrite'\n(see Ext.X..."
    },
    {
      "tagname": "cfg",
      "name": "ui",
      "member": "Ext.AbstractComponent",
      "type": "String/Array",
      "doc": "<p>A set style for a component. Can be a string or an Array of multiple strings (UIs)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 287,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-ui"
    },
    {
      "tagname": "cfg",
      "name": "uncheckedValue",
      "member": "Ext.form.field.Checkbox",
      "type": "String",
      "doc": "<p>If configured, this will be submitted as the checkbox's value during form\nsubmit if the checkbox is unchecked. By default this is undefined, which results in nothing being\nsubmitted for the checkbox field when the form is submitted (the default behavior of HTML checkboxes).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 179,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-cfg-uncheckedValue",
      "shortDoc": "If configured, this will be submitted as the checkbox's value during form\nsubmit if the checkbox is unchecked. By def..."
    },
    {
      "tagname": "cfg",
      "name": "validateOnBlur",
      "member": "Ext.form.field.Base",
      "type": "Boolean",
      "doc": "<p>Whether the field should validate when it loses focus (defaults to <tt>true</tt>). This will cause fields\nto be validated as the user steps through the fields in the form regardless of whether they are making\nchanges to those fields along the way. See also <a href=\"#/api/Ext.form.field.Radio-cfg-validateOnChange\" rel=\"Ext.form.field.Radio-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 216,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-cfg-validateOnBlur",
      "shortDoc": "Whether the field should validate when it loses focus (defaults to true). This will cause fields\nto be validated as t..."
    },
    {
      "tagname": "cfg",
      "name": "validateOnChange",
      "member": "Ext.form.field.Field",
      "type": "Boolean",
      "doc": "<p>Specifies whether this field should be validated immediately whenever a change in its value is detected.\nDefaults to <tt>true</tt>. If the validation results in a change in the field's validity, a\n<a href=\"#/api/Ext.form.field.Radio-event-validitychange\" rel=\"Ext.form.field.Radio-event-validitychange\" class=\"docClass\">validitychange</a> event will be fired. This allows the field to show feedback about the\nvalidity of its contents immediately as the user is typing.</p>\n\n\n<p>When set to <tt>false</tt>, feedback will not be immediate. However the form will still be validated\nbefore submitting if the <tt>clientValidation</tt> option to <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">Ext.form.Basic.doAction</a> is\nenabled, or if the field or form are validated manually.</p>\n\n\n<p>See also <a href=\"#/api/Ext.form.field.Base-cfg-checkChangeEvents\" rel=\"Ext.form.field.Base-cfg-checkChangeEvents\" class=\"docClass\">Ext.form.field.Base.checkChangeEvents</a>for controlling how changes to the field's value are detected.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 55,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-cfg-validateOnChange",
      "shortDoc": "Specifies whether this field should be validated immediately whenever a change in its value is detected.\nDefaults to ..."
    },
    {
      "tagname": "cfg",
      "name": "value",
      "member": "Ext.form.field.Field",
      "type": "Mixed",
      "doc": "<p>A value to initialize this field with (defaults to undefined).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 33,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-cfg-value"
    },
    {
      "tagname": "cfg",
      "name": "width",
      "member": "Ext.AbstractComponent",
      "type": "Number",
      "doc": "<p>The width of this component in pixels.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 329,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-width"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Radio",
      "member": "Ext.form.field.Radio",
      "doc": "<p>Creates a new Radio</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>Configuration options</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Radio.js",
      "linenr": 1,
      "html_filename": "Radio.html",
      "href": "Radio.html#Ext-form-field-Radio-method-constructor",
      "shortDoc": "<p>Creates a new Radio</p>\n"
    },
    {
      "tagname": "method",
      "name": "addClass",
      "member": "Ext.AbstractComponent",
      "doc": "<p>@deprecated 4.0 Replaced by <a href=\"#/api/Ext.form.field.Radio-method-addCls\" rel=\"Ext.form.field.Radio-method-addCls\" class=\"docClass\">addCls</a>\nAdds a CSS class to the top level element representing this component.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "cls",
          "doc": "<p>The CSS class name to add</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>Returns the Component to allow method chaining.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2161,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClass",
      "shortDoc": "<p>@deprecated 4.0 Replaced by <a href=\"#/api/Ext.form.field.Radio-method-addCls\" rel=\"Ext.form.field.Radio-method-addCls\" class=\"docClass\">addCls</a>\nAdds a CSS class to the top level element representing this component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addCls",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "cls",
          "doc": "<p>The CSS class name to add</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>Returns the Component to allow method chaining.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2139,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-addCls",
      "shortDoc": "<p>Adds a CSS class to the top level element representing this component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addClsWithUI",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Adds a cls to the uiCls array, which will also call <a href=\"#/api/Ext.form.field.Radio--addUIClsToElement\" rel=\"Ext.form.field.Radio--addUIClsToElement\" class=\"docClass\">addUIClsToElement</a> and adds\nto all elements of this component.</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "cls",
          "doc": "<p>A string or an array of strings to add to the uiCls</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1346,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClsWithUI",
      "shortDoc": "<p>Adds a cls to the uiCls array, which will also call <a href=\"#/api/Ext.form.field.Radio--addUIClsToElement\" rel=\"Ext.form.field.Radio--addUIClsToElement\" class=\"docClass\">addUIClsToElement</a> and adds\nto all elements of this component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
      "params": [
        {
          "type": "Object/String",
          "name": "o",
          "doc": "<p>Either an object with event names as properties with a value of <code>true</code>\nor the first event name string if multiple event names are being passed as separate parameters.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "",
          "doc": "<p>[additional] Optional additional event names if multiple event names are being passed as separate parameters.\nUsage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 452,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addEvents",
      "shortDoc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Appends an event handler to this object.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to listen for. May also be an object who's property names are event names. See</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The method the event invokes.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing handler configuration.\nproperties. This may contain any of the following properties:<ul>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></div></li>\n<li><b>delay</b> : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li><b>target</b> : Observable<div class=\"sub-desc\">Only call the handler if the event was fired on the target Observable, <i>not</i>\nif the event was bubbled up from a child Observable.</div></li>\n<li><b>element</b> : String<div class=\"sub-desc\"><b>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</b>\nThe name of a Component property which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which\nwill exist only after the Component is rendered. For example, to add a click listener to a Panel's body:\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></p>\n\n\n<p>When added in this way, the options available are the options applicable to <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a></p>\n\n\n<p></div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nUsing the options argument, it is possible to combine different types of listeners:<br>\n<br>\nA delayed, one-time listener.\n<pre><code>myPanel.on('hide', this.handleClick, this, {\nsingle: true,\ndelay: 100\n});</code></pre>\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple events. For example:\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>.\n<p>\n\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 271,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addListener",
      "shortDoc": "<p>Appends an event handler to this object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addManagedListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component\nis destroyed.\n\n",
      "params": [
        {
          "type": "Observable/Element",
          "name": "item",
          "doc": "<p>The item to which to add a listener/listeners.</p>\n",
          "optional": false
        },
        {
          "type": "Object/String",
          "name": "ename",
          "doc": "<p>The event name, or an object containing event name properties.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the handler function.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the scope (<code>this</code> reference) in which the handler function is executed.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "opt",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 155,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
      "shortDoc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component\nis destroyed.\n\n"
    },
    {
      "tagname": "method",
      "name": "addStateEvents",
      "member": "Ext.state.Stateful",
      "doc": "<p>Add events that will trigger the state to be saved.</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "events",
          "doc": "<p>The event name or an array of event names.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Stateful.js",
      "linenr": 159,
      "html_filename": "Stateful.html",
      "href": "Stateful.html#Ext-state-Stateful-method-addStateEvents",
      "shortDoc": "<p>Add events that will trigger the state to be saved.</p>\n"
    },
    {
      "tagname": "method",
      "name": "afterComponentLayout",
      "member": "Ext.AbstractComponent",
      "doc": "\n",
      "params": [
        {
          "type": "Number",
          "name": "adjWidth",
          "doc": "<p>The box-adjusted width that was set</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "adjHeight",
          "doc": "<p>The box-adjusted height that was set</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "isSetSize",
          "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
          "optional": false
        },
        {
          "type": "Ext.Component",
          "name": "layoutOwner",
          "doc": "<p>Component which sent the layout. Only used when isSetSize is false.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2481,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-afterComponentLayout",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "alignTo",
      "member": "Ext.util.Floating",
      "doc": "<p>Aligns this floating Component to the specified element</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "element",
          "doc": "<p>The element or <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> to align to. If passing a component, it must\nbe a omponent instance. If a string id is passed, it will be used as an element id.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "position",
          "doc": "<p>(optional, defaults to \"tl-bl?\") The position to align to (see <a href=\"#/api/Ext.core.Element-method-alignTo\" rel=\"Ext.core.Element-method-alignTo\" class=\"docClass\">Ext.core.Element.alignTo</a> for more details).</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "offsets",
          "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 171,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-method-alignTo",
      "shortDoc": "<p>Aligns this floating Component to the specified element</p>\n"
    },
    {
      "tagname": "method",
      "name": "animate",
      "member": "Ext.util.Animate",
      "doc": "<p>Perform custom animation on this object.<p>\n<p>This method is applicable to both the the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> class and the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> class.\nIt performs animated transitions of certain properties of this object over a specified timeline.</p>\n<p>The sole parameter is an object which specifies start property values, end property values, and properties which\ndescribe the timeline. Of the properties listed below, only <b><code>to</code></b> is mandatory.</p>\n<p>Properties include<ul>\n<li><code>from</code> <div class=\"sub-desc\">An object which specifies start values for the properties being animated.\nIf not supplied, properties are animated from current settings. The actual properties which may be animated depend upon\nths object being animated. See the sections below on Element and Component animation.<div></li>\n<li><code>to</code> <div class=\"sub-desc\">An object which specifies end values for the properties being animated.</div></li>\n<li><code>duration</code><div class=\"sub-desc\">The duration <b>in milliseconds</b> for which the animation will run.</div></li>\n<li><code>easing</code> <div class=\"sub-desc\">A string value describing an easing type to modify the rate of change from the default linear to non-linear. Values may be one of:<code><ul>\n<li>ease</li>\n<li>easeIn</li>\n<li>easeOut</li>\n<li>easeInOut</li>\n<li>backIn</li>\n<li>backOut</li>\n<li>elasticIn</li>\n<li>elasticOut</li>\n<li>bounceIn</li>\n<li>bounceOut</li>\n</ul></code></div></li>\n<li><code>keyframes</code> <div class=\"sub-desc\">This is an object which describes the state of animated properties at certain points along the timeline.\nit is an object containing properties who's names are the percentage along the timeline being described and who's values specify the animation state at that point.</div></li>\n<li><code>listeners</code> <div class=\"sub-desc\">This is a standard <a href=\"#/api/Ext.util.Observable-cfg-listeners\" rel=\"Ext.util.Observable-cfg-listeners\" class=\"docClass\">listeners</a> configuration object which may be used\nto inject behaviour at either the <code>beforeanimate</code> event or the <code>afteranimate</code> event.</div></li>\n</ul></p>\n<h3>Animating an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The element's CSS <code>left</code> value. Units must be supplied.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The element's CSS <code>top</code> value. Units must be supplied.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The element's CSS <code>width</code> value. Units must be supplied.</div></li>\n<li><code>height</code> <div class=\"sub-desc\">The element's CSS <code>height</code> value. Units must be supplied.</div></li>\n<li><code>scrollLeft</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>scrollTop</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>opacity</code> <div class=\"sub-desc\">The element's <code>opacity</code> value. This must be a value between <code>0</code> and <code>1</code>.</div></li>\n</ul>\n<p><b>Be aware than animating an Element which is being used by an <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> Component without in some way informing the Component about the changed element state\nwill result in incorrect Component behaviour. This is because the Component will be using the old state of the element. To avoid this problem, it is now possible to\ndirectly animate certain properties of Components.</b></p>\n<h3>Animating a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The Component's page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The Component's page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The Component's <code>left</code> value in pixels.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The Component's <code>top</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>dynamic</code> <div class=\"sub-desc\">Specify as true to update the Component's layout (if it is a Container) at every frame\nof the animation. <i>Use sparingly as laying out on every intermediate size change is an expensive operation</i>.</div></li>\n</ul>\n<p>For example, to animate a Window to a new size, ensuring that its internal layout, and any shadow is correct:</p>\n<pre><code>myWindow = Ext.create('Ext.window.Window', {\n    title: 'Test Component animation',\n    width: 500,\n    height: 300,\n    layout: {\n        type: 'hbox',\n        align: 'stretch'\n    },\n    items: [{\n        title: 'Left: 33%',\n        margins: '5 0 5 5',\n        flex: 1\n    }, {\n        title: 'Left: 66%',\n        margins: '5 5 5 5',\n        flex: 2\n    }]\n});\nmyWindow.show();\nmyWindow.header.el.on('click', function() {\n    myWindow.animate({\n        to: {\n            width: (myWindow.getWidth() == 500) ? 700 : 500,\n            height: (myWindow.getHeight() == 300) ? 400 : 300,\n        }\n    });\n});\n</code></pre>\n<p>For performance reasons, by default, the internal layout is only updated when the Window reaches its final <code>\"to\"</code> size. If dynamic updating of the Window's child\nComponents is required, then configure the animation with <code>dynamic: true</code> and the two child items will maintain their proportions during the animation.</p>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>An object containing properties which describe the animation's start and end states, and the timeline of the animation.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 207,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-animate",
      "shortDoc": "Perform custom animation on this object.\nThis method is applicable to both the the Component class and the Element cl..."
    },
    {
      "tagname": "method",
      "name": "applyState",
      "member": "Ext.state.Stateful",
      "doc": "<p>Applies the state to the object. This should be overridden in subclasses to do\nmore complex state operations. By default it applies the state properties onto\nthe current object.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "state",
          "doc": "<p>The state</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Stateful.js",
      "linenr": 225,
      "html_filename": "Stateful.html",
      "href": "Stateful.html#Ext-state-Stateful-method-applyState",
      "shortDoc": "Applies the state to the object. This should be overridden in subclasses to do\nmore complex state operations. By defa..."
    },
    {
      "tagname": "method",
      "name": "batchChanges",
      "member": "Ext.form.field.Field",
      "doc": "<p>A utility for grouping a set of modifications which may trigger value changes into a single\ntransaction, to prevent excessive firing of <a href=\"#/api/Ext.form.field.Radio-event-change\" rel=\"Ext.form.field.Radio-event-change\" class=\"docClass\">change</a> events. This is useful for instance\nif the field has sub-fields which are being updated as a group; you don't want the container\nfield to check its own changed state for each subfield change.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "fn",
          "doc": "<p>A function containing the transaction code</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 348,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-batchChanges",
      "shortDoc": "A utility for grouping a set of modifications which may trigger value changes into a single\ntransaction, to prevent e..."
    },
    {
      "tagname": "method",
      "name": "beforeComponentLayout",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Occurs before componentLayout is run. Returning false from this method will prevent the componentLayout\nfrom being executed.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "adjWidth",
          "doc": "<p>The box-adjusted width that was set</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "adjHeight",
          "doc": "<p>The box-adjusted height that was set</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "isSetSize",
          "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
          "optional": false
        },
        {
          "type": "Ext.Component",
          "name": "layoutOwner",
          "doc": "<p>Component which sent the layout. Only used when isSetSize is false.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2491,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-beforeComponentLayout",
      "shortDoc": "Occurs before componentLayout is run. Returning false from this method will prevent the componentLayout\nfrom being ex..."
    },
    {
      "tagname": "method",
      "name": "bubble",
      "member": "Ext.Component",
      "doc": "<p>Bubbles up the component/container heirarchy, calling the specified function with each component. The scope (<i>this</i>) of\nfunction call will be the scope provided or the current component. The arguments to the function\nwill be the args provided or the current component. If the function returns false at any point,\nthe bubble is stopped.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope of the function (defaults to current node)</p>\n",
          "optional": true
        },
        {
          "type": "Array",
          "name": "args",
          "doc": "<p>(optional) The args to call the function with (default to passing the current component)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 1004,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-bubble",
      "shortDoc": "Bubbles up the component/container heirarchy, calling the specified function with each component. The scope (this) of..."
    },
    {
      "tagname": "method",
      "name": "capture",
      "member": "Ext.util.Observable",
      "doc": "<p>Starts capture on the specified Observable. All events will be passed\nto the supplied function with the event name + standard signature of the event\n<b>before</b> the event is fired. If the supplied function returns false,\nthe event will not fire.</p>\n",
      "params": [
        {
          "type": "Observable",
          "name": "o",
          "doc": "<p>The Observable to capture events from.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call when an event is fired.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Observable firing the event.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 55,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-capture",
      "shortDoc": "Starts capture on the specified Observable. All events will be passed\nto the supplied function with the event name + ..."
    },
    {
      "tagname": "method",
      "name": "center",
      "member": "Ext.util.Floating",
      "doc": "<p>Center this Component in its container.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 249,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-method-center",
      "shortDoc": "<p>Center this Component in its container.</p>\n"
    },
    {
      "tagname": "method",
      "name": "checkChange",
      "member": "Ext.form.field.Field",
      "doc": "<p>Checks whether the value of the field has changed since the last time it was checked. If the value\nhas changed, it:</p>\n\n\n<ol>\n<li>Fires the <a href=\"#/api/Ext.form.field.Radio-event-change\" rel=\"Ext.form.field.Radio-event-change\" class=\"docClass\">change event</a>,</li>\n<li>Performs validation if the <a href=\"#/api/Ext.form.field.Radio-cfg-validateOnChange\" rel=\"Ext.form.field.Radio-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a> config is enabled, firing the\n<a href=\"#/api/Ext.form.field.Radio--validationchange\" rel=\"Ext.form.field.Radio--validationchange\" class=\"docClass\">validationchange event</a> if the validity has changed, and</li>\n<li>Checks the <a href=\"#/api/Ext.form.field.Radio-method-isDirty\" rel=\"Ext.form.field.Radio-method-isDirty\" class=\"docClass\">dirty state</a> of the field and fires the <a href=\"#/api/Ext.form.field.Radio-event-dirtychange\" rel=\"Ext.form.field.Radio-event-dirtychange\" class=\"docClass\">dirtychange event</a>\nif it has changed.</li>\n</ol>\n\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 235,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-checkChange",
      "shortDoc": "Checks whether the value of the field has changed since the last time it was checked. If the value\nhas changed, it:\n\n..."
    },
    {
      "tagname": "method",
      "name": "checkDirty",
      "member": "Ext.form.field.Field",
      "doc": "<p>Checks the <a href=\"#/api/Ext.form.field.Radio-method-isDirty\" rel=\"Ext.form.field.Radio-method-isDirty\" class=\"docClass\">isDirty</a> state of the field and if it has changed since the last time\nit was checked, fires the <a href=\"#/api/Ext.form.field.Radio-event-dirtychange\" rel=\"Ext.form.field.Radio-event-dirtychange\" class=\"docClass\">dirtychange</a> event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 286,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-checkDirty",
      "shortDoc": "Checks the isDirty state of the field and if it has changed since the last time\nit was checked, fires the dirtychange..."
    },
    {
      "tagname": "method",
      "name": "clearInvalid",
      "member": "Ext.form.field.Base",
      "doc": "<p>Clear any invalid styles/messages for this field.</p>\n\n\n<p><b>Note</b>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.Radio-method-validate\" rel=\"Ext.form.field.Radio-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.Radio-method-isValid\" rel=\"Ext.form.field.Radio-method-isValid\" class=\"docClass\">isValid</a> methods to\nreturn <code>true</code> if the value does not <i>pass</i> validation. So simply clearing a field's errors\nwill not necessarily allow submission of forms submitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a>\noption set.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 745,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-method-clearInvalid",
      "shortDoc": "Clear any invalid styles/messages for this field.\n\n\nNote: this method does not cause the Field's validate or isValid ..."
    },
    {
      "tagname": "method",
      "name": "clearListeners",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 383,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-clearListeners",
      "shortDoc": "<p>Removes all listeners for this object including the managed listeners</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearManagedListeners",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes all managed listeners for this object.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 412,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
      "shortDoc": "<p>Removes all managed listeners for this object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "cloneConfig",
      "member": "Ext.Component",
      "doc": "<p>Clone the current component using the original config values passed into this instance by default.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "overrides",
          "doc": "<p>A new config containing any properties to override in the cloned version.\nAn id property can be passed on this object, otherwise one will be generated to avoid duplicates.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>clone The cloned copy of this component</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 944,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-cloneConfig",
      "shortDoc": "<p>Clone the current component using the original config values passed into this instance by default.</p>\n"
    },
    {
      "tagname": "method",
      "name": "destroy",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Destroys the Component.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2672,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-destroy",
      "shortDoc": "<p>Destroys the Component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "disable",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Disable the component.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "silent",
          "doc": "<p>Passing true, will supress the 'disable' event from being fired.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2078,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-disable",
      "shortDoc": "<p>Disable the component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "doAutoRender",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Handles autoRender.\nFloating Components may have an ownerCt. If they are asking to be constrained, constrain them within that\nownerCt, and have their z-index managed locally. Floating Components are always rendered to document.body</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 816,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-doAutoRender",
      "shortDoc": "Handles autoRender.\nFloating Components may have an ownerCt. If they are asking to be constrained, constrain them wit..."
    },
    {
      "tagname": "method",
      "name": "doComponentLayout",
      "member": "Ext.AbstractComponent",
      "doc": "<p>This method needs to be called whenever you change something on this component that requires the Component's\nlayout to be recalculated.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "width",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "height",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "isSetSize",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "ownerCt",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.container.Container",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2437,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-doComponentLayout",
      "shortDoc": "This method needs to be called whenever you change something on this component that requires the Component's\nlayout t..."
    },
    {
      "tagname": "method",
      "name": "doConstrain",
      "member": "Ext.util.Floating",
      "doc": "<p>Moves this floating Component into a constrain region.</p>\n\n\n<p>By default, this Component is constrained to be within the container it was added to, or the element\nit was rendered to.</p>\n\n\n<p>An alternative constraint may be passed.</p>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "constrainTo",
          "doc": "<p>Optional. The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this Component is to be constrained.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 133,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-method-doConstrain",
      "shortDoc": "Moves this floating Component into a constrain region.\n\n\nBy default, this Component is constrained to be within the c..."
    },
    {
      "tagname": "method",
      "name": "enable",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Enable the component</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "silent",
          "doc": "<p>Passing false will supress the 'enable' event from being fired.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2055,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-enable",
      "shortDoc": "<p>Enable the component</p>\n"
    },
    {
      "tagname": "method",
      "name": "enableBubble",
      "member": "Ext.util.Observable",
      "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling\n<code>this.getBubbleTarget()</code> if present. There is no implementation in the Observable base class.</p>\n\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers. See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default\nimplementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the Component's immediate owner. But if a known target is required, this can be overridden to\naccess the required target more quickly.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n//  Add functionality to Field&#39;s initComponent to enable the change event to bubble\ninitComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n    this.enableBubble('change');\n}),\n\n//  We know that we want Field&#39;s events to bubble directly to the FormPanel.\ngetBubbleTarget : function() {\n    if (!this.formPanel) {\n        this.formPanel = this.findParentByType('form');\n    }\n    return this.formPanel;\n}\n});\n\nvar myForm = new Ext.formPanel({\ntitle: 'User Details',\nitems: [{\n    ...\n}],\nlisteners: {\n    change: function() {\n        // Title goes red if form has been modified.\n        myForm.header.setStyle('color', 'red');\n    }\n}\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "String/Array",
          "name": "events",
          "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 554,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-enableBubble",
      "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling\nthis.getBubbleTarget() if present...."
    },
    {
      "tagname": "method",
      "name": "extractFileInput",
      "member": "Ext.form.field.Field",
      "doc": "<p>Only relevant if the instance's <a href=\"#/api/Ext.form.field.Radio-method-isFileUpload\" rel=\"Ext.form.field.Radio-method-isFileUpload\" class=\"docClass\">isFileUpload</a> method returns true. Returns a reference\nto the file input DOM element holding the user's selected file. The input will be appended into\nthe submission form and will not be returned, so this method should also create a replacement.</p>\n",
      "params": [

      ],
      "return": {
        "type": "HTMLInputElement",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 373,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-extractFileInput",
      "shortDoc": "Only relevant if the instance's isFileUpload method returns true. Returns a reference\nto the file input DOM element h..."
    },
    {
      "tagname": "method",
      "name": "findLayoutController",
      "member": "Ext.AbstractComponent",
      "doc": "<p>This method finds the topmost active layout who's processing will eventually determine the size and position of this\nComponent.<p>\n<p>This method is useful when dynamically adding Components into Containers, and some processing must take place after the\nfinal sizing and positioning of the Component has been performed.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 772,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-findLayoutController",
      "shortDoc": "This method finds the topmost active layout who's processing will eventually determine the size and position of this\n..."
    },
    {
      "tagname": "method",
      "name": "findParentBy",
      "member": "Ext.Component",
      "doc": "<p>Find a container above this component at any level by a custom function. If the passed function returns\ntrue, the container will be returned.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The custom function to call with the arguments (container, this component).</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.container.Container",
        "doc": "<p>The first Container for which the custom function returns true</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 975,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-findParentBy",
      "shortDoc": "Find a container above this component at any level by a custom function. If the passed function returns\ntrue, the con..."
    },
    {
      "tagname": "method",
      "name": "findParentByType",
      "member": "Ext.Component",
      "doc": "<p>Find a container above this component at any level by xtype or class</p>\n\n\n<p>See also the <a href=\"#/api/Ext.Component-method-up\" rel=\"Ext.Component-method-up\" class=\"docClass\">up</a> method.</p>\n\n",
      "params": [
        {
          "type": "String/Class",
          "name": "xtype",
          "doc": "<p>The xtype string for a component, or the class of the component directly</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.container.Container",
        "doc": "<p>The first Container which matches the given xtype or class</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 989,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-findParentByType",
      "shortDoc": "<p>Find a container above this component at any level by xtype or class</p>\n\n\n<p>See also the <a href=\"#/api/Ext.Component-method-up\" rel=\"Ext.Component-method-up\" class=\"docClass\">up</a> method.</p>\n\n"
    },
    {
      "tagname": "method",
      "name": "fireEvent",
      "member": "Ext.util.Observable",
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.form.field.Radio-method-enableBubble\" rel=\"Ext.form.field.Radio-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to fire.</p>\n",
          "optional": false
        },
        {
          "type": "Object...",
          "name": "args",
          "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 232,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-fireEvent",
      "shortDoc": "Fires the specified event with the passed parameters (minus the event name).\n\n\nAn event may be set to bubble up an Ob..."
    },
    {
      "tagname": "method",
      "name": "focus",
      "member": "Ext.Component",
      "doc": "<p>Try to focus this component.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "selectText",
          "doc": "<p>(optional) If applicable, true to also select the text in this component</p>\n",
          "optional": true
        },
        {
          "type": "Boolean/Number",
          "name": "delay",
          "doc": "<p>(optional) Delay the focus this number of milliseconds (true for 10 milliseconds).</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 853,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-focus",
      "shortDoc": "<p>Try to focus this component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getActiveAnimation",
      "member": "Ext.util.Animate",
      "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>anim if element has active effects, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 377,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-getActiveAnimation",
      "shortDoc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getActiveError",
      "member": "Ext.form.Labelable",
      "doc": "<p>Gets the active error message for this component, if any. This does not trigger\nvalidation on its own, it merely returns any message that the component may already hold.</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>The active error message on the component; if there is no error, an empty string is returned.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 330,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-getActiveError",
      "shortDoc": "Gets the active error message for this component, if any. This does not trigger\nvalidation on its own, it merely retu..."
    },
    {
      "tagname": "method",
      "name": "getActiveErrors",
      "member": "Ext.form.Labelable",
      "doc": "<p>Gets an Array of any active error messages currently applied to the field. This does not trigger\nvalidation on its own, it merely returns any messages that the component may already hold.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "<p>The active error messages on the component; if there are no errors, an empty Array is returned.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 360,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-getActiveErrors",
      "shortDoc": "Gets an Array of any active error messages currently applied to the field. This does not trigger\nvalidation on its ow..."
    },
    {
      "tagname": "method",
      "name": "getBox",
      "member": "Ext.Component",
      "doc": "<p>Gets the current box measurements of the component's underlying element.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "local",
          "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>box An object in the format {x, y, width, height}</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 538,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-getBox",
      "shortDoc": "<p>Gets the current box measurements of the component's underlying element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getBubbleTarget",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.container.Container",
        "doc": "<p>the Container which owns this Component.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2276,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-getBubbleTarget",
      "shortDoc": "<p>Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getEl",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Retrieves the top level element representing this component.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1892,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-getEl",
      "shortDoc": "<p>Retrieves the top level element representing this component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getErrors",
      "member": "Ext.form.field.Field",
      "doc": "<p>Runs this field's validators and returns an array of error messages for any validation failures.\nThis is called internally during validation and would not usually need to be used manually.</p>\n\n\n<p>Each subclass should override or augment the return value to provide their own errors.</p>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to get errors for (defaults to the current field value)</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>All error messages for this field; an empty Array if none.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 306,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-getErrors",
      "shortDoc": "Runs this field's validators and returns an array of error messages for any validation failures.\nThis is called inter..."
    },
    {
      "tagname": "method",
      "name": "getFieldLabel",
      "member": "Ext.form.Labelable",
      "doc": "<p>Returns the label for the field. Defaults to simply returning the <a href=\"#/api/Ext.form.field.Radio-cfg-fieldLabel\" rel=\"Ext.form.field.Radio-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> config. Can be\noverridden to provide</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>The configured field label, or empty string if not defined</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 232,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-getFieldLabel",
      "shortDoc": "<p>Returns the label for the field. Defaults to simply returning the <a href=\"#/api/Ext.form.field.Radio-cfg-fieldLabel\" rel=\"Ext.form.field.Radio-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> config. Can be\noverridden to provide</p>\n"
    },
    {
      "tagname": "method",
      "name": "getGroupValue",
      "member": "Ext.form.field.Radio",
      "doc": "<p>If this radio is part of a group, it will return the selected value</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Radio.js",
      "linenr": 195,
      "html_filename": "Radio.html",
      "href": "Radio.html#Ext-form-field-Radio-method-getGroupValue",
      "shortDoc": "<p>If this radio is part of a group, it will return the selected value</p>\n"
    },
    {
      "tagname": "method",
      "name": "getHeight",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Gets the current height of the component's underlying element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2579,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-getHeight",
      "shortDoc": "<p>Gets the current height of the component's underlying element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getId",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Retrieves the id of this component.\nWill autogenerate an id if one has not already been set.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1880,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-getId",
      "shortDoc": "<p>Retrieves the id of this component.\nWill autogenerate an id if one has not already been set.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getInputId",
      "member": "Ext.form.field.Base",
      "doc": "<p>Returns the input id for this field. If none was specified via the <a href=\"#/api/Ext.form.field.Radio-cfg-inputId\" rel=\"Ext.form.field.Radio-cfg-inputId\" class=\"docClass\">inputId</a> config,\nthen an id will be automatically generated.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 298,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-method-getInputId",
      "shortDoc": "Returns the input id for this field. If none was specified via the inputId config,\nthen an id will be automatically g..."
    },
    {
      "tagname": "method",
      "name": "getInsertPosition",
      "member": "Ext.AbstractComponent",
      "doc": "<p>This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insertBefore.</p>\n",
      "params": [
        {
          "type": "String/Number/Element/HTMLElement",
          "name": "position",
          "doc": "<p>Index, element id or element you want\nto put this component before.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "HTMLElement",
        "doc": "<p>DOM element that you can use in the insertBefore</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1513,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-getInsertPosition",
      "shortDoc": "This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insert..."
    },
    {
      "tagname": "method",
      "name": "getLoader",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Gets the <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> for this Component.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.ComponentLoader",
        "doc": "<p>The loader instance, null if it doesn't exist.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2587,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-getLoader",
      "shortDoc": "<p>Gets the <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> for this Component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getModelData",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns the value(s) that should be saved to the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance for this field, when\n<a href=\"#/api/Ext.form.Basic-method-updateRecord\" rel=\"Ext.form.Basic-method-updateRecord\" class=\"docClass\">Ext.form.Basic.updateRecord</a> is called. Typically this will be an object with a single name-value\npair, the name being this field's <a href=\"#/api/Ext.form.field.Radio-method-getName\" rel=\"Ext.form.field.Radio-method-getName\" class=\"docClass\">name</a> and the value being its current data value. More\nadvanced field implementations may return more than one name-value pair. The returned values will be\nsaved to the corresponding field names in the Model.</p>\n\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully\n<a href=\"#/api/Ext.form.field.Radio-method-validate\" rel=\"Ext.form.field.Radio-method-validate\" class=\"docClass\">validated</a>.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>A mapping of submit parameter names to values; each value should be a string, or an array\nof strings if that particular name has multiple values. It can also return <tt>null</tt> if there are no\nparameters to be submitted.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 190,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-getModelData",
      "shortDoc": "Returns the value(s) that should be saved to the Ext.data.Model instance for this field, when\nExt.form.Basic.updateRe..."
    },
    {
      "tagname": "method",
      "name": "getName",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns the <a href=\"#/api/Ext.form.field.Field-cfg-name\" rel=\"Ext.form.field.Field-cfg-name\" class=\"docClass\">name</a> attribute of the field. This is used as the parameter\nname when including the field value in a <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit()</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>name The field <a href=\"#/api/Ext.form.field.Field-cfg-name\" rel=\"Ext.form.field.Field-cfg-name\" class=\"docClass\">name</a></p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 128,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-getName",
      "shortDoc": "Returns the name attribute of the field. This is used as the parameter\nname when including the field value in a form ..."
    },
    {
      "tagname": "method",
      "name": "getPlugin",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Retrieves a plugin by its pluginId which has been bound to this\ncomponent.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "pluginId",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.AbstractPlugin",
        "doc": "<p>pluginInstance</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2715,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-getPlugin",
      "shortDoc": "<p>Retrieves a plugin by its pluginId which has been bound to this\ncomponent.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getPosition",
      "member": "Ext.Component",
      "doc": "<p>Gets the current XY position of the component's underlying element.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "local",
          "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The XY position of the element (e.g., [100, 200])</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 603,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-getPosition",
      "shortDoc": "<p>Gets the current XY position of the component's underlying element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getRawValue",
      "member": "Ext.form.field.Checkbox",
      "doc": "<p>Returns the checked state of the checkbox.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if checked, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 266,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-method-getRawValue",
      "shortDoc": "<p>Returns the checked state of the checkbox.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getSize",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Gets the current size of the component's underlying element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2563,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-getSize",
      "shortDoc": "<p>Gets the current size of the component's underlying element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getState",
      "member": "Ext.state.Stateful",
      "doc": "<p>Gets the current state of the object. By default this function returns null,\nit should be overridden in subclasses to implement methods for getting the state.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>The current state</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Stateful.js",
      "linenr": 216,
      "html_filename": "Stateful.html",
      "href": "Stateful.html#Ext-state-Stateful-method-getState",
      "shortDoc": "Gets the current state of the object. By default this function returns null,\nit should be overridden in subclasses to..."
    },
    {
      "tagname": "method",
      "name": "getStateId",
      "member": "Ext.state.Stateful",
      "doc": "<p>Gets the state id for this object.</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>The state id, null if not found.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Stateful.js",
      "linenr": 237,
      "html_filename": "Stateful.html",
      "href": "Stateful.html#Ext-state-Stateful-method-getStateId",
      "shortDoc": "<p>Gets the state id for this object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getSubmitData",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns the parameter(s) that would be included in a standard form submit for this field. Typically this\nwill be an object with a single name-value pair, the name being this field's <a href=\"#/api/Ext.form.field.Radio-method-getName\" rel=\"Ext.form.field.Radio-method-getName\" class=\"docClass\">name</a> and the\nvalue being its current stringified value. More advanced field implementations may return more than one\nname-value pair.</p>\n\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully\n<a href=\"#/api/Ext.form.field.Radio-method-validate\" rel=\"Ext.form.field.Radio-method-validate\" class=\"docClass\">validated</a>.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>A mapping of submit parameter names to values; each value should be a string, or an array\nof strings if that particular name has multiple values. It can also return <tt>null</tt> if there are no\nparameters to be submitted.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 169,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-getSubmitData",
      "shortDoc": "Returns the parameter(s) that would be included in a standard form submit for this field. Typically this\nwill be an o..."
    },
    {
      "tagname": "method",
      "name": "getSubmitValue",
      "member": "Ext.form.field.Radio",
      "doc": "<p>Returns the submit value for the checkbox which can be used when submitting forms.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean/null",
        "doc": "<p>True if checked, null if not.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Radio.js",
      "linenr": 235,
      "html_filename": "Radio.html",
      "href": "Radio.html#Ext-form-field-Radio-method-getSubmitValue",
      "shortDoc": "<p>Returns the submit value for the checkbox which can be used when submitting forms.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getValue",
      "member": "Ext.form.field.Checkbox",
      "doc": "<p>Returns the checked state of the checkbox.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if checked, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 274,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-method-getValue",
      "shortDoc": "<p>Returns the checked state of the checkbox.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getWidth",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Gets the current width of the component's underlying element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2571,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-getWidth",
      "shortDoc": "<p>Gets the current width of the component's underlying element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getXType",
      "member": "Ext.Component",
      "doc": "<p>Gets the xtype for this component as registered with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a>. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header. Example usage:</p>\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXType());  // alerts 'textfield'\n</code></pre>\n\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>The xtype</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 962,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-getXType",
      "shortDoc": "Gets the xtype for this component as registered with Ext.ComponentManager. For a list of all\navailable xtypes, see th..."
    },
    {
      "tagname": "method",
      "name": "getXTypes",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXTypes());  // alerts 'component/field/textfield'\n</code></pre>\n\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>The xtype hierarchy string</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1938,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-getXTypes",
      "shortDoc": "Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all\navailable xtypes, see the Ext..."
    },
    {
      "tagname": "method",
      "name": "hasActiveError",
      "member": "Ext.form.Labelable",
      "doc": "<p>Tells whether the field currently has an active error message. This does not trigger\nvalidation on its own, it merely looks for any message that the component may already hold.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 339,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-hasActiveError",
      "shortDoc": "Tells whether the field currently has an active error message. This does not trigger\nvalidation on its own, it merely..."
    },
    {
      "tagname": "method",
      "name": "hasActiveFx",
      "member": "Ext.util.Animate",
      "doc": "<p>@deprecated 4.0 Replaced by <a href=\"#/api/Ext.form.field.Radio-method-getActiveAnimation\" rel=\"Ext.form.field.Radio-method-getActiveAnimation\" class=\"docClass\">getActiveAnimation</a>\nReturns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>anim if element has active effects, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 369,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-hasActiveFx",
      "shortDoc": "@deprecated 4.0 Replaced by getActiveAnimation\nReturns thq current animation if this object has any effects actively ..."
    },
    {
      "tagname": "method",
      "name": "hasListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to check for</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the event is being listened for, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 480,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-hasListener",
      "shortDoc": "<p>Checks to see if this object has any listeners for a specified event</p>\n"
    },
    {
      "tagname": "method",
      "name": "hasUICls",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Checks if there is currently a specified uiCls</p>\n",
      "params": [
        {
          "type": "String",
          "name": "cls",
          "doc": "<p>The cls to check</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1389,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-hasUICls",
      "shortDoc": "<p>Checks if there is currently a specified uiCls</p>\n"
    },
    {
      "tagname": "method",
      "name": "hide",
      "member": "Ext.Component",
      "doc": "<p>Hides this Component, setting it to invisible using the configured <a href=\"#/api/Ext.form.field.Radio-cfg-hideMode\" rel=\"Ext.form.field.Radio-cfg-hideMode\" class=\"docClass\">hideMode</a>.</p>\n",
      "params": [
        {
          "type": "String/Element/Component",
          "name": "animateTarget",
          "doc": "<p>Optional, and <b>only valid for <a href=\"#/api/Ext.form.field.Radio-cfg-floating\" rel=\"Ext.form.field.Radio-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b>.\nThe target to which the Component should animate while hiding (defaults to null with no animation)</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>(optional) A callback function to call after the Component is hidden.</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 748,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-hide",
      "shortDoc": "<p>Hides this Component, setting it to invisible using the configured <a href=\"#/api/Ext.form.field.Radio-cfg-hideMode\" rel=\"Ext.form.field.Radio-cfg-hideMode\" class=\"docClass\">hideMode</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "initField",
      "member": "Ext.form.field.Field",
      "doc": "<p>Initializes this Field mixin on the current instance. Components using this mixin should call\nthis method during their own initialization process.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 73,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-initField",
      "shortDoc": "Initializes this Field mixin on the current instance. Components using this mixin should call\nthis method during thei..."
    },
    {
      "tagname": "method",
      "name": "initLabelable",
      "member": "Ext.form.Labelable",
      "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own initialization.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 214,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-initLabelable",
      "shortDoc": "Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own in..."
    },
    {
      "tagname": "method",
      "name": "is",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Tests whether this Component matches the selector string.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>The selector string to test against.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if this Component matches the selector.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1719,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-is",
      "shortDoc": "<p>Tests whether this Component matches the selector string.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isDescendantOf",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Determines whether this component is the descendant of a particular container.</p>\n",
      "params": [
        {
          "type": "Ext.Container",
          "name": "container",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>isDescendant</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2731,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDescendantOf",
      "shortDoc": "<p>Determines whether this component is the descendant of a particular container.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isDirty",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns true if the value of this Field has been changed from its <a href=\"#/api/Ext.form.field.Radio-property-originalValue\" rel=\"Ext.form.field.Radio-property-originalValue\" class=\"docClass\">originalValue</a>.\nWill always return false if the field is disabled.</p>\n\n\n<p>Note that if the owning <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">form</a> was configured with\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>\nthen the <a href=\"#/api/Ext.form.field.Radio-property-originalValue\" rel=\"Ext.form.field.Radio-property-originalValue\" class=\"docClass\">originalValue</a> is updated when the values are loaded by\n<a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a>.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if this field has been changed from its original value (and\nis not disabled), false otherwise.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 271,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-isDirty",
      "shortDoc": "Returns true if the value of this Field has been changed from its originalValue.\nWill always return false if the fiel..."
    },
    {
      "tagname": "method",
      "name": "isDisabled",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Method to determine whether this Component is currently disabled.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>the disabled state of this Component.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2115,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDisabled",
      "shortDoc": "<p>Method to determine whether this Component is currently disabled.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isDraggable",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Method to determine whether this Component is draggable.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>the draggable state of this component.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2292,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDraggable",
      "shortDoc": "<p>Method to determine whether this Component is draggable.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isDroppable",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Method to determine whether this Component is droppable.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>the droppable state of this component.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2300,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDroppable",
      "shortDoc": "<p>Method to determine whether this Component is droppable.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isEqual",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns whether two field <a href=\"#/api/Ext.form.field.Radio-method-getValue\" rel=\"Ext.form.field.Radio-method-getValue\" class=\"docClass\">values</a> are logically equal. Field implementations may override\nthis to provide custom comparison logic appropriate for the particular field's data type.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value1",
          "doc": "<p>The first value to compare</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "value2",
          "doc": "<p>The second value to compare</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the values are equal, false if inequal.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 158,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-isEqual",
      "shortDoc": "Returns whether two field values are logically equal. Field implementations may override\nthis to provide custom compa..."
    },
    {
      "tagname": "method",
      "name": "isFileUpload",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns whether this Field is a file upload field; if it returns true, forms will use\nspecial techniques for <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitting the form</a> via AJAX. See\n<a href=\"#/api/Ext.form.Basic-method-hasUpload\" rel=\"Ext.form.Basic-method-hasUpload\" class=\"docClass\">Ext.form.Basic.hasUpload</a> for details. If this returns true, the <a href=\"#/api/Ext.form.field.Radio-method-extractFileInput\" rel=\"Ext.form.field.Radio-method-extractFileInput\" class=\"docClass\">extractFileInput</a>\nmethod must also be implemented to return the corresponding file input element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 362,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-isFileUpload",
      "shortDoc": "Returns whether this Field is a file upload field; if it returns true, forms will use\nspecial techniques for submitti..."
    },
    {
      "tagname": "method",
      "name": "isFloating",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Method to determine whether this Component is floating.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>the floating state of this component.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2284,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-isFloating",
      "shortDoc": "<p>Method to determine whether this Component is floating.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isHidden",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Method to determine whether this Component is currently set to hidden.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>the hidden state of this Component.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2131,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-isHidden",
      "shortDoc": "<p>Method to determine whether this Component is currently set to hidden.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isValid",
      "member": "Ext.form.field.Base",
      "doc": "<p>Returns whether or not the field value is currently valid by\n<a href=\"#/api/Ext.form.field.Radio-method-getErrors\" rel=\"Ext.form.field.Radio-method-getErrors\" class=\"docClass\">validating</a> the <a href=\"#/api/Ext.form.field.Radio-method-processRawValue\" rel=\"Ext.form.field.Radio-method-processRawValue\" class=\"docClass\">processed raw value</a>\nof the field. <b>Note</b>: <a href=\"#/api/Ext.form.field.Radio-cfg-disabled\" rel=\"Ext.form.field.Radio-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the value is valid, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 691,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-method-isValid",
      "shortDoc": "Returns whether or not the field value is currently valid by\nvalidating the processed raw value\nof the field. Note: d..."
    },
    {
      "tagname": "method",
      "name": "isVisible",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Returns true if this component is visible.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "deep",
          "doc": "<p>. <p>Optional. Pass <code>true</code> to interrogate the visibility status of all\nparent Containers to determine whether this Component is truly visible to the user.</p></p>\n\n<p>Generally, to determine whether a Component is hidden, the no argument form is needed. For example\nwhen creating dynamically laid out UIs in a hidden Container before showing them.</p>\n\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if this component is visible, false otherwise.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2015,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-isVisible",
      "shortDoc": "<p>Returns true if this component is visible.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isXType",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended\nfrom the xtype (default) or whether it is directly of the xtype specified (shallow = true).</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>For a list of all available xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nvar isText = t.isXType('textfield');        // true\nvar isBoxSubclass = t.isXType('field');       // true, descended from <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>\nvar isBoxInstance = t.isXType('field', true); // false, not a direct <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> instance\n</code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "xtype",
          "doc": "<p>The xtype to check for this Component</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "shallow",
          "doc": "<p>(optional) False to check whether this Component is descended from the xtype (this is\nthe default), or true to check whether this Component is directly of the specified xtype.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if this component descends from the specified xtype, false otherwise.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1907,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-isXType",
      "shortDoc": "Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended\nfrom th..."
    },
    {
      "tagname": "method",
      "name": "markInvalid",
      "member": "Ext.form.field.Base",
      "doc": "<p>Display one or more error messages associated with this field, using <a href=\"#/api/Ext.form.field.Radio-cfg-msgTarget\" rel=\"Ext.form.field.Radio-cfg-msgTarget\" class=\"docClass\">msgTarget</a> to determine how to\ndisplay the messages and applying <a href=\"#/api/Ext.form.field.Radio-cfg-invalidCls\" rel=\"Ext.form.field.Radio-cfg-invalidCls\" class=\"docClass\">invalidCls</a> to the field's UI element.</p>\n\n\n<p><b>Note</b>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.Radio-method-validate\" rel=\"Ext.form.field.Radio-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.Radio-method-isValid\" rel=\"Ext.form.field.Radio-method-isValid\" class=\"docClass\">isValid</a> methods to\nreturn <code>false</code> if the value does <i>pass</i> validation. So simply marking a Field as invalid\nwill not prevent submission of forms submitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a>\noption set.</p>\n\n",
      "params": [
        {
          "type": "String/Array",
          "name": "errors",
          "doc": "<p>The validation message(s) to display.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 726,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-method-markInvalid",
      "shortDoc": "Display one or more error messages associated with this field, using msgTarget to determine how to\ndisplay the messag..."
    },
    {
      "tagname": "method",
      "name": "nextNode",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Returns the next node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree to attempt to find a match. Contrast with <a href=\"#/api/Ext.form.field.Radio--pnextSibling\" rel=\"Ext.form.field.Radio--pnextSibling\" class=\"docClass\">pnextSibling</a>.</p>\n\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following nodes.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "includeSelf",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>The next node (or the next node which matches the selector). Returns null if there is no matching node.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1845,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextNode",
      "shortDoc": "Returns the next node in the Component tree in tree traversal order.\n\n\nNote that this is not limited to siblings, and..."
    },
    {
      "tagname": "method",
      "name": "nextSibling",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Returns the next sibling of this Component.</p>\n\n\n<p>Optionally selects the next sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>next()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.form.field.Radio-method-nextNode\" rel=\"Ext.form.field.Radio-method-nextNode\" class=\"docClass\">nextNode</a></p>\n\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following items.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>The next sibling (or the next sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1749,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextSibling",
      "shortDoc": "Returns the next sibling of this Component.\n\n\nOptionally selects the next sibling which matches the passed ComponentQ..."
    },
    {
      "tagname": "method",
      "name": "observe",
      "member": "Ext.util.Observable",
      "doc": "<p>Sets observability on the passed class constructor.</p>\n\n<p>This makes any event fired on any instance of the passed class also fire a single event through\nthe <strong>class</strong> allowing for central handling of events on many instances at once.</p>\n\n<p>Usage:</p>\n\n<pre><code>Ext.util.Observable.observe(Ext.data.Connection);\nExt.data.Connection.on('beforerequest', function(con, options) {\n    console.log('Ajax request made to ' + options.url);\n});\n</code></pre>\n",
      "params": [
        {
          "type": "Function",
          "name": "c",
          "doc": "<p>The class constructor to make observable.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "listeners",
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.form.field.Radio-method-addListener\" rel=\"Ext.form.field.Radio-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 69,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-observe",
      "shortDoc": "Sets observability on the passed class constructor.\n\nThis makes any event fired on any instance of the passed class a..."
    },
    {
      "tagname": "method",
      "name": "on",
      "member": "Ext.util.Observable",
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.form.field.Radio-method-addListener\" rel=\"Ext.form.field.Radio-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event to listen for</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The method the event invokes</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing handler configuration.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 616,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-on",
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.form.field.Radio-method-addListener\" rel=\"Ext.form.field.Radio-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "previousNode",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Returns the previous node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree in reverse order to attempt to find a match. Contrast with <a href=\"#/api/Ext.form.field.Radio-method-previousSibling\" rel=\"Ext.form.field.Radio-method-previousSibling\" class=\"docClass\">previousSibling</a>.</p>\n\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding nodes.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "includeSelf",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>The previous node (or the previous node which matches the selector). Returns null if there is no matching node.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1809,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousNode",
      "shortDoc": "Returns the previous node in the Component tree in tree traversal order.\n\n\nNote that this is not limited to siblings,..."
    },
    {
      "tagname": "method",
      "name": "previousSibling",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Returns the previous sibling of this Component.</p>\n\n\n<p>Optionally selects the previous sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>prev()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.form.field.Radio-method-previousNode\" rel=\"Ext.form.field.Radio-method-previousNode\" class=\"docClass\">previousNode</a></p>\n\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding items.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>The previous sibling (or the previous sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1779,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousSibling",
      "shortDoc": "Returns the previous sibling of this Component.\n\n\nOptionally selects the previous sibling which matches the passed Co..."
    },
    {
      "tagname": "method",
      "name": "processRawValue",
      "member": "Ext.form.field.Base",
      "doc": "<p>Performs any necessary manipulation of a raw field value to prepare it for <a href=\"#/api/Ext.form.field.Radio-method-rawToValue\" rel=\"Ext.form.field.Radio-method-rawToValue\" class=\"docClass\">conversion</a>\nand/or <a href=\"#/api/Ext.form.field.Radio-method-validate\" rel=\"Ext.form.field.Radio-method-validate\" class=\"docClass\">validation</a>, for instance stripping out ignored characters. In the base implementation\nit does nothing; individual subclasses may override this as needed.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The unprocessed string value</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>The processed string value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 513,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-method-processRawValue",
      "shortDoc": "Performs any necessary manipulation of a raw field value to prepare it for conversion\nand/or validation, for instance..."
    },
    {
      "tagname": "method",
      "name": "rawToValue",
      "member": "Ext.form.field.Base",
      "doc": "<p>Converts a raw input field value into a mixed-type value that is suitable for this particular field type.\nThis allows controlling the normalization and conversion of user-entered values into field-type-appropriate\nvalues, e.g. a Date object for <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>, and is invoked by <a href=\"#/api/Ext.form.field.Radio-method-getValue\" rel=\"Ext.form.field.Radio-method-getValue\" class=\"docClass\">getValue</a>.</p>\n\n\n<p>It is up to individual implementations to decide how to handle raw values that cannot be successfully\nconverted to the desired object type.</p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.Radio-method-valueToRaw\" rel=\"Ext.form.field.Radio-method-valueToRaw\" class=\"docClass\">valueToRaw</a> for the opposite conversion.</p>\n\n\n<p>The base implementation does no conversion, returning the raw value untouched.</p>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "rawValue",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>The converted value.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 498,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-method-rawToValue",
      "shortDoc": "Converts a raw input field value into a mixed-type value that is suitable for this particular field type.\nThis allows..."
    },
    {
      "tagname": "method",
      "name": "relayEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code><b>this</b></code>.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "origin",
          "doc": "<p>The Observable whose events this object is to relay.</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "events",
          "doc": "<p>Array of event names to relay.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "prefix",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 520,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-relayEvents",
      "shortDoc": "<p>Relays selected events from the specified Observable as if the events were fired by <code><b>this</b></code>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "releaseCapture",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes <b>all</b> added captures from the Observable.</p>\n",
      "params": [
        {
          "type": "Observable",
          "name": "o",
          "doc": "<p>The Observable to release</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 46,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-releaseCapture",
      "shortDoc": "<p>Removes <b>all</b> added captures from the Observable.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeCls",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Removes a CSS class from the top level element representing this component.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "className",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>Returns the Component to allow method chaining.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2171,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeCls",
      "shortDoc": "<p>Removes a CSS class from the top level element representing this component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeClsWithUI",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Removes a cls to the uiCls array, which will also call <a href=\"#/api/Ext.form.field.Radio--removeUIClsToElement\" rel=\"Ext.form.field.Radio--removeUIClsToElement\" class=\"docClass\">removeUIClsToElement</a> and removes\nit from all elements of this component.</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "cls",
          "doc": "<p>A string or an array of strings to remove to the uiCls</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1368,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeClsWithUI",
      "shortDoc": "Removes a cls to the uiCls array, which will also call removeUIClsToElement and removes\nit from all elements of this ..."
    },
    {
      "tagname": "method",
      "name": "removeListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event the handler was associated with.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.form.field.Radio-method-addListener\" rel=\"Ext.form.field.Radio-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 352,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-removeListener",
      "shortDoc": "<p>Removes an event handler.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeManagedListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.form.field.Radio--mon\" rel=\"Ext.form.field.Radio--mon\" class=\"docClass\">mon</a> method.</p>\n",
      "params": [
        {
          "type": "Observable|Element",
          "name": "item",
          "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
          "optional": false
        },
        {
          "type": "Object|String",
          "name": "ename",
          "doc": "<p>The event name, or an object containing event name properties.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the handler function.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the scope (<code>this</code> reference) in which the handler function is executed.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 196,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.form.field.Radio--mon\" rel=\"Ext.form.field.Radio--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "reset",
      "member": "Ext.form.field.Field",
      "doc": "<p>Resets the current field value to the originally loaded value and clears any validation messages.\nSee <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 212,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-reset",
      "shortDoc": "Resets the current field value to the originally loaded value and clears any validation messages.\nSee Ext.form.Basic...."
    },
    {
      "tagname": "method",
      "name": "resetOriginalValue",
      "member": "Ext.form.field.Field",
      "doc": "<p>Resets the field's <a href=\"#/api/Ext.form.field.Radio-property-originalValue\" rel=\"Ext.form.field.Radio-property-originalValue\" class=\"docClass\">originalValue</a> property so it matches the current <a href=\"#/api/Ext.form.field.Radio-method-getValue\" rel=\"Ext.form.field.Radio-method-getValue\" class=\"docClass\">value</a>.\nThis is called by <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a> if the form's\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> property is set to true.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 225,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-resetOriginalValue",
      "shortDoc": "Resets the field's originalValue property so it matches the current value.\nThis is called by Ext.form.Basic.setValues..."
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.form.field.Radio-method-suspendEvents\" rel=\"Ext.form.field.Radio-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 502,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
      "shortDoc": "Resume firing events. (see suspendEvents)\nIf events were suspended using the queueSuspended parameter, then all\nevent..."
    },
    {
      "tagname": "method",
      "name": "sequenceFx",
      "member": "Ext.util.Animate",
      "doc": "<p>Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite of <a href=\"#/api/Ext.form.field.Radio-method-syncFx\" rel=\"Ext.form.field.Radio-method-syncFx\" class=\"docClass\">syncFx</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 357,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-sequenceFx",
      "shortDoc": "Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite ..."
    },
    {
      "tagname": "method",
      "name": "setActive",
      "member": "Ext.util.Floating",
      "doc": "<p>This method is called internally by <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">Ext.ZIndexManager</a> to signal that a floating\nComponent has either been moved to the top of its zIndex stack, or pushed from the top of its zIndex stack.</p>\n\n\n<p>If a <i>Window</i> is superceded by another Window, deactivating it hides its shadow.</p>\n\n\n<p>This method also fires the <a href=\"#/api/Ext.form.field.Radio-event-activate\" rel=\"Ext.form.field.Radio-event-activate\" class=\"docClass\">activate</a> or <a href=\"#/api/Ext.form.field.Radio-event-deactivate\" rel=\"Ext.form.field.Radio-event-deactivate\" class=\"docClass\">deactivate</a> event depending on which action occurred.</p>\n\n",
      "params": [
        {
          "type": "Boolean",
          "name": "active",
          "doc": "<p>True to activate the Component, false to deactivate it (defaults to false)</p>\n",
          "optional": false
        },
        {
          "type": "Component",
          "name": "newActive",
          "doc": "<p>The newly active Component which is taking over topmost zIndex position.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 216,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-method-setActive",
      "shortDoc": "This method is called internally by Ext.ZIndexManager to signal that a floating\nComponent has either been moved to th..."
    },
    {
      "tagname": "method",
      "name": "setActiveError",
      "member": "Ext.form.Labelable",
      "doc": "<p>Sets the active error message to the given string. This replaces the entire error message\ncontents with the given string. Also see <a href=\"#/api/Ext.form.field.Radio-method-setActiveErrors\" rel=\"Ext.form.field.Radio-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a> which accepts an Array of\nmessages and formats them according to the <a href=\"#/api/Ext.form.field.Radio-cfg-activeErrorsTpl\" rel=\"Ext.form.field.Radio-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "msg",
          "doc": "<p>The error message</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 348,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-setActiveError",
      "shortDoc": "Sets the active error message to the given string. This replaces the entire error message\ncontents with the given str..."
    },
    {
      "tagname": "method",
      "name": "setActiveErrors",
      "member": "Ext.form.Labelable",
      "doc": "<p>Set the active error message to an Array of error messages. The messages are formatted into\na single message string using the <a href=\"#/api/Ext.form.field.Radio-cfg-activeErrorsTpl\" rel=\"Ext.form.field.Radio-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>. Also see <a href=\"#/api/Ext.form.field.Radio-method-setActiveError\" rel=\"Ext.form.field.Radio-method-setActiveError\" class=\"docClass\">setActiveError</a>\nwhich allows setting the entire error contents with a single string.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "errors",
          "doc": "<p>The error messages</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 369,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-setActiveErrors",
      "shortDoc": "Set the active error message to an Array of error messages. The messages are formatted into\na single message string u..."
    },
    {
      "tagname": "method",
      "name": "setAutoScroll",
      "member": "Ext.Component",
      "doc": "<p>Sets the overflow on the content element of the component.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "scroll",
          "doc": "<p>True to allow the Component to auto scroll.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 359,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-setAutoScroll",
      "shortDoc": "<p>Sets the overflow on the content element of the component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setDisabled",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Enable or disable the component.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "disabled",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2123,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDisabled",
      "shortDoc": "<p>Enable or disable the component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setDocked",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Sets the dock position of this component in its parent panel. Note that\nthis only has effect if this item is part of the dockedItems collection\nof a parent that has a DockLayout (note that any Panel has a DockLayout\nby default)</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "dock",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "layoutParent",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2646,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDocked",
      "shortDoc": "Sets the dock position of this component in its parent panel. Note that\nthis only has effect if this item is part of ..."
    },
    {
      "tagname": "method",
      "name": "setFieldDefaults",
      "member": "Ext.form.Labelable",
      "doc": "<p>Applies a set of default configuration values to this Labelable instance. For each of the\nproperties in the given object, check if this component hasOwnProperty that config; if not\nthen it's inheriting a default value from its prototype and we should apply the default value.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "defaults",
          "doc": "<p>The defaults to apply to the object.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 417,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-setFieldDefaults",
      "shortDoc": "Applies a set of default configuration values to this Labelable instance. For each of the\nproperties in the given obj..."
    },
    {
      "tagname": "method",
      "name": "setFieldStyle",
      "member": "Ext.form.field.Base",
      "doc": "<p>Set the <a href=\"#/api/Ext.form.field.Radio-cfg-fieldStyle\" rel=\"Ext.form.field.Radio-cfg-fieldStyle\" class=\"docClass\">CSS style</a> of the <a href=\"#/api/Ext.form.field.Radio-property-inputEl\" rel=\"Ext.form.field.Radio-property-inputEl\" class=\"docClass\">field input element</a>.</p>\n",
      "params": [
        {
          "type": "String/Object/Function",
          "name": "style",
          "doc": "<p>The style(s) to apply. Should be a valid argument to\n<a href=\"#/api/Ext.core.Element-method-applyStyles\" rel=\"Ext.core.Element-method-applyStyles\" class=\"docClass\">Ext.core.Element.applyStyles</a>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 348,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-method-setFieldStyle",
      "shortDoc": "<p>Set the <a href=\"#/api/Ext.form.field.Radio-cfg-fieldStyle\" rel=\"Ext.form.field.Radio-cfg-fieldStyle\" class=\"docClass\">CSS style</a> of the <a href=\"#/api/Ext.form.field.Radio-property-inputEl\" rel=\"Ext.form.field.Radio-property-inputEl\" class=\"docClass\">field input element</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setHeight",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Sets the height of the component.  This method fires the <a href=\"#/api/Ext.form.field.Radio-event-resize\" rel=\"Ext.form.field.Radio-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "height",
          "doc": "<p>The new height to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.form.field.Radio-method-getEl\" rel=\"Ext.form.field.Radio-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style.</li>\n<li><i>undefined</i> to leave the height unchanged.</li>\n</ul></div></p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2550,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-setHeight",
      "shortDoc": "<p>Sets the height of the component.  This method fires the <a href=\"#/api/Ext.form.field.Radio-event-resize\" rel=\"Ext.form.field.Radio-event-resize\" class=\"docClass\">resize</a> event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setLoading",
      "member": "Ext.AbstractComponent",
      "doc": "<p>This method allows you to show or hide a LoadMask on top of this component.</p>\n",
      "params": [
        {
          "type": "Boolean/Object/String",
          "name": "load",
          "doc": "<p>True to show the default LoadMask, a config object\nthat will be passed to the LoadMask constructor, or a message String to show. False to\nhide the current LoadMask.</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "targetEl",
          "doc": "<p>True to mask the targetEl of this Component instead of the this.el.\nFor example, setting this to true on a Panel will cause only the body to be masked. (defaults to false)</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.LoadMask",
        "doc": "<p>The LoadMask instance that has just been shown.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2611,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-setLoading",
      "shortDoc": "<p>This method allows you to show or hide a LoadMask on top of this component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setPagePosition",
      "member": "Ext.Component",
      "doc": "<p>Sets the page XY position of the component.  To set the left and top instead, use <a href=\"#/api/Ext.form.field.Radio-method-setPosition\" rel=\"Ext.form.field.Radio-method-setPosition\" class=\"docClass\">setPosition</a>.\nThis method fires the <a href=\"#/api/Ext.form.field.Radio-event-move\" rel=\"Ext.form.field.Radio-event-move\" class=\"docClass\">move</a> event.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "x",
          "doc": "<p>The new x position</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "y",
          "doc": "<p>The new y position</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "animate",
          "doc": "<p>If passed, the Component is <i>animated</i> into its new position. If this parameter\nis a number, it is used as the animation duration in milliseconds.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 501,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-setPagePosition",
      "shortDoc": "Sets the page XY position of the component.  To set the left and top instead, use setPosition.\nThis method fires the ..."
    },
    {
      "tagname": "method",
      "name": "setPosition",
      "member": "Ext.Component",
      "doc": "<p>Sets the left and top of the component.  To set the page XY position instead, use <a href=\"#/api/Ext.form.field.Radio-method-setPagePosition\" rel=\"Ext.form.field.Radio-method-setPagePosition\" class=\"docClass\">setPagePosition</a>.\nThis method fires the <a href=\"#/api/Ext.form.field.Radio-event-move\" rel=\"Ext.form.field.Radio-event-move\" class=\"docClass\">move</a> event.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "left",
          "doc": "<p>The new left</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "top",
          "doc": "<p>The new top</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "animate",
          "doc": "<p>If true, the Component is <i>animated</i> into its new position. You may also pass an animation configuration.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 417,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-setPosition",
      "shortDoc": "Sets the left and top of the component.  To set the page XY position instead, use setPagePosition.\nThis method fires ..."
    },
    {
      "tagname": "method",
      "name": "setRawValue",
      "member": "Ext.form.field.Checkbox",
      "doc": "<p>Sets the checked state of the checkbox.</p>\n",
      "params": [
        {
          "type": "Boolean/String",
          "name": "value",
          "doc": "<p>The following values will check the checkbox:\n<code>true, 'true', '1', or 'on'</code>, as well as a String that matches the <a href=\"#/api/Ext.form.field.Radio-cfg-inputValue\" rel=\"Ext.form.field.Radio-cfg-inputValue\" class=\"docClass\">inputValue</a>.\nAny other value will uncheck the checkbox.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>the new checked state of the checkbox</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 292,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-method-setRawValue",
      "shortDoc": "<p>Sets the checked state of the checkbox.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setReadOnly",
      "member": "Ext.form.field.Base",
      "doc": "<p>Sets the read only state of this field.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "readOnly",
          "doc": "<p>Whether the field should be read only.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 570,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-method-setReadOnly",
      "shortDoc": "<p>Sets the read only state of this field.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setSize",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Sets the width and height of this Component. This method fires the <a href=\"#/api/Ext.form.field.Radio-event-resize\" rel=\"Ext.form.field.Radio-event-resize\" class=\"docClass\">resize</a> event. This method can accept\neither width and height as separate arguments, or you can pass a size object like <code>{width:10, height:20}</code>.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "width",
          "doc": "<p>The new width to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.form.field.Radio-method-getEl\" rel=\"Ext.form.field.Radio-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n<li><code>undefined</code> to leave the width unchanged.</li>\n</ul></div></p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "height",
          "doc": "<p>The new height to set (not required if a size object is passed as the first arg).\nThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.form.field.Radio-method-getEl\" rel=\"Ext.form.field.Radio-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n<li><code>undefined</code> to leave the height unchanged.</li>\n</ul></div></p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2340,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-setSize",
      "shortDoc": "Sets the width and height of this Component. This method fires the resize event. This method can accept\neither width ..."
    },
    {
      "tagname": "method",
      "name": "setUI",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Sets the UI for the component. This will remove any existing UIs on the component. It will also\nloop through any uiCls set on the component and rename them so they include the new UI</p>\n",
      "params": [
        {
          "type": "String",
          "name": "ui",
          "doc": "<p>The new UI for the component</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1309,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-setUI",
      "shortDoc": "Sets the UI for the component. This will remove any existing UIs on the component. It will also\nloop through any uiCl..."
    },
    {
      "tagname": "method",
      "name": "setValue",
      "member": "Ext.form.field.Radio",
      "doc": "<p>Sets either the checked/unchecked status of this Radio, or, if a string value\nis passed, checks a sibling Radio of the same name whose value is the value specified.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "value",
          "doc": "<p>{String/Boolean} Checked value, or the value of the sibling radio button to check.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.form.field.Radio",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Radio.js",
      "linenr": 214,
      "html_filename": "Radio.html",
      "href": "Radio.html#Ext-form-field-Radio-method-setValue",
      "shortDoc": "Sets either the checked/unchecked status of this Radio, or, if a string value\nis passed, checks a sibling Radio of th..."
    },
    {
      "tagname": "method",
      "name": "setVisible",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Convenience function to hide or show this component by boolean.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "visible",
          "doc": "<p>True to show, false to hide</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2006,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-setVisible",
      "shortDoc": "<p>Convenience function to hide or show this component by boolean.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setWidth",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Sets the width of the component.  This method fires the <a href=\"#/api/Ext.form.field.Radio-event-resize\" rel=\"Ext.form.field.Radio-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "width",
          "doc": "<p>The new width to setThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.form.field.Radio-method-getEl\" rel=\"Ext.form.field.Radio-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n</ul></div></p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 2538,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-setWidth",
      "shortDoc": "<p>Sets the width of the component.  This method fires the <a href=\"#/api/Ext.form.field.Radio-event-resize\" rel=\"Ext.form.field.Radio-event-resize\" class=\"docClass\">resize</a> event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "show",
      "member": "Ext.Component",
      "doc": "<p>Shows this Component, rendering it first if <a href=\"#/api/Ext.form.field.Radio-cfg-autoRender\" rel=\"Ext.form.field.Radio-cfg-autoRender\" class=\"docClass\">autoRender</a> or {<a href=\"#/api/\"floating\" rel=\"\"floating\" class=\"docClass\">&quot;floating</a> are <code>true</code>.</p>\n\n\n<p>After being shown, a <a href=\"#/api/Ext.form.field.Radio-cfg-floating\" rel=\"Ext.form.field.Radio-cfg-floating\" class=\"docClass\">floating</a> Component (such as a <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Ext.window.Window</a>), is activated it and brought to the front of\nits <a href=\"#/api/Ext.form.field.Radio--ZIndexManager\" rel=\"Ext.form.field.Radio--ZIndexManager\" class=\"docClass\">z-index stack</a>.</p>\n\n",
      "params": [
        {
          "type": "String/Element",
          "name": "animateTarget",
          "doc": "<p>Optional, and <b>only valid for <a href=\"#/api/Ext.form.field.Radio-cfg-floating\" rel=\"Ext.form.field.Radio-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b> The target from which the Component should\nanimate from while opening (defaults to null with no animation)</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>(optional) A callback function to call after the Component is displayed. Only necessary if animation was specified.</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 645,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-show",
      "shortDoc": "Shows this Component, rendering it first if autoRender or {&quot;floating are true.\n\n\nAfter being shown, a floating C..."
    },
    {
      "tagname": "method",
      "name": "stopAnimation",
      "member": "Ext.util.Animate",
      "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 335,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-stopAnimation",
      "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ..."
    },
    {
      "tagname": "method",
      "name": "stopFx",
      "member": "Ext.util.Animate",
      "doc": "<p>@deprecated 4.0 Replaced by <a href=\"#/api/Ext.form.field.Radio-method-stopAnimation\" rel=\"Ext.form.field.Radio-method-stopAnimation\" class=\"docClass\">stopAnimation</a>\nStops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 326,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-stopFx",
      "shortDoc": "@deprecated 4.0 Replaced by stopAnimation\nStops any running effects and clears this object's internal effects queue i..."
    },
    {
      "tagname": "method",
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.form.field.Radio-method-resumeEvents\" rel=\"Ext.form.field.Radio-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.form.field.Radio-method-resumeEvents\" rel=\"Ext.form.field.Radio-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 490,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.form.field.Radio-method-resumeEvents\" rel=\"Ext.form.field.Radio-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "syncFx",
      "member": "Ext.util.Animate",
      "doc": "<p>Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of <a href=\"#/api/Ext.form.field.Radio-method-sequenceFx\" rel=\"Ext.form.field.Radio-method-sequenceFx\" class=\"docClass\">sequenceFx</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 345,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-syncFx",
      "shortDoc": "Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of ..."
    },
    {
      "tagname": "method",
      "name": "toBack",
      "member": "Ext.util.Floating",
      "doc": "<p>Sends this Component to the back of (lower z-index than) any other visible windows</p>\n",
      "params": [

      ],
      "return": {
        "type": "Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 240,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-method-toBack",
      "shortDoc": "<p>Sends this Component to the back of (lower z-index than) any other visible windows</p>\n"
    },
    {
      "tagname": "method",
      "name": "toFront",
      "member": "Ext.util.Floating",
      "doc": "<p>Brings this floating Component to the front of any other visible, floating Components managed by the same <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<p>If this Component is modal, inserts the modal mask just below this Component in the z-index stack.</p>\n\n",
      "params": [
        {
          "type": "Boolean",
          "name": "preventFocus",
          "doc": "<p>(optional) Specify <code>true</code> to prevent the Component from being focused.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 188,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-method-toFront",
      "shortDoc": "Brings this floating Component to the front of any other visible, floating Components managed by the same ZIndexManag..."
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.form.field.Radio-method-removeListener\" rel=\"Ext.form.field.Radio-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event the handler was associated with.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.form.field.Radio-method-addListener\" rel=\"Ext.form.field.Radio-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 608,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-un",
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.form.field.Radio-method-removeListener\" rel=\"Ext.form.field.Radio-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "unsetActiveError",
      "member": "Ext.form.Labelable",
      "doc": "<p>Clears the active error.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 381,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-unsetActiveError",
      "shortDoc": "<p>Clears the active error.</p>\n"
    },
    {
      "tagname": "method",
      "name": "up",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Walks up the <code>ownerCt</code> axis looking for an ancestor Container which matches\nthe passed simple selector.</p>\n\n\n<p>Example:\n<pre><code>var owningTabPanel = grid.up('tabpanel');\n</code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>Optional. The simple selector to test.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Container",
        "doc": "<p>The matching ancestor Container (or <code>undefined</code> if no match was found).</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1728,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-up",
      "shortDoc": "Walks up the ownerCt axis looking for an ancestor Container which matches\nthe passed simple selector.\n\n\nExample:\nvar ..."
    },
    {
      "tagname": "method",
      "name": "update",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Update the content area of a component.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "htmlOrData",
          "doc": "<p>If this component has been configured with a template via the tpl config\nthen it will use this argument as data to populate the template.\nIf this component was not configured with a template, the components\ncontent area will be updated via <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> update</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "loadScripts",
          "doc": "<p>(optional) Only legitimate when using the html configuration. Defaults to false</p>\n",
          "optional": true
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>(optional) Only legitimate when using the html configuration. Callback to execute when scripts have finished loading</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 1974,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-method-update",
      "shortDoc": "<p>Update the content area of a component.</p>\n"
    },
    {
      "tagname": "method",
      "name": "updateBox",
      "member": "Ext.Component",
      "doc": "<p>Sets the current box measurements of the component's underlying element.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "box",
          "doc": "<p>An object in the format {x, y, width, height}</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 551,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-method-updateBox",
      "shortDoc": "<p>Sets the current box measurements of the component's underlying element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "validate",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns whether or not the field value is currently valid by <a href=\"#/api/Ext.form.field.Radio-method-getErrors\" rel=\"Ext.form.field.Radio-method-getErrors\" class=\"docClass\">validating</a> the\nfield's current value, and fires the <a href=\"#/api/Ext.form.field.Radio-event-validitychange\" rel=\"Ext.form.field.Radio-event-validitychange\" class=\"docClass\">validitychange</a> event if the field's validity has\nchanged since the last validation. <b>Note</b>: <a href=\"#/api/Ext.form.field.Radio-cfg-disabled\" rel=\"Ext.form.field.Radio-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n\n\n<p>Custom implementations of this method are allowed to have side-effects such as triggering error\nmessage display. To validate without side-effects, use <a href=\"#/api/Ext.form.field.Radio-method-isValid\" rel=\"Ext.form.field.Radio-method-isValid\" class=\"docClass\">isValid</a>.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the value is valid, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 330,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-validate",
      "shortDoc": "Returns whether or not the field value is currently valid by validating the\nfield's current value, and fires the vali..."
    },
    {
      "tagname": "method",
      "name": "validateValue",
      "member": "Ext.form.field.Base",
      "doc": "<p>Uses <a href=\"#/api/Ext.form.field.Radio-method-getErrors\" rel=\"Ext.form.field.Radio-method-getErrors\" class=\"docClass\">getErrors</a> to build an array of validation errors. If any errors are found, they are passed\nto <a href=\"#/api/Ext.form.field.Radio-method-markInvalid\" rel=\"Ext.form.field.Radio-method-markInvalid\" class=\"docClass\">markInvalid</a> and false is returned, otherwise true is returned.</p>\n\n\n<p>Previously, subclasses were invited to provide an implementation of this to process validations - from 3.2\nonwards <a href=\"#/api/Ext.form.field.Radio-method-getErrors\" rel=\"Ext.form.field.Radio-method-getErrors\" class=\"docClass\">getErrors</a> should be overridden instead.</p>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to validate</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if all validations passed, false if one or more failed</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 703,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-method-validateValue",
      "shortDoc": "Uses getErrors to build an array of validation errors. If any errors are found, they are passed\nto markInvalid and fa..."
    },
    {
      "tagname": "method",
      "name": "valueToRaw",
      "member": "Ext.form.field.Base",
      "doc": "<p>Converts a mixed-type value to a raw representation suitable for displaying in the field. This allows\ncontrolling how value objects passed to <a href=\"#/api/Ext.form.field.Radio-method-setValue\" rel=\"Ext.form.field.Radio-method-setValue\" class=\"docClass\">setValue</a> are shown to the user, including localization.\nFor instance, for a <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>, this would control how a Date object passed to <a href=\"#/api/Ext.form.field.Radio-method-setValue\" rel=\"Ext.form.field.Radio-method-setValue\" class=\"docClass\">setValue</a>\nwould be converted to a String for display in the field.</p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.Radio-method-rawToValue\" rel=\"Ext.form.field.Radio-method-rawToValue\" class=\"docClass\">rawToValue</a> for the opposite conversion.</p>\n\n\n<p>The base implementation simply does a standard toString conversion, and converts\n<a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">empty values</a> to an empty string.</p>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The mixed-type value to convert to the raw representation.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>The converted raw value.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 483,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-method-valueToRaw",
      "shortDoc": "Converts a mixed-type value to a raw representation suitable for displaying in the field. This allows\ncontrolling how..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "bodyEl",
      "member": "Ext.form.Labelable",
      "type": "Ext.core.Element",
      "doc": "<p>The div Element wrapping the component's contents. Only available after the component has been rendered.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 293,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-property-bodyEl"
    },
    {
      "tagname": "property",
      "name": "boxLabelEl",
      "member": "Ext.form.field.Checkbox",
      "type": "Ext.core.Element",
      "doc": "<p>A reference to the label element created for the <a href=\"#/api/Ext.form.field.Radio-cfg-boxLabel\" rel=\"Ext.form.field.Radio-cfg-boxLabel\" class=\"docClass\">boxLabel</a>. Only present if the\ncomponent has been rendered and has a boxLabel configured.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 233,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-property-boxLabelEl",
      "shortDoc": "A reference to the label element created for the boxLabel. Only present if the\ncomponent has been rendered and has a ..."
    },
    {
      "tagname": "property",
      "name": "draggable",
      "member": "Ext.AbstractComponent",
      "type": "Boolean",
      "doc": "<p>Read-only property indicating whether or not the component can be dragged</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 374,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-property-draggable"
    },
    {
      "tagname": "property",
      "name": "errorEl",
      "member": "Ext.form.Labelable",
      "type": "Ext.core.Element",
      "doc": "<p>The div Element that will contain the component's error message(s). Note that depending on the\nconfigured <a href=\"#/api/Ext.form.field.Radio-cfg-msgTarget\" rel=\"Ext.form.field.Radio-cfg-msgTarget\" class=\"docClass\">msgTarget</a>, this element may be hidden in favor of some other form of\npresentation, but will always be present in the DOM for use by assistive technologies.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 300,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-property-errorEl",
      "shortDoc": "The div Element that will contain the component's error message(s). Note that depending on the\nconfigured msgTarget, ..."
    },
    {
      "tagname": "property",
      "name": "floatParent",
      "member": "Ext.Component",
      "type": "Ext.Container",
      "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.form.field.Radio-cfg-floating\" rel=\"Ext.form.field.Radio-cfg-floating\" class=\"docClass\">floating</a> Components which were inserted as descendant items of floating Containers.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will not have a <code>floatParent</code> property.</p>\n\n\n<p>For <a href=\"#/api/Ext.form.field.Radio-cfg-floating\" rel=\"Ext.form.field.Radio-cfg-floating\" class=\"docClass\">floating</a> Components which are child items of a Container, the floatParent will be the floating ancestor Container which is\nresponsible for the base z-index value of all its floating descendants. It provides a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which provides\nz-indexing services for all its descendant floating Components.</p>\n\n\n<p>For example, the dropdown <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">BoundList</a> of a ComboBox which is in a Window will have the Window as its\n<code>floatParent</code></p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.Radio-cfg-floating\" rel=\"Ext.form.field.Radio-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.form.field.Radio-property-zIndexManager\" rel=\"Ext.form.field.Radio-property-zIndexManager\" class=\"docClass\">zIndexManager</a></p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 221,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-property-floatParent",
      "shortDoc": "Optional. Only present for floating Components which were inserted as descendant items of floating Containers.\n\n\nFloa..."
    },
    {
      "tagname": "property",
      "name": "frameSize",
      "member": "Ext.AbstractComponent",
      "type": "Object",
      "doc": "<p>Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto provide graphical, rounded borders. See the <a href=\"#/api/Ext.form.field.Radio-cfg-frame\" rel=\"Ext.form.field.Radio-cfg-frame\" class=\"docClass\">frame</a> config.</p>\n\n\n<p> This is an object containing the frame width in pixels for all four sides of the Component containing\nthe following properties:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>top</code> The width of the top framing element in pixels.</li>\n<li><code>right</code> The width of the right framing element in pixels.</li>\n<li><code>bottom</code> The width of the bottom framing element in pixels.</li>\n<li><code>left</code> The width of the left framing element in pixels.</li>\n</ul></div>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 207,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-property-frameSize",
      "shortDoc": "Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto ..."
    },
    {
      "tagname": "property",
      "name": "inputEl",
      "member": "Ext.form.field.Base",
      "type": "Ext.core.Element",
      "doc": "<p>The input Element for this Field. Only available after the field has been rendered.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 371,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-property-inputEl"
    },
    {
      "tagname": "property",
      "name": "isFieldLabelable",
      "member": "Ext.form.Labelable",
      "type": "Boolean",
      "doc": "<p>Flag denoting that this object is labelable as a field. Always true.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 61,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-property-isFieldLabelable"
    },
    {
      "tagname": "property",
      "name": "isFormField",
      "member": "Ext.form.field.Field",
      "type": "Boolean",
      "doc": "<p>Flag denoting that this component is a Field. Always true.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 26,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-property-isFormField"
    },
    {
      "tagname": "property",
      "name": "labelEl",
      "member": "Ext.form.Labelable",
      "type": "Ext.core.Element",
      "doc": "<p>The label Element for this component. Only available after the component has been rendered.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 286,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-property-labelEl"
    },
    {
      "tagname": "property",
      "name": "maskOnDisable",
      "member": "Ext.AbstractComponent",
      "type": "Boolean",
      "doc": "<p>This is an internal flag that you use when creating custom components.\nBy default this is set to true which means that every component gets a mask when its disabled.\nComponents like FieldContainer, FieldSet, Field, Button, Tab override this property to false\nsince they want to implement custom disable logic.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 513,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-property-maskOnDisable",
      "shortDoc": "This is an internal flag that you use when creating custom components.\nBy default this is set to true which means tha..."
    },
    {
      "tagname": "property",
      "name": "originalValue",
      "member": "Ext.form.field.Checkbox",
      "type": "Mixed",
      "doc": "<p>The original value of the field as configured in the <a href=\"#/api/Ext.form.field.Radio-cfg-checked\" rel=\"Ext.form.field.Radio-cfg-checked\" class=\"docClass\">checked</a> configuration, or\nas loaded by the last form load operation if the form's <a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>\nsetting is <code>true</code>.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Checkbox.js",
      "linenr": 216,
      "html_filename": "Checkbox.html",
      "href": "Checkbox.html#Ext-form-field-Checkbox-property-originalValue",
      "shortDoc": "The original value of the field as configured in the checked configuration, or\nas loaded by the last form load operat..."
    },
    {
      "tagname": "property",
      "name": "ownerCt",
      "member": "Ext.AbstractComponent",
      "type": "Ext.Container",
      "doc": "<p>This Component's owner <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a> (defaults to undefined, and is set automatically when\nthis Component is added to a Container).  Read-only.</p>\n\n<p><b>Note</b>: to access items within the Container see <tt><a href=\"#/api/Ext.form.field.Radio-cfg-itemId\" rel=\"Ext.form.field.Radio-cfg-itemId\" class=\"docClass\">itemId</a></tt>.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 101,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-property-ownerCt",
      "shortDoc": "This Component's owner Container (defaults to undefined, and is set automatically when\nthis Component is added to a C..."
    },
    {
      "tagname": "property",
      "name": "rendered",
      "member": "Ext.AbstractComponent",
      "type": "Boolean",
      "doc": "<p>Read-only property indicating whether or not the component has been rendered.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 500,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-property-rendered"
    },
    {
      "tagname": "property",
      "name": "zIndexManager",
      "member": "Ext.Component",
      "type": "Ext.ZIndexManager",
      "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.form.field.Radio-cfg-floating\" rel=\"Ext.form.field.Radio-cfg-floating\" class=\"docClass\">floating</a> Components after they have been rendered.</p>\n\n\n<p>A reference to the ZIndexManager which is managing this Component's z-index.</p>\n\n\n<p>The <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> maintains a stack of floating Component z-indices, and also provides a single modal\nmask which is insert just beneath the topmost visible modal floating Component.</p>\n\n\n<p>Floating Components may be <a href=\"#/api/Ext.form.field.Radio-method-toFront\" rel=\"Ext.form.field.Radio-method-toFront\" class=\"docClass\">brought to the front</a> or <a href=\"#/api/Ext.form.field.Radio-method-toBack\" rel=\"Ext.form.field.Radio-method-toBack\" class=\"docClass\">sent to the back</a> of the z-index stack.</p>\n\n\n<p>This defaults to the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> for floating Components that are programatically\n<a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a>.</p>\n\n\n<p>For <a href=\"#/api/Ext.form.field.Radio-cfg-floating\" rel=\"Ext.form.field.Radio-cfg-floating\" class=\"docClass\">floating</a> Components which are added to a Container, the ZIndexManager is acquired from the first ancestor Container found\nwhich is floating, or if not found the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> is used.</p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.Radio-cfg-floating\" rel=\"Ext.form.field.Radio-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.form.field.Radio-property-floatParent\" rel=\"Ext.form.field.Radio-property-floatParent\" class=\"docClass\">floatParent</a></p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Component.js",
      "linenr": 206,
      "html_filename": "Component.html",
      "href": "Component.html#Ext-Component-property-zIndexManager",
      "shortDoc": "Optional. Only present for floating Components after they have been rendered.\n\n\nA reference to the ZIndexManager whic..."
    }
  ],
  "event": [
    {
      "tagname": "event",
      "name": "activate",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires after a Component has been visually activated.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 540,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-activate",
      "shortDoc": "<p>Fires after a Component has been visually activated.</p>\n"
    },
    {
      "tagname": "event",
      "name": "added",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires after a Component had been added to a Container.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.container.Container",
          "name": "container",
          "doc": "<p>Parent Container</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "pos",
          "doc": "<p>position of Component</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 560,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-added",
      "shortDoc": "<p>Fires after a Component had been added to a Container.</p>\n"
    },
    {
      "tagname": "event",
      "name": "afterrender",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires after the component rendering is finished.</p>\n\n\n<p>The afterrender event is fired after this Component has been <a href=\"#/api/Ext.form.field.Radio-property-rendered\" rel=\"Ext.form.field.Radio-property-rendered\" class=\"docClass\">rendered</a>, been postprocesed\nby any afterRender method defined for the Component.</p>\n\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 627,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-afterrender",
      "shortDoc": "Fires after the component rendering is finished.\n\n\nThe afterrender event is fired after this Component has been rende..."
    },
    {
      "tagname": "event",
      "name": "beforeactivate",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires before a Component has been visually activated.\nReturning false from an event listener can prevent the activate\nfrom occurring.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 532,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeactivate",
      "shortDoc": "Fires before a Component has been visually activated.\nReturning false from an event listener can prevent the activate..."
    },
    {
      "tagname": "event",
      "name": "beforedeactivate",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires before a Component has been visually deactivated.\nReturning false from an event listener can prevent the deactivate\nfrom occurring.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 546,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedeactivate",
      "shortDoc": "Fires before a Component has been visually deactivated.\nReturning false from an event listener can prevent the deacti..."
    },
    {
      "tagname": "event",
      "name": "beforedestroy",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires before the component is <a href=\"#/api/Ext.form.field.Radio-event-destroy\" rel=\"Ext.form.field.Radio-event-destroy\" class=\"docClass\">destroy</a>ed. Return false from an event handler to stop the <a href=\"#/api/Ext.form.field.Radio-event-destroy\" rel=\"Ext.form.field.Radio-event-destroy\" class=\"docClass\">destroy</a>.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 635,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedestroy",
      "shortDoc": "<p>Fires before the component is <a href=\"#/api/Ext.form.field.Radio-event-destroy\" rel=\"Ext.form.field.Radio-event-destroy\" class=\"docClass\">destroy</a>ed. Return false from an event handler to stop the <a href=\"#/api/Ext.form.field.Radio-event-destroy\" rel=\"Ext.form.field.Radio-event-destroy\" class=\"docClass\">destroy</a>.</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforehide",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires before the component is hidden when calling the <a href=\"#/api/Ext.form.field.Radio-event-hide\" rel=\"Ext.form.field.Radio-event-hide\" class=\"docClass\">hide</a> method.\nReturn false from an event handler to stop the hide.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 593,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforehide",
      "shortDoc": "<p>Fires before the component is hidden when calling the <a href=\"#/api/Ext.form.field.Radio-event-hide\" rel=\"Ext.form.field.Radio-event-hide\" class=\"docClass\">hide</a> method.\nReturn false from an event handler to stop the hide.</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforerender",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires before the component is <a href=\"#/api/Ext.form.field.Radio-property-rendered\" rel=\"Ext.form.field.Radio-property-rendered\" class=\"docClass\">rendered</a>. Return false from an\nevent handler to stop the <a href=\"#/api/Ext.form.field.Radio-event-render\" rel=\"Ext.form.field.Radio-event-render\" class=\"docClass\">render</a>.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 614,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforerender",
      "shortDoc": "<p>Fires before the component is <a href=\"#/api/Ext.form.field.Radio-property-rendered\" rel=\"Ext.form.field.Radio-property-rendered\" class=\"docClass\">rendered</a>. Return false from an\nevent handler to stop the <a href=\"#/api/Ext.form.field.Radio-event-render\" rel=\"Ext.form.field.Radio-event-render\" class=\"docClass\">render</a>.</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforeshow",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires before the component is shown when calling the <a href=\"#/api/Ext.form.field.Radio-event-show\" rel=\"Ext.form.field.Radio-event-show\" class=\"docClass\">show</a> method.\nReturn false from an event handler to stop the show.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 580,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeshow",
      "shortDoc": "<p>Fires before the component is shown when calling the <a href=\"#/api/Ext.form.field.Radio-event-show\" rel=\"Ext.form.field.Radio-event-show\" class=\"docClass\">show</a> method.\nReturn false from an event handler to stop the show.</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforestaterestore",
      "member": "Ext.state.Stateful",
      "doc": "<p>Fires before the state of the object is restored. Return false from an event handler to stop the restore.</p>\n",
      "params": [
        {
          "type": "Ext.state.Stateful",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "state",
          "doc": "<p>The hash of state values returned from the StateProvider. If this\nevent is not vetoed, then the state object is passed to <b><tt>applyState</tt></b>. By default,\nthat simply copies property values into this object. The method maybe overriden to\nprovide custom state restoration.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Stateful.js",
      "linenr": 101,
      "html_filename": "Stateful.html",
      "href": "Stateful.html#Ext-state-Stateful-event-beforestaterestore",
      "shortDoc": "<p>Fires before the state of the object is restored. Return false from an event handler to stop the restore.</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforestatesave",
      "member": "Ext.state.Stateful",
      "doc": "<p>Fires before the state of the object is saved to the configured state provider. Return false to stop the save.</p>\n",
      "params": [
        {
          "type": "Ext.state.Stateful",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "state",
          "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Stateful.js",
      "linenr": 122,
      "html_filename": "Stateful.html",
      "href": "Stateful.html#Ext-state-Stateful-event-beforestatesave",
      "shortDoc": "<p>Fires before the state of the object is saved to the configured state provider. Return false to stop the save.</p>\n"
    },
    {
      "tagname": "event",
      "name": "blur",
      "member": "Ext.form.field.Base",
      "doc": "<p>Fires when this field loses input focus.</p>\n",
      "params": [
        {
          "type": "Ext.form.field.Base",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 246,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-event-blur",
      "shortDoc": "<p>Fires when this field loses input focus.</p>\n"
    },
    {
      "tagname": "event",
      "name": "change",
      "member": "Ext.form.field.Field",
      "doc": "<p>Fires when a user-initiated change is detected in the value of the field.</p>\n",
      "params": [
        {
          "type": "Ext.form.field.Field",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "newValue",
          "doc": "<p>The new value</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "oldValue",
          "doc": "<p>The original value</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 79,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-event-change",
      "shortDoc": "<p>Fires when a user-initiated change is detected in the value of the field.</p>\n"
    },
    {
      "tagname": "event",
      "name": "deactivate",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires after a Component has been visually deactivated.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 554,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-deactivate",
      "shortDoc": "<p>Fires after a Component has been visually deactivated.</p>\n"
    },
    {
      "tagname": "event",
      "name": "destroy",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires after the component is <a href=\"#/api/Ext.form.field.Radio-event-destroy\" rel=\"Ext.form.field.Radio-event-destroy\" class=\"docClass\">destroy</a>ed.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 641,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-destroy",
      "shortDoc": "<p>Fires after the component is <a href=\"#/api/Ext.form.field.Radio-event-destroy\" rel=\"Ext.form.field.Radio-event-destroy\" class=\"docClass\">destroy</a>ed.</p>\n"
    },
    {
      "tagname": "event",
      "name": "dirtychange",
      "member": "Ext.form.field.Field",
      "doc": "<p>Fires when a change in the field's <a href=\"#/api/Ext.form.field.Radio-method-isDirty\" rel=\"Ext.form.field.Radio-method-isDirty\" class=\"docClass\">isDirty</a> state is detected.</p>\n",
      "params": [
        {
          "type": "Ext.form.field.Field",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "isDirty",
          "doc": "<p>Whether or not the field is now dirty</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 94,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-event-dirtychange",
      "shortDoc": "<p>Fires when a change in the field's <a href=\"#/api/Ext.form.field.Radio-method-isDirty\" rel=\"Ext.form.field.Radio-method-isDirty\" class=\"docClass\">isDirty</a> state is detected.</p>\n"
    },
    {
      "tagname": "event",
      "name": "disable",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires after the component is disabled.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 568,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-disable",
      "shortDoc": "<p>Fires after the component is disabled.</p>\n"
    },
    {
      "tagname": "event",
      "name": "enable",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires after the component is enabled.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 574,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-enable",
      "shortDoc": "<p>Fires after the component is enabled.</p>\n"
    },
    {
      "tagname": "event",
      "name": "errorchange",
      "member": "Ext.form.Labelable",
      "doc": "<p>Fires when the active error message is changed via <a href=\"#/api/Ext.form.field.Radio-method-setActiveError\" rel=\"Ext.form.field.Radio-method-setActiveError\" class=\"docClass\">setActiveError</a>.</p>\n",
      "params": [
        {
          "type": "Ext.form.Labelable",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "error",
          "doc": "<p>The active error message</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 222,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-event-errorchange",
      "shortDoc": "<p>Fires when the active error message is changed via <a href=\"#/api/Ext.form.field.Radio-method-setActiveError\" rel=\"Ext.form.field.Radio-method-setActiveError\" class=\"docClass\">setActiveError</a>.</p>\n"
    },
    {
      "tagname": "event",
      "name": "focus",
      "member": "Ext.form.field.Base",
      "doc": "<p>Fires when this field receives input focus.</p>\n",
      "params": [
        {
          "type": "Ext.form.field.Base",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 240,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-event-focus",
      "shortDoc": "<p>Fires when this field receives input focus.</p>\n"
    },
    {
      "tagname": "event",
      "name": "hide",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires after the component is hidden.\nFires after the component is hidden when calling the <a href=\"#/api/Ext.form.field.Radio-event-hide\" rel=\"Ext.form.field.Radio-event-hide\" class=\"docClass\">hide</a> method.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 600,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-hide",
      "shortDoc": "<p>Fires after the component is hidden.\nFires after the component is hidden when calling the <a href=\"#/api/Ext.form.field.Radio-event-hide\" rel=\"Ext.form.field.Radio-event-hide\" class=\"docClass\">hide</a> method.</p>\n"
    },
    {
      "tagname": "event",
      "name": "move",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires after the component is moved.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "x",
          "doc": "<p>The new x position</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "y",
          "doc": "<p>The new y position</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 655,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-move",
      "shortDoc": "<p>Fires after the component is moved.</p>\n"
    },
    {
      "tagname": "event",
      "name": "removed",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires when a component is removed from an Ext.container.Container</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.container.Container",
          "name": "ownerCt",
          "doc": "<p>Container which holds the component</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 607,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-removed",
      "shortDoc": "<p>Fires when a component is removed from an Ext.container.Container</p>\n"
    },
    {
      "tagname": "event",
      "name": "render",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires after the component markup is <a href=\"#/api/Ext.form.field.Radio-property-rendered\" rel=\"Ext.form.field.Radio-property-rendered\" class=\"docClass\">rendered</a>.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 621,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-render",
      "shortDoc": "<p>Fires after the component markup is <a href=\"#/api/Ext.form.field.Radio-property-rendered\" rel=\"Ext.form.field.Radio-property-rendered\" class=\"docClass\">rendered</a>.</p>\n"
    },
    {
      "tagname": "event",
      "name": "resize",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires after the component is resized.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "adjWidth",
          "doc": "<p>The box-adjusted width that was set</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "adjHeight",
          "doc": "<p>The box-adjusted height that was set</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 647,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-resize",
      "shortDoc": "<p>Fires after the component is resized.</p>\n"
    },
    {
      "tagname": "event",
      "name": "show",
      "member": "Ext.AbstractComponent",
      "doc": "<p>Fires after the component is shown when calling the <a href=\"#/api/Ext.form.field.Radio-event-show\" rel=\"Ext.form.field.Radio-event-show\" class=\"docClass\">show</a> method.</p>\n",
      "params": [
        {
          "type": "Ext.Component",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractComponent.js",
      "linenr": 587,
      "html_filename": "AbstractComponent.html",
      "href": "AbstractComponent.html#Ext-AbstractComponent-event-show",
      "shortDoc": "<p>Fires after the component is shown when calling the <a href=\"#/api/Ext.form.field.Radio-event-show\" rel=\"Ext.form.field.Radio-event-show\" class=\"docClass\">show</a> method.</p>\n"
    },
    {
      "tagname": "event",
      "name": "specialkey",
      "member": "Ext.form.field.Base",
      "doc": "<p>Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed.\nTo handle other keys see <a href=\"#/api/Ext.panel.Panel--keys\" rel=\"Ext.panel.Panel--keys\" class=\"docClass\">Ext.panel.Panel.keys</a> or <a href=\"#/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a>.\nYou can check <a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">Ext.EventObject.getKey</a> to determine which key was pressed.\nFor example:</p>\n\n<pre><code>var form = new Ext.form.Panel({\n    ...\n    items: [{\n            fieldLabel: 'Field 1',\n            name: 'field1',\n            allowBlank: false\n        },{\n            fieldLabel: 'Field 2',\n            name: 'field2',\n            listeners: {\n                specialkey: function(field, e){\n                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,\n                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN\n                    if (e.<a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">getKey()</a> == e.ENTER) {\n                        var form = field.up('form').getForm();\n                        form.submit();\n                    }\n                }\n            }\n        }\n    ],\n    ...\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Ext.form.field.Base",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Base.js",
      "linenr": 252,
      "html_filename": "Base.html",
      "href": "Base.html#Ext-form-field-Base-event-specialkey",
      "shortDoc": "Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed.\nTo handle other keys see Ext.pan..."
    },
    {
      "tagname": "event",
      "name": "staterestore",
      "member": "Ext.state.Stateful",
      "doc": "<p>Fires after the state of the object is restored.</p>\n",
      "params": [
        {
          "type": "Ext.state.Stateful",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "state",
          "doc": "<p>The hash of state values returned from the StateProvider. This is passed\nto <b><tt>applyState</tt></b>. By default, that simply copies property values into this\nobject. The method maybe overriden to provide custom state restoration.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Stateful.js",
      "linenr": 112,
      "html_filename": "Stateful.html",
      "href": "Stateful.html#Ext-state-Stateful-event-staterestore",
      "shortDoc": "<p>Fires after the state of the object is restored.</p>\n"
    },
    {
      "tagname": "event",
      "name": "statesave",
      "member": "Ext.state.Stateful",
      "doc": "<p>Fires after the state of the object is saved to the configured state provider.</p>\n",
      "params": [
        {
          "type": "Ext.state.Stateful",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "state",
          "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Stateful.js",
      "linenr": 133,
      "html_filename": "Stateful.html",
      "href": "Stateful.html#Ext-state-Stateful-event-statesave",
      "shortDoc": "<p>Fires after the state of the object is saved to the configured state provider.</p>\n"
    },
    {
      "tagname": "event",
      "name": "validitychange",
      "member": "Ext.form.field.Field",
      "doc": "<p>Fires when a change in the field's validity is detected.</p>\n",
      "params": [
        {
          "type": "Ext.form.field.Field",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "isValid",
          "doc": "<p>Whether or not the field is now valid</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 87,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-event-validitychange",
      "shortDoc": "<p>Fires when a change in the field's validity is detected.</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Radio.js",
  "linenr": 1,
  "html_filename": "Radio.html",
  "href": "Radio.html#Ext-form-field-Radio",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": true,
  "superclasses": [
    "Ext.AbstractComponent",
    "Ext.Component",
    "Ext.form.field.Base",
    "Ext.form.field.Checkbox"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [
    "Ext.form.Labelable",
    "Ext.form.field.Field",
    "Ext.util.Floating",
    "Ext.util.Observable",
    "Ext.util.Animate",
    "Ext.state.Stateful"
  ]
});