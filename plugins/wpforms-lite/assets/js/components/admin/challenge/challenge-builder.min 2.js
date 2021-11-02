"use strict";var WPFormsChallenge=window.WPFormsChallenge||{};WPFormsChallenge.builder=window.WPFormsChallenge.builder||function(e,o,l){var t={init:function(){l(t.ready),l(o).on("load",function(){"function"==typeof l.ready.then?l.ready.then(t.load):t.load()})},ready:function(){t.setup(),t.events()},load:function(){-1<["started","paused"].indexOf(wpforms_challenge_admin.option.status)&&(WPFormsChallenge.core.updateTooltipUI(),t.gotoStep()),l(".wpforms-challenge").show()},setup:function(){"inited"===wpforms_challenge_admin.option.status&&(WPFormsChallenge.core.clearLocalStorage(),t.showWelcomePopup()),l("#wpforms-embed").addClass("wpforms-disabled");l.each(["#wpforms-setup-name",".wpforms-setup-title .wpforms-setup-title-after","#add-fields a i","#wpforms-builder-settings-notifications-title"],function(e,o){WPFormsChallenge.core.initTooltips(e+1,o,null)})},events:function(){l("#wpforms-challenge-welcome-builder-popup").on("click","button",t.startChallenge),l(".wpforms-challenge-step1-done").on("click",function(){WPFormsChallenge.core.stepCompleted(1)}),l("#wpforms-builder").on("wpformsBuilderSetupReady",function(){t.eventSelectTemplate()}).on("wpformsPanelSwitch wpformsPanelSectionSwitch",function(){WPFormsChallenge.core.updateTooltipUI()}),l(".wpforms-challenge-step3-done").on("click",function(){WPFormsChallenge.core.stepCompleted(3),t.gotoStep(4)}),l(e).on("click",".wpforms-challenge-step4-done",t.showEmbedPopup),l.tooltipster.on("ready",t.tooltipsterReady)},eventSelectTemplate:function(){l("#wpforms-panel-setup").off("click",".wpforms-template-select").on("click",".wpforms-template-select",function(e){t.builderTemplateSelect(this,e)})},startChallenge:function(){WPFormsChallenge.admin.saveChallengeOption({status:"started"}),WPFormsChallenge.core.initListUI("started"),l(".wpforms-challenge-popup-container").fadeOut(function(){l("#wpforms-challenge-welcome-builder-popup").hide()}),WPFormsChallenge.core.timer.run(WPFormsChallenge.core.timer.initialSecondsLeft),WPFormsChallenge.core.updateTooltipUI()},gotoStep:function(e){switch(e=e||WPFormsChallenge.core.loadStep()+1){case 1:case 2:WPFormsBuilder.panelSwitch("setup");break;case 3:WPFormsBuilder.panelSwitch("fields");break;case 4:WPFormsBuilder.panelSwitch("settings"),WPFormsBuilder.panelSectionSwitch(l(".wpforms-panel .wpforms-panel-sidebar-section-notifications"));break;case 5:t.showEmbedPopup()}},builderTemplateSelect:function(e,o){"paused"===wpforms_challenge_admin.option.status&&WPFormsChallenge.core.resumeChallenge(),WPFormsChallenge.core.loadStep()<=1?WPFormsChallenge.core.stepCompleted(2).done(WPForms.Admin.Builder.Setup.selectTemplate.bind(null,o)):WPForms.Admin.Builder.Setup.selectTemplate.bind(null,o)},tooltipsterReady:function(e){var o=l(e.origin).data("wpforms-challenge-step"),e=l("#wpforms-builder-form").data("id"),o=parseInt(o,10)||0,e=parseInt(e,10)||0;3===o&&0<e&&WPFormsChallenge.admin.saveChallengeOption({form_id:e})},showWelcomePopup:function(){l("#wpforms-challenge-welcome-builder-popup").show(),l(".wpforms-challenge-popup-container").fadeIn()},showEmbedPopup:function(){WPFormsChallenge.core.stepCompleted(4),WPFormsFormEmbedWizard.openPopup()}};return t}(document,window,jQuery),WPFormsChallenge.builder.init();