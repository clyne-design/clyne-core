export const conditionalSpread = (spread, condition) => !!condition ? spread : (Array.isArray(spread) ? [] : {});

export const isExternalURL = url => !!`${url}`.match(/(https?:\/\/\S+)/g);

export const safeREL = 'noopener noreferrer';

export const backgroundImage = url => conditionalSpread({
    backgroundImage: url,
}, url);

export const fakeArray = number => Array(number).fill('').map((_, index) => index);

export const rem = number => `${number / 10}rem`;

export const isObject = val => typeof val === 'object' && val !== null;

export const isFunction = func => typeof func === 'function';
