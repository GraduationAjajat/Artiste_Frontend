import React, { useRef } from "react";
import { useEffect } from "react";
import * as THREE from "../../../node_modules/three/build/three.module.js";
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";
const Content3D = ({ artList }) => {
  const mount = useRef(null);

  useEffect(() => {
    let width = mount.current.clientWidth;
    let height = mount.current.clientHeight;
    //바닥 재질
    const TextureLoader = new THREE.TextureLoader();
    const textureBaseColor = TextureLoader.load(
      "../../imgs/material/Marble_White_006_basecolor.jpg"
    );

    //벽 재질
    const TextureLoader2 = new THREE.TextureLoader();
    const textureBaseColor2 = TextureLoader2.load(
      "../../imgs/material/Asphalt_002_COLOR.jpg"
    );

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const geometry = new THREE.PlaneGeometry(1.5, 1.5, 1);
    const Imgtexture = new THREE.TextureLoader().load("../../imgs/ex1.jpeg");
    const material = new THREE.MeshBasicMaterial({ map: Imgtexture });

    const Imgtexture2 = new THREE.TextureLoader().load("../../imgs/ex2.jpeg");
    const material2 = new THREE.MeshBasicMaterial({ map: Imgtexture2 });

    const Imgtexture3 = new THREE.TextureLoader().load("../../imgs/ex3.jpeg");
    const material3 = new THREE.MeshBasicMaterial({ map: Imgtexture3 });

    const Imgtexture4 = new THREE.TextureLoader().load("../../imgs/ex4.jpeg");
    const material4 = new THREE.MeshBasicMaterial({ map: Imgtexture4 });

    const cube = new THREE.Mesh(geometry, material);
    const cube2 = new THREE.Mesh(geometry, material2);
    const cube3 = new THREE.Mesh(geometry, material3);
    const cube4 = new THREE.Mesh(geometry, material4);

    //빛
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    //조명
    const rectLight = new THREE.RectAreaLight(0xffffff, 3, 4, 5.5); //색, width, height, 강도
    rectLight.position.set(2, 5, -4);
    rectLight.lookAt(2, 1.5, -4); //빛이 어디를 향할지
    scene.add(rectLight);

    //10,0,0
    const rectLight2 = new THREE.RectAreaLight(0xffffff, 3, 5, 5.5); //색, width, height, 강도
    rectLight2.position.set(10.5, 5, 0.5);
    rectLight2.lookAt(10.5, 1.5, 1); //빛이 어디를 향할지
    scene.add(rectLight2);

    //-3,0,5
    const rectLight3 = new THREE.RectAreaLight(0xffffff, 3, 5, 5.5); //색, width, height, 강도
    rectLight3.position.set(-4, 5, 5.5);
    rectLight3.lookAt(-4, 1, 5); //빛이 어디를 향할지
    scene.add(rectLight3);

    //5,0,7
    const rectLight4 = new THREE.RectAreaLight(0xffffff, 3, 5, 5.5); //색, width, height, 강도
    rectLight4.position.set(5, 5, 7);
    rectLight4.lookAt(5, 1, 8); //빛이 어디를 향할지
    scene.add(rectLight4);

    //바닥 추가
    const planeGeometry = new THREE.PlaneGeometry(30, 30, 1, 1);
    const planeMaterial = new THREE.MeshStandardMaterial({
      map: textureBaseColor,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.y = -0.5;
    scene.add(plane);

    //천장 추가
    const ceilingGeometry = new THREE.PlaneGeometry(30, 30);
    const ceilingMaterial = new THREE.MeshLambertMaterial({ color: 0xe8e8e8 });
    const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
    ceiling.rotation.x = -0.5 * Math.PI;
    ceiling.position.y = -0.5;
    ceiling.position.set(0, 10, 0);
    scene.add(ceiling);

    //4 walls
    const rightGeometry = new THREE.PlaneGeometry(30, 30);
    const rightMaterial = new THREE.MeshStandardMaterial({
      map: textureBaseColor2,
    });
    const right = new THREE.Mesh(rightGeometry, rightMaterial);
    right.position.set(15, 0, 0);
    right.rotateY(-Math.PI / 2);
    scene.add(right);

    const leftGeometry = new THREE.PlaneGeometry(30, 30);
    const leftMaterial = new THREE.MeshStandardMaterial({
      map: textureBaseColor2,
    });
    const left = new THREE.Mesh(leftGeometry, leftMaterial);
    left.position.set(-15, 0, 0);
    left.rotateY(Math.PI / 2);
    scene.add(left);

    const backGeometry = new THREE.PlaneGeometry(30, 30);
    const backMaterial = new THREE.MeshStandardMaterial({
      map: textureBaseColor2,
    });
    const back = new THREE.Mesh(backGeometry, backMaterial);
    back.position.set(0, 0, -15);
    scene.add(back);

    const frontGeometry = new THREE.PlaneGeometry(30, 30);
    const frontMaterial = new THREE.MeshStandardMaterial({
      map: textureBaseColor2,
    });
    const front = new THREE.Mesh(frontGeometry, frontMaterial);
    front.position.set(0, 0, 15);
    front.rotateY(Math.PI);
    scene.add(front);

    //가벽
    const wallGeometry = new THREE.BoxGeometry(5, 5, 1);
    const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xb0b0b0 });
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.position.set(10.5, 0, 0);
    scene.add(wall);

    const wall2Geometry = new THREE.BoxGeometry(5, 5, 1);
    const wall2Material = new THREE.MeshBasicMaterial({ color: 0xb0b0b0 });
    const wall2 = new THREE.Mesh(wall2Geometry, wall2Material);
    wall2.position.set(-3.5, 0, 5);
    scene.add(wall2);

    const wall3Geometry = new THREE.BoxGeometry(5, 5, 1);
    const wall3Material = new THREE.MeshBasicMaterial({ color: 0xb0b0b0 });
    const wall3 = new THREE.Mesh(wall3Geometry, wall3Material);
    wall3.position.set(2, 0, -5);
    scene.add(wall3);

    const wall4Geometry = new THREE.BoxGeometry(5, 5, 1);
    const wall4Material = new THREE.MeshBasicMaterial({ color: 0xb0b0b0 });
    const wall4 = new THREE.Mesh(wall4Geometry, wall4Material);
    wall4.position.set(5, 0, 7);
    scene.add(wall4);

    //이미지 위치
    cube.position.set(2, 1, -4.4);
    cube2.position.set(5, 1, 7.6);
    cube3.position.set(-3.5, 1, 5.6);
    cube4.position.set(10.5, 1, 0.6);

    scene.add(cube2);
    scene.add(cube3);
    scene.add(cube4);
    //camera.position.z = 8
    camera.position.set(0, 0, 10);
    scene.add(cube);
    renderer.setSize(width, height);

    //orbitControl
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; //더 부드럽게
    controls.rotateSpeed = 0.8; // 마우스로 카메라를 회전시킬 속도입니다. 기본값(Float)은 1입니다.
    controls.panSpeed = 0.5; // 좌우 이동 속도 입니다. 기본값(Float)은 1입니다.
    controls.minDistance = -2; // 어디까지 줌인 가능한지
    controls.maxDistance = 15; // 어디까지 줌아웃 가능한지
    controls.maxPolarAngle = Math.PI / 2; // 카메라 하단 각도
    controls.minPolarAngle = Math.PI / 10; // 카메라 상단 각도
    controls.addEventListener("change", function () {
      //pan으로도 바닥 아래로 안내려가게
      this.target.y = 0;
    });

    const renderScene = () => {
      renderer.render(scene, camera);
    };
    const animate = () => {
      window.requestAnimationFrame(animate);
      renderScene();
      controls.update();
    };
    const handleResize = () => {
      width = mount.current.clientWidth;
      height = mount.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderScene();
    };

    mount.current.appendChild(renderer.domElement);
    window.addEventListener("resize", handleResize);

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.current.removeChild(renderer.domElement);

      scene.remove(cube);
    };
  }, []);

  return (
    <div ref={mount} style={{ height: "400px" }}>
      {" "}
    </div>
  );
};
export default Content3D;
