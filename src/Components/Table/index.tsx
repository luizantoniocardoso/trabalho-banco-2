/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@material-tailwind/react";
import { HeaderTable } from "./HeaderTable";
import { BodyTable } from "./BodyTable";
import { FooterTable } from "./FooterTable";
import { TABS } from "../../MOCK/tablesMock";
import { DialogDefault } from "../DialogDefault";
import { useEffect, useState, useCallback } from "react";
import { Modal } from "../Modal";
import { Forms } from "../Forms";
import { FormsTitle } from "../Forms/FormsTitle";
import { FormsInput } from "../Forms/FormsInput";
import { FormsSelect } from "../Forms";
import { config } from "../../Enviroment";

export function Table() {
  const [openDelete, setOpenDelete] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const [valueTab, setValueTab] = useState("Equipamentos");
  const [search, setSearch] = useState("");

  const [dataEdit, setDataEdit] = useState({} as any);
  const [dataDelete, setDataDelete] = useState({} as any);

  const [data, setData] = useState<any[]>([]);
  const [tableRow, setTableRow] = useState<any[]>([]);

  const [pagAtual, setPagAtual] = useState(1);
  const [pagMax, setPagMax] = useState(1);

  const [formData, setFormData] = useState<any>({});

  const [models, setModels] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [locations, setLocations] = useState<any[]>([]);

  const fetchEquipamentos = async () => {
    const response = await fetch(`${config.localHost}/Equipamentos`);
    const data = await response.json();
    return data.conteudo;
  };

  const fetchCategorias = async () => {
    const response = await fetch(`${config.localHost}/Categorias`);
    const data = await response.json();
    return data.conteudo;
  };

  const fetchModelos = async () => {
    const response = await fetch(`${config.localHost}/Modelos`);
    const data = await response.json();
    return data.conteudo;
  };

  const fetchLocalizacoes = async () => {
    const response = await fetch(`${config.localHost}/Localizacoes`);
    const data = await response.json();
    return data.conteudo;
  };

  const postItem = async (valueTab: string, data: any) => {
    await fetch(`${config.localHost}/${valueTab}/Create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const updateItem = async (id: string, valueTab: string, data: any) => {
    delete data.id;

    await fetch(`${config.localHost}/${valueTab}/Update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const deleteItem = async (id: string, valueTab: string) => {
    await fetch(`${config.localHost}/${valueTab}/Delete/${id}`, {
      method: "DELETE",
    });
  };

  const fetchData = useCallback(async () => {
    let fetchedData;
    switch (valueTab) {
      case "Equipamentos":
        fetchedData = await fetchEquipamentos();
        break;
      case "Categorias":
        fetchedData = await fetchCategorias();
        break;
      case "Modelos":
        fetchedData = await fetchModelos();
        break;
      case "Localizacoes":
        fetchedData = await fetchLocalizacoes();
        break;
      default:
        fetchedData = [];
        break;
    }
    setData(fetchedData);
    setPagAtual(1);
    setPagMax(getPaginations(fetchedData));
    setTableRowPag(fetchedData, 1);
  }, [valueTab]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (data.length > 0) {
      setTableRowPag(data, pagAtual);
    }
  }, [pagAtual, data]);

  useEffect(() => {
    const fetchDropdownData = async () => {
      const modelsData = await fetchModelos();
      const categoriesData = await fetchCategorias();
      const locationsData = await fetchLocalizacoes();
      setModels(modelsData);
      setCategories(categoriesData);
      setLocations(locationsData);
    };
    if (openModalAdd || openModalEdit) {
      fetchDropdownData();
    }
  }, [openModalAdd, openModalEdit]);

  const getPaginations = (data: any[]) => {
    const dataLength = data?.length || 0;
    const dataPerPage = 5;
    const paginations = Math.ceil(dataLength / dataPerPage);
    return paginations;
  };

  const setTableRowPag = (data: any[], pagAtual: number) => {
    const dataPerPage = 5;
    const start = (pagAtual - 1) * dataPerPage;
    const end = start + dataPerPage;
    const dataPag = data.slice(start, end);
    setTableRow(dataPag);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    console.log(name, value);

    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onClickAddButton = () => {
    setFormData({});
    setOpenModalAdd(true);
  };
  const prevPagHandler = () => (pagAtual > 1 ? setPagAtual(pagAtual - 1) : null);
  const proxPagHandler = () => (pagAtual < pagMax ? setPagAtual(pagAtual + 1) : null);
  const onClickTab = (e: React.MouseEvent<HTMLButtonElement>) =>
    setValueTab(e?.currentTarget?.dataset?.value as string);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value as string);
  
  const handleSearchButton = async () => {
    const response = await fetch(`${config.localHost}/${valueTab}?nome=${search}`);

    const data = await response.json();

    setData(data.conteudo);
  };
  const onClickEdit = (id: any) => {
    setOpenModalEdit(true);
    setDataEdit(data.find((item) => item.id === id));
    setFormData(data.find((item) => item.id === id) || {});
  };
  const onClickDelete = (id: any) => {
    setOpenDelete(true);
    setDataDelete(data.find((item) => item.id === id));
  };

  const onConfirmActionDelete = async (objectToDelete: any) => {
    setOpenDelete(false);
    await deleteItem(objectToDelete, valueTab);
    fetchData();
  };

  const onConfirmActionAdd = async () => {
    setOpenModalAdd(false);
    await postItem(valueTab, formData);
    fetchData();
    console.log("Adicionado com sucesso");
  };

  const onConfirmActionEdit = async () => {
    setOpenModalEdit(false);
    await updateItem(dataEdit.id, valueTab, formData);
    fetchData();
    console.log("Atualizado com sucesso");
  };

  if (data.length === 0) {
    return <div>Carregando...</div>;
  };
  return (
    <>
      <Card className="h-full w-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
        <FooterTable
          pagAtual={pagAtual}
          PrevPagHandler={prevPagHandler}
          pagMax={pagMax}
          proxPagHandler={proxPagHandler}
        />
      </Card>
      <DialogDefault
        open={openDelete}
        setOpen={setOpenDelete}
        onConfirmAction={() => onConfirmActionDelete(dataDelete.id)}
        objectToDelete={dataDelete}
      />
      <Modal
        onConfirmAction={onConfirmActionAdd}
        open={openModalAdd}
        setOpen={setOpenModalAdd}
        title="Adicionar item"
      >
        <Forms>
          <FormsTitle description={`Adicionar novo Item na tabela ${valueTab}`} />
          <div className="flex flex-col gap-6">
            {Object.keys(data[0] || {}).map((key) => {
              if (key === "id" || key === "categoria" || key === "modelo" || key === "localizacao") return null;
              if (key === "dataAquisicao") {
                return <FormsInput key={key} name={key} title={key} placeholder={`Digite o ${key}`} type="date" onChangeAction={handleChange} />;
              }
              return (
                <FormsInput
                  key={key}
                  name={key}
                  title={key}
                  placeholder={`Digite o ${key}`}
                  type="text"
                  onChangeAction={handleChange}
                />
              );
            })}
            {valueTab === "Equipamentos" ? (
              <>
                <FormsSelect name="modeloId" title="Modelo" options={models} value={formData.modeloId || ""} onChangeAction={handleChange} />
                <FormsSelect name="categoriaId" title="Categoria" options={categories} value={formData.categoriaId || ""} onChangeAction={handleChange} />
                <FormsSelect name="localizacaoId" title="Localização" options={locations} value={formData.localizacaoId || ""} onChangeAction={handleChange} />
              </>
            ) : null}
          </div>
        </Forms>
      </Modal>
      <Modal
        onConfirmAction={onConfirmActionEdit}
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        title={`Editar o item ${dataEdit.nome}`}
      >
        <Forms>
          <FormsTitle description={`Editar o Item na tabela ${valueTab}`} />
          <div className="flex flex-col gap-6">
            {Object.keys(dataEdit || {}).map((key) => {
              if (key === "id" || key === "categoria" || key === "modelo" || key === "localizacao") return null;
              if (key === "dataAquisicao") {
                return (
                  <FormsInput
                    key={key}
                    name={key}
                    title={key}
                    placeholder={`Digite o ${key}`}
                    type="date"
                    value={formData[key] || ""}
                    onChangeAction={handleChange}
                  />
                );
              }
              return (
                <FormsInput
                  key={key}
                  name={key}
                  title={key}
                  placeholder={`Digite o ${key}`}
                  type="text"
                  value={formData[key] || ""}
                  onChangeAction={handleChange}
                />
              );
            })}
            {valueTab === "Equipamentos" ? (
              <>
                <FormsSelect name="modeloId" title="Modelo" options={models} value={formData.modeloId || ""} onChangeAction={handleChange} />
                <FormsSelect name="categoriaId" title="Categoria" options={categories} value={formData.categoriaId || ""} onChangeAction={handleChange} />
                <FormsSelect name="localizacaoId" title="Localização" options={locations} value={formData.localizacaoId || ""} onChangeAction={handleChange} />
              </>
            ) : null}
          </div>
        </Forms>
      </Modal>
    </>
  );
}