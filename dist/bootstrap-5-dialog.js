/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/dialog_alert.js
/*--------------------------------------------------------------------------------------------------------------------*/
function __bootstrap_alert_modal() {
  return "<div class=\"modal\" tabindex=\"-1\" id=\"A5DFAFD2_AC27_BAAE_F80B_09012630F732\" style=\"z-index: 1061;\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header px-3 py-1\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"EE761A74_B773_521C_27F1_46A573032B8D\"></h5>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body px-3 py-3\">\n\t\t\t\t<span id=\"A80227E3_9C1B_0F2A_4584_DE76480E6CD1\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer px-3 py-1\">\n\t\t\t\t<button class=\"btn btn-outline-secondary\" type=\"button\" id=\"ED71E448_64C1_AF42_4276_E41BAA4C8E0A\" onclick=\"bootstrap.Dialog._trigger(0, true);\"></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
}
/*--------------------------------------------------------------------------------------------------------------------*/
;// CONCATENATED MODULE: ./src/dialog_confirm.js
/*--------------------------------------------------------------------------------------------------------------------*/
function __bootstrap_confirm_modal() {
  return "<div class=\"modal\" tabindex=\"-1\" id=\"DC225400_E3D7_B3D1_CB76_DA2E915C1BA8\" style=\"z-index: 1061;\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header px-3 py-1\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"C07AB38C_1079_1AEB_3901_EF4EE008E5B4\"></h5>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body px-3 py-3\">\n\t\t\t\t<span id=\"A5C212BA_7A31_78FD_12B6_E851FCF16F64\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer px-3 py-1\">\n\t\t\t\t<button class=\"btn btn-outline-danger\" type=\"button\" id=\"DF61835E_6EAA_ABC2_24B6_EB39EFFE46CB\" onclick=\"bootstrap.Dialog._trigger(1, false);\">Cancel</button>\n\t\t\t\t<button class=\"btn btn-outline-success\" type=\"button\" id=\"A41CEA51_4413_16BC_9E4C_977D3A350062\" onclick=\"bootstrap.Dialog._trigger(1, true);\">Okay</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
}
/*--------------------------------------------------------------------------------------------------------------------*/
;// CONCATENATED MODULE: ./src/dialog_prompt.js
/*--------------------------------------------------------------------------------------------------------------------*/
function __bootstrap_prompt_modal() {
  return "<div class=\"modal\" tabindex=\"-1\" id=\"FA27DE47_B5D8_1DDE_9D31_818CF08C3264\" style=\"z-index: 1061;\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header px-3 py-1\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"E9205E3C_C829_B3E2_3BAA_20A0E310F53A\"></h5>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body px-3 py-3\">\n\t\t\t\t<div>\n\t\t\t\t\t<label class=\"form-label\" for=\"BE21C0E4_17C8_81C1_23C4_943DC0497612\" id=\"C892D8E2_D20D_7320_1642_DA7E1270DAB6\"></label>\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"BE21C0E4_17C8_81C1_23C4_943DC0497612\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer px-3 py-1\">\n\t\t\t\t<button class=\"btn btn-outline-danger\" type=\"button\" id=\"C77F3CCA_CD38_CF08_F6F8_72E81546F8F5\" onclick=\"bootstrap.Dialog._trigger(2, false);\">Cancel</button>\n\t\t\t\t<button class=\"btn btn-outline-success\" type=\"button\" id=\"A43989C8_BCC4_E4E6_45B5_F7865F5D3891\" onclick=\"bootstrap.Dialog._trigger(2, true);\">Okay</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
}
/*--------------------------------------------------------------------------------------------------------------------*/
;// CONCATENATED MODULE: ./src/dialog.js
/* bootstrap-5-dialog 1.0.0, dialog boxes for Bootstrap 5. https://github.com/jodier/bootstrap-5-dialog
 * (c) 2021 Jérôme Odier
 */

/*--------------------------------------------------------------------------------------------------------------------*/



/*--------------------------------------------------------------------------------------------------------------------*/

document.body.innerHTML = document.body.innerHTML + __bootstrap_alert_modal() + __bootstrap_confirm_modal() + __bootstrap_prompt_modal();
/*--------------------------------------------------------------------------------------------------------------------*/

