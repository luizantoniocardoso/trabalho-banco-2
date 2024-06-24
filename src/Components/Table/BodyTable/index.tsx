/* eslint-disable @typescript-eslint/no-explicit-any */
import { PencilIcon } from "@heroicons/react/24/solid";
import { CardBody, Typography, Tooltip, IconButton } from "@material-tailwind/react";
import { tableHead } from "../../../Interfaces";
import { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";

interface BodyTableProps {
    tableRow: any[];
    setDialog: React.Dispatch<React.SetStateAction<boolean>>;
    onClickEdit: (id: any) => void;
    onClickDelete: (id: any) => void;
}

export const BodyTable = ({ tableRow, onClickEdit, onClickDelete } : BodyTableProps) => {    
    const [table, setTable] = useState<any[]>(tableRow);
    const [head, setHead] = useState<tableHead>([]);

    const formattedObject = (object: any) => {
      const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
      const isValidFormat = (object: string) => regex.test(object);
      const isObject = (object: any) => typeof object === 'object';
      const isFakeObject = (object: any) => object === ''; 
      if (isFakeObject(object)) return "";
      if (isObject(object) && object !== null) return object.nome ? object.nome : "Não informado";
      if (isValidFormat(object?.toString())) return object ? format(new Date(object), 'dd/MM/yyyy') : "Não informado";
      return object ? object : "Não informado";
    }

    useEffect(() => {
      if (!tableRow) tableRow = [];
      
      while (tableRow.length < 5) {
        const keyLen = Object.keys(tableRow[0]).length;
        const newRow = {} as any;
        for (let i = 0; i < keyLen; i++) newRow[i] = "";
        tableRow.push(newRow);
      }
      
      setTable(tableRow); 
      
      const columns = Object.keys(tableRow?.[0]);
      columns.push("Editar", "Excluir");  
      setHead(columns);
    }, [tableRow]);

    

    return (
      <CardBody className="overflow-scroll px-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {head.map((head) => (
                  <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {
                table.map((object, index) => {
                  const isLast = index === table.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr key={object.id}>
                      {
                        Object.keys(object).map((key) => {
                          return (
                            <td className={classes} key={key}>
                              <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                { formattedObject(object[key]) }
                              </Typography>
                            </td>
                          );
                        })
                      }
                        <td className={classes}>
                          <Tooltip content="Editar">
                            {object.id ? 
                            <IconButton variant="text" onClick={() => onClickEdit(object.id)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                            :
                            <IconButton variant="text" disabled placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                            }
                          </Tooltip>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Excluir">
                            {
                              object.id ? 
                              <IconButton variant="text" onClick={() => onClickDelete(object.id)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            :
                              <IconButton variant="text" disabled placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            }
                          </Tooltip>
                        </td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table> 
      </CardBody>
    )
}
