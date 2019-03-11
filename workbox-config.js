module.exports = {
  globDirectory: "build",
  globPatterns: [
    "**/*.{html,css,json,jpg,jpeg,png,js}"
  ],
  globIgnores: ["**/icons/*.*"],
  swDest: "build/sw.js",

  offlineGoogleAnalytics: {
    cacheName: 'paesoe-ga-cache',
    parameterOverrides: {
      cd1: 'offline'
    },
    hitFilter: (params) => {
      const queueTimeInSeconds = Math.round(params.get('qt') / 1000);
      params.set('cm1', queueTimeInSeconds);
    }
  },
  // cleanupOutdatedCaches: true,
  runtimeCaching: [{
      urlPattern: new RegExp('data\\.+\.json$'),
      handler: 'CacheFirst',
      options: {
        cacheName: 'paesoe-data-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 30
        },
        backgroundSync: {
          name: 'paesoeDataQueue',
          options: {
            maxRetentionTime: 24 * 60,
          }
        }
      }
    },
    {
      urlPattern: RegExp('\.(?:png|jpg|jpeg|webp|gif|svg)$'),
      handler: 'CacheFirst',
      options: {
        cacheName: 'paesoe-image-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 30
        },
        backgroundSync: {
          name: 'paesoeImageQueue',
          options: {
            maxRetentionTime: 24 * 60,
          }
        }
      }
    }
  ]
};
