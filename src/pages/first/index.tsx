import {Link} from "react-router-dom"
export default function First() {
  return (
    <>
      <p>Hello First</p>
      <Link to="/second/AAPL">second page</Link>
    </>
  )
}