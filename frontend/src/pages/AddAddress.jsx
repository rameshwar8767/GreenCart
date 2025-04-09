import React, { useState } from 'react'
import { assets } from '../assets/assets'

const AddAddress = () => {

    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phone: '',
 
    })

    const handleChange = (e)=>{
        const {name, value} = e.target

        setAddress((prevAddress)=>({
            ...prevAddress,
            [name]: value,
        }))
        console.log(address);
        
    }
    const InputField = ({type, placeholder, name, handleChange, address})=>(
        <input className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition'
         type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        value={address[name]}
        required
        />
    )

    const onSubmitHandler = async (e)=>{
        e.preventDefault();
    }
  return (
    <div className='mt-16 pb-16'>
      <p className='text-2xl md:text-3xl text-gray-500 '>Add Shipping <span className='font-semibold text-primary'>Address</span></p>

      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
        <div className='flex-1 max-w-md'>
            <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
                <div className='grid grid-cols-2 gap-4'>
                    <InputField 
                     handleChange={handleChange} address={address} type="text" name='firstName' type="text" placeholder="First Name" />
                    <InputField  handleChange={handleChange} address={address} type="text" name='lastName'  placeholder="Last Name" />
                </div>
                <InputField  handleChange={handleChange} type="email" address={address} name='email'  placeholder="Email address" />
                <InputField handleChange={handleChange} address={address}  name='street' type="text" placeholder="Street" />

                <div className='grid grid-cols-2 gap-4'>
                <InputField 
                     handleChange={handleChange} address={address}  name='city' type="text" placeholder="City" />
                     <InputField 
                     handleChange={handleChange} address={address}  name='state' type="text" placeholder="State" />
                     
                </div>

                <div className='grid grid-cols-2 gap-4'>
                <InputField 
                     handleChange={handleChange} address={address}  name='zipcode' type="number" placeholder="Zip Code" />
                     
                     <InputField 
                     handleChange={handleChange} address={address} type="text" name='country'  placeholder="Country" />
                </div>
                <InputField 
                     handleChange={handleChange} address={address} type="number" name='phone'  placeholder="Phone number" />
                     <button type='submit' className='w-full px-4 py-2 text-white bg-primary hover:bg-primary-dull transition duration-300 cursor-pointer uppercase '>
                    Save Address
                    </button>
            </form>
        </div>
        <img className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_iamge} alt="" srcset="" />
      </div>
    </div>
  )
}

export default AddAddress
