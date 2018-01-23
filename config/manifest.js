/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Ajuda-me",
    short_name: "Ajudame",
    description: "Agregador de ONGs e Projetos Sociais.",
    start_url: "/",
    display: "standalone",
    background_color: "#ef6c00",
    theme_color: "#e65100",
    icons: [
    ],
    icons: [
      {
        src: "/assets/images/ic_launcher_192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/assets/images/ic_launcher_512x512ember.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    apple: {
      statusBarStyle: 'black-translucent'
    },
    ms: {
      tileColor: '#fff'
    }
  };
}
