/**
 * password-visibility.js
 * Script toggles between text and password 'bullets' on input field
 */

/**
* Declare constants
*/
const attributeBase = 'data-rs-password-visibility';

export class PasswordVisibility {

	constructor(element) {
		this.element = element;
		this.triggerElement = this.element.querySelector(`[${this.attributes.trigger}]`);
        this.input = this.element.querySelector('input[type=password]');
		this.addEventHandlers();
	}

	/**
	* Declare attribute constants
	*/
	get attributes() {
		return {
			trigger: `${attributeBase}-trigger`
		}
	}

	/**
	* Declare classes
	*/
	get classes() {
		return {
			isPasswordVisible: 'is-password-visible'
		}
	}

	/**
	* Declare types
	*/
	get types() {
		return {
			text: 'text',
			password: 'password'
		}
	}

	/**
	* Add event handlers
	*/
	addEventHandlers() {
		this.triggerElement.addEventListener('keyup', () => {
			this.toggleVisibility();
		});
		this.triggerElement.addEventListener('click', () => {
			this.toggleVisibility();
		});
	}

	/**
	* Toggle visibility
	*/
	toggleVisibility() {
		const currentType = this.input.getAttribute('type');
		if ([this.types.password, this.types.text].indexOf(currentType.toLowerCase()) > -1) {
			const newType = currentType.toLowerCase() === this.types.password
				? this.types.text
				: this.types.password;
			this.input.setAttribute('type', newType);
			this.triggerElement.classList.toggle(this.classes.isPasswordVisible);
		}
    }

	/**
	 * Get selector
	 */
	static getSelector() {
		return `[${attributeBase}]`;
	}
}
