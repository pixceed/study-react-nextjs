import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header className='border-b flex items-center h-14 px-4'>
        <h1>     
          <Link href="/" className="text-2xl font-logo">
            PIXCEED
          </Link>     
        </h1>
        <span className="flex-1"></span>
        <h1 className="text-2xl mr-3">     
            PIXCEED  
        </h1>
        <h1 className="text-2xl mr-3">     
            PIXCEED  
        </h1>
      </header>
      <h1>Hello</h1>
    </div>
  )
}
