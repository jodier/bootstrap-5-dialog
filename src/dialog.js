/* bootstrap-5-dialog 1.0.0, dialog boxes for Bootstrap 5. https://github.com/jodier/bootstrap-5-dialog
 * (c) 2021 Jérôme Odier
 */

/*--------------------------------------------------------------------------------------------------------------------*/

'use strict';

import __bootstrap_alert_modal from './dialog_alert.js';
import __bootstrap_confirm_modal from './dialog_confirm.js';
import __bootstrap_prompt_modal from './dialog_prompt.js';

/*--------------------------------------------------------------------------------------------------------------------*/

document.body.innerHTML = document.body.innerHTML
                          +
                          __bootstrap_alert_modal()
                          +
                          __bootstrap_confirm_modal()
                          +
                          __bootstrap_prompt_modal()
;

/*--------------------------------------------------------------------------------------------------------------------*/

bootstrap.Dialog = {

	/*----------------------------------------------------------------------------------------------------------------*/

	_modal_alert: new bootstrap.Modal(document.getElementById('A5DFAFD2_AC27_BAAE_F80B_09012630F732')),
	_modal_confirm: new bootstrap.Modal(document.getElementById('DC225400_E3D7_B3D1_CB76_DA2E915C1BA8')),
	_modal_prompt: new bootstrap.Modal(document.getElementById('FA27DE47_B5D8_1DDE_9D31_818CF08C3264')),

	/*----------------------------------------------------------------------------------------------------------------*/

	_okay: () => {},
	_cancel: () => {},

	/*----------------------------------------------------------------------------------------------------------------*/

	_trigger: function(mode, q)
	{
		/**/ if(mode === 0)
		{
			this._modal_alert.hide();

			this._okay();
		}
		else if(mode === 1)
		{
			this._modal_confirm.hide();

			if(q) {
				this._okay();
			} else {
				this._cancel();
			}
		}
		else if(mode === 2)
		{
			this._modal_prompt.hide();

			if(q) {
				this._okay(document.getElementById('BE21C0E4_17C8_81C1_23C4_943DC0497612').value);
			} else {
				this._cancel(document.getElementById('BE21C0E4_17C8_81C1_23C4_943DC0497612').value);
			}
		}
	},

	/*----------------------------------------------------------------------------------------------------------------*/

	alert: function(message, settings)
	{
		let title = '&nbsp;';
		let okayLabel = 'Close';

		this._okay = () => {};

		if(settings)
		{
			if('title' in settings) {
				title = settings['settings'];
			}

			if('okayLabel' in settings) {
				okayLabel = settings['okayLabel'];
			}

			if('okay' in settings) {
				this._okay = settings['okay'];
			}
		}

		document.getElementById('ED71E448_64C1_AF42_4276_E41BAA4C8E0A').innerHTML = (okayLabel || '');
		document.getElementById('EE761A74_B773_521C_27F1_46A573032B8D').innerHTML = (  title   || '');
		document.getElementById('A80227E3_9C1B_0F2A_4584_DE76480E6CD1').innerHTML = ( message  || '');

		this._modal_alert.show();
	},

	/*----------------------------------------------------------------------------------------------------------------*/

	confirm: function(message, settings)
	{
		let title = '&nbsp;';
		let okayLabel = 'Okay';
		let cancelLabel = 'Cancel';

		this._okay = () => {};
		this._cancel = () => {};

		if(settings)
		{
			if('title' in settings) {
				title = settings['settings'];
			}

			if('okayLabel' in settings) {
				okayLabel = settings['okayLabel'];
			}

			if('cancelLabel' in settings) {
				cancelLabel = settings['cancelLabel'];
			}

			if('okay' in settings) {
				this._okay = settings['okay'];
			}

			if('cancel' in settings) {
				this._cancel = settings['cancel'];
			}
		}

		document.getElementById('A41CEA51_4413_16BC_9E4C_977D3A350062').innerHTML = ( okayLabel  || '');
		document.getElementById('DF61835E_6EAA_ABC2_24B6_EB39EFFE46CB').innerHTML = (cancelLabel || '');
		document.getElementById('C07AB38C_1079_1AEB_3901_EF4EE008E5B4').innerHTML = (   title    || '');
		document.getElementById('A5C212BA_7A31_78FD_12B6_E851FCF16F64').innerHTML = (  message   || '');

		this._modal_confirm.show();
	},

	/*----------------------------------------------------------------------------------------------------------------*/

	prompt: function(message, value, settings)
	{
		let title = '&nbsp;';
		let okayLabel = 'Okay';
		let cancelLabel = 'Cancel'

		this._okay = () => {};
		this._cancel = () => {};

		if(settings)
		{
			if('title' in settings) {
				title = settings['settings'];
			}

			if('okayLabel' in settings) {
				okayLabel = settings['okayLabel'];
			}

			if('cancelLabel' in settings) {
				cancelLabel = settings['cancelLabel'];
			}

			if('okay' in settings) {
				this._okay = settings['okay'];
			}

			if('cancel' in settings) {
				this._cancel = settings['cancel'];
			}
		}

		document.getElementById('A43989C8_BCC4_E4E6_45B5_F7865F5D3891').innerHTML = ( okayLabel  || '');
		document.getElementById('C77F3CCA_CD38_CF08_F6F8_72E81546F8F5').innerHTML = (cancelLabel || '');
		document.getElementById('E9205E3C_C829_B3E2_3BAA_20A0E310F53A').innerHTML = (   title    || '');
		document.getElementById('C892D8E2_D20D_7320_1642_DA7E1270DAB6').innerHTML = (  message   || '');
		document.getElementById('BE21C0E4_17C8_81C1_23C4_943DC0497612').  value   = (   value    || '');

		this._modal_prompt.show();
	},

	/*----------------------------------------------------------------------------------------------------------------*/
};

/*--------------------------------------------------------------------------------------------------------------------*/