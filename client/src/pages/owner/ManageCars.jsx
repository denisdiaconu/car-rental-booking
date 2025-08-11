import React, { useEffect, useState } from 'react'
import { dummyCarData } from '../../assets/assets'

const ManageCars = () => {
  const [cars, setCars] = useState([])

  const fetchOwnerCars = async () => {
    setCars(dummyCarData)
  }

  useEffect(() => {
    fetchOwnerCars()
  },[])
  return (
    <div>

    </div>
  )
}

export default ManageCars