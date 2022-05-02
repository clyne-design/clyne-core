export const conditionalSpread = (spread, condition) => !!condition ? spread : (Array.isArray(spread) ? [] : {});

export const isExternalURL = url => !!`${url}`.match(/(https?:\/\/\S+)/g);

export const safeREL = 'noopener noreferrer';
