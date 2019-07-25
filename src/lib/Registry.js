import { _get, _merge } from "./Object";
import { registry as defaultRegistry } from "../templates";

class Registry {
  constructor(registry = {}) {
    this._registry = _merge({}, defaultRegistry, registry);
  }

  getComponent(type, template) {
    let foundTemplate = false;

    if (Array.isArray(template)) {
      template.forEach(key => {
        let result = _get(this._registry, [type, key]);
        if (result) foundTemplate = result;
      });
    } else {
      foundTemplate = _get(this._registry, [type, template], false);
    }

    if (template && !foundTemplate) {
      console.warn(`Missing template: ${template}.`);
      foundTemplate = _get(this._registry, ["system", "missing-template"], false);
    }

    return foundTemplate;
  }
}

export default Registry;
