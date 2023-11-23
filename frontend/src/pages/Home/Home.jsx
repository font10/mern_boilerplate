import { useSelector } from "react-redux"
import { Panel, Presentation } from "./components/index";

export const Home = () => {
  const { user } = useSelector(state => state.auth)

  return (
    <section className="flex flex-col items-center w-full h-96 bg-blue-100 rounded-md bg-opacity-60 p-8 mt-8">
      { user !== null
        ? <Panel />
        : <Presentation />
      }
    </section>
  )
}
