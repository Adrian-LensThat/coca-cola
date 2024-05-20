AFRAME.registerComponent('logo', {
    init() {
      function getMobileOperatingSystem() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera
  
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
          return 'Windows Phone'
        }
  
        if (/android/i.test(userAgent)) {
          return 'Android'
        }
  
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return 'iOS'
        }
  
        return 'unknown'
      }
  
      const operatingSystem = getMobileOperatingSystem()
  
      setTimeout(() => {
        if (operatingSystem === 'Android') {
          this.el.setAttribute('position', '0.7 1.6 -3')
        }
      }, 1000)
    },
  })
  