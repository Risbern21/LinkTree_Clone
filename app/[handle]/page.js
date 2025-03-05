import clientPromise from "../lib/mongodb";
import { notFound } from "next/navigation";
import Dynamicpage from "@/components/Dynamicpage";

export default async function Page({ params }) {
  const { handle } = await params;
  let client = await clientPromise;
  const db = client.db("Linktree_clone");
  const collection = db.collection("links");
  const dbhandle = await collection.findOne({ Handle: handle });

  if (dbhandle) {
    const bgcolor=dbhandle.bgcolor
    console.log(bgcolor)
    return <div className="pt-14 px-5 sm:px-14 sm:pb-30 bg-[#ffffff6b] min-h-[100vh]" style={{backgroundColor:`${bgcolor}`}}>
      <Dynamicpage Handle={dbhandle.Handle} LinkAndText={dbhandle.LinkAndText} profilepic={dbhandle.profilepic} description={dbhandle.description}/>
    </div>;
  } else {
    notFound();
  }
}
