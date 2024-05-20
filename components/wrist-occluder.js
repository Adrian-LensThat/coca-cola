AFRAME.registerComponent('wrist-occluder', {
  init() {
    let id_ = null
    let majorRadius
    let minorRadius
    const wristOccluder = document.getElementById('wristOccluder')

    const initWristOccluder = ({ detail }) => {
      if (id_ && detail.id != id_) {
        return
      }
      id_ = detail.id
      const apt = detail.attachmentPoints.wrist
      minorRadius = apt.minorRadius
      majorRadius = apt.majorRadius

      wristOccluder.setAttribute('scale', `${majorRadius} 1 ${minorRadius + 0.0075}`)
      wristOccluder.object3D.scale.multiplyScalar(0.9)
    }

    this.el.sceneEl.addEventListener('xrhandfound', initWristOccluder)
  },
})
