import React from 'react'
import { range } from 'lodash'
import { line, curveLinear} from 'd3-shape'
import { scaleLinear } from 'd3-scale'

const minX = 0
const maxX = 2 * Math.PI
const minY = -1
const maxY = 1

export const generateData = (resolution) => {
  return range(1, resolution).map(i => {
    const x = maxX * (i / resolution)
    return {
      x,
      y: Math.sin(x)
    }
  })
}

export const LineChart = (props) => {
  const width = 400
  const height = 300

  const xScale = scaleLinear()
    .domain([minX, maxX])
    .range([0, width])

  const yScale = scaleLinear()
    .domain([minY, maxY])
    .range([height, 0])

  const lineFunction = line()
    .curve(curveLinear)
    .x((data) => xScale(data.x))
    .y((data) => yScale(data.y))

  const path = lineFunction(generateData(1000000))

  return (
    <svg
      width={width}
      height={height}
    >
      <path d={path} style={{ stroke: 'blue', strokeWidth: 3, fill: 'none' }} />
    </svg>
  )
}
