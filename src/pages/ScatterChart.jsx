import React from 'react'
import EchartData from '../EchartData'
import { ResponsiveContainer,ScatterChart,XAxis,YAxis,Tooltip,Legend,Scatter,CartesianGrid } from 'recharts'

function ScatterPlot() {
  return(
  <>
    <h2>scatter Chart</h2>

    <div className="container">
      <div className="scatterContainer">
        <ResponsiveContainer width="100%" height={370}>
          <ScatterChart width={730} height={250} data={EchartData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Color intensity" name="color-intensity" unit="" />
  <YAxis dataKey="Hue" name="hue" unit="" />
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  <Legend />
  <Scatter name="Color Intensity" fill="#8884d8" />
</ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  </>
  )
}

export default ScatterPlot