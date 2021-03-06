'use strict';

/**
 * This function evaluates if all the parameters are empty
 * @memberof variadic
 * @author jhowardjr
 * @param {...*} params - One or more parameters.
 */
exports.isEmpty = (...params) => {
  const invalid = params.some((param) => {
    switch (typeof param) {
      case 'string':
        if (param.trim().length > 0) return true;
        break;
      case 'number':
        if (param !== 0) return true;
        break;
      case 'object':
        if (param !== null && Object.keys(param).length > 0) return true;
        break;
      case 'boolean':
        if (param) return true;
        break;

        // no default
    }
    return false;
  });
  return !invalid;
};
