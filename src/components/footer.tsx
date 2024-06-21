import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="p-4 text-center">
      <p>&copy; Trhame.cz {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer