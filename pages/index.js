import Image from "next/image";
import { Inter } from "next/font/google";
import FormikForm from "@/Components/FormikForm";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <FormikForm />
   
    </main>
  );
}
