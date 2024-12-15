import Journey_Ticket from '../assets/Images/Journey_ticket.png'
import QR_booking from '../assets/Images/QR_booking.png'
import Quick_Booking from '../assets/Images/Quick_Booking.png'
import Platform_ticket from '../assets/Images/Platform_ticket.png'
import Season_ticket from '../assets/Images/Season_ticket.png'

export const heroFirstSectionNavData = [
    { imgPath: Journey_Ticket, text: 'Journey Ticket' },
    { imgPath: QR_booking, text: 'QR Booking' },
    { imgPath: Quick_Booking, text: 'Quick Booking' },
    { imgPath: Platform_ticket, text: 'Platform Ticket' },
    { imgPath: Season_ticket, text: 'Season Ticket' },
]

import Cancel_Ticket from '../assets/Images/Cancel_ticket.png'
import Booking_History from '../assets/Images/Booking_history.png'
import Show_ticket from '../assets/Images/Show_ticket.png'
import R_Wallet from '../assets/Images/R_wallet.png'
import Transaction_status from '../assets/Images/Transaction.png'
import Profile from '../assets/Images/Profile_img.png'

export const heroSecondSectionNavData = [
    { imgPath: Cancel_Ticket, text: 'Cancel Ticket' },
    { imgPath: Booking_History, text: 'Booking History' },
    { imgPath: Show_ticket, text: 'Show Ticket' },
    { imgPath: R_Wallet, text: 'R Wallet' },
    { imgPath: Profile, text: 'My Profile' },
    { imgPath: Transaction_status, text: 'Transactions' },
]

export const buttonsData = [
    { Journey_Ticket_Button: ['NEXT TRAINS', 'GET FARE'] },
    { Quick_Booking_Button: ['NEXT'] },
    { Platform_ticket_Button: ['BOOK TICKET'] },
    { Season_ticket_Button: ['ISSUE TICKET', 'RENEW TICKET'] }
]

