'use client'

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'

interface NeuralNetworkProps {
  nodeCount?: number
  connectionDistance?: number
  color1?: string
  color2?: string
}

export function NeuralNetwork({ 
  nodeCount = 100, 
  connectionDistance = 20,
  color1 = '#00f0ff',
  color2 = '#8b5cf6'
}: NeuralNetworkProps) {
  const nodesRef = useRef<THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial> | null>(null)
  const linesRef = useRef<THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial> | null>(null)
  const positionsRef = useRef<Float32Array>()
  const velocitiesRef = useRef<Float32Array>()
  const connectionsRef = useRef<number[][]>([])

  useMemo(() => {
    const positions = new Float32Array(nodeCount * 3)
    const velocities = new Float32Array(nodeCount * 3)
    
    for (let i = 0; i < nodeCount; i++) {
      const radius = 30 + Math.random() * 20
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
    }
    
    positionsRef.current = positions
    velocitiesRef.current = velocities
    
    // Pre-calculate connections
    const connections: number[][] = []
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < connectionDistance) {
          connections.push([i, j, dist])
        }
      }
    }
    connectionsRef.current = connections
  }, [nodeCount, connectionDistance])

  useFrame((_, delta) => {
    if (!positionsRef.current || !velocitiesRef.current) return
    
    const positions = positionsRef.current
    const velocities = velocitiesRef.current
    
    for (let i = 0; i < nodeCount; i++) {
      positions[i * 3] += velocities[i * 3] * delta * 60
      positions[i * 3 + 1] += velocities[i * 3 + 1] * delta * 60
      positions[i * 3 + 2] += velocities[i * 3 + 2] * delta * 60
      
      // Boundary check
      const dist = Math.sqrt(
        positions[i * 3] ** 2 + 
        positions[i * 3 + 1] ** 2 + 
        positions[i * 3 + 2] ** 2
      )
      
      if (dist > 50) {
        const factor = 50 / dist
        positions[i * 3] *= factor
        positions[i * 3 + 1] *= factor
        positions[i * 3 + 2] *= factor
        
        velocities[i * 3] *= -0.5
        velocities[i * 3 + 1] *= -0.5
        velocities[i * 3 + 2] *= -0.5
      }
    }
    
    if (nodesRef.current) {
      nodesRef.current.geometry.attributes.position.needsUpdate = true
    }
    
    if (linesRef.current) {
      const linePositions = linesRef.current.geometry.attributes.position.array as Float32Array
      let idx = 0
      
      for (const [i, j, baseDist] of connectionsRef.current) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        
        const opacity = Math.max(0, 1 - dist / connectionDistance)
        
        linePositions[idx++] = positions[i * 3]
        linePositions[idx++] = positions[i * 3 + 1]
        linePositions[idx++] = positions[i * 3 + 2]
        linePositions[idx++] = positions[j * 3]
        linePositions[idx++] = positions[j * 3 + 1]
        linePositions[idx++] = positions[j * 3 + 2]
      }
      
      linesRef.current.geometry.attributes.position.needsUpdate = true
      
      // Update line colors based on distance
      const colors = linesRef.current.geometry.attributes.color.array as Float32Array
      for (let k = 0; k < connectionsRef.current.length; k++) {
        const [, , baseDist] = connectionsRef.current[k]
        const dx = positions[connectionsRef.current[k][0] * 3] - positions[connectionsRef.current[k][1] * 3]
        const dy = positions[connectionsRef.current[k][0] * 3 + 1] - positions[connectionsRef.current[k][1] * 3 + 1]
        const dz = positions[connectionsRef.current[k][0] * 3 + 2] - positions[connectionsRef.current[k][1] * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        const opacity = Math.max(0, 1 - dist / connectionDistance)
        
        const color1RGB = new THREE.Color(color1)
        const color2RGB = new THREE.Color(color2)
        const mixedColor = color1RGB.clone().lerp(color2RGB, 0.5)
        
        colors[k * 6] = mixedColor.r * opacity
        colors[k * 6 + 1] = mixedColor.g * opacity
        colors[k * 6 + 2] = mixedColor.b * opacity
        colors[k * 6 + 3] = mixedColor.r * opacity
        colors[k * 6 + 4] = mixedColor.g * opacity
        colors[k * 6 + 5] = mixedColor.b * opacity
      }
      linesRef.current.geometry.attributes.color.needsUpdate = true
    }
  })

  const nodeGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positionsRef.current!, 3))
    
    const sizes = new Float32Array(nodeCount)
    for (let i = 0; i < nodeCount; i++) {
      sizes[i] = 1 + Math.random() * 2
    }
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    
    return geometry
  }, [nodeCount])

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const maxConnections = connectionsRef.current.length * 2
    const positions = new Float32Array(maxConnections * 3)
    const colors = new Float32Array(maxConnections * 3)
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    
    return geometry
  }, [])

  return (
    <>
      <points
        ref={nodesRef}
        geometry={nodeGeometry}
        material={{
          type: 'PointsMaterial',
          size: 2,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.8,
          vertexColors: false,
          color: new THREE.Color(color1),
          blending: THREE.AdditiveBlending,
        }}
      />
      <lineSegments
        ref={linesRef}
        geometry={lineGeometry}
        material={{
          type: 'LineBasicMaterial',
          vertexColors: true,
          transparent: true,
          opacity: 0.3,
          blending: THREE.AdditiveBlending,
        }}
      />
    </>
  )
}

