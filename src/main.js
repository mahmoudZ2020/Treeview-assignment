import { createApp,h } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'


const i18n = createI18n({
    locale: 'en',
    messages: {
        en,
        de
    }
})

const app  = createApp({
    render: ()=>h(App)
});

app.use(i18n).mount('#app')