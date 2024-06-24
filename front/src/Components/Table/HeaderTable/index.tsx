import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  CardHeader,
  Typography,
  Button,
  Tabs,
  TabsHeader,
  Tab,
  Input,
} from "@material-tailwind/react";
import { tab } from "../../../Interfaces";

interface HeaderTableProps {
  tabs: tab[];
  nameTable: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClickAddButton?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClickTab?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSearch?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClickSearch?: any;
}


export const HeaderTable = ({ tabs, nameTable, onClickAddButton, onClickTab, handleSearch, onClickSearch}: HeaderTableProps) => {

  return (
    <CardHeader
    floated={false}
    shadow={false}
    className="rounded-none"
    placeholder={undefined}
    onPointerEnterCapture={undefined}
    onPointerLeaveCapture={undefined}
  >
    <div className="mb-8 flex items-center justify-between gap-8">
      <div>
        <Typography
          variant="h5"
          color="blue-gray"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {nameTable}
        </Typography>
        
      </div>
      <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
        <Button
          className="flex items-center gap-3"
          size="sm"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onClick={onClickAddButton}
        >
          <PlusIcon strokeWidth={2} className="h-4 w-4" /> Adicionar
        </Button>
      </div>
    </div>
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <Tabs value={ tabs[0].value } className="w-full md:w-max">
        <TabsHeader
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {tabs.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={onClickTab}
            >
              &nbsp;&nbsp;{label}&nbsp;&nbsp;
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
      <div className="w-full md:w-72 flex ">
        <Input
          label="Search"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
          onChange={handleSearch}
        />
        <Button
          className="flex items-center gap-3 ml-2"
          size="sm"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onClick={onClickSearch}
        >
          <MagnifyingGlassIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
       
      </div>
    </div>
  </CardHeader>
  );
};
