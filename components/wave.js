AFRAME.registerComponent('wave', {
    init() {
      const waveLogo = document.getElementById('falka-logo')
      const wave1 = document.getElementById('falka-anim1')
      const wave2 = document.getElementById('falka-anim2')
      const wave3 = document.getElementById('falka-anim3')
  
      waveLogo.playbackRate = 1
      wave1.playbackRate = 0.975
      wave2.playbackRate = 0.95
      wave3.playbackRate = 1
      setTimeout(() => {
        waveLogo.play()
      }, 750)
      setTimeout(() => {
        wave1.play()
      }, 750)
  
      setTimeout(() => {
        wave2.play()
      }, 1000)
  
      setTimeout(() => {
        wave3.play()
      }, 1250)
    },
  })
  