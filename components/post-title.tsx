export default function PostTitle({ children }) {
  return (
    <h1
      className="max-w-2xl mx-auto text-5xl md:text-6xl lg:text-6xl font-bold tracking-tighter leading-normal mb-6"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
