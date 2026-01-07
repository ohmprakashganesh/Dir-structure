
import { FaCheck } from 'react-icons/fa6'
import './App.css'
import ProfessionalForm from './components/forms/Form'
import Button1 from './components/ui/Button1'
import { Card } from './components/ui/Card'
 import  Products from "./data/Mock"
import LayoutWrapper from './components/layout/LayoutWrapper'
import { LeafyGreenIcon, TrashIcon } from 'lucide-react'
import SuccessModal, { StatusModal } from './components/data-display/StatusModal'
import { useState } from 'react'
import Loader from './components/data-display/Loader'
import CartItem from './components/ui/CartItem'
import ProductList from './components/data-display/Pagination'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
function App() {
  const [modal, setModal] = useState({ open: true, type: 'success' });

  // const handleAction = (status) => {
  //   setModal({
  //     open: true,
  //     type: status, // sets to 'success' or 'error'
  //   });
  // };
  return (
    <>
    <Navbar />
    <LayoutWrapper >
      


      <ProfessionalForm />
<div className="max-w-7xl bg-amber-100 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 items-start">
          { Products.map(product=>(
              <Card 
             key={product.id}
          {...product}
          onAction={() => console.log(`Added ${product.title} to cart`)}
        />
            )
            )
           }
      </div>
      {/* button section with animation  */}
 <Button1 onClick={()=>console.log("delete")} colorVariant="red" icon={TrashIcon} >Delete Record</Button1>
<Button1 onClick={()=>console.log("success")}  colorVariant="green" icon={LeafyGreenIcon}>Success</Button1>

  <StatusModal 
        isOpen={modal.open} 
        onClose={() => setModal({ ...modal, open: false })}
        type={modal.type}
        title={modal.type === 'success' ? "Payment Sent" : "Payment Declined"}
        subtitle={modal.type === 'success' ? "ID: #12345" : "Error Code: 402"}
        description={
            modal.type === 'success' 
            ? "Your funds have been transferred successfully." 
            : "Your card was declined by the bank. Please check your balance."
        }
      />
       {/* <div className=' w-screen h-screen bg-green-100/40 inset-0 pointer-events-none scroll-m-0 fixed flex '> */}
         <Loader className=' my-auto mx-auto' />
       {/* </div> */}

       <CartItem />
        <ProductList />


 <Footer />
       </LayoutWrapper>
    </>
  )
}
export default App
