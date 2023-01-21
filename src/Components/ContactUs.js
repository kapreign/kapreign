import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactUs({theme}) {
  return (
    <div><section className={`relative pt-24 pb-36 bg-white overflow-hidden ${theme ? "bg-blaack" :"bg-offWhite"} shadow-lg`}>
  {/* <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="flaro-assets/images/contact/gradient.svg" alt=""/> */}
  <div className="relative z-10 container px-4 mx-auto">
    <h2 className="mb-5 text-6xl md:text-8xl xl:text-10xl text-gray dark:text-lightGray text-center font-bold font-heading tracking-px-n leading-none">Get connected</h2>
    <p className="mb-20 text-lg text-gray dark:text-lightGray text-center font-medium leading-normal md:max-w-lg mx-auto">We're here for you, get connected!</p>
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
        <div className="mb-6 relative mx-auto w-16 h-16 bg-white border border-blueGray-200 rounded-full">
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <Icon icon="system-uicons:mail" height={50} width={50} classname="text-white hover:text-lightGray p-3 bg-white hover:bg-gray rounded-full"></Icon>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-bold font-heading leading-snug">Send Email</h3>
          <p className="font-medium leading-relaxed">info@kapreign.com</p>
          <p className="font-medium leading-relaxed">support@kapreign.com</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-3">
        <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
          <div className="mb-6 relative mx-auto w-16 h-16 bg-white border border-blueGray-200 rounded-full">
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <Icon icon="ic:round-add-ic-call" height={50} width={50} classname="text-white hover:text-lightGray p-3 bg-white hover:bg-gray rounded-full"></Icon>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-bold font-heading leading-snug">Call Us</h3>
          <p className="font-medium leading-relaxed">+91 9497656243</p>
          <p className="font-medium leading-relaxed">+91 7907226404</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-3">
        <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
          <div className="mb-6 relative mx-auto w-16 h-16 bg-white border border-blueGray-200 rounded-full">
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <Icon icon="material-symbols:add-location-alt-outline-rounded" height={50} width={50} classname="text-white hover:text-lightGray p-3 bg-white hover:bg-gray rounded-full"></Icon>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-bold font-heading leading-snug">Address</h3>
          <p className="font-medium max-w-xs mx-auto leading-relaxed">Vengoor, Angamaly, Kerala, 683572</p>
        </div>
      </div>
    </div>
  </div>
</section></div>
  )
}
