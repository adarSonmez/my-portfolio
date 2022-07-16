import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { PARTICLES_CONFIG } from '../data/particles.config.data'

import type { ISourceOptions } from 'tsparticles-engine'
import type { Engine } from 'tsparticles-engine'

function ParticlesBG() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main)
  }
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={PARTICLES_CONFIG as ISourceOptions}
    />
  )
}

export default ParticlesBG
