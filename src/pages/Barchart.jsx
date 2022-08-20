import EchartData from '../EchartData';
import { ResponsiveContainer,BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from 'recharts';


function Barchart() {

   const barChart = EchartData 
//value of alcohal for x-Axis
const AlcohalArray = barChart.map(val=>{
  return val.Alcohol;
})
const newAlcohalArray = [...new Set(AlcohalArray)];
console.log(newAlcohalArray);//now i know, how many category of alcohal !
//on the basis of alcohal category i can calculate the average of malic acid 

 //average of matalicAcid(y-Axis) for category of first alcohal
   const FilterMalic1 = barChart.filter(val=>{
      return val.Alcohol===1;
     })
     const arrayMalic1 = FilterMalic1.map(val=>{
      return val['Malic Acid']
     })
     const avgMalic1 = arrayMalic1.reduce((accum,currVal)=>{
         return accum+currVal;
     })/arrayMalic1.length;
    console.log(avgMalic1)

    //average of matalicAcid(y-Axis) for category of second alcohal

    const FilterMalic2 = barChart.filter(val=>{
      return val.Alcohol===2;
     })
     const arrayMalic2 = FilterMalic2.map(val=>{
      return val['Malic Acid']
     })
     const avgMalic2 = arrayMalic2.reduce((accum,currVal)=>{
         return accum+currVal;
     })/arrayMalic2.length;
    console.log(avgMalic2)

 //average of matalicAcid(y-Axis) for category of thired alcohal
 const FilterMalic3 = barChart.filter(val=>{
  return val.Alcohol===3;
 })
 const arrayMalic3 = FilterMalic3.map(val=>{
  return val['Malic Acid']
 })
 const avgMalic3 = arrayMalic3.reduce((accum,currVal)=>{
     return accum+currVal;
 })/arrayMalic3.length;
console.log(avgMalic3)
//now i have average of every Class of malic acid and also i have category of alcohal
// so i will represent these data into a Array of object formate for ploating the barchart

const Data=[
  {'Alcohal':1, 'Avg Malic Acid':13.744},
  {'Alcohal':2, 'Avg Malic Acid':12.2787},
  {'Alcohal':3, 'Avg Malic Acid':13.1537},
]

  return (
    <>
    <h2>Barchart</h2>
    
  <ResponsiveContainer width="100%" height={370} >
  <BarChart width="45.625rem" height="15.625rem" data={Data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Alcohal" />
  <YAxis dataKey="Avg Malic Acid" />
  <Tooltip />
  <Legend />
  <Bar dataKey="Avg Malic Acid" fill="#8884d8" />
 
</BarChart>
  </ResponsiveContainer>

     
    
    </>
  )
}

export default Barchart