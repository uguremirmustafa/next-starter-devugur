import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Spacer,
  User,
} from "@nextui-org/react";
import { desc } from "drizzle-orm";

import db from "@/db";
import getRelativeDate from "@/utils/get-date-distance";

import AdvicesClient from "./page.client";

export default async function AdvicesPage() {
  const entries = await db.query.advices.findMany({
    limit: 10,
    columns: { description: true, id: true, createdAt: true },
    with: { user: true },
    orderBy: (x) => desc(x.createdAt),
  });
  return (
    <div className="mx-auto max-w-xl">
      <Card>
        <CardHeader>Give us an advice!</CardHeader>
        <AdvicesClient />
      </Card>
      <Spacer y={4} />

      <h2 className="text-2xl font-bold">Latest advices</h2>
      <ul className="mt-4">
        {entries.map((x) => {
          return (
            <li key={x.id}>
              <Card>
                <CardBody>
                  <div className="flex items-center justify-between">
                    <User
                      className="justify-start"
                      name={x.user?.name}
                      description={x.user?.email}
                      avatarProps={{
                        src: x.user?.image || "",
                        showFallback: !x.user?.image,
                        size: "sm",
                      }}
                    />
                    <p className="text-xs text-gray-500">
                      {getRelativeDate(x.createdAt)}
                    </p>
                  </div>
                  <Divider orientation="horizontal" className="mb-4 mt-4" />
                  <p className="pb-2">{x.description}</p>
                </CardBody>
              </Card>
              <Spacer y={4} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
