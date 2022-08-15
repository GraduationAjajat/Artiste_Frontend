import React , {useRef, useState} from 'react'
import { useEffect } from 'react';
import * as THREE from '../../../node_modules/three/build/three.module.js'
const Content3D = () => {

  const mount=useRef(null);
  const controls = useRef(null)
  const [isAnimating, setAnimating] = useState(true)

  useEffect(() => {
    let width = mount.current.clientWidth
    let height = mount.current.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff })
    const cube = new THREE.Mesh(geometry, material)

    camera.position.z = 4
    scene.add(cube)
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    const renderScene = () => {
      
      renderer.render(scene, camera)

    }
    const animate = () => {
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      renderScene()
      window.requestAnimationFrame(animate)
    }
    const handleResize = () => {
      width = mount.current.clientWidth
      height = mount.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderScene()
    }
    
    
    mount.current.appendChild(renderer.domElement)
    window.addEventListener('resize', handleResize)
    
    //start();
    requestAnimationFrame(animate);
   
    
    return () => {
      window.removeEventListener('resize', handleResize)
      mount.current.removeChild(renderer.domElement)

      scene.remove(cube)
      
    }
  },[])

  return (
    <div ref={mount} style={{height: "400px"}}> </div>
  )
}
export default Content3D