import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Navbar />
      <h1 className="text-5xl max-[500px]:text-2xl">Home Page</h1>
    </main>
  );
}
