/**
 * password-validator.js
 * Script validates password and shows checklist
 */

/**
* Declare constants
*/
const attributeBase = 'data-rs-password-validator';

export class PasswordValidator {

	constructor(element) {
		this.element = element;
		this.input = this.element.querySelector('input[type="password"]');
		this.checklist = this.getChecklist;
		this.addEventHandlers();
	}

	/**
	* Declare attribute constants
	*/
	get attributes() {
		return {
			validate: `${attributeBase}-validate`,
			checklist: `${attributeBase}-checklist`
		}
	}

	/**
	* Declare classes
	*/
	get classes() {
		return {
			valid: 'valid'
		}
	}

	/**
	* Declare validator
	*/
	get validators() {
		return {
			minSign: /.{8,}/,
			useUpper: /[A-Z]/,
			useDigit: /[0-9]/,
			useChar: /[a-z]/,
			noSymbol: /^([^ /\\,#&<>:';"?=%]+)$/
		}
	}

	/**
	* Get checklist
	*/
	get getChecklist() {
		const checklist = [];
		const elements = this.element.parentNode.querySelectorAll(`[${this.attributes.validate}]`);

		for (const item of elements) {
			checklist.push({
				'name': item.dataset.rsPasswordValidatorValidate,
				'element': item
			});
		}

		return checklist;
	}

	/**
	* Add event handlers
	*/
	addEventHandlers() {
		this.input.addEventListener('keyup', () => {
			this.validateInput();
		});
		this.input.addEventListener('blur', () => {
			this.validateInput();
		});
		this.input.addEventListener('focus', () => {
			this.showChecklist();
		});
	}

	/**
	* Validate input
	*/
	validateInput() {
		for (const check of this.checklist) {
			const isValid = this.input.value.match(this.validators[check.name]);
			if (isValid) {
				check.element.classList.add(this.classes.valid);
			}
			else {
				check.element.classList.remove(this.classes.valid);
			}
		}
	}

	/**
	* Show checklist
	*/
	showChecklist() {
		const checklistElement = this.element.parentNode.querySelector(`[${this.attributes.checklist}]`);
		checklistElement.removeAttribute('hidden');
	}

	/**
	 * Get selector
	 */
	static getSelector() {
		return `[${attributeBase}]`;
	}
}
