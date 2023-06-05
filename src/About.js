import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function About() {
  const [open, setOpen] = useState(1);
  const active = '';
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
    return (
      <div className="container p-10 flex-start" >
        <Fragment>
      <Accordion
        open={open === 1}
        className="px-4 mb-2 border rounded-lg border-blue-gray-100"
        style={{ backgroundColor:'aquamarine'}}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            active === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Panduan Permohonan Cuti Via Aplikasi HRIS
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="px-4 mb-2 border rounded-lg border-blue-gray-100"
        style={{ backgroundColor:'darkturquoise'}}
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            active === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Panduan Update Data Diri Karyawan Via Aplikasi HRIS
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="px-4 border rounded-lg border-blue-gray-100"
        style={{ backgroundColor:'antiquewhite'}}
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            active === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Panduan Pengajuan Jam Lembur
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </Fragment>
      </div>
    );
  }
  
  export default About;