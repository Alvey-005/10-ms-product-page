import parse from "html-react-parser";
type InstructorProps = {
    image:string,
    name:string,
    description:string
}
const CourseInstructor = ({instructor}:{instructor:InstructorProps}) => {
    return (
        <>
            <div className='flex gap-5 items-center'>
                <img className="inline-block h-20 w-20 rounded-full ring-2 ring-white" src={instructor.image} alt="" />
                <div>
                    <h6 className='font-medium'>{instructor.name}</h6>
                    <span className="" >{parse(instructor.description)}</span>

                </div>
            </div>
        </>
    )
}

export default CourseInstructor;