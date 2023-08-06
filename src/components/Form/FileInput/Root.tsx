'use client'

import { createContext, useContext, useId, useState } from 'react'

type RootProps = React.ComponentProps<'div'>
type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const fileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...files])
      return
    }

    setFiles(files)
  }

  return (
    <fileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </fileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(fileInputContext)
