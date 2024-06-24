import { Typography } from "@material-tailwind/react"


interface FormsTitleProps { 
    title?: string;
    description: string;
}


export const FormsTitle = ({ title, description} : FormsTitleProps) => {
    return (
    <>
        <Typography variant="h4" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
           {title}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {description}	
        </Typography>
    </>
    )
}