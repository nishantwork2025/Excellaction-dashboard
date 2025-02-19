// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import Swal from "sweetalert2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const MonthWise = () => {
//   const [chartData, setChartData] = useState({});
//   const [startDate, setStartDate] = useState({ month: "", year: "" });
//   const [endDate, setEndDate] = useState({ month: "", year: "" });

//   const defaultStartDate = { month: 0, year: 2025 };
//   const defaultEndDate = { month: 11, year: 2025 };

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const years = Array.from(
//     { length: 10 },
//     (_, i) => new Date().getFullYear() - i
//   );

//   const getMonthsBetweenDates = (start, end) => {
//     const labels = [];
//     let current = new Date(start.year, start.month);
//     const endDate = new Date(end.year, end.month);

//     while (current <= endDate) {
//       labels.push(`${months[current.getMonth()]} ${current.getFullYear()}`);
//       current = new Date(current.setMonth(current.getMonth() + 1));
//     }

//     return labels;
//   };

//   const fetchAndProcessData = async (start, end) => {
//     Swal.fire({
//       title: "Loading...",
//       text: "Fetching data, please wait.",
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });

//     try {
//       const token = localStorage.getItem("token");
//       const clientId = localStorage.getItem("clientId");
//       const clientSecret = localStorage.getItem("clientSecret");
//       const UserID = localStorage.getItem("UserID");
//       const retailerData = JSON.parse(localStorage.getItem("retailerData"));
//       const orgCode = retailerData ? retailerData.RetailerCode : null;

//       // console.log("Client ID of chart : " + clientId)
//       // console.log("clientSecret of chart : " + clientSecret)
//       // console.log("UserID of chart : " + UserID)
//       // console.log("orgCode of chart : " + orgCode)
//       const headers = {
//         "Content-Type": "application/json",
//         Accept: "text/plain",
//         Authorization: `Bearer ${token}`,
//         ClientId: clientId,
//         ClientSecret: clientSecret,
//         OrgCode: orgCode,
//       };

//       const response = await axios.post(
//         "https://anytimelocker.in/api/Reatiler/getEntrollments",
//         { roleID: 0, retailerID: UserID },
//         { headers }
//       );

//       if (response.data.IsSuccess) {
//         const apiData = response.data.Result;

//         const convertToIST = (utcDateStr) => {
//           const utcDate = new Date(utcDateStr);
//           const istOffset = 5.5 * 60 * 60 * 1000;
//           return new Date(utcDate.getTime() + istOffset);
//         };

//         const labels = getMonthsBetweenDates(start, end);
//         const claimCounts = Array(labels.length).fill(0);
//         const unclaimCounts = Array(labels.length).fill(0);

//         apiData.forEach((item) => {
//           const itemDate = convertToIST(item.CreatedDAte);
//           const itemYear = itemDate.getFullYear();
//           const itemMonth = itemDate.getMonth();

//           const startFilter = new Date(start.year, start.month, 1);
//           const endFilter = new Date(end.year, end.month + 1, 0);

//           if (itemDate >= startFilter && itemDate <= endFilter) {
//             const labelIndex = labels.findIndex(
//               (label) => label === `${months[itemMonth]} ${itemYear}`
//             );

//             if (labelIndex !== -1) {
//               if (item.STATUS === "Claim") {
//                 claimCounts[labelIndex] += 1;
//               } else if (item.STATUS === "Unclaim") {
//                 unclaimCounts[labelIndex] += 1;
//               }
//             }
//           }
//         });

//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: "Claim",
//               data: claimCounts,
//               backgroundColor: "rgba(54, 162, 235, 0.6)",
//               borderColor: "rgba(54, 162, 235, 1)",
//               borderWidth: 1,
//             },
//             {
//               label: "Unclaim",
//               data: unclaimCounts,
//               backgroundColor: "rgba(255, 99, 132, 0.6)",
//               borderColor: "rgba(255, 99, 132, 1)",
//               borderWidth: 1,
//             },
//           ],
//         });

//         Swal.close();
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Failed to fetch data",
//           text: response.data.Message,
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Something went wrong while fetching data.",
//       });
//     }
//   };

//   useEffect(() => {
//     fetchAndProcessData(defaultStartDate, defaultEndDate);
//   }, []);

//   useEffect(() => {
//     if (
//       startDate.month !== "" &&
//       startDate.year !== "" &&
//       endDate.month !== "" &&
//       endDate.year !== ""
//     ) {
//       fetchAndProcessData(startDate, endDate);
//     }
//   }, [startDate, endDate]);

