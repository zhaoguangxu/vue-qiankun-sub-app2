import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import App from './App.vue'
import router from './router'

let app: any = null

function render(props: any = {}) {
  const { container } = props
  app = createApp(App)

  app.use(createPinia())
  app.use(router)

  app.mount(container ? container.querySelector('#app') : '#app')
}

renderWithQiankun({
  mount(props) {
    console.log('vue-sub-app2 mount')
    render(props)
  },
  bootstrap() {
    console.log('vue-sub-app2 bootstrap')
  },
  unmount() {
    console.log('vue-sub-app2 unmount')
    app?.unmount()
  },
  update(props) {
    console.log('vue-sub-app2 update', props)
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
