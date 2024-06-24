/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@material-tailwind/react";
import { HeaderTable } from "./HeaderTable";
import { BodyTable } from "./BodyTable";
import { FooterTable } from "./FooterTable";
import { MOKEGERAL, TABS } from "../../MOCK/tablesMock";
import { DialogDefault } from "../DialogDefault";
import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import { Forms } from "../Forms";
import { FormsTitle } from "../Forms/FormsTitle";
import { FormsInput } from "../Forms/FormsInput";

export function Table() {
  const [ openDelete, setOpenDelete ] = useState(false);
  const [ openModalAdd, setOpenModalAdd ] = useState(false);
  const [ openModalEdit, setOpenModalEdit ] = useState(false);
  
  const [ valueTab, setValueTab ] = useState("equipamentos");

  const [ search, setSearch ] = useState("");

  const [ dataEdit, setDataEdit ] = useState( {} as any);
  const [ dataDelete, setDataDelete ] = useState( {} as any);

  const [ data, setData] = useState<any[]>(MOKEGERAL.equipamentos);
  const [ tableRow, setTableRow ] = useState<any[]>(data.slice(5));

  const [ pagAtual, setPagAtual ] = useState(1);
  const [ pagMax, setPagMax ] = useState(1);

  useEffect(() => {
    setTableRowPag(data, pagAtual)
    const pagMax = getPaginations(data);
    setPagMax(pagMax);
  }, [pagAtual, pagMax, data]);

  const getPaginations = (data: any[]) => {
    const dataLength = data?.length;
    const dataPerPage = 5;
    const paginations = Math.ceil(dataLength / dataPerPage);
    return paginations;
  }

  const setTableRowPag = (data: any[], pagAtual: number) => {
    const dataPerPage = 5;
    const start = (pagAtual - 1) * dataPerPage;
    const end = start + dataPerPage;
    const dataPag = data.slice(start, end);
    console.log(dataPag);
    setTableRow(dataPag);
  }

  useEffect(() => {
    
    switch (valueTab) {
      case "equipamentos":
        setData(MOKEGERAL.equipamentos);
        setPagAtual(1);
        setTableRowPag(MOKEGERAL.equipamentos, 1);
        
        break;
      case "categorias":
        setData(MOKEGERAL.categorias);
        setPagAtual(1);
        setTableRowPag(MOKEGERAL.categorias, 1);

        break;
      case "modelos":
        setData(MOKEGERAL.modelos);
        setPagAtual(1);
        setTableRowPag(MOKEGERAL.modelos, 1);
        break;
      case "localizacoes":
        setData(MOKEGERAL.localizacoes);
        setPagAtual(1);
        setTableRowPag(MOKEGERAL.localizacoes, 1);
        break;
      default :
      setPagAtual(1);
        setData([
          {
            id: '',
            nome: '',
            descricao: '',
            numeroDeSerie: '',
            dataAquisicao: '',
            categoria: '',
            modelo: '',
            localizacao: ''
          }
        ]);
        setTableRowPag([
          {
            id: '',
            nome: '',
            descricao: '',
            numeroDeSerie: '',
            dataAquisicao: '',
            categoria: '',
            modelo: '',
            localizacao: ''
          }
        ], 1);

      break;
    }

  }, [valueTab, data]);

 
  const onClickAddButton = () => setOpenModalAdd(true);
  const prevPagHandler = () => pagAtual > 1 ? setPagAtual(pagAtual - 1) : null;
  const proxPagHandler = () => pagAtual < pagMax ?  setPagAtual(pagAtual + 1) : null;
  const onClickTab = (e: React.MouseEvent<HTMLButtonElement>) => setValueTab(e?.currentTarget?.dataset?.value as string);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value as string);
  const handleSearchButton = () => { 
    // faqzer a logica de filtro de pesquisa pegando a const search
    console.log(search);
  } 
  const onClickEdit = (id: any) => {
    setOpenModalEdit(true);
    setDataEdit(data.find((item) => item.id === id));
    console.log(dataEdit);
  }
  const onClickDelete = (id: any) => {
    setOpenDelete(true);
    setDataDelete(data.find((item) => item.id === id));
  }

  const onConfirmActionDelete = (id:any) => {
    setOpenDelete(false);
    console.log("Deletado com sucesso", 'id:', id);
  };
  const onConfirmActionAdd = async () => {
    setOpenModalAdd(false);
    // faqzer a logica de adicionar um novo item na tabela
    console.log("Adicionado com sucesso");
  };
  return (
    <>
      <Card className="h-full w-full"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <HeaderTable 
        tabs={TABS} 
        nameTable={`Tabela de ${valueTab}`}
        onClickTab={onClickTab} 
        onClickAddButton={onClickAddButton}
        handleSearch={handleSearch}
        onClickSearch={handleSearchButton}
        />
        <BodyTable 
        tableRow={tableRow}
        setDialog={setOpenDelete}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        />
        <FooterTable pagAtual={pagAtual} PrevPagHandler={prevPagHandler} pagMax={pagMax} proxPagHandler={proxPagHandler}/>
      </Card>
      {/* dialog de delite função pra deletar e onConfirmActionDelete */}
      <DialogDefault open={openDelete} setOpen={setOpenDelete} onConfirmAction={onConfirmActionDelete} objectToDelete={dataDelete}/> 
      {/* modal de adicionar item função para adicionar e onConfirmActionAdd*/}
      <Modal onConfirmAction={onConfirmActionAdd} open={openModalAdd} setOpen={setOpenModalAdd} title="Adicionar item" >
        <Forms>
          <FormsTitle description={`Adicionar novo Item na tabela ${valueTab}`}/>
          <div className="flex flex-col gap-6">
            {
              Object.keys(data[0]).map((key) => { 
                if (key === "id") return null;
                return <FormsInput title={key} placeholder={`Digite o ${key}`} type="text"/>
              })
            }
          </div>
        </Forms>
      </Modal>

      <Modal onConfirmAction={onConfirmActionAdd} open={openModalEdit} setOpen={ setOpenModalEdit } title={`Editar o item ${dataEdit.nome}`} >
        <Forms>
          <FormsTitle description={`Editar o Item na tabela ${valueTab}`}/>
          <div className="flex flex-col gap-6">
            {
              Object.keys(data[0]).map((key) => { 
                if (key === "id") return null;
                return <FormsInput title={key} placeholder={`Digite o ${key}`} type="text" value={dataEdit[key]}/>
              })
            }
          </div>
        </Forms>
      </Modal>
    </>
  );
}