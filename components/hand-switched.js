AFRAME.registerComponent('hand-switched', {
    init() {
      let handKind = 2
      const left = 1
      const right = 2
      let hand
      const armBand = document.getElementById('armBandEntity')
      const wristOccluder = document.getElementById('wristOccluder')
      const detectHandSwitched = ({detail}) => {
        // if (handKind !== detail.handKind) {
        handKind = detail.handKind
        if (handKind === left) {
          console.log('left found')
          hand = 'left'
          armBand.setAttribute('position', '-0.005 0 0.02')
          wristOccluder.setAttribute('position', '-0.005 0 .02')
        } else if (handKind === right) {
          console.log('right found')
          hand = 'right'
          armBand.setAttribute('position', '0.005 0 0.02')
          wristOccluder.setAttribute('position', '0.005 0 .02')
        }
        this.el.sceneEl.emit('xrhandswitched', {hand})
        this.el.setAttribute('found', true)
        // }
      }
      this.el.sceneEl.addEventListener('xrhandfound', detectHandSwitched)
      this.el.sceneEl.addEventListener('xrhandswitched', (e) => {
        console.log(e.detail.hand, 'hand found')
      })
    },
  })
  