/**
 * custom-greeting.js
 * Script generates greeting based current time
 */

/**
* Declare constants
*/
const attributeBase = 'data-rs-custom-greeting';

export class CustomGreeting {

	constructor(element) {
		this.element = element;
		this.element.innerText = this.getCustomGreeting();
	}

	/**
	 * Get custom greeting
	 */
	getCustomGreeting() {
		const hours = new Date().getHours();

		if (hours < 6) {
			return 'good night';
		}
		else if (hours >= 6 && hours < 12) {
			return 'good morning';
		}
		else if (hours >= 12 && hours < 18) {
			return 'good afternoon';
		}
		else if (hours >= 18) {
			return 'good evening';
		}
	}

	/**
	 * Get selector
	 */
	static getSelector() {
		return `[${attributeBase}]`;
	}
}
