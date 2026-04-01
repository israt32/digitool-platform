import React from 'react';

const TransformWorkflow = () => {
  return (
    <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-32 '>
      <div className='text-white container mx-auto text-center'>
        <h1 className='font-extrabold text-[40px] mb-4'>Ready to Transform Your Workflow?</h1>
        <p className='text[16px] opacity-90 mb-10'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
        <div>
          <button className='btn mr-4 font-semibold text-[#9514FA] bg-white rounded-full'>Explore Products</button>
          <button className='btn font-semibold bg-transparent border text-white border-white rounded-full'>View Pricing</button>
        </div>
        <p className='mt-4 opacity-80 text-[16px] '>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default TransformWorkflow;