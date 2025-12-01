const DashBoardDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
  return (
    <>
      <div className="text-4xl">User Details Page - {id}</div>
    </>
  );
};

export default DashBoardDetails;
