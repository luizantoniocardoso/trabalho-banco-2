import { CardFooter, Typography, Button } from "@material-tailwind/react"

interface FooterTableProps {
    pagAtual: number;
    pagMax: number;
    proxPagHandler: () => void;
    PrevPagHandler: () => void;
}



export const FooterTable = ({pagAtual, pagMax, proxPagHandler, PrevPagHandler}: FooterTableProps) => {

    return(
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Typography variant="small" color="blue-gray" className="font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          { `Página ${pagAtual} de ${pagMax}` }
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} onClick={PrevPagHandler}>
            Anterior
          </Button>
          <Button variant="outlined" size="sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} onClick={proxPagHandler}>
            Proxima
          </Button>
        </div>
      </CardFooter>
    )
}