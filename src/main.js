import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import DatePicker from 'primevue/datepicker';
import Accordion from 'primevue/accordion';
import  Toast  from 'primevue/toast'; 
import  ToastService  from 'primevue/toastservice';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import Carousel from 'primevue/carousel';
import ProgressSpinner from 'primevue/progressspinner';


import './assets/style/index.scss'

const app = createApp(App)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('DatePicker', DatePicker)
app.component('Accordion', Accordion)
app.component('AccordionPanel', AccordionPanel)
app.component('AccordionHeader', AccordionHeader)
app.component('AccordionContent', AccordionContent)
app.component('Card', Card)
app.component('Menubar', Menubar)
app.component('Carousel', Carousel)
app.component('Toast', Toast);
app.component('ProgressSpinner', ProgressSpinner);

app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.mount('#app')
