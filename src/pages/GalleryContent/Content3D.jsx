import React , {useRef, useState} from 'react'
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as THREE from '../../../node_modules/three/build/three.module.js'
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";
const Content3D = () => {

  const mount=useRef(null);

  useEffect(() => {
    let width = mount.current.clientWidth
    let height = mount.current.clientHeight
    //바닥 재질
    const TextureLoader=new THREE.TextureLoader();
    const textureBaseColor=TextureLoader.load('../../imgs/material/Marble_White_006_basecolor.jpg')

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true})
    const geometry = new THREE.PlaneGeometry(1, 1, 1)
    const Imgtexture=new THREE.TextureLoader().load("/imgs/sample.jpg")
    const material = new THREE.MeshBasicMaterial({  map: Imgtexture})  
    
  
    const cube = new THREE.Mesh(geometry, material)

    
    //빛
    const ambientLight=new THREE.AmbientLight(0xffffff,1);
    scene.add(ambientLight);

    //바닥 추가
    const planeGeometry=new THREE.PlaneGeometry(30,30,1,1);
    const planeMaterial=new THREE.MeshStandardMaterial({
        map:textureBaseColor
    })
    const plane=new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x=-0.5*Math.PI;
    plane.position.y=-0.5;
    scene.add(plane);
   
    //4 walls
    const rightGeometry=new THREE.PlaneGeometry(30,30);
    const rightMaterial = new THREE.MeshLambertMaterial({color: 0xe8e8e8})
    const right=new THREE.Mesh(rightGeometry, rightMaterial);
    right.position.set(15,0,0)
    right.rotateY( - Math.PI / 2 );
    scene.add(right);

    const leftGeometry=new THREE.PlaneGeometry(30,30);
    const leftMaterial = new THREE.MeshLambertMaterial({color: 0xe8e8e8})
    const left=new THREE.Mesh(leftGeometry, leftMaterial);
    left.position.set(-15,0,0)
    left.rotateY( Math.PI / 2 );
    scene.add(left);

    const backGeometry=new THREE.PlaneGeometry(30,30);
    const backMaterial = new THREE.MeshLambertMaterial({color: 0xe8e8e8})
    const back=new THREE.Mesh(backGeometry, backMaterial);
    back.position.set(0,0,-15)
    scene.add(back);

    const frontGeometry=new THREE.PlaneGeometry(30,30);
    const frontMaterial = new THREE.MeshLambertMaterial({color: 0xe8e8e8})
    const front=new THREE.Mesh(frontGeometry, frontMaterial);
    front.position.set(0,0,15)
    front.rotateY( Math.PI );
    scene.add(front);

    //가벽
    const wallGeometry=new THREE.BoxGeometry(5,5,1);
    const wallMaterial=new THREE.MeshBasicMaterial({color: 0xb0b0b0});
    const wall=new THREE.Mesh(wallGeometry, wallMaterial);
    wall.position.set(0,0,3);
    scene.add(wall)

    cube.position.set(0,1,3.6);

    //camera.position.z = 8
    camera.position.set(0,0,10);
    scene.add(cube)
    renderer.setSize(width, height)

    //orbitControl
    const controls=new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;//더 부드럽게
    controls.rotateSpeed = 0.8; // 마우스로 카메라를 회전시킬 속도입니다. 기본값(Float)은 1입니다.
    controls.panSpeed =0.5; // 좌우 이동 속도 입니다. 기본값(Float)은 1입니다.
    controls.minDistance = -2; // 어디까지 줌인 가능한지
    controls.maxDistance = 15; // 어디까지 줌아웃 가능한지
    controls.maxPolarAngle = Math.PI / 2;	// 카메라 하단 각도
    controls.minPolarAngle = Math.PI / 10;	// 카메라 상단 각도
    controls.addEventListener ( 'change', function(){ //pan으로도 바닥 아래로 안내려가게
      this.target.y = 0;
    })

    const renderScene = () => {
      renderer.render(scene, camera)
    }
    const animate = () => {
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