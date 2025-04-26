import Link from "next/link";
import { interTight } from "~/fonts";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-4">
        <p>
          Currently working as engineering lead at{" "}
          <Link className="font-bold underline" href="https://leapflow.tech">
            Leapflow
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
          For a dedicated backend, I'd use{" "}
          <Link className="font-bold underline" href="https://spring.io">
            Spring Boot
          </Link>{" "}
          or{" "}
          <Link className="font-bold underline" href="https://go.dev">
            Go
          </Link>
        </p>
      </section>
      <section>
        <h2 className={`text-3xl md:text-5xl pt-10 ${interTight.className}`}>
          Major Projects
        </h2>
        <ul className="list-disc px-9 pt-6 flex flex-col gap-4">
          <li>
            <Link
              className="font-bold underline"
              href="https://github.com/DitherWither/muon.club"
            >
              Muon.club:
            </Link>{" "}
            Websockets based omegle clone
          </li>
          <li>
            <Link
              className="font-bold underline"
              href="https://hex.pm/packages/directories"
            >
              Directories:
            </Link>{" "}
            A lightweight gleam package to get standard locations of directories
            for temporary files, config, cache, etc. (63k+ downloads)
          </li>
          <li>
            <Link
              className="font-bold underline"
              href="https://hex.pm/packages/platform"
            >
              Platform:
            </Link>{" "}
            Zero dependency platform detection library for gleam. (63k+
            downloads)
          </li>
          <li>
            <Link
              className="font-bold underline"
              href="https://github.com/DitherWither/butterscotch"
            >
              Butterscotch:
            </Link>{" "}
            An operating system being developed in rust
          </li>
          <li>
            <Link
              className="font-bold underline"
              href="https://github.com/DitherWither/OxyWeb"
            >
              OxyWeb:
            </Link>{" "}
            Web server in rust with zero dependencies/crates
          </li>
          <li>
            <Link
              className="font-bold underline"
              href="https://github.com/ditherwither/etchteateapee"
            >
              EtchTeaTeepe:
            </Link>{" "}
            High level HTTP framework for C
          </li>
          <li>
            <Link
              className="font-bold underline"
              href="https://ditherwither.github.io/pomotime/"
            >
              Pomotime:
            </Link>{" "}
            A simple, lightweight, and fast time tracking app
          </li>
        </ul>
      </section>
    </>
  );
}