bootstrap.Dialog = {
  /*----------------------------------------------------------------------------------------------------------------*/
  _modal_alert: new bootstrap.Modal(document.getElementById('A5DFAFD2_AC27_BAAE_F80B_09012630F732')),
  _modal_confirm: new bootstrap.Modal(document.getElementById('DC225400_E3D7_B3D1_CB76_DA2E915C1BA8')),
  _modal_prompt: new bootstrap.Modal(document.getElementById('FA27DE47_B5D8_1DDE_9D31_818CF08C3264')),

  /*----------------------------------------------------------------------------------------------------------------*/
  _okay: function _okay() {},
  _cancel: function _cancel() {},

  /*----------------------------------------------------------------------------------------------------------------*/
  _trigger: function _trigger(mode, q) {
    /**/
    if (mode === 0) {
      this._modal_alert.hide();

      this._okay();
    } else if (mode === 1) {
      this._modal_confirm.hide();

      if (q) {
        this._okay();
      } else {
        this._cancel();
      }
    } else if (mode === 2) {
      this._modal_prompt.hide();

      if (q) {
        this._okay(document.getElementById('BE21C0E4_17C8_81C1_23C4_943DC0497612').value);
      } else {
        this._cancel(document.getElementById('BE21C0E4_17C8_81C1_23C4_943DC0497612').value);
      }
    }
  },

  /*----------------------------------------------------------------------------------------------------------------*/
  alert: function alert(message, settings) {
    var title = '&nbsp;';
    var okayLabel = 'Close';

    this._okay = function () {};

    if (settings) {
      if ('title' in settings) {
        title = settings['settings'];
      }

      if ('okayLabel' in settings) {
        okayLabel = settings['okayLabel'];
      }

      if ('okay' in settings) {
        this._okay = settings['okay'];
      }
    }

    document.getElementById('ED71E448_64C1_AF42_4276_E41BAA4C8E0A').innerHTML = okayLabel || '';
    document.getElementById('EE761A74_B773_521C_27F1_46A573032B8D').innerHTML = title || '';
    document.getElementById('A80227E3_9C1B_0F2A_4584_DE76480E6CD1').innerHTML = message || '';

    this._modal_alert.show();
  },

  /*----------------------------------------------------------------------------------------------------------------*/
  confirm: function confirm(message, settings) {
    var title = '&nbsp;';
    var okayLabel = 'Okay';
    var cancelLabel = 'Cancel';

    this._okay = function () {};

    this._cancel = function () {};

    if (settings) {
      if ('title' in settings) {
        title = settings['settings'];
      }

      if ('okayLabel' in settings) {
        okayLabel = settings['okayLabel'];
      }

      if ('cancelLabel' in settings) {
        cancelLabel = settings['cancelLabel'];
      }

      if ('okay' in settings) {
        this._okay = settings['okay'];
      }

      if ('cancel' in settings) {
        this._cancel = settings['cancel'];
      }
    }

    document.getElementById('A41CEA51_4413_16BC_9E4C_977D3A350062').innerHTML = okayLabel || '';
    document.getElementById('DF61835E_6EAA_ABC2_24B6_EB39EFFE46CB').innerHTML = cancelLabel || '';
    document.getElementById('C07AB38C_1079_1AEB_3901_EF4EE008E5B4').innerHTML = title || '';
    document.getElementById('A5C212BA_7A31_78FD_12B6_E851FCF16F64').innerHTML = message || '';

    this._modal_confirm.show();
  },

  /*----------------------------------------------------------------------------------------------------------------*/
  prompt: function prompt(message, value, settings) {
    var title = '&nbsp;';
    var okayLabel = 'Okay';
    var cancelLabel = 'Cancel';

    this._okay = function () {};

    this._cancel = function () {};

    if (settings) {
      if ('title' in settings) {
        title = settings['settings'];
      }

      if ('okayLabel' in settings) {
        okayLabel = settings['okayLabel'];
      }

      if ('cancelLabel' in settings) {
        cancelLabel = settings['cancelLabel'];
      }

      if ('okay' in settings) {
        this._okay = settings['okay'];
      }

      if ('cancel' in settings) {
        this._cancel = settings['cancel'];
      }
    }

    document.getElementById('A43989C8_BCC4_E4E6_45B5_F7865F5D3891').innerHTML = okayLabel || '';
    document.getElementById('C77F3CCA_CD38_CF08_F6F8_72E81546F8F5').innerHTML = cancelLabel || '';
    document.getElementById('E9205E3C_C829_B3E2_3BAA_20A0E310F53A').innerHTML = title || '';
    document.getElementById('C892D8E2_D20D_7320_1642_DA7E1270DAB6').innerHTML = message || '';
    document.getElementById('BE21C0E4_17C8_81C1_23C4_943DC0497612').value = value || '';

    this._modal_prompt.show();
  }
  /*----------------------------------------------------------------------------------------------------------------*/

};
/*--------------------------------------------------------------------------------------------------------------------*/
/******/ })()
;