import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.cloudtak.app',
    appName: 'CloudTAK',
    webDir: 'dist-setup',
    server: {
        androidScheme: 'https',
        allowNavigation: ['*'],
    },
    plugins: {
        Browser: {
            // Use the full-screen presentation on iOS
        },
        Geolocation: {
            // Request always-on (background) location on both platforms
        },
    },
    ios: {
        contentInset: 'always',
        // Info.plist overrides for location permissions
        appendToInfoPlist: {
            NSLocationAlwaysAndWhenInUseUsageDescription: 'CloudTAK needs your location to show your position on the map at all times.',
            NSLocationWhenInUseUsageDescription: 'CloudTAK needs your location to show your position on the map.',
            NSLocationAlwaysUsageDescription: 'CloudTAK needs your location to continuously show your position on the map.',
            UIBackgroundModes: ['location'],
        },
    },
    android: {
        allowMixedContent: true,
    },
};

export default config;
