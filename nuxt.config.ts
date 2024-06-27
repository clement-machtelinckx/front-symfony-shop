export default defineNuxtConfig({
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css' }
    ]
  },
  css: [
    '~/assets/style/style.css'
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    // apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      // apiBase: '/api'
    }
  }
});
