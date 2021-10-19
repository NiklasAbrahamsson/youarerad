
// TODO Remove? Ask @Jedibezy if it's still used
export default function CareFormLayout({ title, children }: {title: string, children: JSX.Element[]}) {
  return (
    <div>
      <h2 className="py-8">{title}</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {children.map((item) => (
          <div key={item.key}>{item}</div>
        ))}
      </div>
    </div>
  )
}
