import React from 'react';
import "./ShowItems.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeFolder } from '../../../redux/fileFoldersActionCreator'

const ShowItems = ({title, items, type}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDblClick = (itemId) => {
   if(type == "folder") {
    dispatch(changeFolder(itemId));
    navigate(`/dashboard/folder/${itemId}`);
   } else{
   navigate(`/dashboard/file/${itemId}`)
   }
  }
  return (
    <div className='w-100'>
        <h4 className="text-center border-bottom">{title}</h4>
        <div className="row gap-2 p-4 flex-wrap">
            {items.map((items, index) => {
                return (
                 <p key={index * 55} 
                 className='col-md-2 py-3 text-center d-flex flex-column border'
                 onDoubleClick={() => handleDblClick(items.docId)}>
                  
                  {type == "folder" ? (
                    <FontAwesomeIcon icon={faFolder} size="5x" className='mb-3'/>
                  ) : (
                   <FontAwesomeIcon icon={faFileAlt} size="4x" className='mb-3'/>
                   )}
{items.data.name}
                    </p>
                );
})}
        </div>
    </div>
  )
}

export default ShowItems;