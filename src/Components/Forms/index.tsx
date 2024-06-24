import { Card } from "@material-tailwind/react";
   
  export function Forms({ children }: { children: React.ReactNode }) {
    return (
       <Card className="w-full" color="transparent" shadow={false} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <form className="w-full max-h-96 overflow-auto">
          <div className="mb-1 flex flex-col gap-6">
            {children}
          </div>
        </form>
      </Card>
    );
  }