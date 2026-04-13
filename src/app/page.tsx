import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center space-y-6">
        <Image
          src="/logo.jpeg"
          alt="BarberOS"
          width={480}
          height={160}
          priority
          className="mx-auto"
        />
        <p className="text-muted-foreground text-lg tracking-wide font-display">
          Em Breve!
        </p>
        <p className="text-muted-foreground text-sm tracking-wide">
          O futuro da gestão da sua barbearia.
        </p>
      </div>
    </main>
  );
}