//   const handleReset = () => {
//     setStartDate({ month: "", year: "" });
//     setEndDate({ month: "", year: "" });
//     fetchAndProcessData(defaultStartDate, defaultEndDate);
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         margin: "30px auto",
//         backgroundColor: "#fff",
//         padding: "20px",
//         borderRadius: "8px",
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "15px",
//           marginBottom: "20px",
//         }}
//       >
//         <div>
//           <label
//             style={{ display: "block", fontSize: "1rem", marginBottom: "5px" }}
//           >
//             From:
//           </label>
//           <div style={{ display: "flex", gap: "10px" }}>
//             <select
//               value={startDate.month}
//               onChange={(e) =>
//                 setStartDate({ ...startDate, month: parseInt(e.target.value) })
//               }
//               style={{
//                 padding: "10px",
//                 fontSize: "1rem",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             >
//               <option value="">Month</option>
//               {months.map((month, index) => (
//                 <option key={index} value={index}>
//                   {month}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={startDate.year}
//               onChange={(e) =>
//                 setStartDate({ ...startDate, year: parseInt(e.target.value) })
//               }
//               style={{
//                 padding: "10px",
//                 fontSize: "1rem",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             >
//               <option value="">Year</option>
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div>
//           <label
//             style={{ display: "block", fontSize: "1rem", marginBottom: "5px" }}
//           >
//             To:
//           </label>
//           <div style={{ display: "flex", gap: "10px" }}>
//             <select
//               value={endDate.month}
//               onChange={(e) =>
//                 setEndDate({ ...endDate, month: parseInt(e.target.value) })
//               }
//               style={{
//                 padding: "10px",
//                 fontSize: "1rem",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             >
//               <option value="">Month</option>
//               {months.map((month, index) => (
//                 <option key={index} value={index}>
//                   {month}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={endDate.year}
//               onChange={(e) =>
//                 setEndDate({ ...endDate, year: parseInt(e.target.value) })
//               }
//               style={{
//                 padding: "10px",
//                 fontSize: "1rem",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             >
//               <option value="">Year</option>
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <button
//           style={{
//             padding: "10px 20px",
//             fontSize: "1rem",
//             backgroundColor: "#007bff",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//           onClick={handleReset}
//         >
//           Reset
//         </button>
//       </div>

//       <div
//         style={{
//           overflowX: "auto",
//           overflowY: "hidden",
//           paddingBottom: "20px",
//         }}
//       >
//         <div style={{ minWidth: "800px", height: "400px" }}>
//           {chartData.labels && chartData.labels.length > 0 ? (
//             <Bar
//               data={chartData}
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                   legend: { display: true, position: "top" },
//                   title: {
//                     display: true,
//                     text: "Devices Registered Per Month with Claim & UnclaimStatus",
//                   },
//                 },
//                 scales: {
//                   x: {
//                     ticks: {
//                       callback: function (value, index) {
//                         const label = this.getLabelForValue(index);
//                         const [month, year] = label.split(" ");
//                         return `${month}\n${year}`;
//                       },
//                       font: { size: 12 },
//                       color: "#333",
//                     },
//                     grid: { display: false },
//                   },
//                   y: {
//                     ticks: { font: { size: 12 }, color: "#333" },
//                     grid: { color: "#eee" },
//                   },
//                 },
//               }}
//             />
//           ) : (
//             <div style={{ textAlign: "center", color: "#555" }}>
//               <h3>No data available for the selected range</h3>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MonthWise;

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
// import { Flex, Box, Text, Select, Button, Spinner } from '@chakra-ui/react';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// );

// const MonthWise = () => {
//   const [chartData, setChartData] = useState({});
//   const [loading, setLoading] = useState(false); // Loading state
//   const [startDate, setStartDate] = useState({ month: '', year: '' });
//   const [endDate, setEndDate] = useState({ month: '', year: '' });

//   const defaultStartDate = { month: 0, year: 2025 };
//   const defaultEndDate = { month: 11, year: 2025 };

//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   const years = Array.from(
//     { length: 10 },
//     (_, i) => new Date().getFullYear() - i,
//   );

//   const getMonthsBetweenDates = (start, end) => {
//     const labels = [];
//     let current = new Date(start.year, start.month);
//     const endDate = new Date(end.year, end.month);

//     while (current <= endDate) {
//       labels.push(`${months[current.getMonth()]} ${current.getFullYear()}`);
//       current = new Date(current.setMonth(current.getMonth() + 1));
//     }

