import * as React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Table, TableBody, TableCell, tableCellClasses, 
  TableContainer, TableHead, TableRow, Paper, Chip 
} from '@mui/material';
import { HiOutlineDownload, HiOutlineCheckCircle } from 'react-icons/hi';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; 
import usePayments from '../../Hooks/usePayments';
import useAuth from '../../Hooks/useAuth';
import Loading from '../../Common/Loading';

// Modern Styled Table Components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f8fafc', // Light slate background
    color: '#64748b',           // Slate-500 text
    fontWeight: 700,
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: '1px solid #e2e8f0',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: '#1e293b',
    padding: '16px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#f1f5f9 !important', // Hover effect
    transition: 'background-color 0.2s ease',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function MyOrders() {
  const { user } = useAuth();
  const [payments, , isLoading] = usePayments();
  const [downloadingId, setDownloadingId] = React.useState(null);

  const myOrders = payments?.filter(data => data?.studentEmail === user?.email) || [];

  const downloadInvoice = (orderData) => {
    setDownloadingId(orderData?.transectionId);
    
    const doc = new jsPDF();
    // Modern Invoice PDF Styling
    doc.setFont("helvetica", "bold");
    doc.setTextColor(40);
    doc.setFontSize(22); 
    doc.text("ECADEMIX INVOICE", 14, 25);

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 35);
    doc.text(`Transaction: ${orderData?.transectionId}`, 14, 40);

    autoTable(doc, { 
      startY: 50,
      head: [["Description", "Instructor", "Amount"]],
      body: [[orderData?.courseTitle, orderData?.teacherEmail, `$${orderData?.courseFee}`]],
      theme: "striped",
      headStyles: { fillColor: [79, 70, 229] }, // Indigo-600
    });

    doc.save(`Invoice_${orderData?.transectionId}.pdf`);
    
    setTimeout(() => setDownloadingId(null), 1000); // Reset loading state
  };

  if (isLoading) return <Loading />;

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Order History</h1>
          <p className="text-slate-500">Manage your enrollments and download billing receipts.</p>
        </div>

        <TableContainer component={Paper} elevation={0} className="border border-slate-200 rounded-xl overflow-hidden">
          <Table sx={{ minWidth: 700 }} aria-label="orders table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell>Course Information</StyledTableCell>
                <StyledTableCell>Transaction ID</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Amount</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myOrders.map((orderData, index) => (
                <StyledTableRow key={orderData._id || index}>
                  <StyledTableCell className="font-medium text-slate-400">
                    {index + 1}
                  </StyledTableCell>
                  
                  <StyledTableCell>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-700">{orderData?.courseTitle}</span>
                      <span className="text-xs text-slate-400 lowercase">{orderData?.teacherEmail}</span>
                    </div>
                  </StyledTableCell>

                  <StyledTableCell>
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">
                      {orderData?.transectionId}
                    </code>
                  </StyledTableCell>

                  <StyledTableCell>
                    <Chip 
                      icon={<HiOutlineCheckCircle className="text-green-600" />} 
                      label="Paid" 
                      size="small"
                      className="bg-green-50 text-green-700 font-medium border border-green-100"
                    />
                  </StyledTableCell>

                  <StyledTableCell className="font-bold text-slate-700">
                    ${orderData?.courseFee}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <button
                      onClick={() => downloadInvoice(orderData)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold text-sm hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm"
                    >
                      {downloadingId === orderData?.transectionId ? (
                        "Generating..."
                      ) : (
                        <>
                          <HiOutlineDownload className="text-lg" />
                          Invoice
                        </>
                      )}
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          
          {myOrders.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-500">No orders found.</p>
            </div>
          )}
        </TableContainer>
      </div>
    </div>
  );
}