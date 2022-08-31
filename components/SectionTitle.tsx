export default function SectionTitle({ title, id }) {
  return (
    <div className="pageTitle" id={id}>
      <h1>{title}</h1>
      <div className="underline" />
    </div>
  );
}
