import React from 'react'

const Descp = () => {
  return (
    <div className='flex flex-col justify-between max-w-[632px]'>
        <div className='max-w-[632px] w-full flex gap-[20px] justify-between'>
        <div className='max-w-[300px] w-full rounded-[8px] px-[16px] py-[8px] flex flex-col bg-[#FFFFFF] border-[0.95px] border-solid border-[#C4CFDE]'>
            <h5 className='font-Poppins font-medium text-[13px] text-[#000000]'>
                Title
            </h5>
            <h5 className='font-Poppins font-normal text-[16px] text-[#000000]'>
                Job Title
            </h5>
        </div>
        <div className='max-w-[300px] w-full border-[0.95px] border-solid border-[#C4CFDE] rounded-[8px] px-[16px] py-[18px] flex flex-col bg-[#FFFFFF]'>
            <h5 className='font-Poppins font-medium text-[16px] text-[#000000]'>
                Location
            </h5>
        </div>
        </div>
        <div className='max-w-[632px] px-[24px] pt-[16px] pb-[24px] bg-[#FFFFFF] border-[0.95px] border-solid border-[#C4CFDE] rounded-[8px] mt-[35px]'>
          <h5 className='font-Poppins font-medium text-[16px] text-[#000000]'>
                Description
            </h5>
            <p className='font-Poppins py-[10px] font-normal leading-[28px] text-[16px] text-[#000000]'>
            We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients. UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building navigation components. To be successful in this role, you should have experience with design software and wireframe tools. If you also have a portfolio of professional design projects that includes work with web/mobile applications, we’d like to meet you. Ultimately, you’ll create both functional and appealing features that address our clients’ needs and help us grow our customer base.
            </p>
            <h5 className='font-Poppins font-medium text-[16px] text-[#000000]'>
                Responsibilities
            </h5>
            <div className=' max-w-[584px]'>
            <ul className='list-disc font-Poppins pt-[10px] pl-[15px] font-normal leading-[28px] text-[16px] text-[#000000]'>
            <li>Gather and evaluate user requirements in collaboration with product managers and engineers</li>
            <li>Illustrate design ideas using storyboards, process flows and sitemaps</li>
            <li>Design graphic user interface elements, like menus, tabs and widgets</li>
            <li>Build page navigation buttons and search fields</li>
            <li>Develop UI mockups and prototypes that clearly illustrate how sites function and look like</li>
            <li>Create original graphic designs (e.g. images, sketches and tables)</li>
            <li>Prepare and present rough drafts to internal teams and key stakeholders</li>
           <li>Identify and troubleshoot UX problems (e.g. responsiveness)</li>
           <li>Conduct layout adjustments based on user feedback</li>
           <li>Adhere to style standards on fonts, colors and images</li>
            </ul>
          </div>
        </div>
        <div className='max-w-[632px] px-[24px] pt-[16px] pb-[24px] bg-[#FFFFFF] border-[0.95px] border-solid border-[#C4CFDE] rounded-[8px] mt-[35px]'>
        <h5 className='font-Poppins font-medium text-[16px] text-[#000000]'>
                Requriments
            </h5>
            <div className=' max-w-[584px]'>
            <ul className='list-disc font-Poppins pt-[10px] pl-[15px] font-normal leading-[28px] text-[16px] text-[#000000]'>
            <li>Proven work experience as a UI/UX Designer or similar role</li>
            <li>Portfolio of design projects</li>
            <li>Knowledge of wireframe tools (e.g. Wireframe.cc and InVision)</li>
            <li>Up-to-date knowledge of design software like Adobe Illustrator and Photoshop</li>
            <li>Team spirit; strong communication skills to collaborate with various stakeholders</li>
            <li>Good time-management skills</li>
            <li>BSc in Design, Computer Science or relevant field</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Descp