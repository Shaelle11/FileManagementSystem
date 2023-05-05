import React from 'react';
import "./SubBar.css"
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFileUpload, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeFolder } from '../../../redux/fileFoldersActionCreator';

const SubBar = ({ setIsCreateFolderModalOpen, setIsCreateFileModalOpen}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {currentFolder, currentFolderData, userFolders} = useSelector((state )=> ({
    currentFolder: state.filefolders.currentFolder,
    currentFolderData: state.filefolders.userFolders.find(
     (folder) => folder.docId == state.filefolders.currentFolder 
    ), 
    userFolders: state.filefolders.userFolders,
  }), shallowEqual);

  const handleNavigate = (Link, id) => {
    navigate(Link);

    dispatch(changeFolder(id));
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-2 bg-white py-2">
      <nav className='ms-5' aria-label='breadcrumb'>
         <ol className="breadcrumb d-flex align-items-center">
          {currentFolder !== "root" ? (
            <>
            <button
            onClick={() => handleNavigate("/dashbboard", "root")}
            className='breadcrumb-item btn btn-link text-decoration-none'>
              Root</button>
              {currentFolderData?.data.path.map((folder, index) => (
                <button
                key={index}
                className='breadcrumb-item btn btn-link text-decoration-none'
                onClick={() => 
                handleNavigate(
                `/dashboard/folder/${userFolders.find((fldr) => folder == fldr.docId).docId}`,
                userFolders.find((fldr) => folder == fldr.docId).docId
                )}></button>
              ))}</>
          ):(
            <>
  <li className="breadcrumb-item">
    <Link to="/dashboard">Root</Link>
  </li>
  </>
  )}
  <li className='breadcrumb-item active' aria-current="page">
New Folder
  </li>
</ol>
      </nav>

      
      <ul className='navbar-nav ms-auto me-5'>
<li className="nav-item mx-2">
    <button className="btn btn-outline-dark">
    <FontAwesomeIcon icon={faFileUpload} />
 &nbsp; Upload File
    </button>
</li>
<li className="nav-item mx-2">
    <button className="btn btn-outline-dark"
     onClick={() => setIsCreateFileModalOpen(true)}
     >
     
    <FontAwesomeIcon icon={faFileAlt} />
    &nbsp;  Create File  
    </button>
</li>
<li className="nav-item ms-2">
    <button className="btn btn-outline-dark" onClick={() => setIsCreateFolderModalOpen(true)}>
    <FontAwesomeIcon icon={faFolderPlus} />
     &nbsp;   Create Folder
    </button>
</li>
      </ul>
    </nav>
  )
}

export default SubBar