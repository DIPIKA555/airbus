// // import * as React from 'react';
// import React, {useState, useEffect} from "react"
// import Typography from '@mui/material/Typography';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import { useSelector } from 'react-redux';

// export default function PaginationControlled() {
//   const [total, setTotal] = useState(0);

//   const selector = useSelector(state=> state.search);
//   alert(total);
//   const [page, setPage] = React.useState(1);

//   useEffect(()=>{
//       setTotal(selector.data.length);
 
//   }, [selector])

//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   return (
//     <Stack spacing={2}>
//       <Typography>Page: {page}</Typography>
//       <Pagination count={total} page={page} onChange={handleChange} />
//     </Stack>
//   );
// }