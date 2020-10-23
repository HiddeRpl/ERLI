export const attachSlider = (): void => {
  const sliderWrap: HTMLElement = document.querySelector('[slider-wrapper]')
  const sliderLeft: HTMLElement = document.querySelector('[slider-left]')
  const sliderRight: HTMLElement = document.querySelector('[slider-right]')
  const indicator: HTMLElement = document.querySelector('[slider-indicator]')
  const slidersAmount: number = sliderWrap.children.length
  let activeSlider: number = 0

  function setActiveSlider(sliderNumber: number): void {
    sliderWrap.style.transform = `translateX(-${sliderNumber * 100}%)`
    for (const dot of Array.from(indicator.children)) {
      dot.classList.remove('is-active')
    }
    indicator.children[sliderNumber].classList.add('is-active')
  }

  function moveSliderLeft(): void {
    activeSlider--
    if (activeSlider < 0) {
      activeSlider = slidersAmount - 1
    }
    setActiveSlider(activeSlider)
  }

  function moveSliderRight(): void {
    activeSlider++
    if (activeSlider > slidersAmount - 1) {
      activeSlider = 0
    }
    setActiveSlider(activeSlider)
  }

  const sliderInterval = setInterval((): void => {
    moveSliderRight()
  }, 5000)

  sliderLeft.addEventListener('click', (): void => {
    clearInterval(sliderInterval)
    moveSliderLeft()
  })

  sliderRight.addEventListener('click', (): void => {
    clearInterval(sliderInterval)
    moveSliderRight()
  })
}
