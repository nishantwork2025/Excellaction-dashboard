// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// );

// const DeviceByWeek = () => {
//   const [chartData, setChartData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Months are 0-indexed

//   const fetchAndProcessData = async (year, month) => {
//     try {
//       const token = localStorage.getItem('token');
//       const clientId = localStorage.getItem('clientId');
//       const clientSecret = localStorage.getItem('clientSecret');
//       const UserID = localStorage.getItem('UserID');
//       // Parse retailerData and extract RetailerCode
//       const retailerData = JSON.parse(localStorage.getItem('retailerData'));
//       const orgCode = retailerData ? retailerData.RetailerCode : null;

//       // console.log('Client ID of chart : ' + clientId);
//       // console.log('clientSecret of chart : ' + clientSecret);
//       // console.log('UserID of chart : ' + UserID);
//       // console.log('orgCode of chart : ' + orgCode);
//       const headers = {
//         'Content-Type': 'application/json',
//         Accept: 'text/plain',
//         Authorization: `Bearer ${token}`,
//         ClientId: clientId,
//         ClientSecret: clientSecret,
//         OrgCode: orgCode,
//       };

//       const response = await axios.post(
//         'https://anytimelocker.in/api/Reatiler/getEntrollments',
//         { roleID: 0, retailerID: UserID },
//         { headers },
//       );

//       if (response.data.IsSuccess) {
//         const apiData = response.data.Result;

//         const convertToIST = (utcDateStr) => {
//           const utcDate = new Date(utcDateStr);
//           const istOffset = 5.5 * 60 * 60 * 1000;
//           return new Date(utcDate.getTime() + istOffset);
//         };

//         const startDate = new Date(year, month - 1, 1);
//         const endDate = new Date(year, month, 0); // Last day of the month
//         endDate.setHours(23, 59, 59, 999);

//         const filteredData = apiData.filter((item) => {
//           const itemDate = convertToIST(item.CreatedDAte);
//           return itemDate >= startDate && itemDate <= endDate;
//         });

//         const daysInMonth = new Date(year, month, 0).getDate();
//         const claimCounts = Array(daysInMonth).fill(0);
//         const unclaimCounts = Array(daysInMonth).fill(0);

//         filteredData.forEach((item) => {
//           const itemDate = convertToIST(item.CreatedDAte);
//           const dayIndex = itemDate.getDate() - 1;

//           if (item.STATUS === 'Claim') {
//             claimCounts[dayIndex] += 1;
//           } else if (item.STATUS === 'Unclaim') {
//             unclaimCounts[dayIndex] += 1;
//           }
//         });

//         const labels = Array.from({ length: daysInMonth }, (_, i) => {
//           const date = new Date(year, month - 1, i + 1);
//           return `${date.getDate()}\n${date.toLocaleDateString('en-US', {
//             weekday: 'short',
//           })}`;
//         });

//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: 'Claim',
//               data: claimCounts,
//               // backgroundColor: 'rgba(54, 162, 235, 0.6)',
//               // borderColor: 'rgba(54, 162, 235, 1)',
//               backgroundColor: 'rgba(66,42,251,255)',
//               borderColor: 'rgba(66,42,251,255)',
//               borderWidth: 1,
//             },
//             {
//               label: 'Unclaim',
//               data: unclaimCounts,
//               // backgroundColor: 'rgba(255, 99, 132, 0.6)',
//               // borderColor: 'rgba(255, 99, 132, 1)',
//               backgroundColor: 'rgb(188,180,252)',
//               borderColor: 'rgb(188,180,252)',
//               borderWidth: 1,
//             },
//           ],
//         });

//         setLoading(false);
//       } else {
//         console.error('Failed to fetch data:', response.data.Message);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndProcessData(selectedYear, selectedMonth);
//   }, [selectedYear, selectedMonth]);

//   if (loading) {
//     return (
//       <div style={{ textAlign: 'center', padding: '20px', color: '#555' }}>
//         <h2>Loading chart...</h2>
//       </div>
//     );
//   }

