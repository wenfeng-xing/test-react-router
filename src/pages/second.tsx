import { useParams } from "react-router-dom"

export default function Second() {
  const {company} = useParams();
  return (
    <>
      <p>Hello Second {company}</p>
    </>
  )
}