//     return labels;
//   };

//   const fetchAndProcessData = async (start, end) => {
//     setLoading(true); // Start loading
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

//         const convertToIST = (utcDateStr) => {
//           const utcDate = new Date(utcDateStr);
//           const istOffset = 5.5 * 60 * 60 * 1000;
//           return new Date(utcDate.getTime() + istOffset);
//         };

//         const labels = getMonthsBetweenDates(start, end);
//         const claimCounts = Array(labels.length).fill(0);
//         const unclaimCounts = Array(labels.length).fill(0);

//         apiData.forEach((item) => {
//           const itemDate = convertToIST(item.CreatedDAte);
//           const itemYear = itemDate.getFullYear();
//           const itemMonth = itemDate.getMonth();

//           const startFilter = new Date(start.year, start.month, 1);
//           const endFilter = new Date(end.year, end.month + 1, 0);

//           if (itemDate >= startFilter && itemDate <= endFilter) {
//             const labelIndex = labels.findIndex(
//               (label) => label === `${months[itemMonth]} ${itemYear}`,
//             );

//             if (labelIndex !== -1) {
//               if (item.STATUS === 'Claim') {
//                 claimCounts[labelIndex] += 1;
//               } else if (item.STATUS === 'Unclaim') {
//                 unclaimCounts[labelIndex] += 1;
//               }
//             }
//           }
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
//       } else {
//         console.error('Failed to fetch data:', response.data.Message);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   useEffect(() => {
//     fetchAndProcessData(defaultStartDate, defaultEndDate);
//   }, []);

//   useEffect(() => {
//     if (
//       startDate.month !== '' &&
//       startDate.year !== '' &&
//       endDate.month !== '' &&
//       endDate.year !== ''
//     ) {
//       fetchAndProcessData(startDate, endDate);
//     }
//   }, [startDate, endDate]);

//   const handleReset = () => {
//     setStartDate({ month: '', year: '' });
//     setEndDate({ month: '', year: '' });
//     fetchAndProcessData(defaultStartDate, defaultEndDate);
//   };

//   return (
//     <Box
//       w="100%"
//       m="30px auto"
//       bg="white"
//       p="20px"
//       borderRadius="8px"
//       boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
//     >
//       <Flex gap="15px" wrap="wrap" mb="20px" justify="space-between">
//         <Box>
//           <Text mb="5px" fontSize="sm">
//             From:
//           </Text>
//           <Flex gap="10px">
//             <Select
//               value={startDate.month}
//               onChange={(e) =>
//                 setStartDate({ ...startDate, month: parseInt(e.target.value) })
//               }
//               size="sm"
//             >
//               <option value="">Month</option>
//               {months.map((month, index) => (
//                 <option key={index} value={index}>
//                   {month}
//                 </option>
//               ))}
//             </Select>
//             <Select
//               value={startDate.year}
//               onChange={(e) =>
//                 setStartDate({ ...startDate, year: parseInt(e.target.value) })
//               }
//               size="sm"
//             >
//               <option value="">Year</option>
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </Select>
//           </Flex>
//         </Box>

//         <Box>
//           <Text mb="5px" fontSize="sm">
//             To:
//           </Text>
//           <Flex gap="10px">
//             <Select
//               value={endDate.month}
//               onChange={(e) =>
//                 setEndDate({ ...endDate, month: parseInt(e.target.value) })
//               }
//               size="sm"
//             >
//               <option value="">Month</option>
//               {months.map((month, index) => (
//                 <option key={index} value={index}>
//                   {month}
//                 </option>
//               ))}
//             </Select>
//             <Select
//               value={endDate.year}
//               onChange={(e) =>
//                 setEndDate({ ...endDate, year: parseInt(e.target.value) })
//               }
//               size="sm"
//             >
//               <option value="">Year</option>
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </Select>
//           </Flex>
//         </Box>

//         <Button
//           // colorScheme="blue"
//           onClick={handleReset}
//           // size="sm"
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
//                     text: 'Devices Registered Per Month with Claim & Unclaim Status',
//                   },
//                 },
//                 scales: {
//                   x: {
//                     ticks: {
//                       callback: function (value, index) {
//                         const label = this.getLabelForValue(index);
//                         const [month, year] = label.split(' ');
//                         return `${month}\n${year}`;
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

// export default MonthWise;

// *****************************************************************************************************

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
// import { Flex, Box, Text, Select, Button, Spinner } from '@chakra-ui/react';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// );