//   return (
//     <div
//       style={{
//         width: '100%',
//         margin: '30px auto',
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '20px',
//           flexWrap: 'wrap',
//         }}
//       >
//         <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
//           <select
//             value={selectedYear}
//             onChange={(e) => setSelectedYear(Number(e.target.value))}
//             style={{
//               padding: '10px',
//               fontSize: '16px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//           >
//             {[2023, 2024, 2025].map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//           <select
//             value={selectedMonth}
//             onChange={(e) => setSelectedMonth(Number(e.target.value))}
//             style={{
//               padding: '10px',
//               fontSize: '16px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//           >
//             {[...Array(12).keys()].map((month) => (
//               <option key={month + 1} value={month + 1}>
//                 {new Date(0, month).toLocaleString('en-US', { month: 'long' })}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <div
//         className="chart-container"
//         style={{
//           overflowX: 'auto',
//           paddingBottom: '20px',
//         }}
//       >
//         <div
//           className="chart-wrapper"
//           style={{
//             minWidth: '1200px',
//             height: 'auto',
//             maxHeight: '400px',
//             aspectRatio: '16/9',
//           }}
//         >
//           <Bar
//             data={chartData}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false,
//               plugins: {
//                 legend: {
//                   display: true,
//                   position: 'top',
//                   labels: {
//                     font: { size: 14, family: 'Arial' },
//                   },
//                 },
//                 tooltip: {
//                   enabled: true,
//                   backgroundColor: '#333',
//                   titleColor: '#fff',
//                   bodyColor: '#fff',
//                   borderWidth: 1,
//                   borderColor: '#ddd',
//                   padding: 10,
//                 },
//                 title: {
//                   display: true,
//                   text: `Devices Registered Per Day (${new Date(
//                     selectedYear,
//                     selectedMonth - 1,
//                   ).toLocaleString('en-US', {
//                     month: 'long',
//                     year: 'numeric',
//                   })})`,
//                   font: { size: 18, family: 'Arial' },
//                   color: '#333',
//                 },
//               },
//               scales: {
//                 x: {
//                   grid: { display: false },
//                   ticks: {
//                     font: { family: 'Arial' },
//                     callback: function (value) {
//                       const label = this.getLabelForValue(value);
//                       return label.split('\n');
//                     },
//                   },
//                 },
//                 y: {
//                   grid: { color: '#eee' },
//                   ticks: { font: { family: 'Arial' } },
//                 },
//               },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeviceByWeek;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// );

// const DeviceByWeek = () => {
//   const [chartData, setChartData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Months are 0-indexed

//   const fetchAndProcessData = async (year, month) => {
//     try {
//       const token = localStorage.getItem('token');
//       const clientId = localStorage.getItem('clientId');
//       const clientSecret = localStorage.getItem('clientSecret');
//       const UserID = localStorage.getItem('UserID');
//       // Parse retailerData and extract RetailerCode
//       const retailerData = JSON.parse(localStorage.getItem('retailerData'));
//       const orgCode = retailerData ? retailerData.RetailerCode : null;

//       const headers = {
//         'Content-Type': 'application/json',
//         Accept: 'text/plain',
//         Authorization: `Bearer ${token}`,
//         ClientId: clientId,
//         ClientSecret: clientSecret,
//         OrgCode: orgCode,
//       };

//       const response = await axios.post(
//         'https://anytimelocker.in/api/Reatiler/getEntrollments',
//         { roleID: 0, retailerID: UserID },
//         { headers },
//       );

//       if (response.data.IsSuccess) {
//         const apiData = response.data.Result;

//         const convertToIST = (utcDateStr) => {
//           const utcDate = new Date(utcDateStr);
//           const istOffset = 5.5 * 60 * 60 * 1000;
//           return new Date(utcDate.getTime() + istOffset);
//         };

//         const startDate = new Date(year, month - 1, 1);
//         const endDate = new Date(year, month, 0); // Last day of the month
//         endDate.setHours(23, 59, 59, 999);

//         const filteredData = apiData.filter((item) => {
//           const itemDate = convertToIST(item.CreatedDAte);
//           return itemDate >= startDate && itemDate <= endDate;
//         });

//         const daysInMonth = new Date(year, month, 0).getDate();
//         const claimCounts = Array(daysInMonth).fill(0);
//         const unclaimCounts = Array(daysInMonth).fill(0);

//         filteredData.forEach((item) => {
//           const itemDate = convertToIST(item.CreatedDAte);
//           const dayIndex = itemDate.getDate() - 1;

//           if (item.STATUS === 'Claim') {
//             claimCounts[dayIndex] += 1;
//           } else if (item.STATUS === 'Unclaim') {
//             unclaimCounts[dayIndex] += 1;
//           }
//         });

