"use strict";var WPFormsElementor=window.WPFormsElementor||function(n,i){var l={},s={init:function(){s.events()},events:function(){i(n).on("elementor/frontend/init",function(e,t,o){elementor.channels.editor.on("elementorWPFormsAddFormBtnClick",s.addFormBtnClick),elementorFrontend.hooks.addAction("frontend/element_ready/wpforms.default",s.widgetPreviewEvents),elementor.hooks.addAction("panel/open_editor/widget/wpforms",s.widgetPanelOpen)})},widgetPreviewEvents:function(e){e.on("click",".wpforms-btn",s.addFormBtnClick).on("click",".wpforms-admin-no-forms-container a",s.clickLinkInPreview).on("change",".wpforms-elementor-form-selector select",s.selectFormInPreview).on("click mousedown focus keydown submit",".wpforms-container *",s.disableEvents),s.updateSameForms(e)},updateSameForms:function(e){var t=e.data("id"),o=e.find(".wpforms-container"),n=o.html(),r=o.attr("id");e.closest(".elementor-inner").find(".elementor-widget-wpforms:not(.elementor-element-"+t+")").each(function(){var e=i(this).find(".wpforms-container");e.attr("id")===r&&e.html(n)})},widgetPanelOpen:function(e,t){l.widgetId=t.attributes.id,l.formId=t.attributes.settings.attributes.form_id,s.widgetPanelInit(e),s.widgetPanelObserver.init(e)},widgetPanelInit:function(e){var t=e.$el.find(".elementor-control.elementor-control-form_id"),o=t.find("select"),n=e.$el.find(".elementor-control.elementor-control-add_form_notice"),r=e.$el.find(".elementor-control.elementor-control-test_form_notice");l.formSelectOptions&&o.html(l.formSelectOptions),l.formId&&""!==l.formId&&o.val(l.formId),0<o.find("option").length?n.hide():(t.hide(),r.hide()),0<parseInt(o.val(),10)&&r.show(),e.$el.find(".elementor-control.elementor-control-form_id").on("change","select",function(){l.formId=i(this).val()}),e.$el.find(".elementor-control.elementor-control-edit_form").on("click","a",s.editFormLinkClick)},widgetPanelObserver:{init:function(e){var t;l.observerWidgetId!==l.widgetId&&(void 0!==l.observer&&"function"==typeof l.observer.disconnect&&l.observer.disconnect(),t={targetNode:e.$el.find("#elementor-panel-content-wrapper")[0],config:{childList:!0,subtree:!0,attributes:!0}},s.widgetPanelObserver.panel=e,t.observer=new MutationObserver(s.widgetPanelObserver.callback),t.observer.observe(t.targetNode,t.config),l.observerWidgetId=l.widgetId,l.observer=t.observer)},callback:function(e){var t,o,n=!1;for(o in e)if("childList"===(t=e[o]).type&&0<t.addedNodes.length&&(n=s.widgetPanelObserver.callbackMutationChildList(t)),n="attributes"===t.type?s.widgetPanelObserver.callbackMutationAttributes(t):n)return},callbackMutationChildList:function(e){var t,o,n=e.addedNodes||[];for(o in n)if((t=n[o])&&t.classList&&t.classList.contains("elementor-control-section_form"))return s.widgetPanelInit(s.widgetPanelObserver.panel),!0;return!1},callbackMutationAttributes:function(e){return!!(e.target&&e.target.classList&&e.target.classList.contains("elementor-tab-control-content"))&&(s.widgetPanelInit(s.widgetPanelObserver.panel),!0)}},editFormLinkClick:function(e){s.findFormSelector(e),s.openBuilderPopup(l.$select.val())},addFormBtnClick:function(e){s.findFormSelector(e),s.openBuilderPopup(0)},findFormSelector:function(e){l.$select=e&&e.$el?e.$el.closest("#elementor-controls").find('select[data-setting="form_id"]'):n.parent.jQuery('#elementor-controls select[data-setting="form_id"]')},selectFormInPreview:function(){l.formId=i(this).val(),s.findFormSelector(),l.$select.val(l.formId).trigger("change")},clickLinkInPreview:function(e){e.target&&e.target.href&&n.open(e.target.href,"_blank","noopener,noreferrer")},disableEvents:function(e){return e.preventDefault(),e.stopImmediatePropagation(),!1},openBuilderPopup:function(e){var t;e=parseInt(e||"0",10),l.$popup||(o=n.parent.jQuery("#elementor-editor-wrapper"),t=wp.template("wpforms-builder-elementor-popup"),o.after(t()),l.$popup=o.siblings("#wpforms-builder-elementor-popup"));var o=0<e?wpformsElementorVars.edit_form_url+e:wpformsElementorVars.add_form_url,e=l.$popup.find("iframe");s.builderCloseButtonEvent(),e.attr("src",o),l.$popup.fadeIn()},builderCloseButtonEvent:function(){l.$popup.off("wpformsBuilderInPopupClose").on("wpformsBuilderInPopupClose",function(e,t,o){"saved"===t&&o&&s.refreshFormsList(null,o)})},refreshFormsList:function(e,t){e&&e.preventDefault(),s.findFormSelector();e={action:"wpforms_admin_get_form_selector_options",nonce:wpformsElementorVars.nonce};l.$select.prop("disabled",!0),i.post(wpformsElementorVars.ajax_url,e).done(function(e){e.success?(l.formSelectOptions=e.data,l.$select.html(e.data),t&&(l.formId=t),l.formId&&""!==l.formId&&l.$select.val(l.formId).trigger("change")):s.debug(e)}).fail(function(e,t){s.debug({xhr:e,textStatus:t})}).always(function(){var e,t;!l.$select||l.$select.length<1||(l.$select.prop("disabled",!1),e=l.$select.find("option"),t=l.$select.closest(".elementor-control"),0<e.length&&(t.show(),t.siblings(".elementor-control-add_form_notice").hide()),0<parseInt(l.$select.val(),10)&&t.siblings(".elementor-control-test_form_notice").show())})},debug:function(e){s.isDebug()&&console.log("WPForms Debug:",e)},isDebug:function(){return n.top.location.hash&&"#wpformsdebug"===n.top.location.hash||wpformsElementorVars.debug}};return s}((document,window),jQuery);WPFormsElementor.init();