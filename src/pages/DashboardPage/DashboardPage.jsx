import React, { useEffect, useState } from 'react';
import NavBar from '../../components/DashboardComponents/NavBar/NavBar';
import { shallowEqual, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import SubBar from '../../components/DashboardComponents/SubBar/SubBar';
import HomeComponent from '../../components/HomeComponent/HomeComponent';
import CreateFolder from '../../components/DashboardComponents/CreateFolder/CreateFolder';
import { getFiles, getFolders } from '../../redux/fileFoldersActionCreator';
import { useSelector } from 'react-redux';
import FolderComponent from '../../components/DashboardComponents/FolderComponent/folderComponent';
import CreateFile from '../../components/DashboardComponents/CreateFile/CreateFile';
import FileComponent from '../../components/DashboardComponents/FileComponent/FileComponent';
const DashboardPage = () => {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
const [isCreateFileModalOpen, setIsCreateFileModalOpen] = useState(false);

const [showSubBar, setShowSubBar] = useState(true);
const { pathname } = useLocation();

const {isLoggedIn, isLoading, userid} = useSelector((state)=>({isLoggedIn: state.auth.isAuthenticated,
isLoading: state.filefolders.isLoading,
userid: state.auth.user.uid,
}), shallowEqual);


  useEffect(() => {
if(!isLoggedIn) {
  navigate("/");
}
  }, []);

  useEffect(() => {
if(isLoading && userid)  {
dispatch(getFolders(userid));
dispatch(getFiles(userid));
}

  }, [isLoading, userid, dispatch]);
  useEffect(()=> {
    if(pathname.includes("/file/")){
      setShowSubBar(false);
    }
  }, [pathname])

    return (
   <> 
   {
    isCreateFolderModalOpen && (
      <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}/>
    )
   }
    {
    isCreateFileModalOpen && (
      <CreateFile setIsCreateFileModalOpen={setIsCreateFileModalOpen}/>
    )
   }
   <NavBar />
   {showSubBar && (
    <SubBar setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}
    setIsCreateFileModalOpen={setIsCreateFileModalOpen}/>
   )}
   
   <Routes>
    <Route path='' element={<HomeComponent />} />
    <Route path="folder/:folderId" element={<FolderComponent/>}/>
    <Route path="file/:fileId" element={<FileComponent/>}/>
   </Routes>

   </>
  )
}

export default DashboardPage