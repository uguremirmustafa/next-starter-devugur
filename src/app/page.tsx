import { Card, CardBody } from "@nextui-org/react";
import { sql } from "drizzle-orm";

import db from "@/db";

export default async function Home() {
  const result = await db.execute(sql`SELECT * FROM pg_catalog.pg_tables`);
  return (
    <Card className="mx-auto mt-4 max-w-lg">
      <CardBody className="text-center">
        <h1 className="mb-3 text-2xl font-bold">Next.js Starter</h1>
        <p className="text-xl">
          A simple, hassle free starter for your next project!
        </p>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </CardBody>
    </Card>
  );
}
