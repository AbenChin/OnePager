import AOS from 'aos'
import 'aos/dist/aos.css'
import Alpine from 'alpinejs'

AOS.init({ duration: 800, once: true })

window.Alpine = Alpine
Alpine.start()
