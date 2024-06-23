import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";

import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];
 
const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];
 
export function Table() {
  return (
    <Card className="h-full w-full"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardHeader floated={false} shadow={false} className="rounded-none"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              view all
            </Button>
            <Button className="flex items-center gap-3" size="sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
                          label="Search"
                          icon={<MagnifyingGlassIcon className="h-5 w-5" />} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ img, name, email, job, org, online, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                        <div className="flex flex-col">
                          <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                          >
                            {name}
                          </Typography>
                          <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal opacity-70"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                          {job}
                        </Typography>
                        <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal opacity-70"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                          {org}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Typography variant="small" color="blue-gray" className="font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Previous
          </Button>
          <Button variant="outlined" size="sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}