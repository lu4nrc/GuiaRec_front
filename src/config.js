function getConfig(name, defaultValue=null) {
    // If inside a docker container, use window.ENV
    if( window.ENV !== undefined ) {
        return window.ENV[name] || defaultValue;
    }

    return process.env[name] || defaultValue;
}
export function getBackendUrl() {
    return  import.meta.env.VITE_BACKEND_URL;
}

