/**
 * modal.js
 * Script to toggle modal
 */

import ElementHelpers from "./element-helpers";

/**
 * Declare constants
 */
const attributeBase = 'data-rs-modal';

export class Modal {

	constructor(element) {
		this.element = element;
		// this.openTrigger = ElementHelpers.getElementByAttribute(this.attributes.trigger, this.element.getAttribute(attributeBase));
		this.closeTrigger = ElementHelpers.getElementByAttributeWithinElement(this.element, this.attributes.closeTrigger);
		this.doNotCloseOnClickOverlay = ElementHelpers.getElementByAttributeWithinElement(this.element, this.attributes.doNotCloseOnClickOverlay);
		this.dialog = ElementHelpers.getElementByAttributeWithinElement(this.element, this.attributes.dialog);
		this.main = ElementHelpers.getElementByAttributeWithinElement(this.element, this.attributes.main);
		this.header = ElementHelpers.getElementByAttributeWithinElement(this.element, this.attributes.header);
		this.footer = ElementHelpers.getElementByAttributeWithinElement(this.element, this.attributes.footer);
		this.disableHistory = this.element.getAttribute(this.attributes.disableHistory) !== null;
		this.popupDelay = this.element.getAttribute(this.attributes.popupDelay);
		this.defaultPopupDelay = 5;
		this.scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		this.scrollPosition = 3;
		this.bodyMarginTop = Modal.initializeBodyMarginTop();
		this.addEventHandlers();
		this.handleDividers();
		this.handleQueryStringParameters();
		this.initializePopup();
	}

	/**
	* Declare classes
	*/
	get classes() {
		return {
			modalActive: 'modal--active',
			modalOpen: 'modal-open',
			modalHeaderDivider: 'divider',
			modalHeaderDividerIn: 'modal__header--divider-in',
			modalHeaderDividerOut: 'modal__header--divider-out',
			modalMainOverflow: 'modal__main--overflow',
			divider: 'divider',
			dividerTop: 'divider--top'
		}
	}

	/**
	 * Declare attribute constants
	 */
	get attributes() {
		return {
			trigger: `${attributeBase}-trigger`,
			popupDelay: `${attributeBase}-popup-delay`,
			closeTrigger: `${attributeBase}-close-trigger`,
			dialog: `${attributeBase}-dialog`,
			main: `${attributeBase}-main`,
			doNotCloseOnClickOverlay: `${attributeBase}-do-not-close-on-click-overlay`,
			header: `${attributeBase}-header`,
			footer: `${attributeBase}-footer`,
			disableHistory: `${attributeBase}-disable-history`,
			modalOpen: 'modal_open',
			hidden: 'hidden'
		}
	}

	/**
	 * Declare key codes
	 */
	get keyCodes() {
		return {
			Escape: 'Escape'
		}
	}

	/**
	 * Initalize body margin top
	 */
	static initializeBodyMarginTop() {
		const marginTop = document.body.style.marginTop;
		return !marginTop ? 0 : marginTop.slice(0, marginTop.length - 2);
	}

	/**
	 * Add event handlers
	 */
	addEventHandlers() {
		// toggle modal on click trigger
		// this.openTrigger.addEventListener('click', (event) => {
		// 	event.preventDefault();
		// 	this.scrollPosition = document.documentElement.scrollTop;
		// 	this.toggleModal(!this.disableHistory);
		// });
		// close/toggle modal on click close trigger
		this.closeTrigger.addEventListener('click', (event) => {
			event.preventDefault();
			this.closeModal(!this.disableHistory);
			// document.body.style.marginTop = `${this.bodyMarginTop}px`;
			// window.scrollTo(0, this.scrollPosition);
		});
		// if clicked outside modal/on overlay close/toggle modal
		this.element.addEventListener('click', (clickEvent) => {
			if (!this.doNotCloseOnClickOverlay && clickEvent.target !== this.dialog && !this.dialog.contains(clickEvent.target)) {
				this.closeModal(!this.disableHistory);
				// document.body.style.marginTop = `${this.bodyMarginTop}px`;
				// window.scrollTo(0, this.scrollPosition);
			}
		});
		// on resize, handle dividers of modal
		window.addEventListener('resize', () => {
			this.handleDividers();
		});
		// on scroll, check position to set/unset dividers
		this.main.addEventListener('scroll', () => {
			this.checkPosition();
		}, {passive: true});
		// on popstate event (i.e. back button in browser), handle querystring parameters
		window.addEventListener('popstate', () => {
			this.handleQueryStringParameters(false);
		});
		// handle key down event - close modal if escape is pressed
		document.addEventListener('keydown', (keydownEvent) => {
			this.handleButtonKeys(keydownEvent);
		})
	}

	/**
	 * Toggle modal
	 */
	toggleModal(changePushState = true) {
		this.element.classList.contains(this.classes.modalActive) ? this.closeModal(changePushState) : this.openModal(changePushState);
	}


