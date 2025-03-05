import clientPromise from "@/app/lib/mongodb";

export async function POST(Request) {
  const body = await Request.json();
  let client = await clientPromise;
  const db = client.db("Linktree_clone");
  const collection = db.collection("links");
  const db_handle = await collection.findOne({ Handle: body.Handle });

  if (db_handle) {
    return Response.json({
      message:`Handle "${db_handle.Handle}" already exists`,
      error: " ",
    });
  } else {
    const result = await collection.insertOne({
      Handle: body.Handle,
      LinkAndText: body.LinkAndText,
      profilepic: body.profilepic,
      bgcolor: body.bgcolor,
      description:body.description
    });
    return Response.json({
      message:"Created Your LinkTree",
      error: null,
    });
  }
}
