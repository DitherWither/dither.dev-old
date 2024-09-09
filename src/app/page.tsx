export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-bold">
          Attempt 2 at making a blog (lets hope i don't forget to post here)
        </p>
        <p>
          I'm primarily a backend developer, although I occasionally write
          frontend code. Currently working at{" "}
          <a href="https://leapflow.tech" className="underline font-bold">
            Leapflow
          </a>
        </p>
        <p>
          I'm making this blog in next.js, because that's what I've used the
          most. See the source code on{" "}
          <a
            href="https://github.com/ditherwither/dither.dev"
            className="underline font-bold"
          >
            github
          </a>
        </p>
        <p>
          I'm currently planning to learn competetive programming, and
          participate in{" "}
          <a
            href="https://www.iarcs.org.in/inoi/"
            className="font-bold underline"
          >
            Indian Computing Olympiad
          </a>
        </p>
      </div>
    </>
  );
}
