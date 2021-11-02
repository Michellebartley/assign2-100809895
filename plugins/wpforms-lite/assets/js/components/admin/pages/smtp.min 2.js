"use strict";var WPFormsPagesSMTP=window.WPFormsPagesSMTP||function(e,l){var i={},o={init:function(){l(o.ready)},ready:function(){o.initVars(),o.events()},initVars:function(){i={$stepInstall:l("section.step-install"),$stepInstallNum:l("section.step-install .num img"),$stepSetup:l("section.step-setup"),$stepSetupNum:l("section.step-setup .num img")}},events:function(){i.$stepInstall.on("click","button",o.stepInstallClick),i.$stepSetup.on("click","button",o.gotoURL)},stepInstallClick:function(){var s=l(this),n=s.attr("data-action"),t=s.attr("data-plugin"),a="";if(!s.hasClass("disabled")){switch(n){case"activate":a="wpforms_activate_addon",s.text(wpforms_pluginlanding.activating);break;case"install":a="wpforms_install_addon",s.text(wpforms_pluginlanding.installing);break;case"goto-url":return void(e.location.href=s.attr("data-url"));default:return}s.addClass("disabled"),o.showSpinner(i.$stepInstallNum);t={action:a,nonce:wpforms_admin.nonce,plugin:t,type:"plugin"};l.post(wpforms_admin.ajax_url,t).done(function(t){o.stepInstallDone(t,s,n)}).always(function(){o.hideSpinner(i.$stepInstallNum)})}},stepInstallDone:function(t,s,n){var a;("install"===n?t.success&&t.data.is_activated:t.success)?(i.$stepInstallNum.attr("src",i.$stepInstallNum.attr("src").replace("step-1.","step-complete.")),s.addClass("grey").removeClass("button-primary").text(wpforms_pluginlanding.activated),o.stepInstallPluginStatus()):(t=(a="install"===n&&t.success&&!t.data.is_activated||"activate"===n)?wpforms_pluginlanding.manual_activate_url:wpforms_pluginlanding.manual_install_url,n=a?wpforms_pluginlanding.error_could_not_activate:wpforms_pluginlanding.error_could_not_install,a=a?wpforms_pluginlanding.plugins_page:wpforms_pluginlanding.download_now,s.removeClass("grey disabled").text(a).attr("data-action","goto-url").attr("data-url",t),s.after('<p class="error">'+n+"</p>"))},stepInstallPluginStatus:function(){var t={action:"wpforms_smtp_page_check_plugin_status",nonce:wpforms_admin.nonce};l.post(wpforms_admin.ajax_url,t).done(o.stepInstallPluginStatusDone)},stepInstallPluginStatusDone:function(t){t.success&&(i.$stepSetup.removeClass("grey"),i.$stepSetupBtn=i.$stepSetup.find("button"),i.$stepSetupBtn.removeClass("grey disabled").addClass("button-primary"),0<t.data.setup_status&&(i.$stepSetupNum.attr("src",i.$stepSetupNum.attr("src").replace("step-2.svg","step-complete.svg")),i.$stepSetupBtn.text(wpforms_pluginlanding.smtp_settings_button)))},gotoURL:function(){var t=l(this);t.hasClass("disabled")||(e.location.href=t.attr("data-url"))},showSpinner:function(t){t.siblings(".loader").removeClass("hidden")},hideSpinner:function(t){t.siblings(".loader").addClass("hidden")}};return o}((document,window),jQuery);WPFormsPagesSMTP.init();