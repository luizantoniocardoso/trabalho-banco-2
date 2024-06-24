import { Input, Typography } from "@material-tailwind/react"
import { forwardRef } from "react";

interface FormsInputProps {
    title: string;
    placeholder: string;
    ref?: React.RefObject<HTMLInputElement>;
    onChangeAction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number | readonly string[] | undefined;
    type: string;
}
  
export const FormsInput = forwardRef<HTMLInputElement, FormsInputProps>(({ onChangeAction, placeholder, value, title, type }: FormsInputProps, ref) => (
        <>
            <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {title}
            </Typography>
            <Input
                size="lg"
                id={title}
                placeholder={placeholder}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }} 
                type={type}
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined} 
                crossOrigin={undefined}          
                onChange={onChangeAction}
                ref={ref}
                value={value}
            />
        
        </>
    )
)