export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      copyright Next.js is great!!
    </div>
  )
}
