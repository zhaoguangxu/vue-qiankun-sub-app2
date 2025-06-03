import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import App from './App.vue'
import router from './router'

interface QiankunProps {
  container?: HTMLElement;
  [key: string]: unknown;
}

let app: ReturnType<typeof createApp> | null = null

function render(props: QiankunProps = {}) {
  const { container } = props
  app = createApp(App)

  app.use(createPinia())
  app.use(router)

  const mountElement = container ? container.querySelector('#app') : document.getElementById('app')
  if (!mountElement) {
    throw new Error('Mount element #app not found')
  }
  app.mount(mountElement)
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
