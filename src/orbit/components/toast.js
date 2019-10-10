/**
 * toast.js
 * show toast and handle click + fadeout
 * 
 */
import ElementHelpers from '../helpers/element-helpers';

/**
* Declare constants
*/
const attributeBase = 'data-rs-toast';

export class Toast {

	constructor(element) {
		this.element = element;
		this.id = this.element.getAttribute(attributeBase);
		this.triggerElement = ElementHelpers.getElementByAttribute(this.attributes.show, this.id);
		this.addEventHandlers();
		this.closeTimeout;
	}

	/**
	* Declare attribute constants
	*/
	get attributes() {
		return {
			show: `${attributeBase}-show`
		}
	}

	/**
	* Declare classes
	*/
	get classes() {
		return {
			image: `${attributeBase}-image`,
			show: 'show',
			closableClosed: 'closable--closed',
			toastActive: 'toast--active'
		}
	}

	/**
	 * Add event handlers
	 */
	addEventHandlers() {
		// handle click trigger element
		this.triggerElement.addEventListener('click', (clickEvent) => {
			clickEvent.preventDefault();
			this.show();
			this.destroyCloseTimeout();
			this.createCloseTimeOut();
		});
		this.element.addEventListener('mouseenter', () => {
			this.destroyCloseTimeout();
		});
		this.element.addEventListener('mouseleave', () => {
			this.closeTimeout = this.createCloseTimeOut();
		});
	}

	show() {
		this.element.classList.remove(this.classes.closableClosed);
		this.element.classList.add(this.classes.show);
		this.element.classList.add(this.classes.toastActive);
	}

	hide() {
		this.element.classList.remove(this.classes.show);
		this.element.classList.remove(this.classes.toastActive);
		this.element.classList.add(this.classes.closableClosed);
	}

	/**
	 * Create close time out - closes element if pointer is not on element
	 */
	createCloseTimeOut() {
		this.closeTimeout = setTimeout(() => {
			if (!ElementHelpers.isMouseOver(this.element)) {
				this.hide();
			}
		}, 10000)
	}

	/**
	 * Destroy close time out - closes element if pointer is not on element
	 */
	destroyCloseTimeout() {
		clearTimeout(this.closeTimeout);
	}

	/**
	 * Get selector
	 */
	static getSelector() {
		return `[${attributeBase}]`;
	}
}
