interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default function DesignPage({ searchParams }: PageProps) {
  const { id } = searchParams;
  return <div>DesignPage {id}</div>;
}
