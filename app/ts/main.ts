import './../scss/styles.scss'
import { handleSticky } from './handle-sticky'
import { attachSlider } from './slider'

document.addEventListener('DOMContentLoaded', (): void => {
  handleSticky()
  attachSlider()
})