// const MonthWise = () => {
//   const [chartData, setChartData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [startDate, setStartDate] = useState({ month: '', year: '' });
//   const [endDate, setEndDate] = useState({ month: '', year: '' });

//   const defaultStartDate = { month: 0, year: 2025 };
//   const defaultEndDate = { month: 11, year: 2025 };

//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   const years = Array.from(
//     { length: 10 },
//     (_, i) => new Date().getFullYear() - i,
//   );

//   const getMonthsBetweenDates = (start, end) => {
//     const labels = [];
//     let current = new Date(start.year, start.month);
//     const endDate = new Date(end.year, end.month);

//     while (current <= endDate) {
//       labels.push(`${months[current.getMonth()]} ${current.getFullYear()}`);
//       current = new Date(current.setMonth(current.getMonth() + 1));
//     }

//     return labels;
//   };

//   const fetchAndProcessData = async (start, end) => {
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

//         const convertToIST = (utcDateStr) => {
//           const utcDate = new Date(utcDateStr);
//           const istOffset = 5.5 * 60 * 60 * 1000;
//           return new Date(utcDate.getTime() + istOffset);
//         };

//         const labels = getMonthsBetweenDates(start, end);
//         const claimCounts = Array(labels.length).fill(0);
//         const unclaimCounts = Array(labels.length).fill(0);

//         apiData.forEach((item) => {
//           const itemDate = convertToIST(item.CreatedDAte);
//           const itemYear = itemDate.getFullYear();
//           const itemMonth = itemDate.getMonth();

//           const startFilter = new Date(start.year, start.month, 1);
//           const endFilter = new Date(end.year, end.month + 1, 0);

//           if (itemDate >= startFilter && itemDate <= endFilter) {
//             const labelIndex = labels.findIndex(
//               (label) => label === `${months[itemMonth]} ${itemYear}`,
//             );

//             if (labelIndex !== -1) {
//               if (item.STATUS === 'Claim') {
//                 claimCounts[labelIndex] += 1;
//               } else if (item.STATUS === 'Unclaim') {
//                 unclaimCounts[labelIndex] += 1;
//               }
//             }
//           }
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
//       } else {
//         console.error('Failed to fetch data:', response.data.Message);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAndProcessData(defaultStartDate, defaultEndDate);
//   }, []);

//   useEffect(() => {
//     if (
//       startDate.month !== '' &&
//       startDate.year !== '' &&
//       endDate.month !== '' &&
//       endDate.year !== ''
//     ) {
//       fetchAndProcessData(startDate, endDate);
//     }
//   }, [startDate, endDate]);

//   const handleReset = () => {
//     setStartDate({ month: '', year: '' });
//     setEndDate({ month: '', year: '' });
//     fetchAndProcessData(defaultStartDate, defaultEndDate);
//   };

//   return (
//     <Box
//       w="100%"
//       m="30px auto"
//       bg="white"
//       p="20px"
//       borderRadius="8px"
//       boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
//     >
//       {/* <Flex gap="15px" wrap="wrap" mb="20px" justify="space-between">
//         <Box>
//           <Text mb="5px" fontSize="sm">
//             From:
//           </Text>
//           <Flex gap="10px">
//             <Select
//               value={startDate.month}
//               onChange={(e) =>
//                 setStartDate({ ...startDate, month: parseInt(e.target.value) })
//               }
//               size="sm"
//             >
//               <option value="">Month</option>
//               {months.map((month, index) => (
//                 <option key={index} value={index}>
//                   {month}
//                 </option>
//               ))}
//             </Select>
//             <Select
//               value={startDate.year}
//               onChange={(e) =>
//                 setStartDate({ ...startDate, year: parseInt(e.target.value) })
//               }
//               size="sm"
//             >
//               <option value="">Year</option>
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </Select>
//           </Flex>
//         </Box>
//         <Box>
//           <Text mb="5px" fontSize="sm">
//             To:
//           </Text>
//           <Flex gap="10px">
//             <Select
//               value={endDate.month}
//               onChange={(e) =>
//                 setEndDate({ ...endDate, month: parseInt(e.target.value) })
//               }
//               size="sm"
//             >
//               <option value="">Month</option>
//               {months.map((month, index) => (
//                 <option key={index} value={index}>
//                   {month}
//                 </option>
//               ))}
//             </Select>
//             <Select
//               value={endDate.year}
//               onChange={(e) =>
//                 setEndDate({ ...endDate, year: parseInt(e.target.value) })
//               }
//               size="sm"
//             >
//               <option value="">Year</option>
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </Select>
//           </Flex>
//         </Box>



