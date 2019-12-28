import { hostComponents } from 'remax/macro';

export default function stringifyHostComponents() {
  const obj: any = {};

  [...hostComponents.keys()].forEach(key => {
    obj[key] = {
      alias: hostComponents.get(key)?.alias || {},
    };
  });

  return JSON.stringify(obj);
}
