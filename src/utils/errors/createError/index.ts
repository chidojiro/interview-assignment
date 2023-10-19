import FormattedErrorBase from '../FormattedErrorBase';

// Private typing, not visible anywhere else.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormattedErrorBaseDescendant = new (...args: any[]) => FormattedErrorBase;

/**
 * Typesafe utility for error instantiation and logging
 *
 * @param Cls A class which extends FormattedErrorBase
 * @param args Arguments of Cls's constructor
 * @returns instance of Cls
 */
const createError = <C extends FormattedErrorBaseDescendant>(Cls: C, ...args: ConstructorParameters<C>) => {
  const instance = new Cls(...args);
  if (instance.shouldLog()) {
    instance.logError();
  }

  instance.logSplunkError(args[0]);

  return instance as InstanceType<C>;
};

export default createError;
