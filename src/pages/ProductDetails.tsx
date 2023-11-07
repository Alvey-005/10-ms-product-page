import { useLoaderData } from "react-router-dom";
import { useState } from 'react';
import Heading from "../components/ui/Heading";
import parse from "html-react-parser";
import AccordionHolder from "../components/ui/AccordianHolder";
import CheckList from "../components/ui/CheckList";
import StyledSlider from "../components/ui/StylesSlider";
import CourseInstructor from "../components/feature/CourseInstructor";
interface LoaderParams {
    request: Request;
    params: {
        productSlug: string;
    };
}
export async function Productloader({ params }: LoaderParams) {
    const productSlug = params.productSlug;
    const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/${productSlug}?lang=bn`);
    const data = await res.json();
    return data.data;
}
const ProductDetails = () => {
    const data: any = useLoaderData();
    const courseInstructor = data.sections.filter((section: any) => section.type === "instructors")[0];
    const pointer = data.sections.filter((section: any) => section.type === "pointers")[0];
    const about = data.sections.filter((section: any) => section.type === "about")[0];
    const features = data.sections.filter((section: any) => section.type === "features")[0];
    const feature_explanations = data.sections.filter((section: any) => section.type === "feature_explanations")[0];
    const faq = data.sections.filter((section: any) => section.type === "faq")[0];
    const transformedfaqValues = faq?.values.map((object: any) => ({
        title: object.question,
        description: object.answer,
        order_idx: object.order_idx,
    }));
    const tumbPath = data.media.find((media: any) => media.name === "thumbnail").resource_value;
    const testimonials = data.sections.filter((section: any) => section.type === "testimonials")[0];
    const [playVideo, setPlayVideo] = useState(false);
    const handleVideo = () => setPlayVideo(!playVideo);
    return (
        <>
            <main className="container flex flex-col gap-4 md:flex-row md:gap-12 md:pt-10 text-left">
                <div className='order-2 flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]'>
                    <h1 className='text-gray-950 mb-8 leading-normal text-4xl font-semibold  hidden md:block'>{data.title}</h1>
                    <p className='text-gray-700  leading-normal mb-4'>{data.description}</p>

                    {/* course Instructor */}
                    <div className='mb-8'>
                        <Heading>{courseInstructor.name}</Heading>
                        <div className={`grid justify-items-start grid-cols-1 ${courseInstructor.values.length > 1 ? 'md:grid-cols-2' : ''} gap-4 w-full md:rounded-md md:border p-5  border-neutral-200`}>
                            {courseInstructor.values.map((instructor: any) => (
                                <CourseInstructor instructor={instructor} />
                            ))}

                        </div>
                    </div>

                    {/* course Instructor end*/}

                    {/* course pointer */}
                    <div className='mb-8'>
                        <Heading>{pointer.name}</Heading>
                        <div className={`grid justify-items-start grid-cols-1 lg:grid-cols-2 gap-4 w-full md:rounded-md md:border p-5  border-neutral-200`}>
                            {pointer.values.map((point: any) => (
                                <li>{parse(point.text)}</li>
                            ))}

                        </div>
                    </div>
                    {/* course pointer end*/}
                    {/* course about */}
                    <div className='mb-8'>
                        <Heading>{about.name}</Heading>
                        <AccordionHolder itemArray={about.values} />
                    </div>
                    {/* course about end */}
                    {/* course laid out feature */}
                    {features.values && features.values.length > 0 && (
                        <div className='mb-4'>
                            <Heading>{features.name}</Heading>
                            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 bg-violet-900  md:rounded-md md:border p-5">
                                {features.values.map((feature: any, idx: number) => (
                                    <div key={idx} className='flex gap-4 items-start'>
                                        <img src={feature.icon} />
                                        <div className='flex flex-1 flex-col gap-2'>
                                            <h5 className='font-semibold text-white'>{feature.title}</h5>
                                            <h6 className='text-white'>{feature.subtitle}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )

                    }
                    {
                        feature_explanations && feature_explanations.values && feature_explanations.values.length > 0 && (
                            <div className='mb-4'>
                                <Heading>{feature_explanations.name}</Heading>
                                <div className='grid grid-cols-1  gap-8 mb-4 p-4 md:rounded-md md:border divide-y'>
                                    {feature_explanations.values.map((feature: any) => (
                                        <>
                                            <CheckList title={feature.title} image={feature.file_url} checklistArray={feature.checklist} />
                                        </>
                                    ))}
                                </div>
                            </div>
                        )
                    }

                    {/* course about end */}
                    {/* course faq */}
                    {faq && faq.values && faq.values.length > 0 && (
                        <div className='mb-8'>
                            <Heading>{faq.name}</Heading>
                            <AccordionHolder itemArray={transformedfaqValues} />
                        </div>
                    )}

                    <div className='mb-8'>
                        {testimonials && testimonials.values &&

                            (
                                <><Heading>{testimonials.name}</Heading>
                                    <StyledSlider items={testimonials.values} /> </>
                            )}
                    </div>
                    {/* course about faq */}
                    {/* course End */}
                    {/* course End */}
                </div>

                <div className='w-full order-1  md:max-w-[330px] lg:max-w-[400px]'>
                    <div className="md:sticky md:top-[50px]">
                        <div className="overflow-hidden rounded-md md:border">
                            {playVideo ? (<div className="video relatvie flex aspect-video items-center justify-center overflow-hidden bg-black">
                                <iframe width="853" height="480" src="https://www.youtube.com/embed/zrlYnaZftEQ?rel=0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                                </iframe>
                            </div>) : (
                                <div className="relatvie flex aspect-video items-center justify-center overflow-hidden bg-black">
                                    <div className="relative">
                                        <span onClick={handleVideo}className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                            <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#fff" fill-opacity="0.5"></circle><circle cx="27.999" cy="28" r="25.415" fill="#fff"></circle><path fill="#1CAB55" d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"></path></svg>
                                        </span>
                                        <div className="full-wrap">
                                            <span>
                                                <img alt="" className="w-full"
                                                    src={tumbPath}
                                                    style={{ color: 'transparent' }} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}


                        </div>
                        <div className="block md:hidden">
                            <h1 className="text-gray-950 mb-8 leading-normal text-2xl font-semibold ">
                                {data.title}
                            </h1>
                        </div>
                        <div className="bottom-0 left-0 z-50 w-full p-4 apply-position apply-color apply-boxShadow">
                            <div className="flex items-center justify-between md:flex-col md:items-start">
                                <div>
                                    <div className="flex items-center justify-between md:flex-col md:items-start">
                                        <div className="md:mb-3">
                                            <div className="inline-block text-2xl font-semibold">৳3850</div>
                                            <span className="text-base font-normal">/ফুল কোর্স (মেয়াদ ১ বছর)</span>
                                        </div>
                                    </div>
                                    <div className="mb-2 flex items-center justify-between"></div>
                                </div>
                                <button className="rounded-md bg-green-800 p-3 whitespace-nowrap text-base font-medium text-white md:w-full  ">{data.cta_text.name}</button>
                            </div>
                        </div>
                        <div className="grid py-2 md:p-6">
                            {data.checklist.map((item: any) => (
                                <div className="mb-3 flex items-center leading-5">
                                    <div className="inline-block h-[20px] w-[20px]" >
                                        <img alt="icon" src={item.icon} style={{ opacity: 1 }} /></div>
                                    <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">{parse(item.text)}</h4>
                                </div>
                            ))}

                        </div>


                    </div>
                </div>
            </main>
        </>
    )
}

export default ProductDetails;