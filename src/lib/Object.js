export const _get = (object, path, fallback = null) => {
    if (path.length <= 0 || !_isObject(object)) return object;
    const prop = path.shift();
    if (object.hasOwnProperty(prop)) {
      return _get(object[prop], path);
    }
    return fallback;
  };

  export const _isObject = item => {
    return item && typeof item === "object" && !Array.isArray(item);
  };

  export const _merge = (target, ...objects) => {
    if (!_isObject(target)) return target;

    while (objects.length) {
      const source = objects.shift();
      if (_isObject(source)) {
        for (let key in source) {
          if (!target.hasOwnProperty(key)) Object.assign(target, { [key]: source[key] });
          else if (_isObject(source[key])) _merge(target[key], source[key]);
          else target[key] = source[key];
        }
      }
    }

    return target;
  };
