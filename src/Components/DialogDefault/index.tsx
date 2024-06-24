/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


interface DialogDefaultProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirmAction: any;
}

export function DialogDefault({ open, setOpen, onConfirmAction}: DialogDefaultProps) {
  

  const title = "Excluir item";
 
  return (
    <>
      <Dialog open={open} handler={onConfirmAction} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{title}</DialogHeader>
        <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Você tem certeza que deseja fazer isso? esssa ação não poderá ser desfeita e excluira o devido item permanentimente.
        </DialogBody>
        <DialogFooter placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Button
            variant="text"
            color="red"
            onClick={ () => setOpen(false)}
            className="mr-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <span>Cancelar</span>
          </Button>
          <Button variant="gradient" color="green" onClick={onConfirmAction} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}