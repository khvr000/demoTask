

export const LocalStorageKeyManager = {
    JWT_TOKEN: 'jwt_token',
};


export const saveJwtTokenToStorage = token => {
    localStorage.setItem(LocalStorageKeyManager.JWT_TOKEN, token);
};


export const saveLoginDataToStorage = data => {
    if (!data) return;

    // eslint-disable-next-line camelcase
    const { jwt_token } = data;
    saveJwtTokenToStorage(jwt_token);

    return {
        jwt_token
    }
};

export const getJwtTokenFromStorage = () => {
    return localStorage.getItem(LocalStorageKeyManager.JWT_TOKEN);
};
