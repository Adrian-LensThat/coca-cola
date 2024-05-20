AFRAME.registerComponent('rotate-element', {
    init() {
      let handKind = 2
      const left = 1
      const right = 2
      const armBand = document.getElementById('armBandEntity')
      const rotateElement = ({detail}) => {
        handKind = detail.handKind
        if (handKind === left) {
          armBand.setAttribute('scale', '0.05 0.043 0.055')
          armBand.setAttribute('rotation', '-180 90 90')
        } else if (handKind === right) {
          armBand.setAttribute('scale', '0.05 0.043 0.055')
          armBand.setAttribute('rotation', '-180 -90 -90')
        }
      }
      this.el.sceneEl.addEventListener('xrhandfound', rotateElement)
    },
  })
  