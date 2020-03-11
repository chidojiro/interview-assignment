class ElementHelpers {
  /**
   * Trigger an event on a specified element
   * @param element {Node}
   * @param eventType
   */
  static triggerEvent(element, eventType) {
    let event;

    if (typeof Event === "function") {
      event = new Event(eventType);
    } else {
      event = document.createEvent("Event");
      event.initEvent(eventType, true, true);
    }
    element.dispatchEvent(event);
  }

  /**
   * Get element by attribute and optional by attribute value
   * @param attributeName
   * @param attributeValue - optional
   */
  static getElementByAttribute(attributeName, attributeValue) {
    if (attributeValue) {
      return document.querySelector(`[${attributeName}="${attributeValue}"]`);
    } else {
      return document.querySelector(`[${attributeName}]`);
    }
  }

  /**
   * Get multiple elements by attribute and optional by attribute value
   * @param attributeName
   * @param attributeValue - optional
   */
  static getElementsByAttribute(attributeName, attributeValue) {
    if (attributeValue) {
      return document.querySelectorAll(`[${attributeName}="${attributeValue}"]`);
    } else {
      return document.querySelectorAll(`[${attributeName}]`);
    }
  }

  /**
   * Get element by attribute and optional by attribute value, within an element
   * @param element
   * @param attributeName
   * @param attributeValue - optional
   */
  static getElementByAttributeWithinElement(element, attributeName, attributeValue) {
    if (attributeValue) {
      return element.querySelector(`[${attributeName}="${attributeValue}"]`);
    } else {
      return element.querySelector(`[${attributeName}]`);
    }
  }

  /**
   * check if mouse pointer is on element
   * @param element
   */
  static isMouseOver(element) {
    return (
      Array.prototype.slice.call(element.parentElement.querySelectorAll(":hover")).filter(function() {
        return element[0] == this;
      }).length > 0
    );
  }

  /**
   * Get multiple elements by attribute and optional by attribute value, within an element
   * @param element
   * @param attributeName
   * @param attributeValue - optional
   */
  static getElementsByAttributeWithinElement(element, attributeName, attributeValue) {
    if (attributeValue) {
      return element.querySelectorAll(`[${attributeName}="${attributeValue}"]`);
    } else {
      return element.querySelectorAll(`[${attributeName}]`);
    }
  }

  /**
   * Get element by class, within an element
   * @param element
   * @param className
   */
  static getElementByClassWithinElement(element, className) {
    return element.querySelector(`.${className}`);
  }

  /**
   * get max width for mobile viewports
   */
  static maxWidthMobileViewports() {
    return 940;
  }

  /**
   * Create an event
   * @param eventType
   */
  static createEvent(eventType) {
    let event;
    if (typeof Event === "function") {
      event = new Event(eventType);
    } else {
      event = document.createEvent("Event");
      event.initEvent(eventType, true, true);
    }
    return event;
  }

  /**
   * checks if viewport is desktop size
   */
  static isDesktop() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > this.maxWidthMobileViewports();
  }

  static isIE11() {
    return navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > -1;
  }

  /**
   * Get keycode on keydown event, as fallback if event.code is not supported yet by the browser
   * @param event
   */
  static getKeyCodeOnKeyDownEvent(event) {
    let keyCode;
    if (event != null) {
      if (typeof event.code === "undefined") {
        switch (event.keyCode) {
          case 13:
            keyCode = "Enter";
            break;
          case 38:
            keyCode = "ArrowUp";
            break;
          case 40:
            keyCode = "ArrowDown";
            break;
          case 9:
            keyCode = "Tab";
            break;
          case 27:
            keyCode = "Escape";
            break;
          case 33:
            keyCode = "PageUp";
            break;
          case 34:
            keyCode = "PageDown";
            break;
          default:
            keyCode = undefined;
            break;
        }
      } else {
        keyCode = event.code;
      }
    }
    return keyCode;
  }
}

module.exports = ElementHelpers;
