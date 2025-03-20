import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Jambo Docs",
    description: "Documentation for Jambo Customer Management REST API",
    base: "/jambo/",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/api/examples' }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/csci-4452-spring25/kcmoraza_2593594/' },
        ]
    },
    lang: 'en-US',
    ignoreDeadLinks: [
        // ignore exact url "/playground"
        '/playground',
        // ignore all localhost links
        /^https?:\/\/localhost/,
        // ignore all links include "/repl/""
        /\/repl\//,
        // custom function, ignore all links include "ignore"
        (url) => {
            return url.toLowerCase().includes('ignore')
        }
    ]
})
