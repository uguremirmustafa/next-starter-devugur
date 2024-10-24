import { Card, CardBody } from "@nextui-org/react";

export default function NotFound() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h1 className="mb-3 text-2xl font-bold">Not Found</h1>
        <p className="text-xl">Are you lost?</p>
      </CardBody>
    </Card>
  );
}
