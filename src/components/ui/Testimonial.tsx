import { useState } from 'react';
const Testimonials = ({ name, description, image, testimonial }: any) => {

   const [showFull, setShowFull] = useState(false);
   const handleClick = () => setShowFull(!showFull);
   return (
      <>
         <div className="mx-4 ">
            <div className="relative mt-5 mb-5 w-full rounded-lg border p-6 flex h-[300px] flex-col justify-between">
               <div>
                  <div className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2" id="quote">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                        <path d="M19.092 3.863C17.588 6.173 17.313 8.313 17.411 9.551C23.543 9.45 23.107 16 18.801 16C16.971 16 15 14.662 15 11.725C15 9.001 16.412 5.88 19.092 3.863ZM6.092 3.863C4.588 6.173 4.313 8.313 4.411 9.551C10.543 9.45 10.107 16 5.801 16C3.971 16 2 14.662 2 11.725C2 9.001 3.412 5.88 6.092 3.863ZM23 0C16.892 1.206 13 6.584 13 11.725C13 15.695 15.786 18 18.801 18C21.416 18 24 16.203 24 13.021C24 10.42 22.095 8.264 19.604 7.872C19.821 5.868 21.769 2.961 23.984 2.126L23 0ZM10 0C3.892 1.206 0 6.584 0 11.725C0 15.695 2.786 18 5.801 18C8.416 18 11 16.203 11 13.021C11 10.42 9.095 8.264 6.604 7.872C6.821 5.868 8.769 2.961 10.984 2.126L10 0Z" fill="#FF0000" fill-opacity="0.35" />
                     </svg>
                  </div>
                  <div className="my-4">
                     <div className={`text-[16px] font-[500px] leading-[26px] ${!showFull ? "line-clamp-4" : ""}`}>{testimonial}</div>
                     <div className="my-2 inline-block cursor-pointer" onClick={handleClick}>
                        <p className="flex items-center text-sm font-normal text-[#1CAB55]">
                           {!showFull ? 'আরও দেখুন' : 'কম দেখুন'}
                        </p>
                     </div>
                  </div>
               <div className="TestimonialSlider_testimonial_user__2Uxrv flex gap-4">
                  <div>
                     <div className="rounded-full overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: '0px', opacity: 1 }}>
                        <img alt="image" loading="lazy" width="50" height="50" src={image} /></div>
                  </div>
                  <div>
                     <h3>{name}</h3>
                     <p className="text-sm text-gray-400">{description}</p>
                  </div>
               </div>
               <div className="absolute -bottom-4 right-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2 rotate-180" id="quote">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                        <path d="M19.092 3.863C17.588 6.173 17.313 8.313 17.411 9.551C23.543 9.45 23.107 16 18.801 16C16.971 16 15 14.662 15 11.725C15 9.001 16.412 5.88 19.092 3.863ZM6.092 3.863C4.588 6.173 4.313 8.313 4.411 9.551C10.543 9.45 10.107 16 5.801 16C3.971 16 2 14.662 2 11.725C2 9.001 3.412 5.88 6.092 3.863ZM23 0C16.892 1.206 13 6.584 13 11.725C13 15.695 15.786 18 18.801 18C21.416 18 24 16.203 24 13.021C24 10.42 22.095 8.264 19.604 7.872C19.821 5.868 21.769 2.961 23.984 2.126L23 0ZM10 0C3.892 1.206 0 6.584 0 11.725C0 15.695 2.786 18 5.801 18C8.416 18 11 16.203 11 13.021C11 10.42 9.095 8.264 6.604 7.872C6.821 5.868 8.769 2.961 10.984 2.126L10 0Z" fill="#FF0000" fill-opacity="0.35" />
                     </svg>
                  </div>
                  </div>

            </div>
         </div>
      </>
   )
};

export default Testimonials;
