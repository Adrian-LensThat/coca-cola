AFRAME.registerComponent('instruction', {
    init() {
      console.log('test1')
      this.instructionPlaceAssetVideo = document.getElementById('instruction-place-asset-video')
      this.instructionPlaceImg = document.getElementById('instruction-place-img')
      this.instructionFitAssetVideo = document.getElementById('instruction-fit-asset-video')
      this.instructionFitImg = document.getElementById('instruction-fit-img')
  
      this.hand = document.getElementById('hand')
      this.isHandFound = false
  
      setTimeout(() => {
        if (this.isHandFound) return
        this.instructionPlaceAssetVideo.play()
        this.instructionPlaceImg.setAttribute('animation', 'property: material.opacity; from: 0; to: 1;')
      }, 2000)
    },
    tick() {
      if (!this.hand || this.isHandFound) return
      const handFound = this.hand.getAttribute('found')
      if (handFound === 'true') {
        this.isHandFound = true
        this.instructionPlaceImg.setAttribute('animation', 'property: material.opacity; from: 1; to: 0;')
        this.instructionPlaceAssetVideo.removeAttribute('loop')
  
        setTimeout(() => {
          this.instructionFitAssetVideo.play()
          this.instructionFitImg.setAttribute('animation', 'property: material.opacity; from: 0; to: 1;')
          setTimeout(() => {
            this.instructionFitAssetVideo.removeAttribute('loop')
            this.instructionFitImg.setAttribute('animation', 'property: material.opacity; from: 1; to: 0;')
          }, 6000)
        }, 1500)
      }
    },
  })
  