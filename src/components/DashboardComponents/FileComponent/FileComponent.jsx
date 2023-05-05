import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'

function FileComponent() {
    const {fileId} = useParams();

    const {currentFile} = useSelector((state) =>({
        currentFile: state.filefolders.userFiles.find((file)=> file.docId == fileId
        ),
    }), shallowEqual)
  return (
    <div>
        <Header fileName={currentFile.data.name}/>
        FileComponent : {JSON.stringify(currentFile)}</div>
  )
}

export default FileComponent