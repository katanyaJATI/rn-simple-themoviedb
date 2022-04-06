const CONFIG = {
  API_HEADER: {
    CONTENT_TYPE: {
      APP_JSON: { 'Content-Type': 'application/json' },
      FORM_DATA: { 'Content-Type': 'multipart/form-data' },
    },
    ACCEPT: {
      APP_JSON: { Accept: 'application/json' },
    },
    CACHE_CONTROL: {
      NO_CACHE: { 'Cache-Control': 'no-cache' },
    },
    AUTHORIZATION: {},
  },
};

export default CONFIG;
