import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-bold">
          Backend Developer, CEO/Co-Founder of{" "}
          <Link className="underline" href="https://skann.me">
            Skann
          </Link>
        </p>
        <p>
          My preferred stack is{" "}
          <Link className="font-bold underline" href="https://nextjs.org">
            Next.js
          </Link>{" "}
          and{" "}
          <Link className="font-bold underline" href="https://tailwindcss.com">
            Tailwind CSS
          </Link>
          , along with{" "}
          <Link
            className="font-bold underline"
            href="https://www.postgresql.org"
          >
            PostgreSQL
          </Link>{" "}
          and{" "}
          <Link className="font-bold underline" href="https://orm.drizzle.team">
            Drizzle ORM
          </Link>
        </p>
        <p>
          I'm currently planning to learn competetive programming, and
          participate in{" "}
          <Link
            href="https://www.iarcs.org.in/inoi/"
            className="font-bold underline"
          >
            Indian Computing Olympiad
          </Link>
        </p>
      </div>
    </>
  );
}
