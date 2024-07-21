import React from "react"
import Link from "next/link"
import { FaHome } from "react-icons/fa"

const BacktoHome = () => {
  return (
    <Link href={"/"} className="font-bold text-primary underline">
      <FaHome />
    </Link>
  )
}

export default BacktoHome
