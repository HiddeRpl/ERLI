const $joinSection = document.querySelector('[data-js-selector="join-section"]') as HTMLElement
const $sticky = document.querySelector('[data-js-selector="sticky"]') as HTMLElement

export function handleSticky(): void {
  if (!IntersectionObserver) {
    $sticky.style.display = 'none'
    return
  }

  const observer = new IntersectionObserver(onIntersection, { threshold: 0.5 })
  observer.observe($joinSection)
}

function onIntersection(entries: IntersectionObserverEntry[]): void {
  $sticky.style.display = entries[0].isIntersecting ? 'none' : 'block'
}
