import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>I did it, finally !</h1>
      <p>Hello, my name is Jihye yoo.</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}  