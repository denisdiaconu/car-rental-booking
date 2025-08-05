import React, { useEffect, useState } from 'react'
import { dummyDashboardData } from '../../assets/assets';

const Dashboard = () => {
  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  useEffect(() => {
    setData(dummyDashboardData)
  },[])
  return (
    <div>
    </div>
  )
}

export default Dashboard