//         <Button
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
//         </Button>
//       </Flex> */}

//       <Flex gap="15px" wrap="nowrap" mb="20px" align="center">
//         {/* From Section */}
//         <Box>
//           <Text mb="5px" fontSize="sm">
//             From:
//           </Text>
//           <Flex gap="10px">
//             <Select
//               value={startDate.month}
//               onChange={(e) =>
//                 setStartDate({ ...startDate, month: parseInt(e.target.value) })
//               }
//               size="sm"
//             >
//               <option value="">Month</option>
//               {months.map((month, index) => (
//                 <option key={index} value={index}>
//                   {month}
//                 </option>
//               ))}
//             </Select>
//             <Select
//               value={startDate.year}
//               onChange={(e) =>
//                 setStartDate({ ...startDate, year: parseInt(e.target.value) })
//               }
//               size="sm"
//             >
//               <option value="">Year</option>
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </Select>
//           </Flex>
//         </Box>

//         {/* To Section */}
//         <Box>
//           <Text mb="5px" fontSize="sm">
//             To:
//           </Text>
//           <Flex gap="10px">
//             <Select
//               value={endDate.month}
//               onChange={(e) =>
//                 setEndDate({ ...endDate, month: parseInt(e.target.value) })
//               }
//               size="sm"
//             >
//               <option value="">Month</option>
//               {months.map((month, index) => (
//                 <option key={index} value={index}>
//                   {month}
//                 </option>
//               ))}
//             </Select>
//             <Select
//               value={endDate.year}
//               onChange={(e) =>
//                 setEndDate({ ...endDate, year: parseInt(e.target.value) })
//               }
//               size="sm"
//             >
//               <option value="">Year</option>
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </Select>
//           </Flex>
//         </Box>

//         {/* Reset Button */}
//         <Button
//           onClick={handleReset}
//           style={{
//             padding: '10px',
//             fontSize: '16px',
//             backgroundColor: 'rgba(66,42,251,255)',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '10px',
//             cursor: 'pointer',
//             marginLeft: 'auto', // Push the button to the end of the row
//           }}
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
//                     text: 'Devices Enrollment Per Month with Claim & Unclaim Status',
//                   },
//                   datalabels: {
//                     display: false,
//                   },
//                 },
//                 scales: {
//                   x: {
//                     ticks: {
//                       callback: function (value, index) {
//                         const label = this.getLabelForValue(index);
//                         const [month, year] = label.split(' ');
//                         return `${month}\n${year}`;
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

// export default MonthWise;

// ***********************************************************************************************

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
import { Flex, Box, Text, Select, Spinner, Button } from '@chakra-ui/react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthWiseChart = () => {
  const currentDate = new Date();
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const startYear = 2024;
  const years = Array.from({ length: currentDate.getFullYear() - startYear + 1 }, (_, i) => startYear + i);

  const fetchYearlyData = async (year) => {
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

        // Initialize claim/unclaim counts for all 12 months
        const claimCounts = Array(12).fill(0);
        const unclaimCounts = Array(12).fill(0);

        // Process data for the selected year
        apiData.forEach((item) => {
          const itemDate = new Date(item.CreatedDAte);
          if (itemDate.getFullYear() === year) {
            const monthIndex = itemDate.getMonth();
            if (item.STATUS === 'Claim') {
              claimCounts[monthIndex] += 1;
            } else if (item.STATUS === 'Unclaim') {
              unclaimCounts[monthIndex] += 1;
            }
          }
        });

        // Update chart data
        setChartData({
          labels: months,
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
    setSelectedYear(currentDate.getFullYear()); // Reset to current year
    fetchYearlyData(currentDate.getFullYear());
  };

  useEffect(() => {
    fetchYearlyData(selectedYear);
  }, [selectedYear]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top' },
      title: { display: true, text: `Monthly Device Enrollment - ${selectedYear}` },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        ticks: { font: { size: 12 }, color: '#333' },
        grid: { display: false },
      },
      y: {
        ticks: { font: { size: 12 }, color: '#333' },
        grid: { color: '#eee' },
      },
    },
  };

  return (
    <Box
      w="100%"
      m="30px auto"
      bg="white"
      p="20px"
      borderRadius="8px"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Flex gap="15px" mb="20px" justify="space-between" align="center">
        <Box>
          <Text mb="5px" fontSize="sm">
            Year:
          </Text>
          <Select
            placeholder="Select Year"
            value={selectedYear}
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
              No data available for the selected year
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MonthWiseChart;
