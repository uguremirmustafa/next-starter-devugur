import { Card, CardBody } from "@nextui-org/react";

export default async function Home() {
  return (
    <Card className="mx-auto">
      <CardBody className="text-center">
        <h1 className="mb-3 text-2xl font-bold">Next.js Starter</h1>
        <p className="text-xl">
          A simple, hassle free starter for your next project!
        </p>
      </CardBody>
    </Card>
  );
}
