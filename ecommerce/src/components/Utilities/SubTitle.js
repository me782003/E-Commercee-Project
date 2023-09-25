import React from 'react'
import { Link } from 'react-router-dom'

const SubTitle = ({ title, btntitle, pathText ,catID, sort}) => {
  return (
    <div className="d-flex justify-content-between align-items-center pt-3 pb-2">
        <div className="sub-title">{title}</div>
        {btntitle ? (
            <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>
                <button onClick={()=>{
                  localStorage.setItem('catfromHome' ,`${catID}`)
                  localStorage.setItem('sortType', `${sort}`)
                }} style={{width:'150px'}} className="btn-save fw-bolder">{btntitle}</button>
            </Link>
        ) : null}
</div>
  )
}

export default SubTitle
