export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    target: 'static',
    head: {
        title: 'Bank SBI Indonesia',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            }
        ],
        script: [{
            src: '/js/header.js'
        }, ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/main.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{
            src: '~/plugins/v-owl-carousel.js',
            ssr: false
        },
        {
            src: '~/plugins/aos.js',
            ssr: false
        }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        'nuxt-gsap-module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxt/image',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },

    gsap: {
        extraPlugins: {
          scrollTrigger: true,
        }
    }
}
