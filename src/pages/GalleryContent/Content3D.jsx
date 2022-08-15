import React , {useRef, useState} from 'react'
import { useEffect } from 'react';
import * as THREE from '../../../node_modules/three/build/three.module.js'
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";
const Content3D = () => {

  const mount=useRef(null);

  useEffect(() => {
    let width = mount.current.clientWidth
    let height = mount.current.clientHeight
    //바닥 재질
    const TextureLoader=new THREE.TextureLoader();
    const textureBaseColor=TextureLoader.load('../../imgs/material/Wood_027_basecolor.jpg')

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff , map: textureBaseColor})
    const cube = new THREE.Mesh(geometry, material)

    

    //빛
    const directionalLight=new THREE.DirectionalLight(0xffffff,1);
    directionalLight.position.set(1,1,1);
    scene.add(directionalLight);
    
    //바닥 추가
    const planeGeometry=new THREE.PlaneGeometry(30,30,1,1);
    const planeMaterial=new THREE.MeshStandardMaterial({
        map:textureBaseColor
    })
    const plane=new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x=-0.5*Math.PI;
    plane.position.y=-0.5;
    scene.add(plane);


    camera.position.z = 4
    scene.add(cube)
    renderer.setSize(width, height)

    //orbitControl
    const controls=new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;//더 부드럽게
    controls.rotateSpeed = 0.8; // 마우스로 카메라를 회전시킬 속도입니다. 기본값(Float)은 1입니다.
    controls.panSpeed =0.5; // 좌우 이동 속도 입니다. 기본값(Float)은 1입니다.
    controls.minDistance = 2; // 어디까지 줌인 가능한지
    controls.maxDistance = 8; // 어디까지 줌아웃 가능한지
    controls.maxPolarAngle = Math.PI / 2.1;	// 카메라 하단 각도
    controls.minPolarAngle = Math.PI / 10;	// 카메라 상단 각도
    controls.addEventListener ( 'change', function(){ //pan으로도 바닥 아래로 안내려가게
      this.target.y = 0;
    })

    const renderScene = () => {
      renderer.render(scene, camera)
    }
    const animate = () => {
      //cube.rotation.x += 0.01
      //cube.rotation.y += 0.01
      window.requestAnimationFrame(animate)
      renderScene()
      controls.update();
      
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