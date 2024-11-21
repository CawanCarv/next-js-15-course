export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className='text-2xl'>Root</h1>
      {children}
    </div>
  )
}
