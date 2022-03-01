import React from 'react'
import { ChevronRightRounded } from '@mui/icons-material'

function SubMenuContainer({ name, viewAll }) {
    return (
        <div className="subMenuContainer">
            <h3>{name}</h3>
            <div className="viewAll">
                {viewAll && (
                    <div>
                        <p>View All</p>
                        <i>
                            <ChevronRightRounded />
                        </i>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SubMenuContainer