//         const labels = Array.from({ length: daysInMonth }, (_, i) => {
//           const date = new Date(year, month - 1, i + 1);
//           return `${date.getDate()}\n${date.toLocaleDateString('en-US', {
//             weekday: 'short',
//           })}`;
//         });

//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: 'Claim',
//               data: claimCounts,
//               backgroundColor: 'rgba(66,42,251,255)',
//               borderColor: 'rgba(66,42,251,255)',
//               borderWidth: 1,
//             },
//             {
//               label: 'Unclaim',
//               data: unclaimCounts,
//               backgroundColor: 'rgb(188,180,252)',
//               borderColor: 'rgb(188,180,252)',
//               borderWidth: 1,
//             },
//           ],
//         });

//         setLoading(false);
//       } else {
//         console.error('Failed to fetch data:', response.data.Message);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndProcessData(selectedYear, selectedMonth);
//   }, [selectedYear, selectedMonth]);

//   // Reset handler function
//   const handleReset = () => {
//     const currentDate = new Date();
//     setSelectedYear(currentDate.getFullYear());
//     setSelectedMonth(currentDate.getMonth() + 1); // Reset to current month
//     setLoading(true); // Ensure the loading state is triggered
//   };

//   if (loading) {
//     return (
//       <div style={{ textAlign: 'center', padding: '20px', color: '#555' }}>
//         <h2>Loading chart...</h2>
//       </div>
//     );
//   }

//   return (
//     <div
//       style={{
//         width: '100%',
//         margin: '30px auto',
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '20px',
//           flexWrap: 'wrap',
//         }}
//       >
//         <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
//           <select
//             value={selectedYear}
//             onChange={(e) => setSelectedYear(Number(e.target.value))}
//             style={{
//               padding: '10px',
//               fontSize: '16px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//           >
//             {[2024, 2025].map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//           <select
//             value={selectedMonth}
//             onChange={(e) => setSelectedMonth(Number(e.target.value))}
//             style={{
//               padding: '10px',
//               fontSize: '16px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//           >
//             {[...Array(12).keys()].map((month) => (
//               <option key={month + 1} value={month + 1}>
//                 {new Date(0, month).toLocaleString('en-US', { month: 'long' })}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button
//           onClick={handleReset}
//           style={{
//             padding: '10px',
//             fontSize: '16px',
//             backgroundColor: 'rgba(66,42,251,255)',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '10px',
//             cursor: 'pointer',
//           }}
//         >
//           Reset
//         </button>
//       </div>
//       <div
//         className="chart-container"
//         style={{
//           overflowX: 'auto',
//           paddingBottom: '20px',
//         }}
//       >
//         <div
//           className="chart-wrapper"
//           style={{
//             minWidth: '1200px',
//             height: 'auto',
//             maxHeight: '400px',
//             aspectRatio: '16/9',
//           }}
//         >
//           <Bar
//             data={chartData}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false,
//               plugins: {
//                 legend: {
//                   display: true,
//                   position: 'top',
//                   labels: {
//                     font: { size: 14, family: 'Arial' },
//                   },
//                 },
//                 tooltip: {
//                   enabled: true,
//                   backgroundColor: '#333',
//                   titleColor: '#fff',
//                   bodyColor: '#fff',
//                   borderWidth: 1,
//                   borderColor: '#ddd',
//                   padding: 10,
//                 },
//                 title: {
//                   display: true,
//                   text: `Devices Enrolled Per Day (${new Date(
//                     selectedYear,
//                     selectedMonth - 1,
//                   ).toLocaleString('en-US', {
//                     month: 'long',
//                     year: 'numeric',
//                   })})`,
//                   font: { size: 18, family: 'Arial' },
//                   color: '#333',
//                 },
//               },
//               scales: {
//                 x: {
//                   grid: { display: false },
//                   ticks: {
//                     font: { family: 'Arial' },
//                     callback: function (value) {
//                       const label = this.getLabelForValue(value);
//                       return label.split('\n');
//                     },
//                   },
//                 },
//                 y: {
//                   grid: { color: '#eee' },
//                   ticks: { font: { family: 'Arial' } },
//                 },
//               },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeviceByWeek;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import { Flex, Box, Text, Select, Button, Spinner } from '@chakra-ui/react';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// );