interface FloatingParticlesProps {
  count?: number
  spread?: number
  color?: string
}

export function FloatingParticles({ count = 200, spread = 100, color = '#00f0ff' }: FloatingParticlesProps) {
  const pointsRef = useRef<THREE.Points | null>(null)
  const positionsRef = useRef<Float32Array>()
  const velocitiesRef = useRef<Float32Array>()

  useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.1
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1
    }
    
    positionsRef.current = positions
    velocitiesRef.current = velocities
  }, [count, spread])

  useFrame((_, delta) => {
    if (!positionsRef.current || !velocitiesRef.current) return
    
    const positions = positionsRef.current
    const velocities = velocitiesRef.current
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] += velocities[i * 3] * delta * 60
      positions[i * 3 + 1] += velocities[i * 3 + 1] * delta * 60
      positions[i * 3 + 2] += velocities[i * 3 + 2] * delta * 60
      
      // Wrap around
      const halfSpread = spread / 2
      if (positions[i * 3] > halfSpread) positions[i * 3] = -halfSpread
      if (positions[i * 3] < -halfSpread) positions[i * 3] = halfSpread
      if (positions[i * 3 + 1] > halfSpread) positions[i * 3 + 1] = -halfSpread
      if (positions[i * 3 + 1] < -halfSpread) positions[i * 3 + 1] = halfSpread
      if (positions[i * 3 + 2] > halfSpread) positions[i * 3 + 2] = -halfSpread
      if (positions[i * 3 + 2] < -halfSpread) positions[i * 3 + 2] = halfSpread
    }
    
    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positionsRef.current!, 3))
    
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      sizes[i] = 0.5 + Math.random() * 1.5
    }
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    
    return geo
  }, [count])

  return (
    <points
      ref={pointsRef}
      geometry={geometry}
      material={{
        type: 'PointsMaterial',
        size: 1.5,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.4,
        color: new THREE.Color(color),
        blending: THREE.AdditiveBlending,
      }}
    />
  )
}

interface GlowingOrbProps {
  position: [number, number, number]
  color: string
  size: number
}

export function GlowingOrb({ position, color, size }: GlowingOrbProps) {
  const meshRef = useRef<THREE.Mesh | null>(null)
  const timeRef = useRef(0)

  useFrame((_, delta) => {
    timeRef.current += delta
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(timeRef.current * 0.5) * 0.1)
      meshRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={size}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
      />
    </mesh>
  )
}

interface TechRingProps {
  radius?: number
  tubeRadius?: number
  color?: string
}

export function TechRing({ radius = 5, tubeRadius = 0.05, color = '#00f0ff' }: TechRingProps) {
  const groupRef = useRef<THREE.Group | null>(null)
  const timeRef = useRef(0)

  useFrame((_, delta) => {
    timeRef.current += delta
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.05
      groupRef.current.rotation.y += delta * 0.08
    }
  })

  const torusGeometry = useMemo(() => new THREE.TorusGeometry(radius, tubeRadius, 16, 64), [radius, tubeRadius])
  const ringGeometry = useMemo(() => new THREE.RingGeometry(radius - 0.5, radius + 0.5, 64), [radius])

  return (
    <group ref={groupRef}>
      <mesh geometry={torusGeometry}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
          wireframe
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh geometry={ringGeometry} rotationX={-Math.PI / 2}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  )
}