AFRAME.registerComponent('ramka', {
  init() {
    console.log('ramka')
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    const borderWidthIOS = ((screenWidth / 100) * 0.83).toFixed(2)
    const borderHeightIOS = ((screenHeight / 100) * 0.82).toFixed(2)

    function getMobileOperatingSystem() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      if (/windows phone/i.test(userAgent)) {
        return 'Windows Phone'
      }

      if (/android/i.test(userAgent)) {
        return 'Android'
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS'
      }

      return 'unknown'
    }

    const operatingSystem = getMobileOperatingSystem()

    setTimeout(() => {
      if (operatingSystem === 'iOS') {
        this.el.setAttribute('width', borderWidthIOS)
        this.el.setAttribute('height', borderHeightIOS)
      } else if (operatingSystem === 'Android') {
        this.el.setAttribute('width', 2.8)
        this.el.setAttribute('height', 5.1)
      } else {
        this.el.setAttribute('visible', false)
      }
    }, 1000)

    // Width:
    // android
    // 395 - 0.525 || 2.8
    // 412 - 0.525 || 2.8

    // iPhone
    // 375 - 0.575 || 3.1
    // 390 - 0.59 || 3.2

    // Height:
    // android
    // 719 - 0.525 || 5.1
    // 750 - 0.525 || 5.1

    // iPhone
    // 634 - 0.575 || 5.2
    // 663 - 0.99 || 5.4
  },
})