// const DayWiseChart = () => {
//   const currentDate = new Date();
//   const [chartData, setChartData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth()); // Default to current month
//   const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear()); // Default to current year

//   const months = [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
//   ];
//   const years = Array.from(
//     { length: 10 },
//     (_, i) => new Date().getFullYear() - i,
//   );

//   const fetchData = async (month, year) => {
//     setLoading(true);
//     try {
//       const token = localStorage.getItem('token');
//       const clientId = localStorage.getItem('clientId');
//       const clientSecret = localStorage.getItem('clientSecret');
//       const UserID = localStorage.getItem('UserID');
//       const retailerData = JSON.parse(localStorage.getItem('retailerData'));
//       const orgCode = retailerData ? retailerData.RetailerCode : null;

//       const headers = {
//         'Content-Type': 'application/json',
//         Accept: 'text/plain',
//         Authorization: `Bearer ${token}`,
//         ClientId: clientId,
//         ClientSecret: clientSecret,
//         OrgCode: orgCode,
//       };

//       const response = await axios.post(
//         'https://anytimelocker.in/api/Reatiler/getEntrollments',
//         { roleID: 0, retailerID: UserID },
//         { headers },
//       );

//       if (response.data.IsSuccess) {
//         const apiData = response.data.Result;

//         const claimCounts = Array(31).fill(0);
//         const unclaimCounts = Array(31).fill(0);

//         apiData.forEach((item) => {
//           const itemDate = new Date(item.CreatedDAte);
//           if (
//             itemDate.getMonth() === month &&
//             itemDate.getFullYear() === year
//           ) {
//             const day = itemDate.getDate() - 1; // Zero-based index for days
//             if (item.STATUS === 'Claim') {
//               claimCounts[day] += 1;
//             } else if (item.STATUS === 'Unclaim') {
//               unclaimCounts[day] += 1;
//             }
//           }
//         });

//         setChartData({
//           labels: Array.from({ length: 31 }, (_, i) => `${i + 1}`),
//           datasets: [
//             {
//               label: 'Claim',
//               data: claimCounts,
//               backgroundColor: 'rgba(66,42,251,255)',
//               borderColor: 'rgba(66,42,251,255)',
//               borderWidth: 1,
//             },
//             {
//               label: 'Unclaim',
//               data: unclaimCounts,
//               backgroundColor: 'rgb(188,180,252)',
//               borderColor: 'rgb(188,180,252)',
//               borderWidth: 1,
//             },
//           ],
//         });
//       } else {
//         console.error('Failed to fetch data:', response.data.Message);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetData = () => {
//     setSelectedMonth(currentDate.getMonth());
//     setSelectedYear(currentDate.getFullYear());
//     fetchData(currentDate.getMonth(), currentDate.getFullYear());
//   };

//   useEffect(() => {
//     // Fetch data for the current month and year on mount
//     fetchData(selectedMonth, selectedYear);
//   }, [selectedMonth, selectedYear]);

//   return (
//     <Box
//       w="100%"
//       m="30px auto"
//       bg="white"
//       p="20px"
//       borderRadius="8px"
//       boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
//     >
//       <Flex
//         gap="15px"
//         wrap="wrap"
//         mb="20px"
//         justify="space-between"
//         align="center"
//       >
//         <Flex gap="10px">
//           <Box>
//             <Text mb="5px" fontSize="sm">
//               Month:
//             </Text>
//             <Select
//               placeholder="Select Month"
//               value={selectedMonth !== null ? selectedMonth : ''}
//               onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
//               size="sm"
//             >
//               {months.map((month, index) => (
//                 <option key={index} value={index}>
//                   {month}
//                 </option>
//               ))}
//             </Select>
//           </Box>

//           <Box>
//             <Text mb="5px" fontSize="sm">
//               Year:
//             </Text>
//             <Select
//               placeholder="Select Year"
//               value={selectedYear !== null ? selectedYear : ''}
//               onChange={(e) => setSelectedYear(parseInt(e.target.value))}
//               size="sm"
//             >
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </Select>
//           </Box>
//         </Flex>

//         <Button
//           onClick={resetData}
//           style={{
//             padding: '10px',
//             fontSize: '16px',
//             backgroundColor: 'rgba(66,42,251,255)',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '10px',
//             cursor: 'pointer',
//           }}
//           disabled={loading}
//         >
//           Reset
//         </Button>
//       </Flex>

