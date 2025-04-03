import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import usePayments from '../../Hooks/usePayments';
import useAuth from '../../Hooks/useAuth';
// pdf & auto-table 
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; 


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function MyOrders() {

    const {user} = useAuth()
    const [payments,refetch,isLoading] = usePayments() 
    
    const myOrders = payments.filter(data => data?.studentEmail === user?.email);
    const [downloadedInvoices, setDownloadedInvoices] = React.useState([]);
    
//  invoice download function
     const downloadInvoice = (orderData) => {
        
          
        const doc = new jsPDF();

        doc.setFont("helvetica", "bold");
        doc.setFontSize(22); 
        doc.text("INVOICE", 80, 20);


    
        //  Add Invoice Details
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Transaction ID:", 14, 50);
    doc.setFont("helvetica", "normal");
    doc.text(`${orderData?.transectionId}`, 50, 50);

    doc.setFont("helvetica", "bold");
    doc.text("Student name:", 14, 60);
    doc.setFont("helvetica", "normal");
    doc.text(`${orderData?.studentName}`, 50, 60);

    doc.setFont("helvetica", "bold");
    doc.text("student Email:", 14, 70);
    doc.setFont("helvetica", "normal");
    doc.text(`${orderData?.studentEmail}`, 50, 70);

    doc.setFont("helvetica", "bold");
    doc.text("Institute:", 14, 80);
    doc.setFont("helvetica", "normal");
    doc.text("ECADEMIX", 50, 80); // Replace "ECADEMIX" with dynamic value if needed

    
        //  অর্ডারের তথ্য টেবিল আকারে দেখানো
        autoTable(doc, {  
            startY: 85,
            head: [["Class Title", "Price", "Course Duration"]],
            body: [[orderData?.courseTitle, `$${orderData?.courseFee}` ,`${orderData?.courseDuration} month` ]],
            theme: "grid",
            styles: { fontSize: 12, cellPadding: 5, valign: "middle", halign: "center" },
            headStyles: { fillColor: [41, 128, 185], textColor: [255, 255, 255] },
            alternateRowStyles: { fillColor: [240, 240, 240] },
        });
    
        doc.save(`Invoice_${orderData?.transectionId}.pdf`); // PDF ডাউনলোড     

        setDownloadedInvoices((prev) => [...prev, orderData?.transectionId]);
     }
     



  return (
         <div className='orders__table px-6 py-4 capitalize'>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="left">Class Title</StyledTableCell>
            {/* <StyledTableCell align="left">Fat&nbsp;(g)</StyledTableCell> */}
            <StyledTableCell align="left">teacher email</StyledTableCell>
            <StyledTableCell align="left">course fee</StyledTableCell>
            <StyledTableCell align="left">transection id</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
   
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrders.map((orderData,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="left"> {index +1} </StyledTableCell>
              <StyledTableCell align="left"> {orderData?.courseTitle} </StyledTableCell>
              <StyledTableCell align="left"> {orderData?.teacherEmail} </StyledTableCell>
              <StyledTableCell align="left">$ {orderData?.courseFee} </StyledTableCell>
              <StyledTableCell align="left"> {orderData?.transectionId} </StyledTableCell>
              <StyledTableCell align="right"> 
              <button
                    className={`btn_secondary btn-sm ${downloadedInvoices.includes(orderData?.transectionId) ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => downloadInvoice(orderData)}
                    disabled={downloadedInvoices.includes(orderData?.transectionId)}
                  >
                    get invoice
                    {/* {downloadedInvoices.includes(orderData?.transectionId) ? "Downloaded" : "Get Invoice"} */}
                  </button>
                  </StyledTableCell>
        
           
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         </div>
  );
}