export const allStationsList = [
    { stationName: "Ambarnath", stationCode: "AMB", isSuburban: true },
    { stationName: "Ambivli", stationCode: "AMBV", isSuburban: true },
    { stationName: "Andheri", stationCode: "ADH", isSuburban: true },
    { stationName: "Badlapur", stationCode: "BDR", isSuburban: true },
    { stationName: "Bandra", stationCode: "BAND", isSuburban: true },
    { stationName: "Bhandup", stationCode: "BND", isSuburban: true },
    { stationName: "Bhayandar", stationCode: "BYR", isSuburban: true },
    { stationName: "Boisar", stationCode: "BOR", isSuburban: true },
    { stationName: "Borivali", stationCode: "BVI", isSuburban: true },
    { stationName: "Byculla", stationCode: "BYC", isSuburban: true },
    { stationName: "Charni Road", stationCode: "CRD", isSuburban: true },
    { stationName: "C Shivaji Mah T", stationCode: "CSMT", isSuburban: true },
    { stationName: "Churchgate", stationCode: "CG", isSuburban: true },
    { stationName: "Currey Road", stationCode: "CR", isSuburban: true },
    { stationName: "Dadar", stationCode: "DR", isSuburban: true },
    { stationName: "Dadar West", stationCode: "DW", isSuburban: true },
    { stationName: "Dahisar", stationCode: "DH", isSuburban: true },
    { stationName: "Dahanu", stationCode: "DHN", isSuburban: true },
    { stationName: "Dombivli", stationCode: "DI", isSuburban: true },
    { stationName: "Diva", stationCode: "DIVA", isSuburban: true },
    { stationName: "Ghatkopar", stationCode: "GPR", isSuburban: true },
    { stationName: "Goregaon", stationCode: "GRN", isSuburban: true },
    { stationName: "Grant Road", stationCode: "GRD", isSuburban: true },
    { stationName: "Jogeshwari", stationCode: "JOS", isSuburban: true },
    { stationName: "Kalyan", stationCode: "KYN", isSuburban: true },
    { stationName: "Kalwa", stationCode: "KWA", isSuburban: true },
    { stationName: "Kandivali", stationCode: "KND", isSuburban: true },
    { stationName: "Kandivali", stationCode: "KNDL", isSuburban: true },
    { stationName: "Karjat", stationCode: "KJT", isSuburban: false },
    { stationName: "Kasara", stationCode: "KSR", isSuburban: true },
    { stationName: "Khadavli", stationCode: "KAD", isSuburban: true },
    { stationName: "Khar Road", stationCode: "KRD", isSuburban: true },
    { stationName: "Khardi", stationCode: "KHI", isSuburban: true },
    { stationName: "Khopoli", stationCode: "KOP", isSuburban: false },
    { stationName: "Kurla", stationCode: "KURL", isSuburban: true },
    { stationName: "Lokmanya Tilak Terminus", stationCode: "LTT", isSuburban: true },
    { stationName: "Lower Parel", stationCode: "LPR", isSuburban: true },
    { stationName: "Lower Churchgate", stationCode: "LCHG", isSuburban: true },
    { stationName: "Malad", stationCode: "MAL", isSuburban: true },
    { stationName: "Marine Lines", stationCode: "ML", isSuburban: true },
    { stationName: "Matunga", stationCode: "MT", isSuburban: true },
    { stationName: "Matunga Road", stationCode: "MTG", isSuburban: true },
    { stationName: "Mira Road", stationCode: "MR", isSuburban: true },
    { stationName: "Mumbra", stationCode: "MUA", isSuburban: true },
    { stationName: "Mulund", stationCode: "MUL", isSuburban: true },
    { stationName: "Nallasopara", stationCode: "NSP", isSuburban: true },
    { stationName: "Neral", stationCode: "NRL", isSuburban: false },
    { stationName: "Pali Hill", stationCode: "PH", isSuburban: true },
    { stationName: "Palghar", stationCode: "PLGR", isSuburban: true },
    { stationName: "Parel", stationCode: "PRL", isSuburban: true },
    { stationName: "Saphale", stationCode: "SF", isSuburban: false },
    { stationName: "Santacruz", stationCode: "SCT", isSuburban: true },
    { stationName: "Shelu", stationCode: "SHE", isSuburban: true },
    { stationName: "Sion", stationCode: "SIO", isSuburban: true },
    { stationName: "Thane", stationCode: "TNA", isSuburban: true },
    { stationName: "Titwala", stationCode: "TW", isSuburban: true },
    { stationName: "Vasai Road", stationCode: "BSR", isSuburban: true },
    { stationName: "Vangani", stationCode: "VGI", isSuburban: true },
    { stationName: "Vidyavihar", stationCode: "VDH", isSuburban: true },
    { stationName: "Vile Parle", stationCode: "VLP", isSuburban: true },
    { stationName: "Virar", stationCode: "VR", isSuburban: true },
    { stationName: "Vikhroli", stationCode: "VKL", isSuburban: true },
    { stationName: "Worli", stationCode: "WR", isSuburban: true },
    { stationName: "Ahmedabad", stationCode: "ADI", isSuburban: true },
    { stationName: "Baroda", stationCode: "BD", isSuburban: true },
    { stationName: "Bharuch", stationCode: "BH", isSuburban: true },
    { stationName: "Bhavnagar", stationCode: "BVG", isSuburban: false },
    { stationName: "Dwarka", stationCode: "DWK", isSuburban: false },
    { stationName: "Gandhinagar", stationCode: "GNR", isSuburban: true },
    { stationName: "Gholvad", stationCode: "GHV", isSuburban: true },
    { stationName: "Junagadh", stationCode: "JND", isSuburban: false },
    { stationName: "Mehsana", stationCode: "MS", isSuburban: true },
    { stationName: "Navsari", stationCode: "NSI", isSuburban: true },
    { stationName: "Porbandar", stationCode: "PBR", isSuburban: false },
    { stationName: "Surat", stationCode: "SUR", isSuburban: true },
    { stationName: "Vadodara", stationCode: "VAD", isSuburban: true },
    { stationName: "Vapi", stationCode: "VAPI", isSuburban: true },
    { stationName: "Vijapur", stationCode: "VJP", isSuburban: true },
    { stationName: "Valsad", stationCode: "VLD", isSuburban: true },
    { stationName: "Ankleshwar", stationCode: "ANK", isSuburban: true }
  ];
  
  