//       <Box position="relative" overflowX="auto" pb="20px">
//         {loading && (
//           <Flex
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             align="center"
//             justify="center"
//             bg="rgba(255, 255, 255, 0.8)"
//             zIndex="10"
//           >
//             <Spinner size="xl" color="blue.500" />
//           </Flex>
//         )}
//         <Box minW="800px" h="400px">
//           {chartData.labels && chartData.labels.length > 0 ? (
//             <Bar
//               data={chartData}
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                   legend: { display: true, position: 'top' },
//                   title: {
//                     display: true,
//                     text: 'Per Day Enrollment with Claim & Unclaim Status',
//                   },
//                 },
//                 scales: {
//                   x: {
//                     ticks: {
//                       callback: function (value, index) {
//                         // Only show the day number
//                         return this.getLabelForValue(index);
//                       },
//                       font: { size: 12 },
//                       color: '#333',
//                     },
//                     grid: { display: false },
//                   },
//                   y: {
//                     ticks: { font: { size: 12 }, color: '#333' },
//                     grid: { color: '#eee' },
//                   },
//                 },
//               }}
//             />
//           ) : (
//             <Text textAlign="center" color="gray.500">
//               No data available for the selected range
//             </Text>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DayWiseChart;

// *****************************************************************************************************

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import { Flex, Box, Text, Select, Button, Spinner } from '@chakra-ui/react';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const DayWiseChart = () => {
//   const currentDate = new Date();
//   const [chartData, setChartData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
//   const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

//   const months = [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
//   ];
//   const years = Array.from(
//     { length: 10 },
//     (_, i) => new Date().getFullYear() - i
//   );

//   const fetchData = async (month, year) => {
//     setLoading(true);
//     try {
//       const token = localStorage.getItem('token');
//       const clientId = localStorage.getItem('clientId');
//       const clientSecret = localStorage.getItem('clientSecret');
//       const UserID = localStorage.getItem('UserID');
//       const retailerData = JSON.parse(localStorage.getItem('retailerData'));
//       const orgCode = retailerData ? retailerData.RetailerCode : null;

//       const headers = {
//         'Content-Type': 'application/json',
//         Accept: 'text/plain',
//         Authorization: `Bearer ${token}`,
//         ClientId: clientId,
//         ClientSecret: clientSecret,
//         OrgCode: orgCode,
//       };

//       const response = await axios.post(
//         'https://anytimelocker.in/api/Reatiler/getEntrollments',
//         { roleID: 0, retailerID: UserID },
//         { headers }
//       );

//       if (response.data.IsSuccess) {
//         const apiData = response.data.Result;

//         const claimCounts = Array(31).fill(0);
//         const unclaimCounts = Array(31).fill(0);

//         apiData.forEach((item) => {
//           const itemDate = new Date(item.CreatedDAte);
//           if (
//             itemDate.getMonth() === month &&
//             itemDate.getFullYear() === year
//           ) {
//             const day = itemDate.getDate() - 1;
//             if (item.STATUS === 'Claim') {
//               claimCounts[day] += 1;
//             } else if (item.STATUS === 'Unclaim') {
//               unclaimCounts[day] += 1;
//             }
//           }
//         });

//         setChartData({
//           labels: Array.from({ length: 31 }, (_, i) => `${i + 1}`),
//           datasets: [
//             {
//               label: 'Claim',
//               data: claimCounts,
//               backgroundColor: 'rgba(66,42,251,255)',
//               borderColor: 'rgba(66,42,251,255)',
//               borderWidth: 1,
//             },
//             {
//               label: 'Unclaim',
//               data: unclaimCounts,
//               backgroundColor: 'rgb(188,180,252)',
//               borderColor: 'rgb(188,180,252)',
//               borderWidth: 1,
//             },
//           ],
//         });
//       } else {
//         console.error('Failed to fetch data:', response.data.Message);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetData = () => {
//     setSelectedMonth(currentDate.getMonth());
//     setSelectedYear(currentDate.getFullYear());
//     fetchData(currentDate.getMonth(), currentDate.getFullYear());
//   };

//   useEffect(() => {
//     fetchData(selectedMonth, selectedYear);
//   }, [selectedMonth, selectedYear]);

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { display: true, position: 'top' },
//       title: {
//         display: true,
//         text: 'Per Day Enrollment with Claim & Unclaim Status',
//       },
//       tooltip: { enabled: true },
//       customDataLabels: {
//         id: 'customDataLabels',
//         afterDatasetsDraw(chart) {
//           const { ctx } = chart;
//           chart.data.datasets.forEach((dataset, datasetIndex) => {
//             const meta = chart.getDatasetMeta(datasetIndex);
//             meta.data.forEach((bar, index) => {
//               const value = dataset.data[index];
//               if (value > 0) {
//                 const textX = bar.x;
//                 const textY = bar.y - 5;

//                 ctx.save();
//                 ctx.font = 'bold 12px Arial';
//                 ctx.textAlign = 'center';
//                 ctx.textBaseline = 'middle';
//                 ctx.fillStyle = '#333'; // Adjust text color as needed
//                 ctx.fillText(value, textX, textY);
//                 ctx.restore();
//               }
//             });
//           });
//         },
//       },
//     },
//     scales: {
//       x: {
//         ticks: {
//           font: { size: 12 },
//           color: '#333',
//         },
//         grid: { display: false },
//       },
//       y: {
//         ticks: { font: { size: 12 }, color: '#333' },
//         grid: { color: '#eee' },
//       },
//     },
//   };

//   ChartJS.register(chartOptions.plugins.customDataLabels);

//   return (
//     <Box
//       w="100%"
//       m="30px auto"
//       bg="white"
//       p="20px"
//       borderRadius="8px"
//       boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
//     >
//       <Flex gap="15px" wrap="wrap" mb="20px" justify="space-between" align="center">
//         <Flex gap="10px">
//           <Box>
//             <Text mb="5px" fontSize="sm">
//               Month:
//             </Text>
//             <Select
//               placeholder="Select Month"
//               value={selectedMonth !== null ? selectedMonth : ''}
//               onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
//               size="sm"
//             >
//               {months.map((month, index) => (
//                 <option key={index} value={index}>
//                   {month}
//                 </option>
//               ))}
//             </Select>
//           </Box>
//           <Box>
//             <Text mb="5px" fontSize="sm">
//               Year:
//             </Text>
//             <Select
//               placeholder="Select Year"
//               value={selectedYear !== null ? selectedYear : ''}
//               onChange={(e) => setSelectedYear(parseInt(e.target.value))}
//               size="sm"
//             >
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </Select>
//           </Box>
//         </Flex>

//         <Button
//           onClick={resetData}
//           style={{
//             padding: '10px',
//             fontSize: '16px',
//             backgroundColor: 'rgba(66,42,251,255)',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '10px',
//             cursor: 'pointer',
//           }}
//           disabled={loading}
//         >
//           Reset
//         </Button>
//       </Flex>

//       <Box position="relative" overflowX="auto" pb="20px">
//         {loading && (
//           <Flex
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             align="center"
//             justify="center"
//             bg="rgba(255, 255, 255, 0.8)"
//             zIndex="10"
//           >
//             <Spinner size="xl" color="blue.500" />
//           </Flex>
//         )}
//         <Box minW="800px" h="400px">
//           {chartData.labels && chartData.labels.length > 0 ? (
//             <Bar data={chartData} options={chartOptions} />
//           ) : (
//             <Text textAlign="center" color="gray.500">
//               No data available for the selected range
//             </Text>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DayWiseChart;

// ***********************************************************************************

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Flex, Box, Text, Select, Button, Spinner } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const DayWiseChart = () => {
  const currentDate = new Date();
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const startYear = 2024;
  const years = Array.from(
    { length: new Date().getFullYear() - startYear + 1 },
    (_, i) => startYear + i,
  );

  const fetchData = async (month, year) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const clientId = localStorage.getItem('clientId');
      const clientSecret = localStorage.getItem('clientSecret');
      const UserID = localStorage.getItem('UserID');
      const retailerData = JSON.parse(localStorage.getItem('retailerData'));
      const orgCode = retailerData ? retailerData.RetailerCode : null;

      const headers = {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
        Authorization: `Bearer ${token}`,
        ClientId: clientId,
        ClientSecret: clientSecret,
        OrgCode: orgCode,
      };

      const response = await axios.post(
        'https://anytimelocker.in/api/Reatiler/getEntrollments',
        { roleID: 0, retailerID: UserID },
        { headers },
      );

      if (response.data.IsSuccess) {
        const apiData = response.data.Result;

        const claimCounts = Array(31).fill(0);
        const unclaimCounts = Array(31).fill(0);

        apiData.forEach((item) => {
          const itemDate = new Date(item.CreatedDAte);
          if (
            itemDate.getMonth() === month &&
            itemDate.getFullYear() === year
          ) {
            const day = itemDate.getDate() - 1;
            if (item.STATUS === 'Claim') {
              claimCounts[day] += 1;
            } else if (item.STATUS === 'Unclaim') {
              unclaimCounts[day] += 1;
            }
          }
        });

        setChartData({
          labels: Array.from({ length: 31 }, (_, i) => `${i + 1}`),
          datasets: [
            {
              label: 'Claim',
              data: claimCounts,
              backgroundColor: 'rgba(66,42,251,255)',
              borderColor: 'rgba(66,42,251,255)',
              borderWidth: 1,
            },
            {
              label: 'Unclaim',
              data: unclaimCounts,
              backgroundColor: 'rgb(188,180,252)',
              borderColor: 'rgb(188,180,252)',
              borderWidth: 1,
            },
          ],
        });
      } else {
        console.error('Failed to fetch data:', response.data.Message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetData = () => {
    setSelectedMonth(currentDate.getMonth());
    setSelectedYear(currentDate.getFullYear());
    fetchData(currentDate.getMonth(), currentDate.getFullYear());
  };

  useEffect(() => {
    fetchData(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top' },
      title: {
        display: true,
        text: 'Per Day Device Enrollment with Claim & Unclaim Status',
      },
      tooltip: { enabled: true },
      customDataLabels: {
        id: 'customDataLabels',
        afterDatasetsDraw(chart) {
          const { ctx } = chart;
          chart.data.datasets.forEach((dataset, datasetIndex) => {
            const meta = chart.getDatasetMeta(datasetIndex);
            meta.data.forEach((bar, index) => {
              const value = dataset.data[index];
              if (value > 0) {
                const textX = bar.x;
                const textY = bar.y - 5;

                ctx.save();
                ctx.font = 'bold 12px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#333'; // Adjust text color as needed
                ctx.fillText(value, textX, textY);
                ctx.restore();
              }
            });
          });
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: { size: 12 },
          color: '#333',
        },
        grid: { display: false },
      },
      y: {
        ticks: { font: { size: 12 }, color: '#333' },
        grid: { color: '#eee' },
      },
    },
  };

  ChartJS.register(chartOptions.plugins.customDataLabels);

  return (
    <Box
      w="100%"
      m="30px auto"
      bg="white"
      p="20px"
      borderRadius="8px"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Flex
        gap="15px"
        wrap="wrap"
        mb="20px"
        justify="space-between"
        align="center"
      >
        <Flex gap="10px">
          <Box>
            <Text mb="5px" fontSize="sm">
              Month:
            </Text>
            <Select
              placeholder="Select Month"
              value={selectedMonth !== null ? selectedMonth : ''}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              size="sm"
            >
              {months
                .filter((_, index) =>
                  selectedYear === currentDate.getFullYear()
                    ? index <= currentDate.getMonth()
                    : true,
                )
                .map((month, index) => (
                  <option key={index} value={index}>
                    {month}
                  </option>
                ))}
            </Select>
          </Box>
          <Box>
            <Text mb="5px" fontSize="sm">
              Year:
            </Text>
            <Select
              placeholder="Select Year"
              value={selectedYear !== null ? selectedYear : ''}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              size="sm"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </Box>
        </Flex>

        <Button
          onClick={resetData}
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: 'rgba(66,42,251,255)',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
          disabled={loading}
        >
          Reset
        </Button>
      </Flex>

      <Box position="relative" overflowX="auto" pb="20px">
        {loading && (
          <Flex
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            align="center"
            justify="center"
            bg="rgba(255, 255, 255, 0.8)"
            zIndex="10"
          >
            <Spinner size="xl" color="blue.500" />
          </Flex>
        )}
        <Box minW="800px" h="400px">
          {chartData.labels && chartData.labels.length > 0 ? (
            <Bar data={chartData} options={chartOptions} />
          ) : (
            <Text textAlign="center" color="gray.500">
              No data available for the selected range
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DayWiseChart;
