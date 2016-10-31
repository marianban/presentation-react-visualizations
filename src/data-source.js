import React from 'react'

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

export class DataSource extends React.Component {
  constructor(props) {
    super(props)
    this.updateData = this.updateData.bind()
  }

  updateData() {
    const numberOfSamples = 1000
    const data = generateData(numberOfSamples)
    this.setState({
      data
    })
  }

  componentDidMount() {
    this.intervalId = setInterval(updateData, 200)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { children } = this.props
    const { data } = this.state

    return children(data)
  }
}