	/**
	 * Close modal - closes modal, set styling and edit pushstate
	 * @param {boolean} changePushState - determines if history push state should be adjusted
	 */
	closeModal(changePushState) {
		// remove width of scrollbar to body and modal
		document.body.style.paddingRight = '0px';
		this.element.style.paddingRight = '';

		// if changePushState is true, remove querystring parameters from url
		if (changePushState) {
			window.history.pushState({}, '', window.location.pathname);
		}
		document.querySelector('html').classList.remove(this.classes.modalOpen);
		this.element.setAttribute(this.attributes.hidden, '');
		this.element.classList.remove(this.classes.modalActive);
		var event = new Event("ModalClosed");
		this.element.dispatchEvent(event)
	}

	/**
	 * Open modal - opens modal, set styling and edit pushstate
	 * @param {boolean} changePushState - determines if history push state should be adjusted
	 */
	openModal(changePushState) {

		// document.body.style.marginTop = `${(this.bodyMarginTop - this.scrollPosition)}px`;
		// document.body.style.paddingRight = `${this.scrollbarWidth}px`;
		// this.element.style.paddingRight = `${this.scrollbarWidth}px`;

		// if changePushState is true, add querystring parameters to url
		if (changePushState) {
			window.history.pushState({}, '', `${window.location.pathname}?${this.attributes.modalOpen}=${this.element.getAttribute(attributeBase)}`);
		}
		document.querySelector('html').classList.add(this.classes.modalOpen);
		this.element.removeAttribute(this.attributes.hidden);
		this.element.classList.add(this.classes.modalActive);
	}

	/**
	 * Handle dividers - add or remove dividers
	 */
	handleDividers() {
		if (this.main.scrollHeight > this.main.offsetHeight) {
			// article element has a scrollbar, add divider classes
			this.addDivider();
		} else if (this.header && this.header.classList.contains(this.classes.divider)) {
			// article element has no scrollbar, remove divider classes
			this.removeDivider();
		}
	}

	/**
	 * Add divider - add divider classes if main content is scrollable
	 */
	addDivider() {
		this.main.classList.add(this.classes.modalMainOverflow);
		if (this.footer !== null) {
			this.footer.classList.add(this.classes.dividerTop);
		}
	}

	/**
	 * Remove divider - remove divider classes if main content is not scrollable
	 */
	removeDivider() {
		this.header.classList.remove(this.classes.divider);
		this.main.classList.remove(this.classes.modalMainOverflow);
		if (this.footer !== null) {
			this.footer.classList.remove(this.classes.dividerTop);
		}
	}

	/**
	 * Check position
	 */
	checkPosition() {
		const modalMainY = this.main.scrollTop;
		if (this.header && modalMainY > this.scrollPosition) {
			this.header.classList.add(this.classes.divider);
			this.header.classList.add(this.classes.modalHeaderDividerIn);
			this.header.classList.remove(this.classes.modalHeaderDividerOut);
		}
		if (this.header && modalMainY < this.scrollPosition || this.header && modalMainY === 0) {
			this.header.classList.add(this.classes.modalHeaderDividerOut);
			this.header.classList.remove(this.classes.divider);
			this.header.classList.remove(this.classes.modalHeaderDividerIn);
		}
	}

	/**
	 * Handle querystring parameters - check querystring parameters to show or hide modal
	 */
	handleQueryStringParameters() {
		if (window.location.href.includes(`?${this.attributes.modalOpen}`)) {
			let urlParams = new URLSearchParams(window.location.search);

			// open modal if element is equal to value in querystring parameter
			this.openModalElement = urlParams.get(this.attributes.modalOpen);
			if (this.openModalElement === this.element.getAttribute(attributeBase)) {
				this.openModal(false);
			}
		} else {
			this.closeModal(false);
		}
	}

	/**
	 * Initialize popup - if element contains popup-delay attribute => show popup with delay, if no delay found  -> set to 5 sec
	 */
	initializePopup() {
		if (this.popupDelay !== null) {
			let popupDelay = this.element.getAttribute(this.attributes.popupDelay);
			setTimeout(() => {
				this.openModal(false);
			}, (popupDelay === '' ? this.defaultPopupDelay : popupDelay) * 1000);
		}
	}

	/**
	 * Handle button keys - handle key presses escape
	 *
	 * @param {Event} event - event triggered
	 */
	handleButtonKeys(event) {
		if (event != null) {
			switch (ElementHelpers.getKeyCodeOnKeyDownEvent(event)) {
				case this.keyCodes.Escape:
					event.preventDefault();
					this.closeModal(true);
					document.body.style.marginTop = `${this.bodyMarginTop}px`;
					window.scrollTo(0, this.scrollPosition);
					break;
			}
		}
	}

	/**
	 * Get selector
	 */
	static getSelector() {
		return `[${attributeBase}]`;
	}
}
