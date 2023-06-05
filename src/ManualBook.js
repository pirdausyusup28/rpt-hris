import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineHeader,
  } from "@material-tailwind/react";
  import {
    BellIcon,
    ArchiveBoxIcon,
    CurrencyDollarIcon,
  } from "@heroicons/react/24/solid";

function ManualBook() {
    return (
        <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly', padding:'3%' }}>
            <div className="w-[25rem]">
                <Timeline>
                    <TimelineItem className="h-28">
                    <TimelineConnector className="!w-[78px]" />
                    <TimelineHeader className="relative py-3 pl-4 pr-8 bg-white border shadow-lg rounded-xl border-blue-gray-50 shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost">
                        <BellIcon className="w-5 h-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                            $2400, Design changes
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            22 DEC 7:20 PM
                        </Typography>
                        </div>
                    </TimelineHeader>
                    </TimelineItem>
                    <TimelineItem className="h-28">
                    <TimelineConnector className="!w-[78px]" />
                    <TimelineHeader className="relative py-3 pl-4 pr-8 bg-white border shadow-lg rounded-xl border-blue-gray-50 shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost" color="red">
                        <ArchiveBoxIcon className="w-5 h-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                            New order #1832412
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            21 DEC 11 PM
                        </Typography>
                        </div>
                    </TimelineHeader>
                    </TimelineItem>
                    <TimelineItem className="h-28">
                    <TimelineHeader className="relative py-3 pl-4 pr-8 bg-white border shadow-lg rounded-xl border-blue-gray-50 shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost" color="green">
                        <CurrencyDollarIcon className="w-5 h-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                            Payment completed for order #4395133
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            20 DEC 2:20 AM
                        </Typography>
                        </div>
                    </TimelineHeader>
                    </TimelineItem>
                </Timeline>
            </div>
            <div className="w-[25rem]">
                <Timeline>
                    <TimelineItem className="h-28">
                    <TimelineConnector className="!w-[78px]" />
                    <TimelineHeader className="relative py-3 pl-4 pr-8 bg-white border shadow-lg rounded-xl border-blue-gray-50 shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost">
                        <BellIcon className="w-5 h-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                            $2400, Design changes
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            22 DEC 7:20 PM
                        </Typography>
                        </div>
                    </TimelineHeader>
                    </TimelineItem>
                    <TimelineItem className="h-28">
                    <TimelineConnector className="!w-[78px]" />
                    <TimelineHeader className="relative py-3 pl-4 pr-8 bg-white border shadow-lg rounded-xl border-blue-gray-50 shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost" color="red">
                        <ArchiveBoxIcon className="w-5 h-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                            New order #1832412
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            21 DEC 11 PM
                        </Typography>
                        </div>
                    </TimelineHeader>
                    </TimelineItem>
                    <TimelineItem className="h-28">
                    <TimelineHeader className="relative py-3 pl-4 pr-8 bg-white border shadow-lg rounded-xl border-blue-gray-50 shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost" color="green">
                        <CurrencyDollarIcon className="w-5 h-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                            Payment completed for order #4395133
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            20 DEC 2:20 AM
                        </Typography>
                        </div>
                    </TimelineHeader>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
      );
  }
  
  export default ManualBook;